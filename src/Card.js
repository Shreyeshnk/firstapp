import React from 'react'
import './App.css';
import image1 from './RamMandir.png';
const Card = props => {
    return (
        <div className="card">
            <img src={image1} style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <p>{props.date}</p>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Card
