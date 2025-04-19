import React from 'react';

export default function ApiTest() {
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [endpoint, setEndpoint] = React.useState('/api/hello');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5003';

  const testApi = () => {
    setLoading(true);
    setResult('');
    fetch(`${API_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`)
      .then(res => {
        if (!res.ok) {
          return res.text().then(text => { throw new Error(`Status: ${res.status} - ${text}`) });
        }
        return res.json();
      })
      .then(data => setResult(JSON.stringify(data, null, 2)))
      .catch(err => setResult('FOUT: ' + err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{border: '1px solid #ccc', padding: 16, margin: 16, borderRadius: 8}}>
      <h3>API Test Component</h3>
      <div style={{marginBottom: 8}}>
        <label>
          Endpoint:&nbsp;
          <input value={endpoint} onChange={e => setEndpoint(e.target.value)} style={{width: 200}} />
        </label>
        <button onClick={testApi} disabled={loading} style={{marginLeft: 8}}>
          {loading ? 'Bezig...' : 'Test API'}
        </button>
      </div>
      <div>
        <strong>API_URL:</strong> <code>{API_URL}</code>
      </div>
      <pre style={{background: '#f9f9f9', padding: 8, marginTop: 8, minHeight: 50}}>{result}</pre>
    </div>
  );
}
