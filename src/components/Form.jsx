import { useState } from "react"
import './Form.css'

const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
}

const Form = () => {
    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState({})
    const [registerStatus, setRegisterStatus] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const validateData = (data) => {
        const err = {}
        const { fname, lname, email, phone } = data

        if (fname.trim() === "") {
            err.fname = "Please enter your first name"
        }else if(!/^[a-zA-Z]+$/.test(fname)){
            err.fname = "Please enter valid first name"
        }
        if (lname.trim() === "") {
            err.lname = "Please enter your last name"
        }else if(!/^[a-zA-Z]+$/.test(lname)){
            err.lname = "Please enter valid last name"
        }
        if(email.trim() === ""){
            err.email = "Please enter your email"
        }else if(!/^\S+@\S+\.\S+$/.test(email)){
            err.email = "Please enter valid email"
        }
        if(phone.trim() === ""){
            err.phone = "Please enter your phone number"
        }else if(phone.split("").length < 10){
            err.phone = "Please enter 10-digit phone number"
        }else if(!/^\d+$/.test(phone)){
            err.phone = "Please enter valid phone number"
        }
        return err
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validateData(formData)
        setFormError(errs)
        if(Object.keys(errs).length === 0){
            setRegisterStatus(true)
            setFormData(initialState)
        }else{
            setRegisterStatus(false)
        }
    }


    return (
        <div className="form-container">
        {registerStatus && <div className="success-container"><h2>Registration Successful!!!</h2></div>}
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="text" placeholder="First Name" name="fname" value={formData.fname} onChange={handleChange} />
                    {formError.fname && <p>{formError.fname}</p>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last Name" name="lname" value={formData.lname} onChange={handleChange} />
                    {formError.lname && <p>{formError.lname}</p>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    {formError.email && <p>{formError.email}</p>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleChange} />
                    {formError.phone && <p>{formError.phone}</p>}
                </div>
                <input type="submit" value="Register" className="submit-btn" />
            </form>
        </div>
    )
}

export default Form