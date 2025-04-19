import React from 'react'
import Navbar from './Navbar'
import Selectie from './Selectie'

function App() {
  const [page, setPage] = React.useState('home')
  const [msg, setMsg] = React.useState('')
  React.useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
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
