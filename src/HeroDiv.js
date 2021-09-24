import React, { useState } from 'react'
import './App.css'
import './owlCarousel.css'
import plogo from './img/logoP.png'
import heroImg from './img/hero-img.png'
// import ethereum from './img/ethereum.png'
import ethereum from './img/bitcoin.png'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom'

function HeroDiv() {
    const [showLiveRates, setshowLiveRates] = useState(false)
    const [priceData, setpriceData] = useState('')
    const ShowRates = () => {
        setshowLiveRates(true)
        axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur%2Cusd%2Caud%2CCNY%2CNGN%2CZAR%2Cgbp`
        ).then(function (price) {
            setpriceData(price.data.bitcoin)
        }).catch(error => {
            console.log(error);
        })
    }
    const HideRates = () => {
        setshowLiveRates(false)
    }
    const ShowingRates = () => {
        if (showLiveRates) {
            return (
                <nav
                    className="navbar bottomnavbar navbar-expand-lg fixed-bottom navbar-light"
                >
                    <div>
                        <i className="fa fa-times" onClick={HideRates}></i>
                        {/* <i className="fa fa-times" aria-hidden="true"></i> */}
                    </div>

                    <div className="owlDesk">
                        <OwlCarousel
                            items="5"
                            className="owl-theme owlDesk"
                        >
                            {/* autoplay> */}
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-50px" }}>
                                            <div className="col-6"><span>BTC/NGN</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>NGN:</span
                                                >{priceData.ngn}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/ZAR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>ZAR:</span
                                                >{priceData.zar}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/GBP</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>GBP:</span
                                                >{priceData.gbp}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>ETH/USD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>USD:</span
                                                >{priceData.usd}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/AUD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>AUD:</span
                                                >{priceData.aud}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/EUR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>EUR:</span
                                                >{priceData.eur}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/CNY</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span style={{ "fontSize": "12px" }}>CNY:</span
                                                >{priceData.cny}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="owlMob">
                        <OwlCarousel
                            items="3"
                            className="owl-theme owlMob"
                        >
                            {/* autoplay> */}
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-50px" }}>
                                            <div className="col-6"><span>BTC/NGN</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>NGN:</span
                                                >{priceData.ngn}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/ZAR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>ZAR:</span
                                                >{priceData.zar}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/GBP</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>GBP:</span
                                                >{priceData.gbp}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>ETH/USD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>USD:</span
                                                >{priceData.usd}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/AUD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>AUD:</span
                                                >{priceData.aud}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/EUR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>EUR:</span
                                                >{priceData.eur}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/CNY</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span style={{ "fontSize": "12px" }}>CNY:</span
                                                >{priceData.cny}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="owlMobile">
                        <OwlCarousel
                            items="2"
                            className="owl-theme owlMob"
                        >
                            {/* autoplay> */}
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-50px" }}>
                                            <div className="col-6"><span>BTC/NGN</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>NGN:</span
                                                >{priceData.ngn}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/ZAR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>ZAR:</span
                                                >{priceData.zar}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/GBP</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>GBP:</span
                                                >{priceData.gbp}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>ETH/USD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>USD:</span
                                                >{priceData.usd}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/AUD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>AUD:</span
                                                >{priceData.aud}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/EUR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>EUR:</span
                                                >{priceData.eur}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/CNY</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span style={{ "fontSize": "12px" }}>CNY:</span
                                                >{priceData.cny}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="owlMobile2">
                        <OwlCarousel
                            items="1"
                            className="owl-theme owlMob"
                        >
                            {/* autoplay> */}
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-50px" }}>
                                            <div className="col-6"><span>BTC/NGN</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>NGN:</span
                                                >{priceData.ngn}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/ZAR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>ZAR:</span
                                                >{priceData.zar}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/GBP</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>GBP:</span
                                                >{priceData.gbp}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>ETH/USD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>USD:</span
                                                >{priceData.usd}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/AUD</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>AUD:</span
                                                >{priceData.aud}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/EUR</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span cstyle={{ "fontSize": "12px" }}>EUR:</span
                                                >{priceData.eur}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="livePriceBox">
                                    <div className="pow">
                                        <div className="col-6">
                                            <img src={ethereum} className="liveBoxImg" />
                                        </div>
                                        <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                            <div className="col-6"><span>BTC/CNY</span></div>
                                            <div className="col-6">
                                                <span
                                                ><span style={{ "fontSize": "12px" }}>CNY:</span
                                                >{priceData.cny}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    {/* <div className="livePriceBox">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>BTC/ZAR</span></div>
                                <div className="col-6">
                                    <span
                                    ><span cstyle={{ "fontSize": "12px" }}>ZAR:</span
                                    >{priceData.zar}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="livePriceBox hideIt1">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>BTC/GBP</span></div>
                                <div className="col-6">
                                    <span
                                    ><span cstyle={{ "fontSize": "12px" }}>GBP:</span
                                    >{priceData.gbp}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="livePriceBox">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>ETH/USD</span></div>
                                <div className="col-6">
                                    <span
                                    ><span cstyle={{ "fontSize": "12px" }}>USD:</span
                                    >{priceData.usd}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="livePriceBox hide3">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>BTC/AUD</span></div>
                                <div className="col-6">
                                    <span
                                    ><span cstyle={{ "fontSize": "12px" }}>AUD:</span
                                    >{priceData.aud}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="livePriceBox hide4">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>BTC/EUR</span></div>
                                <div className="col-6">
                                    <span
                                    ><span cstyle={{ "fontSize": "12px" }}>EUR:</span
                                    >{priceData.eur}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="livePriceBox hideIt1">
                        <div className="row">
                            <div className="col-6">
                                <img src={ethereum} className="liveBoxImg" />
                            </div>
                            <div className="col-6" style={{ "marginLeft": "-30px" }}>
                                <div className="col-6"><span>BTC/CNY</span></div>
                                <div className="col-6">
                                    <span
                                    ><span style={{ "fontSize": "12px" }}>CNY:</span
                                    >{priceData.cny}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div> */}
                </nav>
            )
        } else {
            return (
                <h1 style={{ 'display': "none" }}>hello</h1>
            )
        }
    }

    return (
        <>
            <ShowingRates />
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
                                <li className="nav navlinks nav-btn">NFT Market</li><br />
                                <Link to="/SignIn"><li className="nav navlinks nav-btn">SIGN IN</li></Link><br />
                                <li className="nav navlinks nav-btn" onClick={ShowRates}><span>Live Rates <i className="fa fa-arrow-right"></i></span></li>
                            </form>
                        </div>
                    </nav>


                    <br /><br /><br /><br />
                    {/* <div className="colorWhite LiveRates" onClick={ShowRates}> */}
                    {/* <div className="colorWhite LiveRates"> */}
                    {/* <span>Live Rates <i className="fa fa-arrow-right"></i></span>
                </div> */}
                    <div className="row colorWhite heroTxt">
                        <div className="col-6">
                            <br /><br />
                            <h3 className="hero-heading">World's Easiest Crypto Exchange</h3>
                            <br />
                            <p className="hero-subHeading">
                                A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again.A paragraph is a group of words put together.
                            </p>
                            <br />
                            <p className="primaryBtnP"><button className="primary-btn">Connect Wallet</button></p>
                            <br /><br />
                        </div>
                        <div className="col-6 heroImg">
                            <img
                                src={heroImg}
                                width="450px"
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroDiv
