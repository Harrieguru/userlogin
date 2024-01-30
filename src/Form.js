import { useState } from "react"
import "./Form.css"



function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        isFriendly:true
    })

    console.log(formData.isFriendly)

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return(
        <>
            <form>
                <div>
                    <label>Firstname</label>
                    <input 
                        type="text" 
                        placeholder="Firstname" 
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                </div>
                <br />
                <div>
                    <label>Lastname</label>
                    <input 
                        type="text" 
                        placeholder="Lastname" 
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
                <br />
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <br />
                <textarea />
                <br />
                <input 
                    type="checkbox" 
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">are you Friendly?</label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form