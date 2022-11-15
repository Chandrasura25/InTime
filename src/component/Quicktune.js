import React from 'react'

const Quicktune = () => {
    return (
        <>
            <div className="quickTune">
                <div className="head">
                    <div className="clock">
                        <h3>Quick tune</h3>
                    </div>
                    <div className="name">
                        <span>
                            <p>My Biomakers</p>
                            <span class="material-symbols-outlined">arrow_outward</span>
                        </span>
                    </div>
                </div>
                <div className="body">
                    <div className="terms">
                        <div className="chop">
                            <p>Weight</p>
                            <div className="cube">
                                <p>70</p>
                                <span>k<sub>A</sub></span>
                            </div>
                        </div>
                        <div className="chop">
                            <p>Blood pressure</p>
                            <div className="cubeBx">
                                <div className="onBx">
                                    <div className="cube">
                                        <p>70</p>
                                    </div>
                                    <p>systolic</p>
                                </div>
                                <p className="slash">/</p>
                                <div className="onBx">
                                    <div className="cube">
                                        <p>70</p>
                                    </div>
                                    <p>diastolic</p>
                                </div>
                            </div>
                        </div>
                        <div className="chop">
                            <p>Heart rate</p>
                            <div className="cube">
                                <p>70</p>
                                <span>BMP</span>
                            </div>
                        </div>
                        <div className="chop">
                            <p>Cholesterol</p>
                            <div className="cube">
                                <p>4.0</p>
                                <span>emol/L</span>
                            </div>
                        </div>
                        <div className="chop">
                            <p>Glucose</p>
                            <div className="cube">
                                <p>4.0</p>
                                <span>emol/L</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quicktune