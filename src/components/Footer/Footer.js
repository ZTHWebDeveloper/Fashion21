import React, { Component } from 'react'
import './Footer.css'
 class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mx-auto">
                            <h5 className="fashion_footer_type">Fashion Type</h5>
                            <p><a>Babies</a></p>
                            <p><a>Boys</a></p>
                            <p><a>Girls</a></p>
                        </div>
                        <div class="col-md-3 col-sm-mx-auto">
                            <h5 className="fashion_footer_type">Privacy</h5>
                            <p><a>About us</a></p>
                            <p><a>Contact us</a></p>
                        </div>
                        <div class="col-md-3 col-sm-6 mx-auto">
                            <h5 className="fashion_footer_type">Has a Questions ?</h5>
                            <p><a>09-775613735</a></p>
                            <p><a>maymyatthu.mtla@gmail.com</a></p>
                        </div>
                        <div class="col-md-3 col-sm-6 mx-auto">
                            <h5 className="fashion_footer_type">Has a Questions ?</h5>
                            <p><a>09-775613735</a></p>
                            <p><a>maymyatthu.mtla@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer