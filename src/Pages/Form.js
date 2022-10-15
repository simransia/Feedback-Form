import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import SelectSection from '../Components/SelectSection';
import { useNavigate } from 'react-router-dom'
import '../css/FormStyles.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

    const boolArray = [false, false, false, false];
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();

    const [isCheckedOne, setIsCheckedOne] = useState(boolArray);
    const [isCheckedTwo, setIsCheckedTwo] = useState(boolArray);
    const [isCheckedThree, setIsCheckedThree] = useState(boolArray);
    const [isCheckedFour, setIsCheckedFour] = useState(boolArray);


    const [service, setService] = useState("");
    const [beverages, setBeverages] = useState("");
    const [cleanliness, setCleanliness] = useState("");
    const [overall, setOverall] = useState("");
    const [details, setDetails] = useState(getData());
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const handleCheck = (position, e) => {

        if (e.target.name == "service") {
            handleSelect(isCheckedOne, setIsCheckedOne, position);
            setService(e.target.value)

        } else if (e.target.name == "beverage") {
            handleSelect(isCheckedTwo, setIsCheckedTwo, position);
            setBeverages(e.target.value)

        } else if (e.target.name == "cleanliness") {
            handleSelect(isCheckedThree, setIsCheckedThree, position);
            setCleanliness(e.target.value)

        } else if (e.target.name == "overall") {
            handleSelect(isCheckedFour, setIsCheckedFour, position);
            setOverall(e.target.value)
        }

    };

    const handleSelect = (checkedArr, setcheckedArr, position) => {
        const updatedCheckedState = checkedArr.map((item, index) => index === position ? !item : item = false)
        setcheckedArr(updatedCheckedState);
    }

    //handling form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            phone,
            service,
            beverages,
            cleanliness,
            overall
        }
        console.log(Object.keys(errors).length === 0 && Object.keys(data).length === 7)
        console.log(Object.values(data))
        if (Object.keys(errors).length === 0 && Object.values(data).length === 7) {
            setDetails([...details, data]);
            console.log(details)
            setName('');
            setEmail('');
            setPhone('');
            setIsCheckedOne(boolArray);
            setIsCheckedTwo(boolArray);
            setIsCheckedThree(boolArray);
            setIsCheckedFour(boolArray);
            navigate('/success');
        } else {
            setDisplayError(true)
        }
    }
   
    //handling errors
    const validate = () => {
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
        if (!name) {
            error.name = "Username is required!";
        }
        if (!email) {
            error.email = "Email is required!";
        } else if (!emailRegex .test(email)) {
            error.email = "This is not a valid email format!";
        }
        if (phone === undefined) {
            error.phone = "Phone Number is required";
        }else if (!phoneRegex .test(phone) || phone.length < 10) {
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

    //setting errors
    useEffect(() => {
        setErrors(validate())

    }, [name, email, phone, service, beverages, cleanliness, overall])

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
                        <input placeholder='E.g. jon snow' id='name' value={name} onChange={e => setName(e.target.value)} />
                        {displayError && errors.name && <p className='error-item'><ErrorOutlineIcon /><span>{errors.name}</span></p>}
                    </div>
                    <div className='section-item'>
                        <label htmlFor='email'><p className='para-text'>Email<span>*</span></p> </label>
                        <input placeholder='E.g. abc@gmail.com' id='email' value={email} onChange={e => setEmail(e.target.value)} />
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
                        <SelectSection name={"service"} isChecked={isCheckedOne} handleChange={handleCheck} />
                        {displayError && errors.service && <p className='error-item'><ErrorOutlineIcon /><span>{errors.service}</span></p>}
                    </div>

                    <div className='section-item'>
                        <p className='para-text'>Please rate the quality of your beverage.<span>*</span> </p>
                        <SelectSection name={"beverage"} isChecked={isCheckedTwo} handleChange={handleCheck} />
                        {displayError && errors.beverages && <p className='error-item'><ErrorOutlineIcon /><span>{errors.beverages}</span></p>}
                    </div>
                </div>

                <div className="section">
                    <div className='section-item'>
                        <p className='para-text'>Was our restaurant clean?<span>*</span></p>
                        <SelectSection name={"cleanliness"} isChecked={isCheckedThree} handleChange={handleCheck} />
                        {displayError && errors.cleanliness && <p className='error-item'><ErrorOutlineIcon /><span>{errors.cleanliness}</span></p>}
                    </div>

                    <div className='section-item'>
                        <p className='para-text'>Please ratew your overall dining experience.<span>*</span></p>
                        <SelectSection name={"overall"} isChecked={isCheckedFour} handleChange={handleCheck} />
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