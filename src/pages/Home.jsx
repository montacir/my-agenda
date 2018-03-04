import React from 'react';

const HomeHead = () =>(
    <div className="page-head">
        <h3>
            Dashboard
        </h3>
        <span className="sub-title">Welcome to SlickLab dashboard</span>
        <div className="state-information">
            <div className="state-graph">
                <div id="balance" className="chart"></div>
                <div className="info">Balance $ 2,317</div>
            </div>
            <div className="state-graph">
                <div id="item-sold" className="chart"></div>
                <div className="info">Item Sold 1230</div>
            </div>
        </div>
    </div>
);

const HomeBody = () => (
    <div className="wrapper">
        Home
    </div>
);



const Home = () => [
    <HomeHead key="Head"/>,
    <HomeBody key="Body"/>

];

export default Home ;