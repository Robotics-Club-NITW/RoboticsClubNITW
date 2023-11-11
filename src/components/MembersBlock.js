import React from 'react'
import MemberModal from './MemberModal'
import './MembersBlock.css'
import members from './members'
import MainMemberModal from './MainMemberModal'

const MembersBlock = () => {
  return (
    <div className="allmembers">
        <h2>GENSEC</h2>
      <div className="maingensec">
        <MainMemberModal/>
      </div>
        <h2>MEMBERS</h2>
      <div className="jointsecs">
        {members.map((e,ind)=>{
            return <MemberModal name={e.name} role={e.role} desc={e.desc} key={ind}/>
        })}
      </div>
    </div>
  )
}

export default MembersBlock