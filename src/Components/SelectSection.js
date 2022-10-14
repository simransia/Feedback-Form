import React from 'react'
import '../css/SelectStyles.css'

function SelectSection(props) {
    const { name, isChecked, handleChange } = props;
   
    return (
      
        <div className='select-container'>
            <label htmlFor={`Excellent${name}`} className='select-item'>
                <input type="checkbox" id={`Excellent${name}`} name={name} value="Excellent" checked={isChecked[0]} onChange={(e) => handleChange(0, e)} />
                <span className='checkmark'></span>
                <span className='label-value'>Excellent</span>
            </label>

            <label htmlFor={`Good${name}`} className='select-item'>
                <input type="checkbox" id={`Good${name}`} name={name} value="Good" checked={isChecked[1]} onChange={(e) => handleChange(1, e)} />
                <span className='checkmark'></span>
                <span className='label-value'>Good</span>
            </label>

            <label htmlFor={`Fair${name}`} className='select-item'>
                <input type="checkbox" id={`Fair${name}`} name={name} value="fair" checked={isChecked[2]} onChange={(e) => handleChange(2, e)} />
                <span className='checkmark'></span>
                <span className='label-value'>Fair</span>
            </label>

            <label htmlFor={`Bad${name}`} className='select-item'>
                <input type="checkbox" id={`Bad${name}`} name={name} value="bad" checked={isChecked[3]} onChange={(e) => handleChange(3, e)} />
                <span className='checkmark'></span>
                <span className='label-value'>Bad</span>
            </label>
        </div>
    )
}

export default SelectSection