import { useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  Clock3,
  Heart,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const phone = '01153634320';
const email = 'alrahmanschool2021@gmail.com';
const address = 'أول طريق كفرالدوار - أبوالمطامير، بجوار بنزينة كتكوت';
const mapUrl = 'https://www.google.com/maps/place/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9+%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86+%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9%E2%80%AD/@30.9170539,30.1619138,17z/data=!3m1!4b1!4m6!3m5!1s0x14f6093a36059423:0xe2a8519d8b524448!8m2!3d30.9170539!4d30.1619138!16s%2Fg%2F11q1qnp7v5?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D';

const navItems = [
  ['عن المدرسة', '#about'],
  ['يومنا الدراسي', '#day'],
  ['من قلب المدرسة', '#gallery'],
  ['زورونا', '#visit'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main dir="rtl">
      <div className="topline">
        <div className="topline-inner">
          <span><MapPin size={14} /> كفرالدوار · أبوالمطامير</span>
            <a href={`tel:${phone}`} dir="ltr" data-testid="link-phone-top"><Phone size={14} /> {phone}</a>
          <span className="topline-note">أهلًا بكم في مدرسة الديب الخاصة</span>
        </div>
      </div>

      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="مدرسة الديب الخاصة — الرئيسية">
            <img src={asset('school-logo.jpg')} alt="شعار مدرسة الديب الخاصة" />
            <span className="brand-copy">
              <strong>مدرسة الديب الخاصة</strong>
              <small>ELDEEB PRIVATE SCHOOL</small>
            </span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`nav-links${menuOpen ? ' nav-open' : ''}`} aria-label="التنقل الرئيسي">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} data-testid={`link-nav-${href.slice(1)}`}>{label}</a>
            ))}
            <a className="nav-cta" href={`tel:${phone}`} onClick={closeMenu} data-testid="link-contact-nav">
              تواصلوا معنا <ArrowLeft size={15} />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span /> مدرسة الديب الخاصة</div>
            <h1>هنا يكبر الحلم،<br /><em>خطوةً خطوة.</em></h1>
            <p className="hero-intro">
              مساحة تجمع بين التعلّم والأنشطة واللحظات الجميلة — في قلب مجتمعنا، وبقربكم.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#visit" data-testid="link-visit">
                اكتشفوا المدرسة <ArrowLeft size={17} />
              </a>
              <a className="text-link" href={`tel:${phone}`} data-testid="link-phone-hero">
                <span className="call-icon"><Phone size={16} /></span>
                اسألونا مباشرة
              </a>
            </div>
            <div className="hero-note">
              <span className="note-mark"><Heart size={17} /></span>
              <span>مدرسة قريبة من البيت،<br />ومن قلب الحكاية.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src={asset('school-yard.jpg')} alt="طلاب مدرسة الديب في لقاء جماعي بساحة المدرسة" />
              <div className="photo-caption">
                <span className="caption-dot" />
                <span>نتعلّم معًا، ونكبر معًا</span>
              </div>
            </div>
            <div className="hero-seal">
              <img src={asset('school-logo.jpg')} alt="" />
              <span>مدرسة<br /><b>الديب الخاصة</b></span>
            </div>
            <div className="hero-index" aria-hidden="true">01 <i /> 04</div>
            <div className="sun-shape" aria-hidden="true" />
          </div>
        </div>
            <a className="scroll-cue" href="#about" data-testid="link-scroll-about"><span>تابعوا الحكاية</span><ArrowDown size={15} /></a>
      </section>

      <section className="welcome-section section-pad" id="about">
        <div className="welcome-grid content-width">
          <div className="section-heading">
            <span className="kicker">أهلًا بكم في بيتنا</span>
            <h2>مكان للتعلّم،<br /><span>ومساحة للانتماء.</span></h2>
          </div>
          <div className="welcome-text">
            <p className="lead">
              في مدرسة الديب الخاصة، نؤمن أن أيام المدرسة ليست دروسًا فقط؛ إنها صداقات، واكتشافات، وذكريات تصنعها التفاصيل الصغيرة.
            </p>
            <p>
              من الفصل إلى ساحة المدرسة، نشارككم لمحات من يومنا كما هو — مجتمع يتعلّم ويحتفل ويجتمع.
            </p>
            <a className="underlined-link" href="#gallery">شاهدوا لحظات من مدرستنا <ArrowLeft size={16} /></a>
          </div>
        </div>
        <div className="welcome-ribbon" aria-hidden="true">
          <span>مدرسة الديب الخاصة</span><b>•</b><span>ELDEEB PRIVATE SCHOOL</span><b>•</b><span>مدرسة الديب الخاصة</span>
        </div>
      </section>

      <section className="school-day section-pad" id="day">
        <div className="day-grid content-width">
          <div className="day-photo">
            <img src={asset('classroom.jpg')} alt="طلاب داخل فصل مدرسي يشاركون في نشاط تعليمي" loading="lazy" />
            <span className="image-tag"><BookOpen size={15} /> من داخل الفصل</span>
            <span className="day-photo-number">02</span>
          </div>
          <div className="day-copy">
            <span className="kicker">تفاصيل تصنع يومًا جميلًا</span>
            <h2>كل يوم يحمل<br /><em>فرصة جديدة.</em></h2>
            <p>في الفصل، نتشارك وقت التعلّم ونحتفي بالمحاولة. وفي كل يوم، مساحة لأن يشارك كل طالب حضوره وصوته.</p>
            <div className="day-points">
              <div className="day-point">
                <span className="point-icon orange"><BookOpen size={20} /></span>
                <div><strong>وقت للتعلّم</strong><small>لحظات صفية نشاركها معًا.</small></div>
              </div>
              <div className="day-point">
                <span className="point-icon navy"><Sparkles size={20} /></span>
                <div><strong>مساحة للاكتشاف</strong><small>أنشطة ومناسبات من حياة المدرسة.</small></div>
              </div>
              <div className="day-point">
                <span className="point-icon green"><Heart size={20} /></span>
                <div><strong>روح الجماعة</strong><small>أصدقاء، معلمون، وعائلة واحدة.</small></div>
              </div>
            </div>
            <a className="button button-outline" href="#gallery">شاهدوا يومنا <ArrowLeft size={16} /></a>
          </div>
        </div>
      </section>

      <section className="moments section-pad" id="gallery">
        <div className="content-width">
          <div className="moments-head">
            <div>
              <span className="kicker">وجوه ولحظات من مدرستنا</span>
              <h2>الحكاية في <em>تفاصيلها.</em></h2>
            </div>
            <p>من الفصل والساحة إلى أيام الفرح —<br />هذه لمحات من حياة مدرسة الديب.</p>
          </div>
          <div className="photo-grid">
            <figure className="photo-card photo-tall">
               <img src={asset('school-life.jpg')} alt="طلاب يرفعون أوراقهم في فصل دراسي" loading="lazy" data-testid="img-gallery-school-life" />
              <figcaption><span>لحظة من الفصل</span><ArrowUpLeft size={17} /></figcaption>
            </figure>
            <figure className="photo-card">
               <img src={asset('activities.jpg')} alt="طلاب يشاركون في يوم أنشطة واحتفال مدرسي" loading="lazy" data-testid="img-gallery-activities" />
              <figcaption><span>يوم مليء بالحيوية</span><ArrowUpLeft size={17} /></figcaption>
            </figure>
            <figure className="photo-card photo-wide">
               <img src={asset('school-event.jpg')} alt="طلاب وأسر يحتفلون عند مدخل المدرسة" loading="lazy" data-testid="img-gallery-event" />
              <figcaption><span>نحتفل معًا</span><ArrowUpLeft size={17} /></figcaption>
            </figure>
            <figure className="photo-card">
               <img src={asset('community.jpg')} alt="طلاب يستمتعون بعرض احتفالي في ساحة المدرسة" loading="lazy" data-testid="img-gallery-community" />
              <figcaption><span>وقت يجمعنا</span><ArrowUpLeft size={17} /></figcaption>
            </figure>
            <figure className="photo-card photo-last">
               <img src={asset('school-yard.jpg')} alt="لقاء طلابي في ساحة المدرسة" loading="lazy" data-testid="img-gallery-yard" />
              <figcaption><span>في ساحة المدرسة</span><ArrowUpLeft size={17} /></figcaption>
            </figure>
          </div>
          <div className="gallery-foot"><span>صور من لحظاتنا المدرسية</span><i /></div>
        </div>
      </section>

      <section className="together-section">
        <div className="together-image">
          <img src={asset('school-event.jpg')} alt="احتفال مجتمعي أمام المدرسة" loading="lazy" />
        </div>
        <div className="together-copy">
          <span className="kicker">مجتمعنا هو الحكاية</span>
          <h2>كل وجه هنا<br />له مكان.</h2>
          <p>المدرسة تكبر بأهلها. نعتز باللحظات التي تجمع طلابنا وأسرهم ومعلميهم، وتصنع إحساسًا حقيقيًا بالانتماء.</p>
          <a href={`https://wa.me/20${phone.slice(1)}`} className="button button-cream" target="_blank" rel="noreferrer">
            ابدأوا الحديث معنا <ArrowLeft size={16} />
          </a>
          <span className="together-stamp">قريبون<br />منكم</span>
        </div>
      </section>

      <section className="visit-section section-pad" id="visit">
        <div className="content-width">
          <div className="visit-intro">
            <span className="kicker">خطوتكم التالية</span>
            <h2>يسعدنا أن <em>نسمع منكم.</em></h2>
            <p>للاستفسار أو لزيارتنا، تواصلوا معنا بالطريقة الأنسب لكم.</p>
          </div>
          <div className="contact-layout">
            <div className="contact-details">
              <a className="contact-card" href={`tel:${phone}`} data-testid="link-contact-phone">
                <span className="contact-icon"><Phone size={21} /></span>
                <span><small>اتصال مباشر</small><b dir="ltr">{phone}</b></span>
                <ArrowLeft className="contact-arrow" size={17} />
              </a>
              <a className="contact-card" href={`mailto:${email}`} data-testid="link-contact-email">
                <span className="contact-icon"><Mail size={21} /></span>
                <span><small>راسلونا عبر البريد</small><b dir="ltr">{email}</b></span>
                <ArrowLeft className="contact-arrow" size={17} />
              </a>
              <a className="contact-card" href={`https://wa.me/20${phone.slice(1)}`} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">
                <span className="contact-icon"><MessageCircle size={21} /></span>
                <span><small>تواصل عبر واتساب</small><b>نحن بانتظار رسالتكم</b></span>
                <ArrowLeft className="contact-arrow" size={17} />
              </a>
            </div>
            <div className="location-card">
              <div className="location-top">
                <span className="location-icon"><MapPin size={22} /></span>
                <span className="location-label">موقعنا</span>
                <Clock3 size={17} className="location-clock" />
              </div>
              <h3>على أول الطريق،<br />وقريبون منكم.</h3>
              <p>{address}</p>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="button button-primary location-button" data-testid="link-directions">
                افتحوا الموقع على الخريطة <ArrowLeft size={16} />
              </a>
              <span className="location-coords" aria-hidden="true">كفرالدوار&nbsp; / &nbsp;أبوالمطامير</span>
            </div>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="closing-content">
          <img src={asset('school-logo.jpg')} alt="شعار مدرسة الديب الخاصة" loading="lazy" />
          <div>
            <span>مدرسة الديب الخاصة</span>
            <h2>نتطلّع للقائكم.</h2>
          </div>
          <a className="closing-phone" href={`tel:${phone}`} dir="ltr"><Phone size={16} /> {phone}</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner content-width">
          <span>© مدرسة الديب الخاصة</span>
          <span>أول طريق كفرالدوار - أبوالمطامير، بجوار بنزينة كتكوت</span>
           <a href="#home" data-testid="link-back-to-top">العودة إلى الأعلى ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
