import { useState } from 'react'
import './style.css';
import { ChevronRightIcon } from '@primer/octicons-react';


const style = {
  button: {
    width: "85px",
    height: "50px",
    borderRadius: "30px",
    borderStyle: "none",
    borderColor: "hsl(0, 93%, 68%)",
    position: "relative",
    left: "-40px",
    background: 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
  },
  input: {
    zIndex:"0",
  }
}

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
        <input style={style.input} onChange={changeEmail} value={email} type="text" className={`input form-control ${isInvalid && 'is-invalid'}`} placeholder="Email Address" required />
        <button style={style.button} onClick={click}><ChevronRightIcon size={16} /></button>
      </div>
      <div>
        {isInvalid && <div className='invalid-message'>Please provide a valid email</div>}
      </div>
    </div>
  )
}

export default FormSection;