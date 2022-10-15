import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import SelectSection from '../Components/SelectSection';
import { useNavigate } from 'react-router-dom'
import '../css/FormStyles.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

//getting data from local storage
const getData = () => {
    const data = localStorage.getItem('data');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}


function Form() {

    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({
        name: '', email: '', service: '', beverages: '', cleanliness: '', overall: ''
    });

    const [phone, setPhone] = useState();

    const [details, setDetails] = useState(getData());
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});
    const [displayError, setDisplayError] = useState(false);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "service") {
            setFeedback({ ...feedback, [name]: value })

        } else if (name == "beverages") {
            setFeedback({ ...feedback, [name]: value })

        } else if (name == "cleanliness") {
            setFeedback({ ...feedback, [name]: value })

        } else if (name == "overall") {
            setFeedback({ ...feedback, [name]: value })

        } else {
            setFeedback({ ...feedback, [name]: value })
        }
    }

    //handling form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let { name, email, service, beverages, cleanliness, overall } = feedback;
        let data = {
            name,
            email,
            phone,
            service,
            beverages,
            cleanliness,
            overall
        }

        if (Object.keys(errors).length === 0) {
            setDetails([...details, data]);
            setIsSubmit(true);
        } else {
            setDisplayError(true)
            setIsSubmit(false);
        }
    }

    //handling errors
    const validate = () => {
        let { name, email, service, beverages, cleanliness, overall } = feedback;
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;

        if (!name) {
            error.name = "Username is required!";
        }
        if (!email) {
            error.email = "Email is required!";
        } else if (!emailRegex.test(email)) {
            error.email = "This is not a valid email format!";
        }
        if (phone === undefined) {
            error.phone = "Phone Number is required";
        } else if (!phoneRegex.test(phone) || phone.length < 10) {
            error.phone = "Please enter a valid phone number";
        }
        if (!service) {
            error.service = "This feedback is required!";
        }
        if (!beverages) {
            error.beverages = "This feedback is required!";
        }
        if (!cleanliness) {
            error.cleanliness = "This feedback is required!";
        }
        if (!overall) {
            error.overall = "This feedback is required!";
        }
        return error;
    };

    //navigating to success page 
    useEffect(() => {
        if (isSubmit) {
            navigate('/success');
        }
    }, [isSubmit])

    //setting errors
    useEffect(() => {
        setErrors(validate())

    }, [feedback])

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(details));
        console.log("calling useEffect")
    }, [details])

    return (
        <div className='container'>
            <form className='form' onSubmit={handleFormSubmit}>
                <h2 className='brand-name'>Aromatic Bar</h2>

                <div className="section">
                    <div className='section-item'>
                        <label htmlFor='name'><p className='para-text'>Customer Name<span>*</span></p></label>
                        <input placeholder='E.g. jon snow' name="name" id='name' value={feedback.name} onChange={handleChange} />
                        {displayError && errors.name && <p className='error-item'><ErrorOutlineIcon /><span>{errors.name}</span></p>}
                    </div>
                    <div className='section-item'>
                        <label htmlFor='email'><p className='para-text'>Email<span>*</span></p> </label>
                        <input placeholder='E.g. abc@gmail.com' name="email" id='email' value={feedback.email} onChange={handleChange} />
                        {displayError && errors.email && <p className='error-item'><ErrorOutlineIcon /><span>{errors.email}</span></p>}
                    </div>
                </div>
                <div className="section">
                    <div className='section-item'>
                        <label htmlFor='email'><p className='para-text'>Phone<span>*</span></p> </label>
                        <PhoneInput
                            defaultCountry="IN"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone} />
                        {displayError && errors.phone && <p className='error-item'><ErrorOutlineIcon /><span>{errors.phone}</span></p>}
                    </div>
                </div>

                <div className="section">
                    <div className='section-item'>
                        <p className='para-text'>Please rate the quality of the service you received from your host.<span>*</span></p>
                        <SelectSection name={"service"} handleOnChange={handleChange} />
                        {displayError && errors.service && <p className='error-item'><ErrorOutlineIcon /><span>{errors.service}</span></p>}
                    </div>

                    <div className='section-item'>
                        <p className='para-text'>Please rate the quality of your beverage.<span>*</span> </p>
                        <SelectSection name={"beverages"} handleOnChange={handleChange} />
                        {displayError && errors.beverages && <p className='error-item'><ErrorOutlineIcon /><span>{errors.beverages}</span></p>}
                    </div>
                </div>

                <div className="section">
                    <div className='section-item'>
                        <p className='para-text'>Was our restaurant clean?<span>*</span></p>
                        <SelectSection name={"cleanliness"} handleOnChange={handleChange} />
                        {displayError && errors.cleanliness && <p className='error-item'><ErrorOutlineIcon /><span>{errors.cleanliness}</span></p>}
                    </div>

                    <div className='section-item'>
                        <p className='para-text'>Please ratew your overall dining experience.<span>*</span></p>
                        <SelectSection name={"overall"} handleOnChange={handleChange} />
                        {displayError && errors.overall && <p className='error-item'><ErrorOutlineIcon /><span>{errors.overall}</span></p>}
                    </div>
                </div>
                <div className='btn-container'>
                    <button type='submit' className='btn btn-submit'>Submit Review</button>
                </div>
            </form>
        </div>
    )
}

export default Form