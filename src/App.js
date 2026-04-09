export default function SolarStoreHebrew() {
  const products = [
    {
      id: 1,
      name: 'פאנל סולארי 550W',
      category: 'פאנלים',
      price: '₪890',
      desc: 'פאנל מונוקריסטלי יעיל במיוחד למערכות ביתיות ועסקיות.',
      badge: 'נמכר ביותר'
    },
    {
      id: 2,
      name: 'ממיר היברידי 5KW',
      category: 'ממירים',
      price: '₪3,490',
      desc: 'ממיר חכם עם תמיכה בסוללות וניהול אנרגיה מתקדם.',
      badge: 'חדש'
    },
    {
      id: 3,
      name: 'סוללת אגירה 10KWh',
      category: 'סוללות',
      price: '₪8,900',
      desc: 'פתרון אגירה אמין לבית ולעסק עם אורך חיים גבוה.',
      badge: 'אחריות מורחבת'
    },
    {
      id: 4,
      name: 'ערכת התקנה מלאה',
      category: 'אביזרים',
      price: '₪690',
      desc: 'כבלים, מחברים, מסילות ואביזרי התקנה למערכת סולארית.',
      badge: 'מומלץ'
    }
  ];

  const features = [
    'תשלום מאובטח באתר',
    'משלוחים לכל הארץ',
    'אחריות על מוצרים נבחרים',
    'ייעוץ מקצועי לפני רכישה'
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold">SolarPro</div>
            <div className="text-sm text-slate-500">חנות סולארית אונליין</div>
          </div>
          <nav className="hidden gap-6 md:flex text-sm font-medium">
            <a href="#home" className="hover:text-slate-600">ראשי</a>
            <a href="#products" className="hover:text-slate-600">מוצרים</a>
            <a href="#about" className="hover:text-slate-600">אודות</a>
            <a href="#contact" className="hover:text-slate-600">צור קשר</a>
          </nav>
          <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            לעגלת הקניות
          </button>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-4 inline-flex w-fit rounded-full border bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            פתרונות אנרגיה חכמים לבית ולעסק
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
            אתר מכירות למוצרים
            <span className="block">סולאריים בעברית</span>
          </h1>
          <p className="mb-6 max-w-xl text-lg leading-8 text-slate-600">
            מכירה של פאנלים סולאריים, ממירים, סוללות אגירה ואביזרי התקנה — עם חוויית קנייה מקצועית,
            עיצוב נקי ותשלום מאובטח ישירות באתר.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#products" className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-md transition hover:opacity-90">
              לצפייה במוצרים
            </a>
            <a href="#contact" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-slate-100">
              בקשת הצעת מחיר
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-sm font-semibold text-emerald-700">חיסכון בחשמל</div>
            <div className="text-3xl font-bold">עד 70%</div>
            <p className="mt-3 text-slate-600">פתרונות שמאפשרים חיסכון משמעותי לטווח הארוך.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-sm font-semibold text-amber-700">תמיכה מלאה</div>
            <div className="text-3xl font-bold">מייעוץ ועד התקנה</div>
            <p className="mt-3 text-slate-600">ליווי מקצועי בבחירת המוצר המתאים לצרכים שלך.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:col-span-2">
            <div className="mb-4 text-sm font-semibold text-slate-500">למה לקנות אצלנו</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-slate-500">קטלוג מוצרים</div>
            <h2 className="text-3xl font-bold">המוצרים המובילים שלנו</h2>
          </div>
          <div className="flex gap-3">
            <input
              placeholder="חיפוש מוצר..."
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-slate-300"
            />
            <select className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-slate-300">
              <option>כל הקטגוריות</option>
              <option>פאנלים</option>
              <option>ממירים</option>
              <option>סוללות</option>
              <option>אביזרים</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-amber-100 via-white to-emerald-100">
                <div className="rounded-full border bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {product.badge}
                </div>
                <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                <p className="mb-4 min-h-[56px] text-sm leading-6 text-slate-600">{product.desc}</p>
                <div className="mb-4 text-2xl font-extrabold">{product.price}</div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                    הוסף לעגלה
                  </button>
                  <button className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold transition hover:bg-slate-100">
                    פרטים
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="mb-3 text-sm font-semibold text-slate-500">אודות</div>
            <h2 className="mb-4 text-3xl font-bold">פתרונות סולאריים עם אמינות ושירות</h2>
            <p className="leading-8 text-slate-600">
              האתר מיועד למכירה נוחה של ציוד סולארי לקהל פרטי ועסקי. אפשר להציג כאן קטלוג מסודר,
              מפרטים טכניים, מחירים, מבצעים, משלוחים, שאלות נפוצות וחיבור מלא לסליקה אונליין.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <div className="mb-3 text-sm font-semibold text-slate-300">מה חשוב להוסיף בהמשך</div>
            <ul className="space-y-3 text-sm leading-7 text-slate-100">
              <li>עמוד מוצר מלא עם מפרט טכני ותמונות</li>
              <li>עמוד עגלה ועמוד תשלום</li>
              <li>חיבור לסליקה ישראלית</li>
              <li>מערכת ניהול מלאי והזמנות</li>
              <li>SEO בעברית כדי להופיע בגוגל</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-2 text-sm font-semibold text-slate-500">צור קשר</div>
          <h2 className="mb-4 text-3xl font-bold">רוצה להתחיל למכור?</h2>
          <p className="mb-8 max-w-2xl text-slate-600">
            אפשר להחליף את הטופס הזה בפרטי העסק שלך, כתובת, טלפון, אימייל, שעות פעילות ואזורי משלוח.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="שם מלא" />
            <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="טלפון" />
            <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2" placeholder="אימייל" />
            <textarea className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2" placeholder="הודעה" />
          </div>
          <button className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white shadow-md transition hover:opacity-90">
            שלח פנייה
          </button>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 SolarPro. כל הזכויות שמורות.</div>
          <div className="flex gap-4">
            <a href="#">מדיניות פרטיות</a>
            <a href="#">תקנון</a>
            <a href="#">משלוחים והחזרות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}