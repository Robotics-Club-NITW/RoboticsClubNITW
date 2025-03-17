import React, { useContext } from 'react'
import HeroImg from './HeroImg'
import { useParams } from 'react-router-dom'
import './EventPage.css'
import { AppContext } from '../context/AppContext'
import { RingLoader } from 'react-spinners'

const EventPage = () => {
    const { eventslist, eventsLoad } = useContext(AppContext);
    const urldet = useParams()
    const currevent = urldet.eventid;
    const currEventDetails = eventslist.filter((e) => {
        return e.url === currevent;
    })[0];
    console.log(currEventDetails);

    return (
        <>{eventsLoad ? <>
            <HeroImg title={currEventDetails.name} desc={'Date: ' + currEventDetails.date} small={'small'} />
            <div className="eventpagecont">.
                <div className="eventpageimgdiv">
                    <img src={currEventDetails.img} alt="" />
                    {(currEventDetails?.link && currEventDetails?.link!=="" ) && <div style={{ width: "100%", display: "flex", "justifyContent": "center", padding: "15px" }}>
                        <a href={currEventDetails.link} target='_blank' className='btn' style={{ fontSize: "1.4rem", padding: "10px 20px" }}>Apply</a>
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