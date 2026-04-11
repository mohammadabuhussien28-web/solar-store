export default function SolarStoreHebrew() {
  const products = [
    {
      id: 1,
      name: 'פאנל סולארי 550W',
      category: 'פאנלים',
      price: '₪890',
      desc: 'פאנל מונוקריסטלי יעיל במיוחד למערכות ביתיות ועסקיות.',
      badge: 'נמכר ביותר',
    },
    {
      id: 2,
      name: 'ממיר היברידי 5KW',
      category: 'ממירים',
      price: '₪3,490',
      desc: 'ממיר חכם עם תמיכה בסוללות וניהול אנרגיה מתקדם.',
      badge: 'חדש',
    },
    {
      id: 3,
      name: 'סוללת אגירה 10KWh',
      category: 'סוללות',
      price: '₪8,900',
      desc: 'פתרון אגירה אמין לבית ולעסק עם אורך חיים גבוה.',
      badge: 'אחריות מורחבת',
    },
    {
      id: 4,
      name: 'ערכת התקנה מלאה',
      category: 'אביזרים',
      price: '₪690',
      desc: 'כבלים, מחברים, מסילות ואביזרי התקנה למערכת סולארית.',
      badge: 'מומלץ',
    },
  ];

  const features = [
    'תשלום מאובטח באתר',
    'משלוחים לכל הארץ',
    'אחריות על מוצרים נבחרים',
    'ייעוץ מקצועי לפני רכישה',
  ];

  const styles = {
    page: {
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif',
      background: '#f6f8fb',
      color: '#111827',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    header: {
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    headerInner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap',
    },
    brandTitle: {
      fontSize: '28px',
      fontWeight: 700,
      margin: 0,
    },
    brandSub: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px',
    },
    nav: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 600,
    },
    buttonPrimary: {
      background: '#111827',
      color: '#ffffff',
      border: 'none',
      borderRadius: '14px',
      padding: '12px 18px',
      fontSize: '14px',
      fontWeight: 700,
      cursor: 'pointer',
    },
    buttonSecondary: {
      background: '#ffffff',
      color: '#111827',
      border: '1px solid #d1d5db',
      borderRadius: '14px',
      padding: '12px 18px',
      fontSize: '14px',
      fontWeight: 700,
      cursor: 'pointer',
    },
    hero: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '28px',
      alignItems: 'center',
      padding: '52px 0 32px',
    },
    heroBadge: {
      display: 'inline-block',
      padding: '8px 14px',
      borderRadius: '999px',
      background: '#eef2ff',
      color: '#3730a3',
      fontWeight: 700,
      fontSize: '14px',
      marginBottom: '18px',
    },
    heroTitle: {
      fontSize: '54px',
      lineHeight: 1.1,
      margin: '0 0 16px',
    },
    heroText: {
      fontSize: '19px',
      lineHeight: 1.8,
      color: '#4b5563',
      marginBottom: '24px',
    },
    actions: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
    heroPanel: {
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
      borderRadius: '28px',
      padding: '28px',
      color: '#ffffff',
      boxShadow: '0 20px 45px rgba(15,23,42,0.18)',
    },
    heroPanelTitle: {
      fontSize: '22px',
      margin: '0 0 10px',
    },
    heroPanelText: {
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.8,
      marginBottom: '22px',
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '14px',
    },
    statCard: {
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '18px',
      padding: '18px',
    },
    statBig: {
      fontSize: '30px',
      fontWeight: 800,
      marginBottom: '8px',
    },
    statSmall: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.6,
    },
    section: {
      padding: '34px 0',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      gap: '18px',
      flexWrap: 'wrap',
      marginBottom: '22px',
    },
    sectionKicker: {
      color: '#6b7280',
      fontWeight: 700,
      fontSize: '14px',
      marginBottom: '8px',
    },
    sectionTitle: {
      fontSize: '38px',
      margin: 0,
    },
    searchRow: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    input: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '14px',
      padding: '12px 14px',
      fontSize: '14px',
      minWidth: '220px',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
    },
    productCard: {
      background: '#ffffff',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 12px 30px rgba(15,23,42,0.07)',
      border: '1px solid #e5e7eb',
    },
    productVisual: {
      height: '180px',
      background: 'linear-gradient(135deg, #dbeafe, #ecfccb)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryPill: {
      background: '#ffffff',
      color: '#111827',
      borderRadius: '999px',
      padding: '10px 16px',
      fontWeight: 700,
      boxShadow: '0 6px 14px rgba(0,0,0,0.08)',
    },
    productBody: {
      padding: '20px',
    },
    badge: {
      display: 'inline-block',
      background: '#f3f4f6',
      color: '#4b5563',
      borderRadius: '999px',
      padding: '6px 10px',
      fontSize: '12px',
      fontWeight: 700,
      marginBottom: '12px',
    },
    productName: {
      fontSize: '24px',
      margin: '0 0 10px',
    },
    productDesc: {
      color: '#6b7280',
      lineHeight: 1.7,
      minHeight: '74px',
      marginBottom: '14px',
    },
    price: {
      fontSize: '30px',
      fontWeight: 800,
      marginBottom: '14px',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '16px',
    },
    featureCard: {
      background: '#ffffff',
      borderRadius: '20px',
      padding: '20px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 24px rgba(15,23,42,0.05)',
      fontWeight: 700,
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
    },
    aboutCard: {
      background: '#ffffff',
      borderRadius: '24px',
      padding: '28px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 12px 28px rgba(15,23,42,0.05)',
    },
    darkCard: {
      background: '#0f172a',
      color: '#ffffff',
      borderRadius: '24px',
      padding: '28px',
      boxShadow: '0 12px 28px rgba(15,23,42,0.14)',
    },
    list: {
      margin: 0,
      paddingRight: '18px',
      lineHeight: 2,
    },
    contactCard: {
      background: '#ffffff',
      borderRadius: '28px',
      padding: '30px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 12px 28px rgba(15,23,42,0.05)',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
    },
    textarea: {
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '14px',
      padding: '12px 14px',
      fontSize: '14px',
      minHeight: '120px',
      gridColumn: '1 / -1',
      resize: 'vertical',
    },
    footer: {
      borderTop: '1px solid #e5e7eb',
      marginTop: '36px',
      background: '#ffffff',
    },
    footerInner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '22px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '14px',
      flexWrap: 'wrap',
      color: '#6b7280',
    },
    footerLinks: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
    },
    footerLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 600,
    },
    mobileNote: {
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '13px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <h1 style={styles.brandTitle}>SolarPro</h1>
            <div style={styles.brandSub}>חנות סולארית אונליין</div>
          </div>

          <nav style={styles.nav}>
            <a href="#home" style={styles.navLink}>ראשי</a>
            <a href="#products" style={styles.navLink}>מוצרים</a>
            <a href="#about" style={styles.navLink}>אודות</a>
            <a href="#contact" style={styles.navLink}>צור קשר</a>
          </nav>

          <button style={styles.buttonPrimary}>לעגלת הקניות</button>
        </div>
      </header>

      <main style={styles.container}>
        <section id="home" style={styles.hero}>
          <div>
            <div style={styles.heroBadge}>פתרונות אנרגיה חכמים לבית ולעסק</div>
            <h2 style={styles.heroTitle}>אתר מכירות למוצרים סולאריים בעברית</h2>
            <p style={styles.heroText}>
              מכירה של פאנלים סולאריים, ממירים, סוללות אגירה ואביזרי התקנה — עם חוויית קנייה מקצועית,
              תצוגה מסודרת ותשלום באתר.
            </p>
            <div style={styles.actions}>
              <button style={styles.buttonPrimary}>לצפייה במוצרים</button>
              <button style={styles.buttonSecondary}>בקשת הצעת מחיר</button>
            </div>
          </div>

          <div style={styles.heroPanel}>
            <h3 style={styles.heroPanelTitle}>למה לקוחות בוחרים בנו</h3>
            <p style={styles.heroPanelText}>
              ציוד איכותי, שירות מקצועי, התאמה מלאה לצרכי הבית או העסק, וליווי בבחירת המערכת הנכונה.
            </p>
            <div style={styles.statGrid}>
              <div style={styles.statCard}>
                <div style={styles.statBig}>עד 70%</div>
                <div style={styles.statSmall}>פוטנציאל חיסכון בחשמל לטווח הארוך.</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statBig}>מלאי זמין</div>
                <div style={styles.statSmall}>פאנלים, ממירים, סוללות ואביזרי התקנה.</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statBig}>תשלום בטוח</div>
                <div style={styles.statSmall}>רכישה מהירה ונוחה עם חוויית קנייה מקצועית.</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statBig}>ייעוץ אישי</div>
                <div style={styles.statSmall}>התאמה של מוצר לצרכים בפועל לפני רכישה.</div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.featureGrid}>
            {features.map((feature) => (
              <div key={feature} style={styles.featureCard}>{feature}</div>
            ))}
          </div>
        </section>

        <section id="products" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={styles.sectionKicker}>קטלוג מוצרים</div>
              <h3 style={styles.sectionTitle}>המוצרים המובילים שלנו</h3>
            </div>
            <div style={styles.searchRow}>
              <input style={styles.input} placeholder="חיפוש מוצר..." />
              <select style={styles.input} defaultValue="">
                <option value="">כל הקטגוריות</option>
                <option>פאנלים</option>
                <option>ממירים</option>
                <option>סוללות</option>
                <option>אביזרים</option>
              </select>
            </div>
          </div>

          <div style={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <div style={styles.productVisual}>
                  <div style={styles.categoryPill}>{product.category}</div>
                </div>
                <div style={styles.productBody}>
                  <div style={styles.badge}>{product.badge}</div>
                  <h4 style={styles.productName}>{product.name}</h4>
                  <div style={styles.productDesc}>{product.desc}</div>
                  <div style={styles.price}>{product.price}</div>
                  <div style={styles.actions}>
                    <button style={styles.buttonPrimary}>הוסף לעגלה</button>
                    <button style={styles.buttonSecondary}>פרטים</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutCard}>
              <div style={styles.sectionKicker}>אודות</div>
              <h3 style={{ ...styles.sectionTitle, fontSize: '32px', marginBottom: '12px' }}>
                פתרונות סולאריים עם אמינות ושירות
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.9, margin: 0 }}>
                האתר מיועד למכירה נוחה של ציוד סולארי לקהל פרטי ועסקי. אפשר להציג כאן קטלוג מסודר,
                מפרטים טכניים, מחירים, מבצעים, משלוחים, שאלות נפוצות וחיבור מלא לסליקה אונליין.
              </p>
            </div>
            <div style={styles.darkCard}>
              <div style={{ ...styles.sectionKicker, color: '#cbd5e1' }}>מה כדאי להוסיף בהמשך</div>
              <ul style={styles.list}>
                <li>עמוד מוצר מלא עם מפרט טכני ותמונות</li>
                <li>עמוד עגלה ועמוד תשלום</li>
                <li>חיבור לסליקה ישראלית</li>
                <li>מערכת ניהול מלאי והזמנות</li>
                <li>SEO בעברית כדי להופיע בגוגל</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.contactCard}>
            <div style={styles.sectionKicker}>צור קשר</div>
            <h3 style={{ ...styles.sectionTitle, fontSize: '34px', marginBottom: '12px' }}>רוצה להתחיל למכור?</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '20px' }}>
              אפשר להחליף את הטופס הזה בפרטי העסק שלך, כתובת, טלפון, אימייל, שעות פעילות ואזורי משלוח.
            </p>
            <div style={styles.formGrid}>
              <input style={styles.input} placeholder="שם מלא" />
              <input style={styles.input} placeholder="טלפון" />
              <input style={{ ...styles.input, gridColumn: '1 / -1' }} placeholder="אימייל" />
              <textarea style={styles.textarea} placeholder="הודעה" />
            </div>
            <div style={{ marginTop: '16px' }}>
              <button style={styles.buttonPrimary}>שלח פנייה</button>
            </div>
          </div>
        </section>

        <div style={styles.mobileNote}>השלב הבא: להחליף את מוצרי הדוגמה במוצרים האמיתיים שלך.</div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>© 2026 SolarPro. כל הזכויות שמורות.</div>
          <div style={styles.footerLinks}>
            <a href="/privacy" style={styles.footerLink}>מדיניות פרטיות</a>
            <a href="/terms" style={styles.footerLink}>תקנון</a>
            <a href="/shipping" style={styles.footerLink}>משלוחים והחזרות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
