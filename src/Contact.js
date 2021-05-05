import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


function Contact() {
    return (
        <div>
           <div className='main-contact-box'> 
            <div className='prof-card-one'>
                <div className='top-sec-card'>
                    <div className='img-card-contact'>
                         <img className='bg-chg-im'  alt='Bhavesh' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNg6MOVMKxYgQCCKlfavOs6DczGoLyGRpqA&usqp=CAU'/>
                    </div>
                </div>
                <div className='main-sec-contact'> 
                    <h1>Bhavesh Kumar K</h1>
                    <h5>Web Developer</h5>
                    <span>Student at Hindustan University, Chennai, Tamil Nadu, India</span>
                    <span>B.Tech, Computer Science Engineering</span>
                    <div className='footer-links-contact'> 
                    <a className='f-l-c-link' href='https://www.facebook.com/bhavesh.reddy.5473'>Facebook</a>                      
                    <a className='f-l-c-link' href='https://instagram.com/bikerbhavesh'>Instagram</a>
                    <a className='f-l-c-link' href='https://www.linkedin.com/in/bhavesh-kumar-reddy-b97b1b1a7'>LinkedIn</a>
                    <a className='f-l-c-link' href='https://github.com/Bhavesh083'>GitHub</a> 
                    </div>
                </div> 
            </div>
            <div className='prof-card-one'>
                <div className='top-sec-card'>
                    <div className='img-card-contact'>
                         <img alt='Gowtham' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNg6MOVMKxYgQCCKlfavOs6DczGoLyGRpqA&usqp=CAU'/>
                    </div>
                </div>
                <div className='main-sec-contact'>
                    <h1>Gowtham Reddy M</h1>
                    <h5>Data Scientist</h5>
                    <span>Student at Hindustan University, Chennai, Tamil Nadu, India</span>
                    <span>B.Tech, Computer Science Engineering</span>
                    <div className='footer-links-contact'> 
                    <a className='f-l-c-link' href='https://www.facebook.com/m.gowtham.77920/about/'>Facebook</a>
                    <a className='f-l-c-link' href='https://www.instagram.com/mgr_gowtham/'>Instagram</a>
                    <a className='f-l-c-link' href='https://www.linkedin.com/in/gowtham-reddy-8217b3190/'>LinkedIn</a>
                    <a className='f-l-c-link' href='https://twitter.com/MGOWTHAMREDDY22?s=08/'>Twitter</a> 
                    </div>
                </div> 
            </div>
           </div> 
        </div>
    )
}

export default Contact;