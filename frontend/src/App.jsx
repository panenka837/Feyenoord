import React from 'react'
import Navbar from './Navbar'
import Selectie from './Selectie'

function App() {
  const [page, setPage] = React.useState('home')
  const [msg, setMsg] = React.useState('')
  React.useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5003';
    console.log('[DEBUG] Gebruikte API_URL:', API_URL);
    fetch(`${API_URL}/api/hello`)
      .then(res => {
        if (!res.ok) {
          return res.text().then(text => { throw new Error(`Status: ${res.status} - ${text}`) })
        }
        return res.json();
      })
      .then(data => setMsg(data.message))
      .catch(err => {
        setMsg('Fout: ' + err.message);
        console.error('[FETCH ERROR]', err);
      })
  }, [])
  return (
    <div style={{fontFamily: 'sans-serif', margin: 40}}>
      <h1>Feyenoord Webapplicatie</h1>
      <Navbar current={page} setPage={setPage} />
      {page === 'selectie' ? <Selectie /> : <p>{msg}</p>}
    </div>
  )
}

export default App
