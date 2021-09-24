import React from 'react'
import './SignUp.css'
import './ResetPass.css'
import plogo from './img/logoP.png'
import resetIcon2 from './img/resetIcon2.png'
import resetIcon from './img/resetIcon.png'
import { Link } from 'react-router-dom'

function Resetpass() {
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
                            {/* <img src={resetIcon2} className="lock-img" /> */}
                            <img src={resetIcon} className="lock-img" />
                        </div>
                        <br />
                        <div className="lock-div">
                            <h3 className="lock-subheading">Reset Password?</h3>
                            <br />
                            <h6 className="sing-in-sub">
                                Type your new password here.
                            </h6>
                        </div>
                        <br />
                        <div className="panel-body">
                            <form
                                id="register-form"
                                role="form"
                                autocomplete="off"
                                className="form"
                            >
                                <div className="form-groupa">
                                    <div className="form-groupa">
                                        <label className="inp-label" style={{marginLeft: '15px'}}>Password</label><br />
                                        <i style={{ color: 'rgb(87, 87, 87)', position: 'relative', left: '20px' }} class="fas fa-lock"></i>
                                        <input
                                            type="password"
                                            style={{ paddingLeft: '30px' }}
                                            className="form-controll"
                                            placeholder="Password"
                                            v-model="password1"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="form-groupa">
                                        <label className="inp-label" style={{marginLeft: '15px'}}>Password Confirm</label><br />
                                        <i style={{ color: 'rgb(87, 87, 87)', position: 'relative', left: '20px' }} class="fas fa-lock"></i>
                                        <input
                                            type="password"
                                            style={{ paddingLeft: '30px' }}
                                            className="form-controll"
                                            placeholder="Password Confirm"
                                            v-model="password2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Link to="/SignIn"><p className="forgot-passw" > SIGN IN!</p></Link>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="form-group" >
                                    <input
                                        name="recover-submit"
                                        className="btn-control"
                                        value="Reset Password"
                                        type="submit"
                                    />
                                </div>

                                <input type="hidden" className="hide" name="token" id="token" value="" />
                            </form>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Resetpass
