import React from 'react'

const Slide = () => {
    return (
        <>
            <div className="dailyGoal">
                <div className="sliding">
                    <div class="slider">
                        <div class="slides">
                            <input type="radio" name="radio-btn" id="radio1" class="radio-btn" />
                            <input type="radio" name="radio-btn" id="radio2" class="radio-btn" />
                            <input type="radio" name="radio-btn" id="radio3" class="radio-btn" />
                            <div class="slide first">
                                <div className="onslide">
                                    <div className="head">
                                        <h5>Daily Step Goal</h5>
                                        <span>
                                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <i>25</i>
                                        </span>
                                    </div>
                                    <div className="progressBox">
                                        <div className="progress">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle cx="70" cy="70" r="70"></circle>
                                            </svg>
                                        </div>
                                        <div className="progressText">
                                            <p>Almost there!</p>
                                            <p>7.5k/10k</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div className="onslide">
                                    <div className="head">
                                        <h5>My Balance</h5>
                                        <span className='decide'>
                                            <span>
                                                <i>Shop</i>
                                                <span class="material-symbols-outlined out">arrow_outward</span>
                                            </span>
                                            <span>
                                                <i>Earn More</i>
                                                <span class="material-symbols-outlined out">arrow_outward</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="Box">
                                        <div className="progress">
                                            <p><span>3</span>.578</p>
                                        </div>
                                        <div className="progressText">
                                            <p>$LONG</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide">
                                <div className="onslide">
                                    <div className="head">
                                        <h5>Lorem, ipsum dolor.</h5>
                                        <span>
                                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <i>25</i>
                                        </span>
                                    </div>
                                    <div className="progressBox">
                                        <div className="progress">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle cx="70" cy="70" r="70"></circle>
                                            </svg>
                                        </div>
                                        <div className="progressText">
                                            <p>Lorem, ipsum!</p>
                                            <p>7.5k/10k</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide