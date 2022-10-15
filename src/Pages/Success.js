import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SuccessStyles.css'

function Success() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/')
  }
  const handleViewClick = () => {
    navigate('/details')
  }

  return (
    <div className='container success'>
      <div className='success-message'>
        <div className='done-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h2 className='success-heading'>Thank you for providing the feedback!</h2>
        <p className='success-para'>We will work towards improving your experience</p>
        <div className='sucess-btn-container'>
          <button className='btn btn-success' onClick={handleBackClick}>Go Back</button>
          <button className='btn btn-success' onClick={handleViewClick}>View Submissions</button>
        </div>
      </div>


    </div>
  )
}

export default Success