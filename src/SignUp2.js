import React from 'react'
// import './SignUp2.css'
import plogo from './img/logoP.png'
import { Link } from 'react-router-dom'

function SignUp2() {
	return (
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
			{/* <div className="wrapper"  style="background-image: 'url('images/bg-registration-form-2.jpg')'"> */}
			<div className="wrapper" style={{marginTop: '-100px'}}>
				<div className="inner">
					<form className="form" action="">
						<h3>Registration Form</h3>
						<div className="form-group">
							<div className="form-wrapper">
								<label for="">First Name</label>
								<input type="text" className="fform-control" />
							</div>
							<div className="form-wrapper">
								<label for="">Last Name</label>
								<input type="text" className="fform-control" />
							</div>
						</div>
						<div className="form-wrapper">
							<label for="">Email</label>
							<input type="text" className="fform-control" />
						</div>
						<div className="form-wrapper">
							<label for="">Password</label>
							<input type="password" className="fform-control" />
						</div>
						<div className="form-wrapper">
							<label for="">Confirm Password</label>
							<input type="password" className="fform-control" />
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox" /> I caccept the Terms of Use & Privacy Policy.
								<span className="checkmark"></span>
							</label>
						</div>
						<button className="registerBTN">Register Now</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp2
