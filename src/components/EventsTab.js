import React, { useContext, useState } from 'react'
import './EventsTab.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import eventslist from './eventslist';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { AppContext } from '../context/AppContext';

const CustomIcon = ({ year }) => {
    return <>
        <div style={{ textAlign: 'center' }}>
            <h5>{year}</h5>
        </div>
    </>
}
const EventsTab = () => {
    const [currYear, setCurrYear] = useState("2023-2024")
    const {eventsLoad, setEventsLoad,eventslist, setEventslist} = useContext(AppContext);
    return (
        <>{eventsLoad?
            <div className="events-maincont">
                <div className="eventsleftcont">
                    <div className="yearstab">
                        <button className={`btn ${currYear==='2023-2024'?'active':''}`} onClick={()=>{setCurrYear("2023-2024")}} style={{margin:'10px',borderRadius:'10px'}}>2023-2024</button>
                        <button className={`btn ${currYear==='2022-2023'?'active':''}`} onClick={()=>{setCurrYear("2022-2023")}} style={{margin:'10px',borderRadius:'10px'}}>2022-2023</button>
                        <button className={`btn ${currYear==='2021-2022'?'active':''}`} onClick={()=>{setCurrYear("2021-2022")}} style={{margin:'10px',borderRadius:'10px'}}>2021-2022</button>
                    </div>
                    {/* <div className="eventstimcont">

                        <VerticalTimeline className='eventstimeline' layout='1-column-left'>
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%' ,top:0}}
                            />
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ color: '#fff' }}
                                icon={<CustomIcon year="2023-2024" />}
                                iconOnClick={() => { setCurrYear("2023-2024") }}
                            />
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ color: '#fff' }}
                                icon={<CustomIcon year="2022-2023" />}
                                iconOnClick={() => { setCurrYear("2022-2023") }} />
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ color: '#fff' }}
                                icon={<CustomIcon year="2021-2022" />}
                                iconOnClick={() => { setCurrYear("2021-2022") }} />
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%' }}
                            />

                        </VerticalTimeline>
                    </div> */}

                </div>
                <div className="eventsrightcont">
                    <h2 style={{ textAlign: 'center' }}>{currYear}</h2>
                    <div className='ecardscont'>
                        {/* {eventslist.map((e, ind) => {
                            return <Link to={`/events/${e.url}`}><EventCard details={e} key={ind} /></Link>
                        })} */}
                        {eventslist.filter((e) => {
                            return e.year === currYear
                        }).map((e, ind) => {
                            return <Link to={`/events/${e.url}`}><EventCard details={e} key={ind} /></Link>
                        })}
                    </div>
                </div>
            </div>:<div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <RingLoader color="#fff" />
        </div>}
        </>
    )
}

export default EventsTab