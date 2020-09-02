import { useState } from 'react'

export default function NewForm() {

    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')


     const [ message, setMessage] = useState("You are not logged in")

    async function submitForm() {
    const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    const token = res.token
    if (token) {
        const json = jwt.decode(token)
        setMessage('Welcome' + json.username + 'and your are Logged in')
    }
}

    return (
        <div>
          <h1>{message}</h1>
            <form>
                <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
                <br />
                <input 
                type="password" 
                name="password" 
                onChange={(e) => setUsername(e.target.value)}
                defaultValue= "admin" />
                <br />
                <input type="button" value="Login" onClick={submitForm}/>
                
            </form>
        </div>
    )
}