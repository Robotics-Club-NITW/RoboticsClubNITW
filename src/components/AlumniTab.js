import React, { useContext } from 'react'
import './AlumniTab.css'
import { AppContext } from '../context/AppContext'
import { RingLoader } from 'react-spinners';

const AlumniTab = () => {
    const {alumnis,alumniLoad} =  useContext(AppContext);
    return (
        <>{alumniLoad?
            <div className="alumnitabs">
                {alumnis.map((e, ind) => {
                    return <div key={ind} className={`${ind % 2 == 0 ? '' : 'alumnirev'} alumnitab`}>
                        <div className="alumniimage">
                            <img src={e.imgurl} alt="alumni" />
                        </div>
                        <div className="alumnidesc">
                            <p>{e.desc}</p>
                        </div>
                    </div>
                })}
            </div>:<div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <RingLoader color="#fff" />
        </div>}
        </>
    )
}

export default AlumniTab