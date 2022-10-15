import React from 'react'
import '../css/SelectStyles.css'

function SelectSection(props) {
    const { name, handleOnChange } = props;

    return (

        <div className='select-container'>
            <label htmlFor={`Excellent${name}`} className='select-item'>
                <input type="radio" id={`Excellent${name}`} name={name} value="Excellent" onChange={handleOnChange} />
                <span className='checkmark'></span>
                <span className='label-value'>Excellent</span>
            </label>

            <label htmlFor={`Good${name}`} className='select-item'>
                <input type="radio" id={`Good${name}`} name={name} value="Good" onChange={handleOnChange} />
                <span className='checkmark'></span>
                <span className='label-value'>Good</span>
            </label>

            <label htmlFor={`Fair${name}`} className='select-item'>
                <input type="radio" id={`Fair${name}`} name={name} value="fair" onChange={handleOnChange} />
                <span className='checkmark'></span>
                <span className='label-value'>Fair</span>
            </label>

            <label htmlFor={`Bad${name}`} className='select-item'>
                <input type="radio" id={`Bad${name}`} name={name} value="bad" onChange={handleOnChange} />
                <span className='checkmark'></span>
                <span className='label-value'>Bad</span>
            </label>
        </div>
    )
}

export default SelectSection