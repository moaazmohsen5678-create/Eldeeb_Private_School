import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ArrowLeft, Check, ChevronLeft, CircleCheck, Clock3, Compass, HeartHandshake, Mail, MapPin, Menu, Phone, Star, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();
const base = '/gallery/';
const logo = `${base}808786661_1375152158110907_4090567907087729423_n_1789917920795.jpg`;
const schoolPhone = '01153634320';
const schoolEmail = 'alrahmanschool2021@gmail.com';
const schoolAddress = 'أول طريق كفرالدوار - أبوالمطامير، بجوار بنزينة كتكوت';
const photos = [
  { src: `${base}796510239_2138796383371340_1246479293422274741_n_1789918025307.jpg`, title: 'نتعلّم معًا في كل مكان', category: 'يومنا في المدرسة' },
  { src: `${base}810421915_1376049704687819_5776937059488477853_n_1789918051985.jpg`, title: 'صحبة تصنع الذكريات', category: 'الحياة المدرسية' },
  { src: `${base}797598518_1690161049786181_7611976998453095102_n_1789918096331.jpg`, title: 'نحتفل بكل خطوة', category: 'احتفالاتنا' },
  { src: `${base}806790497_1685533106324527_3337166698577007043_n_1789918117726.jpg`, title: 'فرحة لا تُنسى', category: 'أنشطة وفعاليات' },
  { src: `${base}811902383_1120903690618020_8784024791694252300_n_1789918341620.jpg`, title: 'إنجازات نفتخر بها', category: 'نجاحات أبنائنا' },
  { src: `${base}813698756_1055300637297771_2166166102493822483_n_1789918438016.jpg`, title: 'كل صوت له مكان', category: 'نتشارك النجاح' },
];

