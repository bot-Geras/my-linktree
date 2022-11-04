import { useState } from "react"

export default function Contact() {
    const {formData, setFormData} = useState(
        {
            firstName: "",
            lastName: "",
            mail: "",
            message: "",
            isAgreed: false
        }

    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }



    return (
        <div>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="firstName" value={formData.firstName} />
                <input type="text" onChange={handleChange} name="secondName" value={formData.lastName} />
                <input type="email" onChange={handleChange} name="mail" value={formData.mail} />
                <textarea name="message" onChange={handleChange} value={formData.message} />
                <input type="checkbox" onChange={handleChange} id="check" checked={formData.isAgreed} name="isAgreed" />
                <label htmlFor="check"> Hi to all</label>
                <button>Send message</button>
            </form>
        </div>
    )
}