import React, { Component } from 'react'
import {MDBBtn}from 'mdbreact'
import './Closes.css'
export default class Closes extends Component {
  render() {
    return (
      <div className="all_fashion">
        {/* for fashion search */}

        <div className="fashion_body">
          <div className="fashion_title taplet_site">
            <p>Fashion</p>
          </div>
          <div className="fashion_form">
              <form>
                <div className="fashion_male">
                  <label className="fashion_label_male">Gender</label>
                  <select className="browser-default custom-select col-md-2">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="fashion_female">
                  <label className="fashion_label_female">Human Type</label>
                  <select className="browser-default custom-select col-md-2">
                    <option value="babies">Baby_Boys</option>
                    <option value="babies">Baby_Girls</option>
                    <option value="boys">Boys</option>
                    <option value="girls">Girls</option>
                    <option value="boys">Men</option>
                    <option value="girls">Women</option>
                  </select>
                </div>
                <MDBBtn color="unique" size="sm" type="submit" className="fashion_search">
                  Search
                </MDBBtn>
              </form>
          </div>
        </div>
        {/* for fashion search */}

        {/* all Fashion */}
        <section>
          <div className="fahion_category text-center">
            <p>Fashion Categories for Babies</p>
            <select class="browser-default custom-select custom-select-sm mb-3 col-md-3 col-sm-5" id="mobile_category">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="all_fashion">
              <div class="container">
                <div class="row mb_30">
                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-01.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                                Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-02.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                                Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/babytshirt.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>3 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-04.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

              </div>
            </div>
          </div>
          <div class="all_fashion">
              <div class="container">
                <div class="row mb_30">
                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-05.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>4 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-11.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-detail-02.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-detail-03.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

              </div>
            </div>
          </div>

          <div class="all_fashion">
              <div class="container">
                <div class="row mb_30">
                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/fashion.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                               Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/girfashion.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                                Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/product-03.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                                Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

                  <div class="col-lg-3 col-sm-6">
                      <div class="fashion_item text-center">
                          <div class="fashion_img">
                              <img src="image/fashion/boyshirt.jpg" alt="" width="262px" height="270px"/>
                              <MDBBtn color="unique" size="sm" type="submit" className="theme_btn button_hover">
                                Order Now
                              </MDBBtn>
                              {/* <a href="#" class="btn theme_btn button_hover">Book Now</a> */}
                          </div>
                          <p>2 weeks</p>
                          <a href="#"><h4 class="sec_h4">Fashion</h4></a>
                          <h5>10000 MMK  / $7.3 </h5>
                          <h6>Size : 3' 6"</h6>
                      </div>
                  </div>

              </div>
            </div>
          </div>
        </section>
        {/* all fashion */}
      </div>
    )
  }
}
