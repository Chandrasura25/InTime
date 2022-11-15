import React from 'react';
import '../assets/styles/dashboard.css';
import priority from '../assets/images/priority.png';
import circle from '../assets/images/circle.png';
import rect from '../assets/images/rect.png';
import triangle from '../assets/images/triangle.png';
import Header from './Header';
import Quicktune from './Quicktune';
import Risks from './Risks';
import Slide from './Slide';

const Dashboard = () => {
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
            item.classList.remove('active'));
        console.log(this)
        this.classList.add('active')
    }
    list.forEach((item) =>
        item.addEventListener('click', activeLink));
    var counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 3000)
    return (
        <>
            <section className="dashboard">
                <div className="contain">
                    <Header />
                    <section className="summary">
                        <div className="insideBx">
                            <Risks />
                            <Slide />
                        </div>
                        <div className="quickSuggest">
                            <Quicktune />
                            <div className="suggest">
                                <div className="head">
                                    <div className="clock">
                                        <h3>Suggestions</h3>
                                    </div>
                                    <div className="name">
                                        <span>
                                            <p>View All</p>
                                            <span class="material-symbols-outlined">arrow_outward</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="suggBody">
                                    <div className="lineBody">
                                        <div className="prior">
                                            <p>Priority</p>
                                            <p className='two'>
                                                <img src={priority} alt="" /></p>
                                        </div>
                                        <div className="shapes">
                                            <div className="prior">
                                                <p><img src={circle} alt="" /></p>
                                                <p>Normal</p>
                                            </div>
                                            <div className="prior">
                                                <p>
                                                    <img src={rect} alt="" /></p>
                                                <p>Middle</p>
                                            </div>
                                            <div className="prior">
                                                <p>
                                                    <img src={triangle} alt="" /></p>
                                                <p>High</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eachShape">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Dashboard