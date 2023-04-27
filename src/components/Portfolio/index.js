import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import LyftImage from '../../assets/images/Lyft-Level-5-Demo.jpg';
import PactechImage from '../../assets/images/Pactech.jpg';
import VeloxImage from '../../assets/images/velox.jpeg';
import WeatherVue from '../../assets/images/weatherVue.png';




const data = {
    "portfolio": [
        {
            "cover": LyftImage,
            "title": "Woven by Toyota: QA Engineer",
            "description": "Python, OpenCV, OpenHTF, C, Flask, ModeDashboard, SQLAlchemy",
            "url": "https://woven.toyota/en"
        },
        {
            "cover": PactechImage,
            "title": "Pactech: Process Engineer",
            "description": "Six Sigma, ISO9001, ISO13485, Semiconductor Manufacturing ",
            "url": "https://pactech.com/"
        },
        {
            "cover": VeloxImage,
            "title": "Velox Biosystems: Engineering Intern",
            "description": "3d-particle counter, R Programming, ddpcr ",
            "url": "https://innovation.uci.edu/2018/07/velox-biosystems-startup-founded-on-uci-technology-continues-growth-trajectory-with-rapid-diagnostic-solution-for-antibiotic-resistance/"
        },
        {
            "cover": WeatherVue,
            "title": "Weather Website, Combined with Blog",
            "description": "Flask, Python, MongoDB, AWS Beanstalk/S3",
            "url": "http://weather-express.com/"
        }
    ]
}



const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(data['portfolio'])}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;