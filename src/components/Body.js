import React from "react";
import "../styles/Body.css";

export default function Body() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <input className='search' />
                </div>
                <div className='col-md-3'>
                    <input className='search' />
                </div>
                <div className='col-md-3'>
                    <input className='search' />
                </div>
            </div>
        </div>
    );
}
