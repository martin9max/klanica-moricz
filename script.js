/* =========================================================
   Klanica Móricz, skripta sajta
   ========================================================= */

const CONFIG = {
  email: "klanicamoricz@gmail.com",
};

// ---- Prevod na mađarski (srpski tekst je u samom HTML-u) ----
const HU = {
  nav_about: "Rólunk",
  nav_products: "Termékeink",
  nav_process: "Hogyan dolgozunk",
  nav_orders: "Rendelés",
  nav_contact: "Kapcsolat",

  hero_eyebrow: "2001 óta",
  hero_title: "Móricz Vágóhíd<span>Ürményháza</span>",
  hero_lead: "Házi füstölt húsáruk a Bánság szívéből, gondossággal és a hagyomány tiszteletével készítve.",
  hero_btn: "Termékeink",

  intro_eyebrow: "Móricz Húsfeldolgozó",
  intro_title: "Az íz, amely nem siet",
  intro_p: "Huszonöt éve készítjük Ürményházán füstölt húsárunkat úgy, ahogyan a Bánságban mindig is készült: lassan, gondosan, a minőségből soha nem engedve. A vágóhíd és a feldolgozó egy helyen működik, így a hús az első lépéstől az utolsóig a mi kezünkben marad.",
  v1_t: "Minőség",
  v1_p: "Minden darab hús a mi kezünkön megy keresztül, mielőtt az Ön asztalára kerül.",
  v2_t: "Hagyomány",
  v2_p: "Ugyanaz a munkamódszer és ugyanaz az íz, 2001 óta változatlanul.",
  v3_t: "Bizalom",
  v3_p: "Huszonöt év együttműködés vásárlóinkkal, akiknek hálásak vagyunk a hűségükért.",

  about_cap: "Füstölőnkből. Minden, amit lát, Ürményházán készült.",
  about_eyebrow: "Rólunk",
  about_title: "Mesterség, amelyet 2001 óta őrzünk",
  about_p1: "A Móricz Vágóhidat 2001-ben alapítottuk Ürményházán, abban a bánsági faluban, ahol a húsfeldolgozás mindig is mesterség volt, nem ipar. Az első naptól egy egyszerű szabályt követünk: a jó termék jó húsból, türelemből és tapasztalatból születik.",
  about_p2: "Ezért a vágást és a feldolgozást egy helyen végezzük. A hús nem utazik és nem cserél gazdát, mi pedig minden pillanatban tudjuk, honnan származik, és milyen utat jár be a kész termékig. Ezt a biztonságot büszkén adjuk tovább vásárlóinknak.",
  stat1: "év tapasztalat",
  stat2: "az alapítás éve",
  stat3: "szerbül és magyarul",

  prod_eyebrow: "Kínálat",
  prod_title: "Termékeink",
  prod_lead: "Kínálatunk az évszakokhoz igazodik. Az aktuális kínálatért és árakért hívjon minket, vagy küldjön érdeklődést.",
  p1_t: "Házi kolbász", p1_a: "Domaća kobasica",
  p1_p: "Frissen grillezésre vagy szárazon hidegtálra, enyhe és csípős változatban, házi fűszerpaprikával ízesítve.",
  p2_t: "Szalonna", p2_a: "Slanina",
  p2_p: "Füstölt és húsos, elmaradhatatlan a reggelinél, a babgulyásban vagy egy szelet házi kenyér mellett.",
  p3_t: "Sonka és karaj", p3_a: "Šunka i pečenica",
  p3_p: "Lassan füstölve és szárítva, szaftos és zamatos. Az ünnepi asztal méltó választása.",
  p4_t: "Disznósajt", p4_a: "Švargla",
  p4_p: "Régi recept szerint készült bánsági különlegesség, az autentikus ízek kedvelőinek.",
  tag_season: "Szezonális",
  p5_t: "Hurka", p5_a: "Krvavice i džigernjače",
  p5_p: "A disznóvágások téli klasszikusa, rizzsel és gondosan válogatott fűszerekkel készítve.",
  p6_t: "Tepertő és zsír", p6_a: "Čvarci i mast",
  p6_p: "Ropogós tepertő és tiszta házi zsír, a bánsági konyha és a házi pogácsa alapja.",

  proc_eyebrow: "Hogyan dolgozunk",
  proc_title: "A vágóhídtól az Ön asztaláig",
  proc_lead: "Minden lépést magunk végzünk, egy helyen és kompromisszumok nélkül.",
  s1_t: "Saját vágóhíd",
  s1_p: "A vágást magunk végezzük Ürményházán, így pontosan ismerjük minden darab hús eredetét.",
  s2_t: "Feldolgozás",
  s2_p: "A húst azonnal, teljesen frissen daraboljuk, daráljuk és fűszerezzük.",
  s3_t: "Füstölés",
  s3_p: "Termékeinket lassan, hagyományos módon füstöljük, ahogyan a Bánságban mindig is szokás volt.",
  s4_t: "Érlelés",
  s4_p: "A füstölt áru addig érik, ameddig szükséges. Csak akkor kerül az Ön asztalára, amikor valóban kész.",

  gal_eyebrow: "Műhelyünkből",
  gal_title: "Bepillantás a kulisszák mögé",
  gal_lead: "Kolbász, virsli, füstölt hús és tálak ünnepekre. Minden itt készül, Ürményházán, az első lépéstől az utolsóig a mi felügyeletünk alatt.",

  ord_eyebrow: "Rendelés",
  ord_title: "Ünnepekre és minden családi összejövetelre",
  ord_lead: "Jelezze igényét néhány nappal korábban, és rendelését az Ön kívánsága szerint állítjuk össze, egy koszorú kolbásztól a bőséges családi csomagig.",
  ord_l1: "Ünnepi csomagok füstölt húsárukból",
  ord_l2: "Nagyobb mennyiségek cégeknek, intézményeknek és üzleteknek",
  ord_l3: "Rendelés telefonon vagy e-mailben",
  ord_l4: "Átvétel Ürményházán",
  form_title: "Küldjön érdeklődést",
  form_name: "Név",
  form_phone: "Telefonszám",
  form_msg: "Mire van szüksége, és mikorra?",
  form_ph: "Például: 3 kg száraz kolbász és 2 kg szalonna szombatra",
  form_send: "Érdeklődés küldése",
  form_note: "Hamarosan jelentkezünk a rendelés megerősítése érdekében.",
  form_err: "Kérjük, töltse ki az összes mezőt.",
  form_ok: "Megnyitjuk a levelezőprogramot.",

  con_eyebrow: "Kapcsolat",
  con_title: "Látogasson el hozzánk",
  con_addr: "Cím",
  con_phone: "Telefon",
  con_mail: "E-mail",
  con_social: "Kövessen minket",
  con_cta: "Lépjen kapcsolatba velünk",

  footer_motto: "Minőség · Hagyomány · Bizalom",
};

