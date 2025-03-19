import React, { useContext } from 'react'
import HeroImg from './HeroImg'
import { useParams } from 'react-router-dom'
import './EventPage.css'
import { AppContext } from '../context/AppContext'
import { RingLoader } from 'react-spinners'
import Countdown from 'react-countdown'

const EventPage = () => {
    const { eventslist, eventsLoad } = useContext(AppContext);
    const urldet = useParams()
    const currevent = urldet.eventid;
    const currEventDetails = eventslist.filter((e) => {
        return e.url === currevent;
    })[0];

    const formatDeadline = (deadline) => {
        const [date, time] = deadline.split(' ');
        const [day, month, year] = date.split('/');
        return new Date(`${year}-${month}-${day}T${time}:00`);
    };

    return (
        <>{eventsLoad ? <>
            <HeroImg title={currEventDetails.name} desc={'Date: ' + currEventDetails.date} small={'small'} />
            <div className="eventpagecont">.
                <div className="eventpageimgdiv">
                    <img src={currEventDetails.img} alt="" />
                    {(currEventDetails?.deadline !== "" && !isNaN(formatDeadline(currEventDetails.deadline)) && formatDeadline(currEventDetails.deadline) > new Date()) && <div>
                        {(currEventDetails?.link && currEventDetails?.link !== "") && <div style={{ width: "100%", display: "flex", "justifyContent": "center", padding: "15px" }}>
                            <a href={currEventDetails.link} target='_blank' rel='noreferrer' className='btn' style={{ fontSize: "1.4rem", padding: "10px 20px" }}>Apply</a>
                        </div>}
                        <div style={{ width: "100%", display: "flex", "justifyContent": "center", padding: "15px" }}>
                            Apply in&nbsp;<Countdown date={formatDeadline(currEventDetails.deadline)} daysInHours />
                        </div>
                    </div>}
                </div>
                <div className="eventpagedesc">
                    <p dangerouslySetInnerHTML={{ __html: currEventDetails.desc }} style={{ 'whiteSpace': 'pre-line' }}></p>
                </div>
            </div></> : <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
            <RingLoader color="#fff" />
        </div>}
        </>
    )
}

export default EventPage