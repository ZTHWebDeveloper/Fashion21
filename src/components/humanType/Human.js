import React, { Component } from 'react'
import {MDBBtn}from 'mdbreact'
import Image1 from '../img/babyfashion1.jpg'
import './Human.css';
export default class Human extends Component {
    render() {
        return (
            <div>
                {/* Fashion_content */}
                <div className="fashion_content">
                    <h2>Own Fashion Design</h2>
                    <h6>Always Ready Closes</h6>
                    <MDBBtn color="unique" size="lg" type="submit" className="fashion_search">
                        GET STARTED
                    </MDBBtn>
                    <button className="btn btn-sm mx-auto button_none">GET STARTED</button>
                </div>
                {/* Fashion_content */}


                {/* fashion_type */}

                <div className="fashion_type">
                    <div className="fashion">
                        <h4>Fashion Type</h4>
                    </div>
                    <div className="row" id="fashion_content">
                        <div className="col-md-6">
                            <div className="fashion_male">
                                <p>Male</p>
                            </div>
                            
                            <div className="col-md-12 row col-sm-12" id="mobile_male">
                                <div className="col-md-3 mx-auto col-sm-3" id="mobileleft">
                                   <img src="image/human_type/babyboy.jpg" className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Baby</p>
                                </div>
                                <div className="col-md-3 mx-auto col-sm-3" id="mobilemiddle">
                                   <img src="image/human_type/boyfashion.jpg"className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Boy</p>
                                </div>
                                <div className="col-md-3 mx-auto col-sm-3" id="mobileright">
                                   <img src="image/human_type/mantshirt.jpg" className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Man</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="f_female">
                                <p>Famale</p>
                            </div>
                            
                            <div className="col-md-12 row col-sm-12" id="mobile_female">
                                <div className="col-md-3 mx-auto col-sm-3" id="mobileleft">
                                   <img src="image/human_type/babygirl2.jpg" className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Baby</p>
                                </div>
                                <div className="col-md-3 mx-auto col-sm-3" id="mobilemiddle">
                                   <img src="image/human_type/girltshirt.jpg" className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Girl</p>
                                </div>
                                <div className="col-md-3 mx-auto col-sm-3" id="mobileright">
                                   <img src="image/human_type/woman.jpg" className="rounded" style={{width:'100%',height:'80px'}}/>
                                   <p className="fashion_cat">Woman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
