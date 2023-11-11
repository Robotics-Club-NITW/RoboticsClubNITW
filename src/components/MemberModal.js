import './MemberModal.css'
import Member1 from '../assets/herorobo.png'
import { FaEnvelope, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function MemberModal(props) {
  return (
    <div id='model3'>
        <div className="members">
          <div className="member">
            <img width={150} height={150} src={Member1} alt='prof'/>
            <div className="description">
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
                <p>
                  {props.desc}
                </p>
                <div className="social-media">
                  <FaInstagram />
                  <FaLinkedin />
                  <FaEnvelope />
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}