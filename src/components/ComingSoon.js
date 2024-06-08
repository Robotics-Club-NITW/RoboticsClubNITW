import React from 'react'
import img from '../assets/comingSoon.webp'

const ComingSoon = () => {
  return (
    <>
    <div style={{backgroundColor:'#000',display:'flex',justifyContent:'center',padding:'10px'}}>
        <img src={img} alt="" style={{borderRadius:'5px',maxHeight:'90vh',maxWidth:'90vw'}}/>
    </div>
    </>
  )
}

export default ComingSoon