import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                 <header>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                        <div class="container">
                           <div className="fashion">
                                 <a class="navbar-brand" href="#" ><h3><span className="fashion_name">Fashion</span> <span className="change_fashion">21</span></h3></a>
                           </div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="basicExampleNav">

                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="#"><i class="fas fa-clinic-medical"></i>&nbsp;Home
                                        <span class="sr-only">(current)</span>
                                    </a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#"> <i class="fas fa-info-circle"></i> &nbsp;About</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#" ><i class="fas fa-phone-square-alt"></i> &nbsp;Contact</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#" ><i class="fas fa-cart-plus"></i>&nbsp; Basket</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false"><i class="fas fa-user-alt"></i>&nbsp; Account</a>
                                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink" style={{background:'rgba(0, 0, 0, 0.582)'}}>
                                            <a class="dropdown-item" href="#"><i class="fas fa-sign-in-alt" style={{color:'white'}}></i> &nbsp; <span style={{color:'white'}}>Sign in</span></a>
                                            <a class="dropdown-item" href="#"><i class="far fa-registered" style={{color:'white'}}></i> &nbsp; <span style={{color:'white'}}>Register</span></a>
                                            <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt" style={{color:'white'}}></i> &nbsp; <span style={{color:'white'}}>Logout</span></a>
                                        </div>
                                    </li>
                                  
                                </ul>
                            </div>

                        </div>

                    </nav>
                    

                </header>
                
            </div>
        )
    }
}


 