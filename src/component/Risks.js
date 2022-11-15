import React from 'react';

const Risks = () => {
    return (
        <>
            <div className="risks">
                <div className="head">
                    <div className="clock">
                        <h3>Summary</h3>
                        <span className='clk'>
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <p className="text">3 days ago</p>
                        </span>
                    </div>
                    <div className="name">
                        <span>
                            <p>Risks</p>
                            <span class="material-symbols-outlined">arrow_outward</span>
                        </span>
                    </div>
                </div>
                <div className="midrisk">
                    <span className="midname">
                        <p>Middle risk</p>
                        <input type="range" name="" className='range' value={50} id="" />
                    </span>
                </div>
                <div className="lastBlock">
                    <div className="boxes">
                        <div>
                            <p>BMI</p>
                            <p>
                                <span>28.8</span>
                                <span className='arrow red'>
                                <span class="material-symbols-outlined">arrow_outward</span>
                                    <span>+0.3</span>
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>Weight Excess</p>
                            <p>Overweight</p>
                        </div>
                        <div>
                            <p>Ideal weight</p>
                            <p>60.2</p>
                        </div>
                        <div>
                            <p>Biological Age</p>
                            <p>
                                <span>32</span>
                                <span className='arrow green'>
                                <span class="material-symbols-outlined">south_west</span>
                                    <span>-2</span>
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>Body type</p>
                            <p>Mesomorph</p>
                        </div>
                        <div>
                            <p>Subcutaneous fat</p>
                            <p>
                                <span>15%</span>
                                <span className='arrow yellow'>
                                <span class="material-symbols-outlined">arrow_outward</span>
                                    <span>+2</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Risks