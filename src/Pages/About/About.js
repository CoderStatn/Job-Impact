import React from 'react';
import './About.css'
import dp from '../../images/team-bg.jpg';
import tm1 from '../../images/c1.jpg';
import tm2 from '../../images/c2.jpg';
import tm3 from '../../images/c3.jpg';
import tm4 from '../../images/c4.jpg';
import AdminHeader from '../HomeComponent/Dashboard/AdminHeader/AdminHeader';
import Footer from '../HomeComponent/Footer/Footer';

const About = () => {
    return (
        <>
            <AdminHeader />
            <div className="team">
                <div className="">
                    <div className="about-head">
                        <h1>ABOUT US </h1>
                    </div>
                    <h2>Our Team</h2>
                    {/* Cards  */}
                    {/* ..................... */}
                    <div className="profile-area">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 g-4  ">
                                <div className="col">
                                    <div className="card">
                                        <div className="img1"><img src={dp} className="card-img-top" alt="..." /></div>
                                        <div className="img2"><img src={tm1} className="card-img-top" alt="..." /></div>

                                        <div className="main-text">
                                            <h3>Md. Akramul Hoque</h3>
                                            <h5>Full-Stack Developer</h5>
                                            <p>I’m a professional Full Stack Developer or Mern Stack Developer. I have completed my graduation with a B.Sc (Engg.) in Information and Communication Technology (ICT) from Comilla University. I am skilled at Javascript frameworks: ReactJS, NodeJS, MongoDB, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind, ECMAScript, React Bootstrap, Material UI, and WordPress Theme Customization.
                                            </p>
                                        </div>
                                        <div className="socials">
                                            <a href="#"> <i className="fab fa-facebook"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-twitter"></i> </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="img1"><img src={dp} className="card-img-top" alt="..." /></div>
                                        <div className="img2"><img src={tm2} className="card-img-top" alt="..." /></div>

                                        <div className="main-text">
                                            <h3>Munni Khatun</h3>
                                            <h5>Front-End Developer</h5>
                                            <p>I’m a professional Front-End Developer.I am a running student in Computer Science(Diploma) at Pabna Polytechnic Institute. I am skilled at Javascript frameworks: ReactJS, NodeJS, MongoDB, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind, ECMAScript, React Bootstrap, Material UI, and WordPress Theme Customization.
                                            </p>
                                        </div>
                                        <div className="socials">
                                            <a href="#"> <i className="fab fa-facebook"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-twitter"></i> </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="img1"><img src={dp} className="card-img-top" alt="..." /></div>
                                        <div className="img2"><img src={tm3} className="card-img-top" alt="..." /></div>

                                        <div className="main-text">
                                            <h3>Rokibul Ahad</h3>
                                            <h5>Front-End developer</h5>
                                            <p>I am a front-end web developer and trying to learn the back-end as well. I did 1 or 2 projects with Node js and MongoDB. In one word I love MERN stack development.</p>
                                        </div>
                                        <div className="socials">
                                            <a href="#"> <i className="fab fa-facebook"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-twitter"></i> </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="img1"><img src={dp} className="card-img-top" alt="..." /></div>
                                        <div className="img2"><img src={tm4} className="card-img-top" alt="..." /></div>

                                        <div className="main-text">
                                            <h3>Iftekhar Hasan</h3>
                                            <h5>Front-End developer</h5>
                                            <p>I am a front-end developer. Currently, I am a Computer Science and Engineering student.
                                                Here are a few technologies that I work with:-
                                                HTML and CSS,
                                                React.js,
                                                Javascript,
                                                Node.js,
                                                MongoDB.
                                            </p>
                                        </div>
                                        <div className="socials">
                                            <a href="https://www.facebook.com/ihasanarnob" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-twitter"></i> </a>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* ....................... */}
                    {/* ....offerings........ */}
                    <div className="offering">
                        <div>
                            <h2>What Career Impacts Offered</h2>
                        </div>
                        {/* section */}
                        <div className="section-container my-3">
                            <div>
                                {/* <img className="mx-auto" src={thumbnail1} alt="" /> */}
                                <h5>CROSS BROWSERS</h5>
                                <p>We recommend you to purchase a travel insurance before you begin your trekking experience. There are number of insurance brokers available to choose from...</p>
                            </div>
                            <div>
                                {/* <img className="mx-auto" src={thumbnail2} alt="" /> */}
                                <h5>EASY CUSTOMIZATION </h5>
                                <p>Depending on your nationality there may be ….. requirements for entry to Nepal. We recommend contacting an embassy before your travel.</p>
                            </div>
                            <div>
                                {/* <img className="mx-auto" src={thumbnail3} alt="" /> */}
                                <h5>EASY CUSTOMZATION</h5>
                                <p>Nepal is truly amazing destination with trekking and hiking experiences available throughout the year. Experience amazing sceneries and meet the locals.</p>
                            </div>
                            <div>
                                {/* <img className="mx-auto" src={thumbnail1} alt="" /> */}
                                <h5>MODEM DESIGN</h5>
                                <p>We recommend you to purchase a travel insurance before you begin your trekking experience. There are number of insurance brokers available to choose from...</p>
                            </div>
                            <div>
                                {/* <img className="mx-auto" src={thumbnail2} alt="" /> */}
                                <h5>MODERN DESIGN</h5>
                                <p>Depending on your nationality there may be ….. requirements for entry to Nepal. We recommend contacting an embassy before your travel.</p>
                            </div>
                            <div>
                                {/* <img className="mx-auto" src={thumbnail3} alt="" /> */}
                                <h5>QUICK SUPPORT</h5>
                                <p>Nepal is truly amazing destination with trekking and hiking experiences available throughout the year. Experience amazing sceneries and meet the locals.</p>
                            </div>
                        </div>
                    </div>


                    {/* ....................... */}
                    <div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;