function Reveal({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const [id] = useState(() => `reveal-${Math.random().toString(36).slice(2)}`);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    const element = document.querySelector(`[data-reveal-id="${id}"]`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div data-reveal-id={id} className={`reveal ${visible ? 'visible' : ''} ${className}`} onClick={onClick}>{children}</div>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('الرئيسية');
  const links = [
    ['الرئيسية', 'home'], ['عن المدرسة', 'about'], ['الحياة المدرسية', 'life'], ['الأنشطة', 'activities'], ['ذكرياتنا', 'gallery'],
  ];
  useEffect(() => {
    const onScroll = () => {
      const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const current = sections.find((section) => window.scrollY >= section.offsetTop - 130);
      if (current) setActive(links.find(([, id]) => id === current.id)?.[0] ?? 'الرئيسية');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
  const navigate = (id: string, label: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(label); setMenuOpen(false);
  };
  return <header>
      <div className="topbar"><div className="container-wide topbar-inner">
       <div className="topbar-contact"><a href={`tel:${schoolPhone}`}><Phone size={13} /> ٠١١٥٣٦٣٤٣٢٠</a><span><Clock3 size={13} /> السبت — الخميس، ٧:٣٠ ص — ٢:٣٠ م</span></div>
      <span>أهلًا بكم في مدرسة الديب الخاصة</span>
    </div></div>
    <nav className="navbar" aria-label="التنقل الرئيسي"><div className="container-wide nav-inner">
      <a href="#home" className="brand" data-testid="link-brand" onClick={() => navigate('home', 'الرئيسية')}>
        <img src={logo} alt="شعار مدرسة الديب الخاصة" /><div className="brand-copy"><div className="brand-name">مدرسة الديب الخاصة</div><div className="brand-sub">ELDEEB PRIVATE SCHOOL</div></div>
      </a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>{links.map(([label, id]) =>
        <a href={`#${id}`} key={id} className={active === label ? 'active' : ''} data-testid={`link-nav-${id}`} onClick={() => navigate(id, label)}>{label}</a>)}</div>
      <button className="nav-cta" data-testid="button-nav-contact" onClick={() => navigate('contact', 'تواصل معنا')}>تواصل معنا</button>
      <button className="menu-toggle" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} data-testid="button-mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="home"><div className="container-wide hero-grid">
    <Reveal className="hero-copy"><div className="eyebrow">من هنا تبدأ الحكاية</div>
      <h1>مكان يكبر فيه<br /><strong>الشغف.</strong> ويزدهر فيه الأثر.</h1>
      <p className="hero-lede">في مدرسة الديب الخاصة، لا نكتفي بأن يتعلم أبناؤنا. نمنحهم مساحة ليسألوا، ويجربوا، ويجدوا صوتهم بين أصدقاء يشبهونهم.</p>
      <div className="hero-actions"><button className="orange-btn" data-testid="button-hero-contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>اكتشف المدرسة <ArrowLeft size={17} /></button><a className="ghost-btn" href="#gallery" data-testid="link-hero-gallery">شاهد يومنا <ChevronLeft size={16} /></a></div>
      <div className="hero-note"><Star size={17} fill="currentColor" color="hsl(14 85% 55%)" /><span>بيئة آمنة، تعليم طموح، و<strong>انتماء حقيقي</strong></span></div>
    </Reveal>
    <Reveal className="hero-visual"><img className="hero-photo" src={photos[0].src} alt="طلاب مدرسة الديب في نشاط جماعي داخل المدرسة" /><div className="sunburst" aria-hidden="true" /><div className="hero-photo-badge"><img src={logo} alt="" /><p>كل يوم فرصة جديدة<br />لنكتشف شيئًا عن أنفسنا</p></div></Reveal>
  </div></section>;
}

function PromiseSection() {
  return <section className="section" id="about"><div className="container-wide">
    <Reveal className="section-head"><div><div className="section-kicker">لماذا الديب؟</div><h2 className="section-title">المدرسة التي ترى<br />ما وراء الدرجات.</h2></div><p className="section-intro">نصنع تعليمًا يحترم فضول الطفل، ويؤمن بقدرته على صنع فرق حقيقي — في فصله، وفي مدرسته، وفي العالم من حوله.</p></Reveal>
    <div className="promise-grid"><Reveal className="promise-main"><span className="number">01 / وعدنا</span><h3>طفل واثق يعرف أن صوته مهم.</h3><p>نستمع جيدًا، نشجع المحاولة، ونحتفل بالتقدم الصغير قبل الإنجاز الكبير.</p></Reveal>
      <Reveal className="promise-card"><div><div className="promise-icon"><HeartHandshake size={23} /></div><h3>نحن عائلة</h3><p>علاقات دافئة بين المعلم والطفل والأسرة، أساسها الثقة والاحترام.</p></div><ChevronLeft className="promise-arrow" /></Reveal>
      <Reveal className="promise-card"><div><div className="promise-icon"><Compass size={23} /></div><h3>نتعلم بالحياة</h3><p>الكتاب بداية فقط. نسأل، نتحرك، نشارك، ونحوّل كل تجربة إلى معرفة.</p></div><ChevronLeft className="promise-arrow" /></Reveal>
    </div>
    <Reveal><div className="stats-strip"><div className="stat"><strong>٢٠+</strong><span>عامًا من الخبرة</span></div><div className="stat"><strong>١:١٢</strong><span>نسبة معلم لكل طالب</span></div><div className="stat"><strong>٤</strong><span>مراحل تعليمية</span></div><div className="stat"><strong>١</strong><span>مجتمع واحد متماسك</span></div></div></Reveal>
  </div></section>;
}

function StorySection() {
  return <section className="section section-tint" id="life"><div className="container-wide story-grid">
    <Reveal className="story-copy"><div className="section-kicker">يوم عادي؟ ليس تمامًا</div><h2 className="section-title">كل يوم يترك<br />حكاية جديدة.</h2><p>من نقاش يبدأ في الفصل إلى مباراة تجمع أصدقاء جدد، نترك لأبنائنا وقتًا ليعيشوا المدرسة بكل تفاصيلها. هنا تتشكل الذكريات التي ترافقهم طويلًا.</p><ul className="story-list"><li><Check size={18} /> فصول تفاعلية تشجع السؤال</li><li><Check size={18} /> أنشطة رياضية وفنية طوال العام</li><li><Check size={18} /> احتفالات تصنعها أيادي أبنائنا</li></ul></Reveal>
    <Reveal className="story-art"><img src={photos[1].src} alt="طلاب يجتمعون حول مائدة في نشاط مدرسي" /><div className="story-tag">نحتفل باللحظة التي يقول فيها الطفل: أنا أستطيع.</div></Reveal>
  </div></section>;
}

function GallerySection({ onOpen }: { onOpen: (index: number) => void }) {
  return <section className="section" id="gallery"><div className="container-wide">
    <Reveal className="section-head"><div><div className="section-kicker">من ألبومنا</div><h2 className="section-title">صور تشبهنا.</h2></div><p className="section-intro">هذه ليست لقطات مرتبة بعناية. هذه لحظات حقيقية من أيام مليئة بالحركة، والضحك، والاكتشاف.</p></Reveal>
    <div className="gallery-wrap"><Reveal className="gallery-lead" onClick={() => onOpen(0)}><img src={photos[0].src} alt={photos[0].title} /><div className="gallery-overlay"><h3>{photos[0].title}</h3><p>{photos[0].category}</p></div></Reveal>
      <div className="gallery-grid">{photos.slice(1).map((photo, index) => <Reveal key={photo.src} className="gallery-item" onClick={() => onOpen(index + 1)}><img src={photo.src} alt={photo.title} /></Reveal>)}</div>
    </div><div className="gallery-caption"><span /> اضغط على أي صورة لتعيش اللحظة بحجم أكبر</div>
  </div></section>;
}

function ActivitySection() {
  const activities = [['٠١', 'فنون ومسرح', 'نمنح الخيال مساحة واسعة ليتحول إلى لون، وصوت، ومشهد لا يُنسى.'], ['٠٢', 'رياضة وحركة', 'طاقة الفريق، متعة اللعب، وثقة تنمو مع كل تمريرة وسباق.'], ['٠٣', 'اكتشاف وقيادة', 'مشروعات وفعاليات يتولى أبناؤنا فكرتها وتنظيمها والاحتفال بها.']];
  return <section className="section section-tint" id="activities"><div className="container-wide"><Reveal className="section-head"><div><div className="section-kicker">مساحتك لتجرب كل شيء</div><h2 className="section-title">شغفك له<br />مكان هنا.</h2></div><p className="section-intro">نؤمن أن المدرسة لا تُقاس بما يحدث داخل الفصل فقط. لذلك نفتح الأبواب لكل موهبة ولكل طريقة مختلفة في التعبير.</p></Reveal>
    <div className="activities-grid">{activities.map(([number, title, text]) => <Reveal className="activity-card" key={number}><div className="activity-no">{number}</div><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
  </div></section>;
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <section className="contact-section" id="contact"><div className="container-wide contact-layout"><Reveal className="contact-copy"><div className="section-kicker">نحن قريبون منك</div><h2 className="section-title">لنسأل معًا:<br />هل هي مدرستكم؟</h2><p>يسعدنا أن نجيب عن كل أسئلتكم ونرتب لكم زيارة تشاهدون فيها يومنا عن قرب. اتركوا لنا رسالة، وسنعود إليكم بكل اهتمام.</p><div className="contact-details"><div className="contact-detail"><div className="contact-detail-icon"><Phone size={17} /></div><a href={`tel:${schoolPhone}`}>٠١١٥٣٦٣٤٣٢٠</a></div><div className="contact-detail"><div className="contact-detail-icon"><Mail size={17} /></div><a href={`mailto:${schoolEmail}`}>{schoolEmail}</a></div><div className="contact-detail"><div className="contact-detail-icon"><MapPin size={17} /></div><span>{schoolAddress}</span></div></div></Reveal>
    <Reveal className="form-card"><h3>نود أن نسمع منكم</h3>{sent ? <div className="success-state" data-testid="status-contact-success"><CircleCheck size={28} /><div>وصلت رسالتكم بنجاح.</div><small>شكرًا لثقتكم — سيتواصل معكم فريق المدرسة قريبًا.</small></div> : <form onSubmit={submit}><div className="form-grid"><div className="field"><label htmlFor="parent-name">الاسم الكريم</label><input id="parent-name" required placeholder="اكتبوا الاسم" data-testid="input-parent-name" /></div><div className="field"><label htmlFor="parent-phone">رقم الهاتف</label><input id="parent-phone" type="tel" required placeholder="01xxxxxxxxx" data-testid="input-parent-phone" /></div><div className="field full"><label htmlFor="parent-message">كيف يمكننا مساعدتكم؟</label><textarea id="parent-message" required placeholder="أخبرونا عن استفساركم أو الوقت المناسب للزيارة..." data-testid="input-parent-message" /></div></div><button className="orange-btn form-submit" type="submit" data-testid="button-submit-contact">إرسال الرسالة <ArrowLeft size={17} /></button></form>}</Reveal>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container-wide"><div className="footer-inner"><div className="footer-brand"><img src={logo} alt="شعار مدرسة الديب" /><span>مدرسة الديب الخاصة</span></div><div className="footer-note">نعلّم اليوم من سيصنعون غدًا.</div></div><div className="footer-contact"><a href={`tel:${schoolPhone}`}>٠١١٥٣٦٣٤٣٢٠</a><a href={`mailto:${schoolEmail}`}>{schoolEmail}</a><span>{schoolAddress}</span></div><div className="footer-bottom"><span>© ٢٠٢٤ مدرسة الديب الخاصة. جميع الحقوق محفوظة.</span><span>بكل فخر، من مجتمعنا إلى مجتمعكم</span></div></div></footer>;
}

function Lightbox({ index, close, next, prev }: { index: number; close: () => void; next: () => void; prev: () => void }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); if (event.key === 'ArrowLeft') next(); if (event.key === 'ArrowRight') prev(); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [close, next, prev]);
  const photo = photos[index];
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="عرض الصورة" onClick={close}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" aria-label="إغلاق الصورة" data-testid="button-close-lightbox" onClick={close}><X size={24} /></button><img src={photo.src} alt={photo.title} /><div className="lightbox-label">{photo.title} — {photo.category}</div><button className="lightbox-prev ghost-btn" data-testid="button-next-lightbox" style={{ position:'absolute', right:'-50px', top:'50%', color:'#fff', borderColor:'rgba(255,255,255,.35)' }} onClick={next} aria-label="الصورة التالية"><ChevronLeft /></button><button className="lightbox-next ghost-btn" data-testid="button-previous-lightbox" style={{ position:'absolute', left:'-50px', top:'50%', color:'#fff', borderColor:'rgba(255,255,255,.35)' }} onClick={prev} aria-label="الصورة السابقة"><ChevronLeft style={{ transform:'rotate(180deg)' }} /></button></div></div>;
}

function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return <div className="school-shell"><Header /><main><Hero /><PromiseSection /><StorySection /><GallerySection onOpen={setLightboxIndex} /><ActivitySection /><section className="section quote-section"><div className="container-wide quote-inner"><p>«نحن لا نعدكم بطفولة مثالية، بل نعدكم بمكان يجد فيه طفلكم نفسه، ويشعر أنه ينتمي.»</p><span>— فريق مدرسة الديب الخاصة</span></div></section><ContactSection /></main><Footer />{lightboxIndex !== null && <Lightbox index={lightboxIndex} close={() => setLightboxIndex(null)} next={() => setLightboxIndex((lightboxIndex + 1) % photos.length)} prev={() => setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)} />}</div>;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}
function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}
function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}
export default App;