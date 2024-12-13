import { useState } from 'react'
import './style.css';



const FormSection = () => {
  const [email, setEmail] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const changeEmail = (event) => {
    const text = event.target.value
    console.log(text)
    setEmail(text)
  }

  const click = () => {
    if (!regex.test(email)) {
      setIsInvalid(true)
    } else {
      setIsInvalid(false)
    }
  }

  return (
    <div>
      <div className="input-group has-validation">
        <div className="form-floating is-invalid">
          <input onChange={changeEmail} value={email} type="text" className={`input form-control ${isInvalid && 'is-invalid'}`} placeholder="Email Address" required />
          <label for="floatingInputGroup2">Email Address</label>
          <button onClick={click}>Click</button>
          {isInvalid && <div>Please provide a valid email</div>}

        </div>
      </div>
    </div>
  )
}

export default FormSection;