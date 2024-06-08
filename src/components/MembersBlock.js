import React, { useContext, useEffect, useState } from 'react'
import MemberModal from './MemberModal'
import './MembersBlock.css'
// import members from './members'
import { RingLoader } from 'react-spinners'
import { AppContext } from '../context/AppContext'
const MembersBlock = () => {
  const {members, setMembers,memberLoad, setMemberLoad} = useContext(AppContext)
  
  return (
    <>
      {memberLoad ?
        <div className="allmembers">
          {/* <h2>GENSEC</h2>
      <div className="maingensec">
      <MainMemberModal/>
    </div> */}
          {/* <MainMemberModal /> */}
          <h2>LEADS</h2>
          <div className="jointsecs">
            {members.filter((mem)=>{
              return mem.Category==="Leads"
            }).map((e, ind) => {
              return <MemberModal name={e.name} img={e.photourl} LinkedIn={e.LinkedIn} Web={e.Web} gmail={e.gmail} instagram={e.Instagram} role={e.Category} desc={e.desc} key={ind} />
            })}
          </div>
          <br />
          <h2>MECHANICAL</h2>
          <div className="jointsecs">
            {members.filter((mem)=>{
              return mem.Category==="Mechanical"
            }).map((e, ind) => {
              return <MemberModal name={e.name} img={e.photourl} LinkedIn={e.LinkedIn} Web={e.Web} gmail={e.gmail} instagram={e.Instagram} role={e.Category} desc={e.desc} key={ind} />
            })}
          </div>
          <br />
          <h2>EMBEDDED</h2>
          <div className="jointsecs">
            {members.filter((mem)=>{
              return mem.Category==="Embedded"
            }).map((e, ind) => {
              return <MemberModal name={e.name} img={e.photourl} LinkedIn={e.LinkedIn} Web={e.Web} gmail={e.gmail} instagram={e.Instagram} role={e.Category} desc={e.desc} key={ind} />
            })}
          </div>
          <br />
          <h2>PR Team</h2>
          <div className="jointsecs">
            {members.filter((mem)=>{
              return mem.Category==="PR Team"
            }).map((e, ind) => {
              return <MemberModal name={e.name} img={e.photourl} LinkedIn={e.LinkedIn} Web={e.Web} gmail={e.gmail} instagram={e.Instagram} role={e.Category} desc={e.desc} key={ind} />
            })}
          </div>
        </div> :
        <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
          <RingLoader color="#fff" />
        </div>
      }</>
  )
}

export default MembersBlock