import {useState} from "react"
import Footer from "../components/Footer"

export default function Contact() {
  const [ formData, setFormData ] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    message: "",
    isAgreed: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <div className="contact-pg">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <section>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
        <label htmlFor="first_name">First Name</label>
        <input
          
          id="first_name"
          type="text"
          onChange={handleChange}
          name="firstname"
          value={formData.firstname}
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          
          id="last_name"
          type="text"
          onChange={handleChange}
          name="secondname"
          value={formData.lastname}
        />
        </div>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          name="mail"
          value={formData.mail}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
        />

        <div className="checkbox">
        <input
          type="checkbox"
          onChange={handleChange}
          id="check"
          checked={formData.isAgreed}
          name="isAgreed"
        />
        <label htmlFor="check">You agree to providing your data to {formData.firstname} who may contact you.</label>
        </div>

        <button className="submit__btn" id="btn_submit">Send message</button>
      </form>

      </section>
     
      

      <Footer />

    </div>
  );
}
