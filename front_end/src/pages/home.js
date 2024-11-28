import React from 'react';
import { Link } from 'react-router-dom'; 
class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="navbar">
                        <div className="nav-logo">
                            <div className="logo border"></div>
                        </div>
                        <div className="nav-search">
                            <input className="search-input" placeholder="Missions" />
                            {/* <select className="search-select">
                    <Option>Causes</Option>
                    <option value="keralaFloods">Kerala Floods</option>
                    <option value="cyclone">Cyclones</option>
                    <option value="earthquake">Earthquakes</option>
                    <option value="famine">Famines</option>
                </select> */}

                            {/* <!-- <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div> --> */}
                        </div>
                        <div className="nav-about nav-signin underline">
                        <Link to="/about"> <p><span>About</span></p></Link>
                           
                        </div>
                        <div className="nav-signin underline">
                            
                            <Link to="/login"><button className="mr-2">Sign In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                            
                            <p className="nav-second">Account</p>
                        </div>

                    </div>
                    <div className="panel">
                        {/* <!-- <div className="panel-all"></div> --> */}
                        <div className="panel-ops">
                            <p className="underline">Who We Are</p>
                            <p className="underline">What We Do</p>
                            <p className="underline">News & Stories</p>
                            <p className="underline">How To Help</p>
                            <p className="underline">Blogs</p>
                        </div>
                        <div className="underline panel-donate">
                        <Link to="/donation">Donate Now!!</Link>
                        </div>
                    </div>
                </div>

                <div className="hero-section">
                    <div className="hero-quote">
                        <p>No act of kindness, no matter how small, is ever wasted.</p>
                    </div>
                </div>
                <div className="latest-cause">
                    Latest Causes & Campaigns
                </div>
                <div className="donate-section container">
                    <div className="box border2 container">
                        <div className="box-content">
                            <h2 className="underline cause">Kerela Floods</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box1_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Train Accident</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box2_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Food</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box3_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Education</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box4_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Kerela Floods</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box1_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Train Accident</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box2_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Food </h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box3_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                    <div className="box border2">
                        <div className="box-content">
                            <h2 className="underline cause">Education</h2>
                            <div className="box-img" style={{backgroundImage: 'url("/assets/box4_img.jpg")'}}></div>
                            <p className="underline see-more">See More</p>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="foot-panel1 underline">Back To Top</div>
                </footer>
                <div className="foot-panel2">
                    <ul>
                        <p className="bold underline">Our Mission</p>
                        <p className="info underline">Something</p>
                    </ul>
                    <ul>
                        <p className="bold underline">Our Vision</p>
                        <p className="info underline">Something</p>
                    </ul>
                    <ul>
                        <p className="bold underline">Contact Us</p>
                        <div className="extra-icon">
                            <div className="instagram">
                                <i className="fa-brands fa-instagram border"></i>
                                <a className="underline"> Instagram</a>
                            </div>
                            <div className="facebook">
                                <i className="fa-brands fa-facebook border"></i>
                                <a className="underline"> Facebook</a>
                            </div>
                            <div className="custcare">
                                <i className="fa-solid fa-phone border"></i>
                                <a className="underline"> Customer Care</a>
                            </div>
                        </div>

                    </ul>
                </div>
                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>
                <div className="foot-panel4">
                    <div className="pages">
                        <a className="underline">Conditions Of Use</a>
                        <a className="underline">Privacy Notice</a>
                        <a className="underline">Your Ads Privacy Choices</a>
                    </div>
                    <div className="copyright underline">
                        @2022-2023, Charitychain.com,Inc. or its affiliates
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;