function Hello() {
  return (
    <div style={{
      marginTop: '24px',
      padding: '16px 24px',
      backgroundColor: '#1e293b',
      borderRadius: '12px',
      border: '1px solid #334155',
      maxWidth: '480px'
    }}>
      <h2 style={{ margin: '0 0 8px 0', color: '#38bdf8', fontSize: '20px' }}>
        👋 Hello from Component (Hello.js)!
      </h2>
      <p style={{ margin: 0, color: '#94a3b8', fontSize: '15px' }}>
        This is a custom reusable child component imported into App.js.
      </p>
    </div>
  );
}

export default Hello;
