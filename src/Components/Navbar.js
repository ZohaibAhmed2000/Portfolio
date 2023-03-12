import React from "react";
import web from '../assets/logo.png'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#101010"}}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={web} style={{width:"90px",height:"50px"}}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
