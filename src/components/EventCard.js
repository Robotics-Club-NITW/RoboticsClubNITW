import React from 'react'
import './EventCard.css'

const EventCard = (props) => {
  return (
    <div className='ecardcont' style={{background:`url(${props.details.img})`,backgroundSize:'cover'}}>
        <div className="ecardtext">
            {props.details.name}
        </div>
    </div>
  )
}

export default EventCard