import React from 'react'

export default function Navbar({ current, setPage }) {
  return (
    <nav style={{marginBottom: 24}}>
      <button
        onClick={() => setPage('home')}
        style={{marginRight: 12, fontWeight: current === 'home' ? 'bold' : 'normal'}}
      >Home</button>
      <button
        onClick={() => setPage('selectie')}
        style={{fontWeight: current === 'selectie' ? 'bold' : 'normal'}}
      >Selectie</button>
    </nav>
  )
}
