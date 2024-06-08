import React, { useContext } from 'react'
import HeroImg from './HeroImg'
import { useParams } from 'react-router-dom'
import './EventPage.css'
import { AppContext } from '../context/AppContext'
import { RingLoader } from 'react-spinners'

const EventPage = () => {
    const {eventslist,eventsLoad} = useContext(AppContext);
    const urldet = useParams()
    const currevent = urldet.eventid;
    const currEventDetails = eventslist.filter((e) => {
        return e.url === currevent;
    })[0];
    return (
        <>{eventsLoad?<>
            <HeroImg title={currEventDetails.name} desc={'Date: '+currEventDetails.date} small={'small'} />
            <div className="eventpagecont">.
            <div className="eventpageimgdiv">
                <img src={currEventDetails.img} alt="" />
            </div>
                <div className="eventpagedesc">
                    <p dangerouslySetInnerHTML={{__html:currEventDetails.desc}} style={{'whiteSpace':'pre-line'}}></p>
                </div>
            </div></>:<div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <RingLoader color="#fff" />
        </div>}
        </>
    )
}

export default EventPage