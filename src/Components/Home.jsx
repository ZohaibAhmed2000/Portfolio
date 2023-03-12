import React from "react";
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import me from '../assets/mefinal.png'

function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-auto">
                        <div style={{marginTop:"100%"}} className="text-center">
                            <AiFillGithub size={40} color={"white"}/>
                        </div>
                        <div style={{marginTop:"20%"}} className="text-center">
                            <AiFillFacebook size={40} color={"white"} style={{marginTop:"10%"}}/>
                        </div>
                        <div style={{marginTop:"20%"}} className="text-center">
                            <BsTwitter size={40} color={"white"}/>
                        </div>
                        <div style={{marginTop:"20%"}} className="text-center">
                            <AiFillLinkedin size={40} color={"white"}/>
                        </div>
                    </div>
                    <div className="col-6 text-white">
                        <h1 className="text-center name">Zohaib Ahmed</h1>
                        <h1 className="text-center desc">Full Stack Developer</h1>
                    </div>
                    <div className="col-4">
                        <div className="image" style={{ width: "400px", height: "80vh" }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
