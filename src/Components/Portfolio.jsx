import React from "react";
import Card from "./Card";

function Portfolio() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="me-3">
                            <Card />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ms-3">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="me-3">
                            <Card />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ms-3">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="me-3">
                            <Card />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="ms-3">
                            <Card />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Portfolio;
