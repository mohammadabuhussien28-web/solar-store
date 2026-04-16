export default function App() {
  const products = [
    {
      id: 1,
      name: 'שרשרת נורות סולארית',
      price: '₪50',
      image: '/string-lights.jpg'
    },
    {
      id: 2,
      name: 'מנורת גינה סולארית',
      price: '₪40',
      image: '/garden-light.jpg'
    },
    {
      id: 3,
      name: 'תאורת קיר סולארית',
      price: '₪300',
      image: '/wall-light.jpg'
    },
    {
      id: 4,
      name: 'מנורת שביל סולארית',
      price: '₪40',
      image: '/path-light.jpg'
    }
  ];

  const styles = {
    page: { direction: 'rtl', fontFamily: 'Arial', background: '#f9fafb' },
    hero: { background: 'linear-gradient(to left, #16a34a, #4ade80)', color: 'white', padding: '60px 20px', textAlign: 'center' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px', padding: '40px' },
    card: { background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' },
    img: { width: '100%', height: '180px', objectFit: 'cover' },
    content: { padding: '15px' },
    price: { fontWeight: 'bold', marginTop: '10px', fontSize: '18px' },
    btn: { marginTop: '10px', background: '#16a34a', color: 'white', padding: '10px', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%' }
  };

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <h1>תאורה סולארית מתקדמת</h1>
        <p>פתרונות חכמים לגינה ולבית ללא חשמל</p>
      </div>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.image} alt={p.name} style={styles.img} />
            <div style={styles.content}>
              <div>{p.name}</div>
              <div style={styles.price}>{p.price}</div>
              <button style={styles.btn}>הוסף לעגלה</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}