const SR_EXTRA = {
  form_err: "Molimo Vas da popunite sva polja.",
  form_ok: "Otvaramo Vaš program za elektronsku poštu.",
};

// ---- Jezik ----
const i18nEls = document.querySelectorAll("[data-i18n]");
const phEls = document.querySelectorAll("[data-i18n-ph]");
const SR = { ...SR_EXTRA };
i18nEls.forEach(el => { SR[el.dataset.i18n] = el.innerHTML; });
phEls.forEach(el => { SR[el.dataset.i18nPh] = el.placeholder; });

let lang = "sr";
const t = key => (lang === "hu" ? HU : SR)[key] ?? SR[key] ?? "";

function setLang(next) {
  lang = next === "hu" ? "hu" : "sr";
  document.documentElement.lang = lang;
  i18nEls.forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  phEls.forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll(".lang button").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === lang));
  document.title = lang === "hu"
    ? "Móricz Vágóhíd Ürményháza | Húsfeldolgozás 2001 óta"
    : "Klanica Móricz Jermenovci | Prerada mesa od 2001.";
  try { localStorage.setItem("moricz-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

try {
  const saved = localStorage.getItem("moricz-lang");
  if (saved) setLang(saved);
} catch (e) {}

// ---- Mobilni meni ----
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}));

// ---- Aktivna stavka menija ----
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll(".nav__group a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("is-current", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// ---- Fotografije koje još ne postoje: prikaži uredan okvir umesto slomljene slike ----
document.querySelectorAll(".photo img, .card__img img").forEach(img => {
  const wrap = img.parentElement;
  const markEmpty = () => {
    wrap.classList.add("is-empty");
    if (wrap.classList.contains("photo")) wrap.dataset.label = img.alt || "Fotografija";
  };
  if (img.complete && img.naturalWidth === 0) markEmpty();
  img.addEventListener("error", markEmpty);
});

// ---- Animacija pri skrolovanju ----
const revealTargets = document.querySelectorAll(
  ".section__head, .intro .narrow, .card, .step, .value, .about__copy, .photo, .order-form, .contact__info, .map");
revealTargets.forEach(el => el.classList.add("reveal"));
const revealer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("is-visible"); revealer.unobserve(e.target); }
  });
}, { threshold: .12 });
revealTargets.forEach(el => revealer.observe(el));

// ---- Forma za upit (otvara e-mail sa popunjenom porukom) ----
const form = document.getElementById("orderForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", e => {
  e.preventDefault();
  const fields = [...form.querySelectorAll("input, textarea")];
  let ok = true;
  fields.forEach(f => {
    const bad = !f.value.trim();
    f.classList.toggle("is-invalid", bad);
    if (bad) ok = false;
  });
  status.classList.toggle("is-error", !ok);
  if (!ok) { status.textContent = t("form_err"); return; }

  const d = Object.fromEntries(new FormData(form));
  const subject = `Upit sa sajta: ${d.ime}`;
  const body = `Ime: ${d.ime}\nTelefon: ${d.telefon}\n\n${d.poruka}`;
  status.textContent = t("form_ok");
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
