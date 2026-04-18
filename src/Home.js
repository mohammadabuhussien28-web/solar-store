import { useState } from 'react';
import logo from './assets/logo.jpg';
import homeImage from './assets/home.jpg';
import { Link } from 'react-router-dom';
export default function Home() {
      const products = [
    {
      id: 1,
      name: 'מנורת שביל סולארית',
      price: '₪40',
      image: '/path-light.jpg',
      desc: 'תאורה עדינה ומרשימה לשבילים, כניסה וגינה.',
    },
    {
      id: 2,
      name: 'תאורת קיר סולארית',
      price: '₪300',
      image: '/wall-light.jpg',
      desc: 'פתרון חזק ואמין לקירות חוץ, חניה וחזית הבית.',
    },
    {
      id: 3,
      name: 'מנורת גינה סולארית',
      price: '₪40',
      image: '/garden-light.jpg',
      desc: 'מנורה מעוצבת לגינה עם טעינה סולארית קלה ונוחה.',
    },
    {
      id: 4,
      name: 'שרשרת נורות סולארית',
      price: '₪50',
      image: '/string-lights.jpg',
      desc: 'ליצירת אווירה חמימה במרפסת, חצר או אירוח בערב.',
    },
  ];

  const categories = ['תאורה סולארית', 'לגינה', 'לדים', 'מבצעים'];
  const benefits = ['משלוח מהיר לכל הארץ', 'מוצרים חסכוניים ללא חשמל', 'שירות אישי בוואטסאפ', 'פתרונות לגינה ולחצר'];
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prev) => [...prev, product]);
};

