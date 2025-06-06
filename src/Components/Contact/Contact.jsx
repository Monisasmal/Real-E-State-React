import React from 'react'
import './Contact.css';
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className=" paddings innerWidth flexCenter c-Container">
            <div className="c-left flexColStart">
               <span className='orangeText'>Our Contact</span>
               <span className='primaryText'>Easy To Contact Us</span>
               <span className='secondaryText'>We always ready to help by proving the best services and gave You a better life.</span>
                 <div className="flexColStart contactMode">
                  {/* First ROW */}
                  <div className="flexStart row">
                    <div className="flexColCenter mode">
                      <div className="flexStart">
                        <div className="flexCenter icon">
                        <MdCall  size={25}/>
                        {/* <BsFillChatDotsFill /><HiChatBubbleLeftRight /> */}
                        </div>
                        <div className="flexColStart detail">
                          <span className='primaryText'>Call</span>
                          <span className='secondaryText'>012345678</span>
                        </div>
                      </div>
                      <div className="flexCenter button">Call Now</div>
                    </div>
                    <div className="flexColCenter mode">
                      <div className="flexStart">
                        <div className="flexCenter icon">
                        <BsFillChatDotsFill  size={25}/>
                        {/* <BsFillChatDotsFill /><HiChatBubbleLeftRight /> */}
                        </div>
                        <div className="flexColStart detail">
                          <span className='primaryText'>Chat</span>
                          <span className='secondaryText'>012345678</span>
                        </div>
                      </div>
                      <div className="flexCenter button">Chat Now</div>
                    </div>

                  </div>

                  {/* 2nd Row */}
                  <div className="flexStart row">
                    <div className="flexColCenter mode">
                      <div className="flexStart">
                        <div className="flexCenter icon">
                        <MdVideoCall  size={30}/>
                        {/* <BsFillChatDotsFill /><HiChatBubbleLeftRight /> */}
                        </div>
                        <div className="flexColStart detail">
                          <span className='primaryText'> Video Call</span>
                          <span className='secondaryText'>012345678</span>
                        </div>
                      </div>
                      <div className="flexCenter button">Video Call Now</div>
                    </div>
                    <div className="flexColCenter mode">
                      <div className="flexStart">
                        <div className="flexCenter icon">
                        <HiChatBubbleLeftRight  size={25}/>
                        {/* <BsFillChatDotsFill /><HiChatBubbleLeftRight /> */}
                        </div>
                        <div className="flexColStart detail">
                          <span className='primaryText'>Message</span>
                          <span className='secondaryText'>012345678</span>
                        </div>
                      </div>
                      <div className="flexCenter button">Message Now</div>
                    </div>

                  </div>

                  
                 </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src='../asset/Home9.jpg' alt='contact'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact