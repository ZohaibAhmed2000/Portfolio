import React from "react";

const About = () => {
    return (
        <>
            <h6 className="text-white text-center mt-5">Let me introduce myself</h6>
            <h1 className="text-white text-center">About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="image-about border" style={{ height: "70vh" }}></div>
                    </div>
                    <div className="col-8">
                        <div className="text-white">
                            <h6 className="mt-5 pt-5">Nice to meet you.</h6>
                            <p className="pt-3">Frontend Web Developer who creates amazing digital experiences!</p>
                            <p className="pt-2">My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.</p>
                        </div>
                        <div className="row text-white">
                            <div className="col-6">
                                <h6>Name: Zohaib Ahmed</h6>
                            </div>
                            <div className="col-6">
                                <h6>Email: zohaibtariq478@gmail.com</h6>
                            </div>
                        </div>
                        <div className="row text-white">
                            <div className="col-6">
                                <h6>Location: Karachi,Pakistan</h6>
                            </div>
                            <div className="col-6">
                                <h6>Availability: Open for Work</h6>
                            </div>
                            <div className="col-6">
                                <button>Download Resume</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;