import { useParams, Link } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();

  const products = [
    {
      id: '1',
      name: 'מנורת שביל סולארית',
      price: '₪40',
      image: '/path-light.jpg',
      desc: 'תאורה עדינה ומרשימה לשבילים, כניסה וגינה.',
    },
    {
      id: '2',
      name: 'תאורת קיר סולארית',
      price: '₪300',
      image: '/wall-light.jpg',
      desc: 'פתרון חזק ואמין לקירות חוץ, חניה וחזית הבית.',
    },
    {
      id: '3',
      name: 'מנורת גינה סולארית',
      price: '₪40',
      image: '/garden-light.jpg',
      desc: 'מנורה מעוצבת לגינה עם טעינה סולארית קלה ונוחה.',
    },
    {
      id: '4',
      name: 'שרשרת נורות סולארית',
      price: '₪50',
      image: '/string-lights.jpg',
      desc: 'ליצירת אווירה חמימה במרפסת, חצר או אירוח בערב.',
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ direction: 'rtl', fontFamily: 'Arial', padding: '40px' }}>
        <h1>המוצר לא נמצא</h1>
        <Link to="/">חזרה לדף הבית</Link>
      </div>
    );
  }

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial', background: '#f5f7f6', minHeight: '100vh', color: '#1f2937' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginBottom: '24px',
            color: '#166534',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          ← חזרה לדף הבית
        </Link>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            background: 'white',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          }}
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                borderRadius: '20px',
                objectFit: 'cover',
                maxHeight: '500px',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '10px' }}>AD Solar</div>
            <h1 style={{ fontSize: '42px', margin: '0 0 16px' }}>{product.name}</h1>
            <div style={{ fontSize: '34px', fontWeight: 'bold', marginBottom: '20px' }}>{product.price}</div>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4b5563', marginBottom: '24px' }}>
              {product.desc}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '14px 22px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                הוסף לעגלה
              </button>

              <a
                href="https://wa.me/972525511545"
                style={{
                  background: '#fff',
                  color: '#166534',
                  border: '1px solid #16a34a',
                  borderRadius: '14px',
                  padding: '14px 22px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                שאלו בוואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}