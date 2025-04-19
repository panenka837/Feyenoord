import React from 'react'

export default function Selectie() {
  const [spelers, setSpelers] = React.useState([])
  React.useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5003';
    fetch(`${API_URL}/api/selectie`)
      .then(res => res.json())
      .then(data => setSpelers(data))
  }, [])
  return (
    <div style={{margin: 40}}>
      <h2>Selectie Feyenoord 1</h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr>
            <th style={{border: '1px solid #ccc', padding: 8}}>Rugnummer</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Naam</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Positie</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Nationaliteit</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Geboortedatum</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Contract tot</th>
            <th style={{border: '1px solid #ccc', padding: 8}}>Profiel</th>
          </tr>
        </thead>
        <tbody>
          {spelers.map(speler => (
            <tr key={speler.rugnummer}>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.rugnummer}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.naam}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.positie}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.nationaliteit}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.geboortedatum}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>{speler.contract_tot}</td>
              <td style={{border: '1px solid #ccc', padding: 8}}>
                <a href={speler.foto} target="_blank" rel="noopener noreferrer">Bekijk profiel</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
