import React, { useContext, useState } from 'react';
import './EventsTab.css';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { AppContext } from '../context/AppContext';
import EventCard from './EventCard';

const EventsTab = () => {
    const { eventsLoad, eventslist } = useContext(AppContext);
    
    // Extract unique years from eventslist
    const uniqueYears = [...new Set(eventslist.map(event => event.year))].sort((a, b) => b.localeCompare(a));
    
    const [currYear, setCurrYear] = useState(uniqueYears[0] || "2023-2024");

    return (
        <>
            {eventsLoad ? (
                <div className="events-maincont">
                    <div className="eventsleftcont">
                        <div className="yearstab">
                            {uniqueYears.map((year) => (
                                <button 
                                    key={year} 
                                    className={`btn ${currYear === year ? 'active' : ''}`} 
                                    onClick={() => setCurrYear(year)}
                                    style={{ margin: '10px', borderRadius: '10px' }}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="eventsrightcont">
                        <h2 style={{ textAlign: 'center' }}>{currYear}</h2>
                        <div className='ecardscont'>
                            {eventslist.filter(e => e.year === currYear).map((e, ind) => (
                                <Link to={`/events/${e.url}`} key={ind}>
                                    <EventCard details={e} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
                    <RingLoader color="#fff" />
                </div>
            )}
        </>
    );
};

export default EventsTab;