const totalPrice = cart.reduce((sum, item) => {
  return sum + Number(item.price.replace('₪', ''));
}, 0);

  return (
    <div dir="rtl" style={{ fontFamily: 'Arial, sans-serif', background: '#f5f7f6', color: '#1f2937', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        .topbar { background: #ecfdf3; border-bottom: 1px solid #d1fae5; font-size: 14px; }
        .topbar-inner { display: flex; justify-content: space-between; gap: 16px; padding: 10px 0; color: #166534; flex-wrap: wrap; }
        .header { background: #fff; position: sticky; top: 0; z-index: 20; box-shadow: 0 1px 0 rgba(0,0,0,0.06); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 18px 0; flex-wrap: wrap; }
        .brand { font-size: 34px; font-weight: 800; color: #16a34a; margin: 0; }
        .brand-sub { margin: 4px 0 0; color: #6b7280; font-size: 13px; }
        .search { flex: 1; min-width: 240px; max-width: 460px; }
        .search input { width: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 14px; background: #f9fafb; font-size: 14px; }
        .phone { font-weight: 800; color: #166534; font-size: 22px; text-decoration: none; }
        .nav { background: #14532d; color: #fff; }
        .nav-inner { display: flex; gap: 28px; padding: 14px 0; overflow-x: auto; white-space: nowrap; }
        .nav-inner span { font-weight: 700; font-size: 14px; opacity: 0.98; }
        .hero { position: relative; min-height: 520px; display: flex; align-items: center; }
        .hero-content { position: relative; z-index: 1; color: white; max-width: 640px; padding: 80px 0; }
        .hero-badge { display: inline-block; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.24); padding: 8px 14px; border-radius: 999px; font-weight: 700; margin-bottom: 16px; }
        .hero h1 { margin: 0 0 14px; font-size: 56px; line-height: 1.1; }
        .hero p { margin: 0 0 24px; font-size: 20px; line-height: 1.8; color: rgba(255,255,255,0.92); }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary, .btn-secondary {
          border: none; border-radius: 14px; padding: 14px 22px; font-size: 15px; font-weight: 800; cursor: pointer; text-decoration: none; display: inline-block;
        }
        .btn-primary { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; box-shadow: 0 12px 24px rgba(22,163,74,0.25); }
        .btn-secondary { background: rgba(255,255,255,0.95); color: #14532d; }
        .benefits { margin-top: -34px; position: relative; z-index: 2; }
        .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .benefit-card { background: white; border-radius: 22px; padding: 20px; box-shadow: 0 10px 25px rgba(15,23,42,0.08); border: 1px solid #ecfdf3; font-weight: 700; text-align: center; }
        .section { padding: 56px 0; }
        .section-head { display: flex; justify-content: space-between; align-items: end; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
        .section-kicker { color: #16a34a; font-weight: 800; font-size: 14px; margin-bottom: 8px; }
        .section-title { margin: 0; font-size: 38px; }
        .section-text { margin: 8px 0 0; color: #6b7280; }
        .categories { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .category-card { background: white; border-radius: 24px; padding: 24px; text-align: center; border: 1px solid #e5e7eb; box-shadow: 0 8px 22px rgba(15,23,42,0.05); }
        .category-icon { width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 14px; background: linear-gradient(135deg, #dcfce7, #bbf7d0); display: flex; align-items: center; justify-content: center; font-size: 28px; }
        .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .product-card { background: white; border-radius: 26px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 8px 22px rgba(15,23,42,0.06); transition: transform .28s ease, box-shadow .28s ease; }
        .product-card:hover { transform: translateY(-8px); box-shadow: 0 18px 36px rgba(15,23,42,0.14); }
        .product-image { width: 100%; height: 250px; object-fit: cover; display: block; background: #f3f4f6; }
        .product-body { padding: 18px; }
        .product-title { margin: 0 0 8px; font-size: 26px; }
        .product-desc { color: #6b7280; line-height: 1.7; min-height: 58px; margin-bottom: 14px; }
        .product-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .price { font-size: 28px; font-weight: 800; color: #111827; }
        .product-btn { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; border: none; border-radius: 12px; padding: 12px 16px; font-weight: 800; cursor: pointer; }
        .about-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 24px; }
        .about-card, .highlight-card { border-radius: 26px; padding: 28px; }
        .about-card { background: white; border: 1px solid #e5e7eb; box-shadow: 0 8px 22px rgba(15,23,42,0.05); }
        .highlight-card { background: linear-gradient(135deg, #14532d, #16a34a); color: white; box-shadow: 0 18px 36px rgba(22,163,74,0.2); }
        .highlight-card ul { margin: 16px 0 0; padding-right: 18px; line-height: 2; }
        .cta { text-align: center; background: white; border-radius: 28px; padding: 36px 24px; border: 1px solid #e5e7eb; box-shadow: 0 10px 26px rgba(15,23,42,0.05); }
        .cta h3 { margin: 0 0 10px; font-size: 34px; }
        .cta p { margin: 0 0 18px; color: #6b7280; }
        .footer { margin-top: 56px; background: #14532d; color: white; }
        .footer-inner { padding: 24px 0; display: flex; justify-content: space-between; gap: 18px; flex-wrap: wrap; }
        .whatsapp {
          position: fixed; left: 18px; bottom: 18px; width: 58px; height: 58px; border-radius: 50%; background: #25D366; color: white; text-decoration: none;
          display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 14px 24px rgba(37,211,102,0.35); z-index: 100;
        }
        @media (max-width: 1100px) {
          .products-grid, .categories, .benefits-grid, .about-grid { grid-template-columns: repeat(2, 1fr); }
          .hero h1 { font-size: 44px; }
        }
        @media (max-width: 700px) {
          .header-inner { align-items: stretch; }
          .search { max-width: none; }
          .products-grid, .categories, .benefits-grid, .about-grid { grid-template-columns: 1fr; }
          .hero { min-height: 420px; }
          .hero h1 { font-size: 34px; }
          .hero p { font-size: 16px; }
          .section-title { font-size: 30px; }
          .product-image { height: 220px; }
          .phone { font-size: 18px; }
        }
      `}</style>

      <div className="topbar">
        <div className="container topbar-inner">
          <span>משלוח מהיר לכל הארץ</span>
          <span>שירות לקוחות: 052-5511545</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <div>
            <img src={logo} alt="AD Solar" style={{ height: '50px' }} />
            <p className="brand-sub">פתרונות תאורה סולארית לגינה, לבית ולחצר</p>
          </div>

          <div className="search">
            <input placeholder="חפש מוצר..." />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
  <a href="tel:0525511545">052-5511545</a>

  <div
    style={{
      background: '#dcfce7',
      color: '#166534',
      padding: '8px 12px',
      borderRadius: '12px',
      fontWeight: 'bold'
    }}
  >
    עגלה: {cart.length} | סה״כ: ₪{totalPrice}
  </div>
</div>
        </div>
      </header>

      <nav className="nav">
        <div className="container nav-inner">
          {categories.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </nav>

      <section className="hero" style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container hero-content">
          <div className="hero-badge">תאורה חכמה ללא חיבור לחשמל</div>
          <h1>תאורה סולארית שמכניסה סטייל ואור לכל גינה</h1>
          <p>
            מוצרים נבחרים לגינה, לחצר, למרפסת ולשבילים — עם טעינה סולארית, עיצוב מודרני
            והתקנה קלה שמתאימה לכל בית.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">לצפייה במוצרים</a>
            <a href="https://wa.me/972525511545" className="btn-secondary">ייעוץ בוואטסאפ</a>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefits-grid">
          {benefits.map((item) => (
            <div key={item} className="benefit-card">{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">קטגוריות מובילות</div>
              <h2 className="section-title">מה תמצאו אצלנו</h2>
            </div>
          </div>

          <div className="categories">
            <div className="category-card">
              <div className="category-icon">☀️</div>
              <strong>תאורה סולארית</strong>
              <p className="section-text">פתרונות חסכוניים וחכמים לחוץ.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🌿</div>
              <strong>לגינה</strong>
              <p className="section-text">מנורות שביל, עמודים ותאורת חצר.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💡</div>
              <strong>לדים</strong>
              <p className="section-text">שרשראות ותאורה דקורטיבית לאווירה.</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🏷️</div>
              <strong>מבצעים</strong>
              <p className="section-text">מוצרים נבחרים במחירים משתלמים.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">מוצרים נבחרים</div>
              <h2 className="section-title">הנמכרים ביותר</h2>
              <p className="section-text">בחרנו עבורך את המוצרים הבולטים ביותר באתר.</p>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-body">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-desc">{product.desc}</div>
                  <div className="product-footer">
                    <span className="price">{product.price}</span>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <Link
                        to={`/product/${product.id}`}
                        className="product-btn"
                        style={{ textDecoration: 'none', display: 'inline-block' }}
                      >
                        לפרטי המוצר
                      </Link>

                      <button
                        className="product-btn"
                        onClick={() => addToCart(product)}
                      >
                        הוסף לעגלה
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-card">
            <div className="section-kicker">למה לבחור בנו</div>
            <h2 className="section-title">חנות שמתמקדת בתאורה סולארית שימושית ומעוצבת</h2>
            <p className="section-text" style={{ lineHeight: 1.9 }}>
              ב-AD Solar תמצאו מוצרים שמתאימים לגינה, לשביל, לחניה ולמרפסת — עם שילוב של
              עיצוב, נוחות והתקנה פשוטה. המטרה שלנו היא לתת לכם מוצרים שנראים טוב ביום,
              מאירים יפה בלילה, ולא דורשים חיבור מורכב לחשמל.
            </p>
          </div>

          <div className="highlight-card">
            <div className="section-kicker" style={{ color: 'rgba(255,255,255,0.8)' }}>היתרונות שלנו</div>
            <h3 style={{ margin: 0, fontSize: 30 }}>פשוט לבחור, קל להתקין, כיף לראות את התוצאה</h3>
            <ul>
              <li>מוצרים שמתאימים לגינה פרטית ולחצר</li>
              <li>תאורה דקורטיבית ותאורת שביל</li>
              <li>מענה מהיר ושירות אישי</li>
              <li>מבחר עיצובים במחירים נוחים</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h3>רוצה לבחור את המוצר המתאים ביותר?</h3>
            <p>שלח הודעה ונעזור לך להתאים תאורה סולארית לגינה, לחצר או למרפסת.</p>
            <a href="https://wa.me/972525511545" className="btn-primary">דברו איתנו בוואטסאפ</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© AD Solar כל הזכויות שמורות</div>
          <div>052-5511545</div>
        </div>
      </footer>

      <a href="https://wa.me/972525511545" className="whatsapp" aria-label="WhatsApp">💬</a>
    </div>
  );
}
