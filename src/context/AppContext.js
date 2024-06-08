import React, { createContext, useEffect, useState } from 'react'

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [eventsLoad, setEventsLoad] = useState(false);
    const [eventslist, setEventslist] = useState([])
    const [members, setMembers] = useState([])
    const [memberLoad, setMemberLoad] = useState(false);
    const [alumnis, setalumnis] = useState([])
    const [alumniLoad, setalumniLoad] = useState(false);
    useEffect(() => {
        try {
            const getEvents = async () => {
                const response = await fetch(process.env.REACT_APP_EVENTS_API);
                const data = await response.json();
                setEventslist(data);
                setEventsLoad(true)
            }
            const getMembers = async () => {
                const response = await fetch(process.env.REACT_APP_MEMBERS_API);
                const data = await response.json();
                setMembers(data);
                setMemberLoad(true)
            }
            const getAlumni = async () => {
                const response = await fetch(process.env.REACT_APP_ALUMNI_API);
                const data = await response.json();
                setalumnis(data);
                setalumniLoad(true)
            }
            getEvents();
            getMembers();
            getAlumni();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <AppContext.Provider value={{ eventsLoad, setEventsLoad, eventslist, setEventslist, members, setMembers, memberLoad, setMemberLoad, alumnis, setalumnis, alumniLoad, setalumniLoad }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }