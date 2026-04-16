export default function App() {
  const products = [
    { id: 1, name: 'פנס סולארי לגינה', price: '₪120' },
    { id: 2, name: 'פס לדים חכם', price: '₪80' },
    { id: 3, name: 'תאורת קיר סולארית', price: '₪150' },
    { id: 4, name: 'סט תאורה לגינה', price: '₪220' },
  ];

  const categories = ['תאורה סולארית', 'לגינה', 'לדים', 'מבצעים'];

  const styles = {
    page: { direction: 'rtl', fontFamily: 'Arial', background: '#f9fafb' },
    topBar: { background: '#ecfdf5', padding: '8px 20px', display: 'flex', justifyContent: 'space-between' },
    header: { background: '#ffffff', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' },
    logo: { fontSize: '28px', fontWeight: 'bold', color: '#16a34a' },
    search: { padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', width: '40%' },
    nav: { background: '#065f46', color: 'white', padding: '12px', display: 'flex', gap: '20px', justifyContent: 'center' },
    hero: { background: 'linear-gradient(to left, #16a34a, #4ade80)', color: 'white', padding: '60px 20px', textAlign: 'center' },
    heroTitle: { fontSize: '42px', marginBottom: '10px' },
    heroBtn: { background: 'white', color: '#065f46', padding: '12px 24px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
    section: { padding: '40px 20px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px' },
    card: { background: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
    price: { fontWeight: 'bold', marginTop: '10px' },
    footer: { background: '#065f46', color: 'white', padding: '20px', textAlign: 'center' }
  };

  return (
    <div style={styles.page}>

      <div style={styles.topBar}>
        <div>משלוחים לכל הארץ</div>
        <div>☎ 052-5511545</div>
      </div>

      <div style={styles.header}>
        <div style={styles.logo}>AD Solar</div>
        <input style={styles.search} placeholder="חפש מוצר..." />
      </div>

      <div style={styles.nav}>
        {categories.map((c) => (
          <div key={c}>{c}</div>
        ))}
      </div>

      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>פתרונות תאורה סולארית מתקדמים</h1>
        <p>מוצרים איכותיים לגינה ולבית ללא צורך בחשמל</p>
        <button style={styles.heroBtn}>צפו במוצרים</button>
      </div>

      <div style={styles.section}>
        <h2>המוצרים שלנו</h2>
        <div style={styles.grid}>
          {products.map((p) => (
            <div key={p.id} style={styles.card}>
              <div>{p.name}</div>
              <div style={styles.price}>{p.price}</div>
              <button style={styles.heroBtn}>הוסף לעגלה</button>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.footer}>
        © AD Solar | כל הזכויות שמורות
      </div>

    </div>
  );
}
