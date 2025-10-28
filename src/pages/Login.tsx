import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login(){
  const [name,setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const loc = useLocation() as any
  const redirectTo = loc.state?.from || '/dashboard'

  const submit = (e:React.FormEvent) => {
    e.preventDefault()
    if (!name) return alert('Enter a name')
    login()
    navigate(redirectTo, { replace:true })
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 200px)', // Adjust height considering navbar and padding
      padding: '20px'
    }}>
      <div style={{width: '100%', maxWidth: 420, padding: '2rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--bg)'}}>
        <h2 style={{textAlign: 'center', marginTop: 0}}>Login</h2>
        <form className="form" onSubmit={submit}>
          <label htmlFor="name-input">Name</label>
          <input id="name-input" className="input" placeholder="Your name (admin)" value={name} onChange={e=>setName(e.target.value)} />
          <button className="button" type="submit" style={{width: '100%', marginTop: '1rem'}}>Login</button>
        </form>
      </div>
    </div>
  )
}
