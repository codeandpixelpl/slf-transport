# Audyt Jakości — SLF Transport v1
**Data audytu:** 2026-05-18
**Zakres:** 11 podstron PL (wszystkie HTML/CSS/JS) + komponenty z `css/style.css`
**Server preview:** localhost:8774

---

## Podsumowanie

- 🔴 **Krytyczne:** 1 problem → **naprawione**
- 🟡 **Ważne:** 4 problemy → **naprawione**
- ⚪ **Drobne:** 2 problemy → do V2

---

## 🔴 Krytyczne (przed oddaniem)

### ✅ 1. Kontrast `--text-3` poniżej WCAG AA
**Gdzie:** breadcrumb, microcopy w hero, godziny pracy, captions, separators, footer bottom — używane w 18+ miejscach.
**Problem:** `rgba(255,255,255,0.40)` na tle `#0A0A0A` daje kontrast **3.77:1** — WCAG AA dla normalnego tekstu wymaga **4.5:1**.
**Naprawione:** zmiana w [css/style.css:18](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/css/style.css#L18) — `--text-3: rgba(255, 255, 255, 0.55)` → nowy kontrast **6.28:1** ✅ WCAG AA.

---

## 🟡 Ważne (w tej wersji)

### ✅ 2. Hamburger touch target poniżej 44×44
**Gdzie:** [css/style.css:237](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/css/style.css#L237) — wszystkie podstrony na mobile.
**Problem:** hamburger ma 32×32px — minimum WCAG dla touch targets to 44×44.
**Naprawione:** zwiększone do `width: 44px; height: 44px` + `margin-right: -10px` żeby wciąż wyglądał w prawym rogu. Zweryfikowane w preview: 44×44 ✓.

### ✅ 3. Niespójność ikon telefonu
**Gdzie:** [index.html — sekcja "Dlaczego SLF"](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/index.html), karta "Stały kontakt".
**Problem:** mieszanka ikon `☏` (używana wszędzie indziej) i `☎` (jedno wystąpienie w `why__item-ico`).
**Naprawione:** zamiana `☎` → `☏` w jedynym miejscu konfliktu.

### ✅ 4. Placeholdery „do dostarczenia" widoczne klientowi końcowemu
**Gdzie:** [kontakt.html](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/kontakt.html) — karta „Siedziba" z linijkami „Adres siedziby — do dostarczenia / NIP: do dostarczenia / REGON: do dostarczenia".
**Problem:** te frazy są skierowane do nas (czekamy na dane od klienta), ale renderują się w produkcji jak niedokończona strona.
**Naprawione:** zastąpione neutralnym tekstem („SLF Transport & Removals · European Wide Removals · e-mail") + `→ Pełne dane rejestrowe na życzenie` w microcopy. Po dostarczeniu NIP/adresu/REGON klient/my uzupełniamy normalnie.

### ✅ 5. Brak switchera języka w mobile nav 3 stron
**Gdzie:** [404.html](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/404.html), [polityka-prywatnosci.html](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/polityka-prywatnosci.html), [regulamin.html](01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa/regulamin.html).
**Problem:** mobile nav nie miało `<span class="nav__lang">` — użytkownik mobile nie mógł przełączyć języka na tych stronach.
**Naprawione:** dodany switcher PL · EN z linkiem do odpowiednika EN (`/en/404.html`, `/en/privacy-policy.html`, `/en/terms.html`).

---

## ⚪ Drobne (V2 — nie blokujące)

### 6. Random unicode glyphs jako ikony
**Gdzie:** sekcja „Dlaczego SLF" (index.html), sekcja „Co wyróżnia naszą flotę" (flota.html) — glify `⌬ ◷ ◆ ⊕ ⊞ ◇ +`.
**Problem:** wyglądają jak placeholder; różny rendering w różnych systemach (Windows/Mac/Linux); brak spójnego stroke-width.
**Rekomendacja na V2:** zastąpić inline SVG z konsekwentnym stroke 1.5-2px (np. Lucide, Phosphor lub custom). Na obecnym etapie funkcjonalnie działają — to issue estetyczne.

### 7. Linki bez underline (tylko kolor)
**Gdzie:** stopka, breadcrumb, linki w karatach kontaktowych.
**Problem:** WCAG 1.4.1 zaleca żeby kolor nie był jedynym wyróżnikiem linku. Większość naszych linków odróżnia się tylko kolorem (amber lub white) od tekstu.
**Rekomendacja:** dodać `text-decoration: underline` (lub `border-bottom: 1px solid currentColor`) na `:hover` minimum, idealnie też w stanie default dla mniej oczywistych linków (stopka). Akceptowalne na obecnym etapie — interactive elements są dobrze widoczne kontekstowo.

---

## ✅ Bez zastrzeżeń (wszystko OK)

### Dostępność
- Kontrast biały na tle: **19.80:1** — AAA
- Kontrast amber `#FEAF03` na tle: **10.70:1** — AAA
- Kontrast czarny na amber (CTA primary): **10.70:1** — AAA
- Kontrast `--text-2` (rgba 0.65): **8.42:1** — AAA
- Skipped: brak inputs i ARIA labels — dodane na hamburger i CTA buttons.

### Typografia
- 3 fonty z Google Fonts: **Anton** (display), **Inter** (body), **JetBrains Mono** (microcopy/code) — celowo, każdy ma rolę.
- Konsekwentna skala typograficzna: H1 → H2 → H3 → body → small.
- Line-height body: 1.6 ✓ (powyżej minimum 1.5).
- Brak bloków capslockiem dłuższych niż 3 słowa (poza nagłówkami Anton, który zawsze jest uppercase z designu).
- Anton 400 i Inter w 3 wagach (400/600/700) — żadne sąsiadujące wagi nie mieszają się losowo.

### Grid i spacing
- Container max-width: 1280px — konsekwentny.
- Section padding: 128px desktop / 80px mobile — konsekwentny przez `--section-pad` token.
- Gutter: 32px desktop / 20-24px mobile — konsekwentny przez `--gutter` token.
- Grid 12-kolumnowy desktop / 1 mobile — wszystkie sekcje wyrównane.

### Stany UI
- **Buttons** — `:hover` (background + translateY -1) ✓
- **Nav links** — `:hover` (kolor → white), `is-active` (kolor → white)
- **CTA primary** — hover na `#FFC833` ✓
- **Inputs** — `:focus` (border → amber, bg → bg-3) ✓
- **Hamburger** — `is-open` (paski obracają się w X) ✓
- **FAQ accordion** — `is-open` (ikona obraca 45°, tytuł amber) ✓
- **Service-card / vehicle** — `:hover` (border → amber, translateY -2) ✓
- **Form** — submit → redirect na `/dziekujemy` (demo) ✓

### Treść
- Brak Lorem ipsum, brak `[BRAK]`, brak `Wstaw...` w produkcji.
- CTA mają czasowniki: „Darmowa wycena", „Zadzwoń", „Wyceń", „Sprawdź swój kierunek" — nie „Kliknij tutaj".
- Format telefonu konsekwentnie: `+48 698 753 941` (z odstępami) + `tel:+48698753941` (bez odstępów dla `tel:` link).
- Legal pages mają widoczny notice że to szablon — celowe (klient/kancelaria uzupełnia).
- Placeholdery w polach formularza (`placeholder="Jan Kowalski"`, `"np. Warszawa"`) — celowe UX hints.

### Mobile
- Sticky bottom CTA `[☏ Zadzwoń] [Darmowa wycena →]` — widoczny zawsze, touch targets 48px+ ✓
- Mobile nav: pełnoekranowy overlay, łatwy do zamknięcia (hamburger → X) ✓
- Form fields mają odpowiednie `type=` (tel, email, date, file) — natywne klawiatury mobile ✓
- Body ma `padding-bottom: 72px` na mobile — sticky CTA nie zasłania końca treści ✓
- Tekst nie wychodzi poza ekran (testowane w viewport 375×812).

### Ikony i grafiki
- Logo SVG — nie pikseluje, korzystamy z `assets/logo/logo.svg` ✓
- Pojedyncze unicode arrows `↗ → ↑ ↓` — spójny styl, lekkie i czyste.
- `☏` (phone) i `✉` (mail) — spójne po fixie.
- Brak zdjęć w v1 — placeholdery są wyraźnie oznaczone „→ Zdjęcie: ..." (do dostarczenia przez klienta przez `/assets-checklist`).

---

## Statystyki

- **HTML files:** 11 PL (Home + 8 podstron + 404 + 2 legal) — wszystkie zweryfikowane
- **CSS:** 1 plik, ~1700 linii, 4 breakpointy responsive
- **JS:** 1 plik (~60 linii) — FAQ accordion + mobile menu + scrolled header
- **Console errors:** **0** na wszystkich stronach
- **Touch targets pod 44px:** 0 po fixie (było 1)
- **Kontrast WCAG AA:** wszystkie kombinacje text/background ≥ 5:1

---

## Co dalej

Strona jest **gotowa do pokazania klientowi**. Naprawione 1 krytyczny + 4 ważne problemy.

Drobne pozycje (random unicode glyphs, link underline) zostają jako TODO V2 — nie blokują delivery.

Sugerowane następne kroki:
1. **Wersja EN** — folder `/en/` z 11 plikami
2. **`/assets-checklist`** — lista assetów do dostarczenia przez klienta (zdjęcia floty/ekipy, dane firmy)
3. **Deploy demo** (Netlify/Vercel) — link do pokazania klientowi
4. **Lub `/git-prep`** — przygotowanie repo do handoffu pod WordPress
