import './MemberModal.css'
import { FaEnvelope, FaGlobe, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function MemberModal(props) {
  function extractFileIdFromUrl(url) {
    // Regular expression to match Google Drive file IDs
    const fileIdRegex = /\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
    
    // Extract the file ID from the URL using the regex
    const match = url.match(fileIdRegex);
    
    // Check if a match was found
    if (match && match[1]) {
      // Return the file ID
      return match[1];
    } else {
      // Return null if no match was found
      return null;
    }
  }
  return (
    <div id='model3'>
        <div className="members">
          <div className="member" style={{backgroundImage:`url('https://drive.google.com/thumbnail?id=${extractFileIdFromUrl(props.img)}')`}}>
            {/* <img width={150} height={150} src={Member1} alt='prof'/> */}
            <div className="description">
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
                <p>
                  {/* {props.desc} */}
                </p>
            </div>
                <div className="social-media">
                  {props.instagram && <a target="_blank" href={props.instagram}><FaInstagram fontSize={22} /></a>}
                  {props.LinkedIn && <a target="_blank" href={props.LinkedIn}><FaLinkedin fontSize={22} /></a>}
                  {props.gmail && <a href={'mailto:'+props.gmail}><FaEnvelope fontSize={22} /></a>}
                  {props.Web && <a target="_blank" href={props.Web}><FaGlobe fontSize={22} /></a>}
                </div>
          </div>
        </div>
    </div>
  );
}