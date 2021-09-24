import React from 'react'
import './SignUp.css'
import './ForgotPass.css'
import plogo from './img/logoP.png'
import forgotPassIcon from './img/forgotPassIcon.png'
import Recaptcha from 'react-recaptcha'
import { Link } from 'react-router-dom'

function ForgotPass() {
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
                            <img src={forgotPassIcon} className="lock-img" />
                        </div>
                        <br />
                        <div className="lock-div">
                            <h3 className="lock-subheading">Reset Login Password</h3>
                            <br />
                            <h6 className="sing-in-sub">
                                You can reset your password here.
                            </h6>
                        </div>
                        <br />
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"
                                ><i style={{ position: 'absolute', marginTop: '22px', marginRight: "-10px" }} className="fas fa-envelope fa-2x evvelope-class"></i
                                ></span>
                            </div>
                        </div>
                        <div style={{ marginLeft: '20px', marginBottom: "-15px", marginTop: '20px' }}>
                            <input className="email-add" type="email" placeholder="Enter your email address" v-model="email" />
                        </div>
                        <br />
                        {/* Recaptcha */}
                        <div className="recaptchaa">
                            <div className="col-sm-10">
                                <Recaptcha
                                    className="recaptchaa"
                                    sitekey="6Ld_4y4aAAAAADCsgfTbXC7qkhL0MqxIBQBCv28t"
                                    required
                                ></Recaptcha>
                            </div>
                        </div>
                        <br />
                        <button className="log-in">Reset Password</button>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
