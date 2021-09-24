import React from 'react'
import './SignUp.css'
import plogo from './img/logoP.png'
import SignInIcon from './img/SignInIcon.png'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div>
            <div className="hello">
                <div className="hero-div">
                    <nav className="navbar navbar-expand-lg navbarMain">
                        <a className="navbar-brand" href=""
                        ><br />
                            <img
                                src={plogo}
                                className="mrpaypalogo"
                            />
                            <p className="logoTxt">mr.paypa</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars colorWhite"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                            <form className="form-inline my-2 my-lg-0 colorWhite">
                                {/* <form className="my-2 my-lg-0 colorWhite"> */}
                                <Link to="/MainComp"><li className="nav navlinks nav-btn">Home</li></Link><br />
                                <li className="nav navlinks nav-btn">NFT Market</li><br />
                            </form>
                        </div>
                    </nav>
                </div>

                <br /><br /><br />
                <div className="main-div">
                    <div className="second-div">
                        <div>
                            <img src={SignInIcon} className="lock-img" />
                        </div>
                        <br />
                        <div className="lock-div">
                            <h3 className="lock-subheading">SIGN IN</h3>
                            <br />
                            <h6 className="sing-in-sub">
                                Sign in to create, discover and connect <br />
                                with the global community.
                            </h6>
                        </div>
                        <br />
                        <div>
                            <i style={{color: 'rgb(87, 87, 87)', position: 'relative', left: '8px'}} className="fas fa-envelope evvelope-clas"></i> 
                            <input
                                className="input-fel"
                                type="text"
                                placeholder="Email"
                                style={{ marginBottom: '15px', paddingLeft: '30px', marginLeft: '-10px' }}
                                v-model="email"
                                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required
                            />
                            <br />
                            <i style={{color: 'rgb(87, 87, 87)', position: 'relative', left: '8px'}} class="fas fa-lock"></i>
                            <input
                                class="input-fel"
                                type="password"
                                style={{ paddingLeft: '30px', marginLeft: '-10px' }}
                                placeholder="Password"
                                v-model="password"
                            />
                            <br />
                            <Link to="/SignUp"
                            ><p class="forgot-passww">Create an account!</p></Link>
                            <Link to="ForgoPass"><p class="forgot-pass" style={{ textAlign: "start" }}>Forgot my password!</p></Link>
                        </div>
                        <br /><br />
                        <Link to="/MainComp"><button class="log-in">Log In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
