import React from 'react'
import styles from "./css/landing.module.css"
import image1 from "./images/landing/image1.jpg"
import image2 from "./images/landing/image2.jpg"
import image3 from "./images/landing/image3.jpg"
import image4 from "./images/landing/image4.jpg"
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className={`${styles.main} px-0 py-3 mt-4`}>
        <div className={`${styles.item} px-3`}>
          <div style={{"max-width":"32rem"}}>
            <h1>Connecting </h1><h1>With Your Dream Internship.</h1>
            <div style={{"height":"2px","width":"10rem","background":"red","margin":"2vh 0 2vh 0"}}></div>
            <p>Find your ideal internship with ease. Get sorted quickly by applying to various online opportunities and discover the best fit for your skills, goals, and growth.</p>
            <Link className={`btn ${styles.btn} rounded-5 px-4`} to='/register'>Get Sorted</Link>
          </div>
          <span><img className={styles.img} src={image1} alt='person'/> </span>
        </div>
        <div style={{"textAlign":"center"}}>
          <h3>Why QuicSort</h3>
          <p className='fs-5'>The fast track to your next Internship is what we have created </p>
        </div>
        <div className={`${styles.item2} px-3 py-3`}>
          
          <span><img className={styles.img} src={image2} alt='person'/> </span>
        <div style={{"max-width":"30rem"}}>
            <h5>01 Everything all at one Place </h5>
            <div style={{"height":"2px","width":"10rem","background":"red","margin":"2vh 0 2vh 0"}}></div>
            <p>Our team has built the best web engine that searches the entire internet and gathers in-depth details about internships for you.</p>
          </div>
        </div>
        <div className={`${styles.item3} px-3 py-3`}>
          
        <div style={{"max-width":"30rem"}}>
            <h5>02 Be the pirate of of the Caribbean</h5>
            <div style={{"height":"2px","width":"10rem","background":"red","margin":"2vh 0 2vh 0"}}></div>
            <p>Curated list of Internships based on your interest, free from spam and addictive algorithms to drown your time in the app.</p>
          </div>
          <span><img className={styles.img} src={image3} alt='person'/> </span>
        </div>
        <div className={`${styles.item4} px-3 py-3`}>
          
          <span><img className={styles.img} src={image4} alt='person'/> </span>
          <div style={{"max-width":"30rem"}}>
            <h5>03 Achieve the Mission Impossible </h5>
            <div style={{"height":"2px","width":"10rem","background":"red","margin":"2vh 0 2vh 0"}}></div>
            <p>We empower candidates to Automate, Accelerate, and Achieve using the AI and extensions tools leading to high quality internship application.</p>
          </div>
        </div>
        <div className={`d-flex flex-column px-3 py-3 text-center pb-5 ${styles.green} mt-4`}>
            <h3>Nothing more than 4 steps needed to get the internship</h3>
            <div className={`${styles.steps} mt-5`}>
                <div className={`d-flex flex-column`}>
                  <h4>01</h4>
                  <p className="fs-5">Discover</p>
                </div>
                <span className={styles.svg}> 
                <svg height={"2rem"} fill="#EC7F6A" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#EC7F6A"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z"></path></g></svg>
                </span>
                <div className={`d-flex flex-column`}>
                  <h4>02</h4>
                  <p className="fs-5">Wishlist</p>
                </div>
                <span className={styles.svg}> 
                <svg height={"2rem"} fill="#EC7F6A" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#EC7F6A"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z"></path></g></svg>
                </span>
                <div className={`d-flex flex-column`}>
                  <h4>03</h4>
                  <p className="fs-5">Apply</p>
                </div>
                <span className={styles.svg}> 
                <svg height={"2rem"} fill="#EC7F6A" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#EC7F6A"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M214.78,478l-20.67-21.57L403.27,256,194.11,55.57,214.78,34,446.46,256ZM317.89,256,86.22,34,65.54,55.57,274.7,256,65.54,456.43,86.22,478Z"></path></g></svg>
                </span>
                <div className={`d-flex flex-column`}>
                  <h4>04</h4>
                  <p className="fs-5">Get Sorted</p>
                </div>
            </div>
        </div>
        <div className={`d-flex mt-4 ${styles.red} px-5 py-5  mx-3`}>
        <div style={{"max-width":"50rem"}}>
            <h3>Join Now!</h3>
            <div style={{"height":"2px","width":"10rem","background":"red","margin":"2vh 0 2vh 0"}}></div>
            <p className='fs-4'>Lorem ipsum dolor sit amet, cokkonsectetur adipiscing elit.Lorem 
ipsum dolor sit jkiiop  jjjo amet, consectetur adipiscing elit.</p>
          </div>
            <button className={`btn ${styles.signup} px-3 py-0 rounded-4 me-4`}>Sign up</button>
        </div>
    </div>
  )
}

export default LandingPage