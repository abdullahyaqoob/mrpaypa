import React, { Component } from 'react'
import './App.css'
import FooterPart from './FooterPart'
import HeroDiv from './HeroDiv'
import m1Pic from './img/m1.png'
import m2Pic from './img/2.png'
import p1Pic from './img/p1.png'
import p2Pic from './img/p2.png'
import p3Pic from './img/p3.png'
import tradePic from './img/trade.png'

class App extends Component {
    // async componentWillMount() {
    //     console.log('ejll');
    // }

    render() {
        return (
            <div>
                <div className="hello">
                    <HeroDiv />
                    <br />
                    <div className="swapDiv">
                        <h1 className="cryptoMobileHeading">Swap Your Currency</h1>
                        <br /><br /><br /><br />
                        <iframe
                            src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
                            id="myId"
                        />
                    </div>
                    <br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br />
                    <div className="row">
                        <div className="col-6 colorWhite MoreCryptoDiv">
                            <br /><br /><br />
                            <h1 className="moreCrypto">Do More With Crypto</h1>
                            <br />
                            <p className="moreCryptoSub">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                                fugit omnis facilis accusamus at placeat pariatur beatae ad
                                distinctio. Delectus vero reprehenderit deserunt accusantium neque.
                            </p>
                            {/* <br /><br /><br /><br /> */}
                            <p className="primaryBtnP"><button className="primary-btn m1Txt">Our Application</button><br /><br /></p>
                            <p className="primaryBtnP"><button className="primary-btn">Connect with  your Mobile</button><br /><br /></p>
                            <p className="primaryBtnP"><button className="primary-btn hide2">Connect your Mobile with your app</button><br /><br /></p>
                        </div>
                        <div className="msDiv">
                            <div className="col-3 mBothPics">
                                <img className="m1Pic" src={m1Pic} />
                            </div>
                            <div className="col-3 mBothPics">
                                <img className="m1Pic" src={m2Pic} />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="manageCRYPTO">
                        <h1 className="cryptoMobileHeading">Manage Crypto on Mobile</h1>
                        <br />
                        <p className="cryptoMobileSubHeading">
                            Control your digital assets while you're on the move with Exodus for
                            iOS and Android.
                        </p>
                        <br /><br />
                        <br /><br />
                        <div className="row tbackgrounImg" style={{ 'margin': '0 auto' }}>
                            <div className="col-4">
                                <img src={p1Pic} className="pPic" />
                            </div>
                            <div className="col-4">
                                <br /><br /><br /><br />
                                <img
                                    src={p2Pic} className="pPic sndPic"
                                />
                            </div>
                            <div className="col-4">
                                <img src={p3Pic} className="pPic" />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <h1 className="cryptoMobileHeading">World's Easiest Crypto Exchange</h1>
                    <br /><br /><br /><br />
                    <div className="row tradeDiv">
                        <div className="col-6 colorWhite">
                            <br /><br /><br /><br /><br /><br />
                            <h2 className="tradeTxt">Trade on the go</h2>
                            <br />
                            <p className="tradeSubTxt">
                                Deposit, withdraw, and trade 24/7 on our mobile apps for Android and
                                iOS, so you can experience professional-level crypto exchange
                                features on the move.
                            </p>
                        </div>
                        <p className="primaryBtnP">
                            <div className="col-6 inlineIt">
                                <img className="tradePic" width="550px" src={tradePic} />
                            </div>
                        </p>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div >
                <FooterPart />
            </div >
        );
    }
}

export default App;
