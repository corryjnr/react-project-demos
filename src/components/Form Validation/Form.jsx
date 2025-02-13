import { useState } from 'react'
import './style.css'

const Form = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfrimPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = (e) => {
        e.preventDefault()

        if (username.length >= 8) {
            setErrorUsername('')
            setUserColor('green')
        } else {
            setErrorUsername('Username must be 8 atleast letters long')
            setUserColor('red')
        }

        if (email.includes('@')) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('Email must include @')
            setEmailColor('red')
        }

        if (password.length >= 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('Password must be atleast 8 letters long')
            setPasswordColor('red')
        }

        if (password != '' && password == confirmPassword) {
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')

        } else {
            setErrorConfirmPassword("Password didn't match")
            setConfirmPasswordColor('red')
        }
    }

    return (
        <>
            <div className='card'>
                <div className='card-image'>

                </div>
                <form>
                    <input
                        type='text'
                        placeholder='Name'
                        style={{ borderColor: userColor }}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <p className='error'>{errorUsername}</p>
                    <input
                        type='email'
                        placeholder='Email'
                        style={{ borderColor: emailColor }}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className='error'>{errorEmail}</p>
                    <input
                        type='password'
                        placeholder='Password'
                        style={{ borderColor: passwordColor }}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className='error'>{errorPassword}</p>
                    <input
                        type='password'
                        placeholder='ConfirmPassword'
                        style={{ borderColor: confirmPasswordColor }}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <p className='error'>{errorConfrimPassword}</p>
                    <button className='submit-btn' onClick={validate}>Register</button>
                </form>

            </div>
        </>
    )
}

export default Form