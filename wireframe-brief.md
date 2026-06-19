# Brief Wireframe — SLF Transport
**Data:** 2026-05-18
**Bazuje na:** brief.md, sitemap.md
**Uwaga:** `/visual-decision` jeszcze nie zrobiony — wireframe opisuje **strukturę**, nie estetykę. Decyzje wizualne (czy hero ma czarne tło z żółtym akcentem, czy duże zdjęcie pełnoekranowe) zostawiamy na warstwę visual.

---

## ELEMENTY GLOBALNE

### Header (każda strona, sticky)

**Desktop:**
```
[LOGO SLF]    O nas | Usługi | Flota | Jak to działa | Kontakt    [PL/EN]    [Darmowa wycena →]
```
- Logo: lewa strona, link do `/`
- Nav: 5 linków, środek lub flex-start z minimum 32px gap
- Switcher języka: prawy róg przed CTA, format `PL · EN` (aktywny pogrubiony / w kolorze accent)
- CTA button: prawy róg, akcent kolorystyczny, `→ /wycena`
- Tło: czarne `#0a0a0a` (z logo SLF żółto-czarne) lub białe z czarnym tekstem — decyzja w `/visual-decision`
- Wysokość: 72-80px desktop
- Sticky on scroll, lekkie scrolled-state (mniejszy padding, shadow lub border-bottom)

**Mobile (do 900px):**
- Logo (lewa) + hamburger (prawa)
- Po kliknięciu hamburgera: full-screen overlay z linkami nav, switcherem PL/EN i CTA na dole
- **Sticky bottom bar** (zawsze widoczny, niezależnie od menu):
```
[☏ Zadzwoń]    [Darmowa wycena →]
```
- `tel:` z numerem Łukasza (domyślnie) — można rozważyć split na 2 numery w menu
- Wysokość sticky: 56-64px, accent border-top

### Footer (każda strona)

**4 kolumny desktop, stack mobile:**

**Kolumna 1 — Brand:**
- Logo SLF (wariant na ciemne tło)
- Slogan EN: „European Wide Removals — We Handle With Care"
- 1 zdanie opisu firmy
- Switcher PL/EN (alternatywne miejsce, gdyby ktoś przewinął do końca)

**Kolumna 2 — Nawigacja:**
- O nas
- Usługi
- Flota
- Jak to działa
- Kontakt
- **Darmowa wycena** (wyróżniony)

**Kolumna 3 — Kontakt:**
- ☏ Łukasz: +48 698 753 941
- ☏ Sabina: +48 784 362 268
- ✉ office@slftransport.eu
- 📍 [Adres firmy — do dostarczenia]
- NIP: [BRAK — do dostarczenia]

**Kolumna 4 — Obsługiwane kierunki:**
- Lista flag/krajów: DE, NL, BE, FR, AT, CH, IT, ES, DK, NO, UK, IE
- + link „Inne kraje Europy"

**Pasek dolny (pełna szerokość):**
- © 2026 SLF Transport · Polityka prywatności · Regulamin · Cookies
- Subtle: „Made by PROUP Studio" (opcjonalnie)

---

# STRONY P1 (KRYTYCZNE)

---

## 1. Strona główna — `index.html`
**Cel:** Pokazać kompletną ofertę w 30 sekund + dostarczyć klienta do formularza wyceny lub do telefonu.
**Above the fold:** H1 + slogan + 4 benefity + 2 CTA + telefon.

### Sekcja 1: Hero
- **Tło:** ciemne (czarne) z subtelnym motywem mapy Europy lub zdjęciem busa/drogi — decyzja w visual
- **Eyebrow:** `→ TRANSPORT MIĘDZYNARODOWY · CAŁA EUROPA`
- **H1:** „Transport i przeprowadzki **międzynarodowe**"
- **Podtytuł:** „Bezpieczny transport na terenie całej Europy"
- **Opis (1-2 zdania):** „Profesjonalne przeprowadzki międzynarodowe dla osób prywatnych i firm. Organizujemy transport mienia, mebli, sprzętu oraz rzeczy osobistych szybko, terminowo i bezpiecznie."
- **Benefity (4 chips lub lista):**
  - ✔ Szybkie terminy
  - ✔ Transport door-to-door
  - ✔ Pomoc przy załadunku i rozładunku
  - ✔ Indywidualna wycena
- **CTA główne:** „Darmowa wycena →" → `/wycena`
- **CTA wtórne:** „☏ Zadzwoń: +48 698 753 941" → `tel:`
- **Wsparcie:** mała linijka „Odpowiadamy w ciągu 24h"

### Sekcja 2: Obsługiwane kierunki
- **H2:** „Realizujemy transport w **całej Europie**"
- **Podtytuł:** „12 krajów + inne destynacje na życzenie"
- **Układ:** grid 4×3 desktop / 2×6 mobile z flagami + nazwami krajów:
  - 🇩🇪 Niemcy · 🇳🇱 Holandia · 🇧🇪 Belgia · 🇫🇷 Francja
  - 🇦🇹 Austria · 🇨🇭 Szwajcaria · 🇮🇹 Włochy · 🇪🇸 Hiszpania
  - 🇩🇰 Dania · 🇳🇴 Norwegia · 🇬🇧 Wielka Brytania · 🇮🇪 Irlandia
- **Footer sekcji:** „Realizujemy również transport do innych krajów Europy — zapytaj o wycenę."
- **CTA:** „Sprawdź swój kierunek →" → `/wycena`
- **Alternatywa wizualna:** mapa Europy z zaznaczonymi krajami (decyzja w visual — może być wow-elementem)

### Sekcja 3: Usługi (preview, 3-4 kafle)
- **H2:** „Nasze usługi"
- **Karty (3 kolumny desktop / 1 mobile):**
  - **Karta 1 — Przeprowadzki mieszkaniowe**
    - Ikona/zdjęcie
    - Krótki opis (1-2 zdania)
    - Link „Dowiedz się więcej →" → `/uslugi#mieszkaniowe`
  - **Karta 2 — Przeprowadzki firmowe**
  - **Karta 3 — Transport pojedynczy / mniejsze ładunki**
  - (opcjonalnie 4 — pomoc dodatkowa: pakowanie, demontaż)
- **CTA pod sekcją:** „Zobacz wszystkie usługi →" → `/uslugi`

### Sekcja 4: Jak wygląda współpraca (6 kroków)
- **H2:** „Jak wygląda **współpraca**"
- **Układ:** 6 kart z numeracją 01-06 (3×2 desktop / 1×6 mobile) **lub** pozioma oś czasu
- **Treść (z briefu):**
  1. **Kontakt i opis przeprowadzki** — Podajesz trasę, termin, listę rzeczy i zakres pomocy
  2. **Bezpłatna wycena** — Przygotowujemy ofertę dopasowaną do Twoich potrzeb
  3. **Przygotowanie rzeczy** — Możesz spakować rzeczy samodzielnie albo skorzystać z naszej pomocy
  4. **Załadunek i zabezpieczenie** — Zabezpieczamy mienie i układamy je w samochodzie
  5. **Transport** — Realizujemy przewóz zgodnie z ustalonym terminem i trasą
  6. **Dostawa i rozładunek** — Dostarczamy rzeczy pod wskazany adres, pomagamy przy rozładunku
- **CTA pod sekcją:** „Zacznij od bezpłatnej wyceny →" → `/wycena`

### Sekcja 5: Flota (preview, 3 typy)
- **H2:** „Nasza **flota**"
- **Podtytuł:** „Nowoczesne i regularnie serwisowane pojazdy — dobieramy je do skali zlecenia"
- **3 karty (desktop 3 kolumny / mobile slider lub stack):**
  - **Busy 3,5t** — 20-24 cbm / 1000 kg — „Małe mieszkania, szybkie transporty"
  - **Solówki 7,2t** — 40 cbm / 3000 kg — „Średnie i duże mieszkania, biura"
  - **Ciężarówki 18t** — 40-60 cbm / 7000-9000 kg — „Magazyny, firmy, długie trasy"
- **CTA pod sekcją:** „Zobacz całą flotę →" → `/flota`

### Sekcja 6: Dlaczego warto nam zaufać (7 powodów)
- **H2:** „Dlaczego warto nam **zaufać**"
- **Układ:** grid 4+3 ikon (4 w pierwszym rzędzie, 3 w drugim) lub 2 kolumny po 3-4
- **Treść (z briefu):**
  1. **Doświadczenie** — Od lat realizujemy transport międzynarodowy i przeprowadzki
  2. **Bezpieczeństwo** — Dbamy o odpowiednie zabezpieczenie rzeczy
  3. **Terminowość** — Dopasowujemy termin i zakres usługi do potrzeb
  4. **Stały kontakt** — Na bieżąco informujemy o przebiegu realizacji
  5. **Indywidualne podejście** — Cena zależy od realnego zakresu zlecenia, nie przypadkowych stawek
  6. **Cała Europa** — Realizujemy transport między krajami europejskimi
  7. **Pomoc na każdym etapie** — Pakowanie, demontaż, załadunek, rozładunek, wniesienie

### Sekcja 7: Opinie klientów
- **H2:** „Opinie **klientów**"
- **Podtytuł:** „Zaufanie klientów jest dla nas najlepszą wizytówką"
- **Układ:** 3 karty / slider (desktop 3 kolumny / mobile swipe)
- **Treść (z briefu):**
  - „Wszystko przebiegło perfekcyjnie. Profesjonalna obsługa od pierwszego kontaktu aż po dostawę. Terminowo i bezpiecznie."
  - „Bezproblemowa przeprowadzka do Holandii. Świetny kontakt, szybka realizacja i bardzo dobrze zabezpieczone rzeczy."
  - „Firma godna polecenia. Uczciwa wycena, pełen profesjonalizm i bardzo dobra organizacja transportu."
- **Każda opinia:** cytat + (opcjonalnie) imię + kierunek przeprowadzki
- **Uwaga:** w briefie opinie są anonimowe — warto poprosić klienta o imiona/inicjały + kierunek

### Sekcja 8: FAQ (6 pytań)
- **H2:** „Najczęstsze **pytania**"
- **Układ:** Accordion (1 kolumna), domyślnie zwinięty
- **Treść (gotowe z briefu):**
  1. Ile kosztuje przeprowadzka międzynarodowa?
  2. Czy SLF Transport realizuje przeprowadzki po całej Europie?
  3. Czy pomagacie przy załadunku i rozładunku?
  4. Czy można przewieźć pojedyncze meble lub kilka kartonów?
  5. Czy rzeczy są ubezpieczone? *(uwaga — odpowiedź ogólna, do uściślenia z klientem)*
  6. Jak szybko można zrealizować transport?
  7. Czy realizujecie transport dla firm?
- **CTA pod sekcją:** „Masz inne pytanie? Napisz do nas →" → `mailto:` lub `/kontakt`

### Sekcja 9: Główne CTA (przed footerem)
- **Tło:** wyróżnione (kolor akcentu lub ciemny blok)
- **H2:** „Planujesz przeprowadzkę lub transport za granicę?"
- **Podtytuł:** „Napisz do nas, podaj trasę i listę rzeczy, a przygotujemy bezpłatną wycenę."
- **CTA główne:** „Darmowa wycena →" (duży button)
- **CTA wtórne:** „☏ +48 698 753 941 (Łukasz) · +48 784 362 268 (Sabina)"
- **Opcjonalnie:** Sygnał trust („Bezpłatnie · Bez zobowiązań · Odpowiedź w 24h")

---

## 2. Darmowa wycena — `wycena.html`
**Cel:** Maksymalnie ułatwić wysłanie zapytania. JEDNA strona, JEDNA akcja.

### Layout: split 60/40 lub stack
- **Lewa kolumna (60%) — formularz**
- **Prawa kolumna (40%) — trust signals + alternatywne kontakty**
- **Mobile:** form na górze, trust pod spodem

### Sekcja 1: Hero wyceny
- **Eyebrow:** `→ KROK 1 Z 1 · TO ZAJMIE 2 MINUTY`
- **H1:** „Darmowa **wycena** przeprowadzki"
- **Podtytuł:** „Wypełnij krótki formularz, a przygotujemy indywidualną wycenę w ciągu 24h."

### Sekcja 2: Formularz (lewa kolumna)

**Grupa 1 — Dane kontaktowe:**
- Imię i nazwisko* (text input)
- Telefon* (tel input z prefixem +48 lub flag-picker)
- E-mail* (email input)

**Grupa 2 — Trasa:**
- Miejsce odbioru* (kraj — dropdown / autocomplete + miejscowość)
- Miejsce dostawy* (kraj — dropdown + miejscowość)
- Planowany termin* (date picker — single date lub range „od-do")

**Grupa 3 — Zakres usługi:**
- Rodzaj usługi (multi-select checkboxes):
  - ☐ Załadunek / rozładunek
  - ☐ Demontaż / montaż mebli
  - ☐ Zabezpieczanie mienia
  - ☐ Pakowanie
  - ☐ Dodatkowy pomocnik
  - ☐ Winda zewnętrzna
- Dom / Apartament (radio + dwa pola):
  - ⚪ Dom (parter)
  - ⚪ Apartament — Piętro: ___ — Winda: ⚪ Tak / ⚪ Nie

**Grupa 4 — Ładunek:**
- Lista rzeczy / opis ładunku (textarea, 4-6 wierszy) — placeholder: „Np. 2-pokojowe mieszkanie: sofa, stół + 4 krzesła, łóżko, lodówka, pralka, 15 kartonów..."
- Zdjęcia rzeczy — opcjonalnie (file upload, multi-file, drag&drop, max 10 plików)

**Grupa 5 — Zgoda + submit:**
- ☐ Akceptuję politykę prywatności* (link)
- ☐ Wyrażam zgodę na kontakt w sprawie wyceny*
- ☐ Chcę otrzymywać oferty mailowo (opcjonalnie)
- **Button:** „Wyślij zapytanie →" (full-width na mobile, accent color)
- Pod buttonem: „* pola wymagane · Twoje dane są bezpieczne"

### Sekcja 3: Prawa kolumna (trust + alternatywy)
- **Box „Wolisz zadzwonić?"**
  - ☏ Łukasz: +48 698 753 941 (klikalny)
  - ☏ Sabina: +48 784 362 268 (klikalny)
  - ✉ office@slftransport.eu (klikalny)
  - „Pn-Pt: [godziny — do dostarczenia]"
- **Box „Co dostaniesz?"** (3 punkty)
  - ✔ Bezpłatną indywidualną wycenę
  - ✔ Doradztwo w wyborze pojazdu
  - ✔ Odpowiedź w ciągu 24h
- **Box „Opinie"** — 1-2 cytaty (mniejsze niż na home)
- **Box flot** — przypomnienie „Dobierzemy pojazd: bus / solówka / ciężarówka"

### Sekcja 4: FAQ skrócone (opcjonalnie pod formularzem)
- 3-4 pytania z home FAQ związane z wyceną i terminami

---

## 3. Dziękujemy — `dziekujemy.html`
**Cel:** Potwierdzić wysłanie + ustawić oczekiwania + dać alternatywę gdyby klient chciał przyspieszyć.

### Pełnoekranowa sekcja (minimum 80vh)
- **Ikona/grafika:** ✓ duży checkmark lub ilustracja sukcesu
- **H1:** „Dziękujemy! **Twoje zapytanie zostało wysłane.**"
- **Podtytuł (1-2 zdania):** „Odezwiemy się z indywidualną wyceną w ciągu 24 godzin (zwykle szybciej)."
- **Co dalej (3 kroki):**
  1. Analizujemy Twoje zapytanie
  2. Przygotowujemy ofertę dopasowaną do trasy i zakresu
  3. Wysyłamy wycenę mailem lub dzwonimy
- **Fallback CTA:** „Potrzebujesz odpowiedzi szybciej? Zadzwoń teraz →"
  - ☏ Łukasz: +48 698 753 941
  - ☏ Sabina: +48 784 362 268
- **Wtórne CTA:** „← Wróć na stronę główną"

### Tracking
- **Wymagane:** Conversion event do GA4 (`form_submission_success`) + Google Ads conversion tag

### Sekcja dodatkowa (opcjonalna)
- „W międzyczasie:" → linki do `/jak-to-dziala` i `/flota` (klient może doczytać)

---

## 4. Kontakt — `kontakt.html`
**Cel:** Pokazać wszystkie kanały kontaktu + wzbudzić zaufanie poprzez „realność" firmy.

### Layout: 2 kolumny desktop / stack mobile

### Sekcja 1: Hero
- **Eyebrow:** `→ SKONTAKTUJ SIĘ Z NAMI`
- **H1:** „**Skontaktuj** się z nami"
- **Podtytuł:** „Otrzymaj darmową wycenę transportu lub zadaj pytanie."

### Sekcja 2: Dane kontaktowe (lewa kolumna)

**Karta 1 — Telefon:**
- „Zadzwoń bezpośrednio"
- ☏ **Łukasz:** +48 698 753 941 (clickable, duży)
- ☏ **Sabina:** +48 784 362 268 (clickable, duży)
- Godziny pracy: [BRAK — do dostarczenia]

**Karta 2 — E-mail:**
- „Napisz do nas"
- ✉ **office@slftransport.eu** (clickable)
- „Odpowiadamy w ciągu 24h"

**Karta 3 — Adres / siedziba:**
- 📍 [Adres firmy — do dostarczenia]
- NIP: [BRAK]
- REGON: [BRAK]
- (jeśli sp. z o.o.) KRS: [BRAK]

**Karta 4 — Szybka wycena (prominentna):**
- „Wolisz online? Wypełnij formularz wyceny — to 2 minuty"
- **CTA:** „Darmowa wycena →" → `/wycena`

### Sekcja 3: Mapa (prawa kolumna lub pełna szerokość)
- Google Maps embed z lokalizacją firmy
- Wysokość: minimum 400px desktop, 300px mobile
- Pin SLF + dane pod mapą

### Sekcja 4: Social media (opcjonalnie)
- Linki do FB / IG / LinkedIn — jeśli istnieją (klient do potwierdzenia)

### Sekcja 5: CTA przed footerem
- „Gotowy do rozmowy?"
- 2 CTA: „Darmowa wycena" + „Zadzwoń"

---

# STRONY P2 (WAŻNE)

---

## 5. O nas — `o-nas.html`
**Cel:** Zbudować zaufanie. Pokazać że za firmą stoją ludzie, doświadczenie, podejście.

### Sekcja 1: Hero
- **Eyebrow:** `→ O FIRMIE`
- **H1:** „**Sprawdzona** firma transportowa"
- **Podtytuł:** „Specjalizujemy się w transporcie i przeprowadzkach międzynarodowych na terenie całej Europy."
- **Tło:** zdjęcie ekipy / floty (large hero image)

### Sekcja 2: Kim jesteśmy (intro)
- **Treść (z briefu):**
  „Dzięki doświadczeniu, odpowiednio przygotowanej flocie oraz indywidualnemu podejściu zapewniamy kompleksową obsługę zarówno klientów prywatnych, jak i firm.

  Nasza firma oferuje szeroki zakres usług przeprowadzkowych, od tanich po premium, dbając o to, aby sprostać zróżnicowanym potrzebom i budżetom naszych klientów.

  Dbamy o bezpieczeństwo przewożonych rzeczy oraz terminową realizację każdego zlecenia."
- Układ: tekst po lewej + zdjęcie po prawej (lub odwrotnie, alternating)

### Sekcja 3: Liczby / fakty (counter section)
- **4 liczby (placeholder — do uzupełnienia z klientem):**
  - X lat doświadczenia
  - X krajów obsługiwanych
  - X+ zrealizowanych zleceń
  - X% zadowolonych klientów
- Układ: 4 kolumny desktop / 2×2 mobile

### Sekcja 4: Wartości (3-4 karty)
- **Bezpieczeństwo** — dbamy o każdy karton jak o własny
- **Terminowość** — dotrzymujemy ustaleń
- **Uczciwość** — wycena bez ukrytych kosztów
- **Elastyczność** — od kilku kartonów do całej firmy

### Sekcja 5: Zespół (opcjonalnie, do potwierdzenia z klientem)
- Łukasz + Sabina — zdjęcia + role + 1 zdanie
- Pomaga to ze zbudowaniem zaufania w branży transportowej

### Sekcja 6: Przeprowadzka bez stresu (CTA section)
- **Z briefu:** „Wiemy, jak ważne jest bezpieczeństwo Twojego mienia. Dlatego każdy transport realizujemy z najwyższą starannością..."
- **CTA:** „Skontaktuj się z nami →" → `/wycena`

---

## 6. Nasze usługi — `uslugi.html`
**Cel:** Pokazać pełny zakres usług + skierować do wyceny pod konkretną usługę.
**Uwaga:** Treść do uszczegółowienia z klientem — w briefie sekcja pusta.

### Sekcja 1: Hero
- **Eyebrow:** `→ ZAKRES USŁUG`
- **H1:** „Kompleksowe **przeprowadzki** międzynarodowe"
- **Podtytuł:** „Organizujemy transport, zabezpieczenie mienia oraz pomoc przy załadunku i rozładunku."

### Sekcja 2: Lista usług (główne)
**Każda usługa = sekcja typu split (tekst + ikona/zdjęcie):**

1. **Przeprowadzki mieszkaniowe międzynarodowe**
   - Co obejmuje, dla kogo, jak działa
   - CTA: „Wyceń przeprowadzkę mieszkania →"

2. **Przeprowadzki firmowe i biurowe**
   - Co obejmuje, dla kogo
   - CTA: „Wyceń przeprowadzkę biura →"

3. **Transport pojedynczych mebli / mniejsze ładunki**
   - Dla kogo (1-2 meble, kilka kartonów)
   - CTA: „Wyceń transport →"

4. **Transport wielkogabarytowy**
   - AGD, pianina, dzieła sztuki, sejfy
   - CTA: „Wyceń transport →"

### Sekcja 3: Usługi dodatkowe (4-6 ikon w gridzie)
- ✔ Pakowanie i materiały opakowaniowe
- ✔ Demontaż i montaż mebli
- ✔ Zabezpieczenie mienia (pasy, koce, folie)
- ✔ Winda zewnętrzna
- ✔ Dodatkowy pomocnik / ekipa
- ✔ Pomoc przy odprawie celnej (UK / Szwajcaria / Norwegia)
- ✔ Magazynowanie (jeśli oferują)

### Sekcja 4: Obsługiwane kierunki
- Reuse sekcji z home (12 krajów) lub uproszczona wersja

### Sekcja 5: CTA przed footerem
- „Nie widzisz swojej usługi? Zapytaj o indywidualną wycenę."
- CTA: „Darmowa wycena →"

---

## 7. Nasza flota — `flota.html`
**Cel:** Pokazać profesjonalizm parku pojazdów i pomóc klientowi „wyobrazić" sobie pojazd dla jego przeprowadzki.

### Sekcja 1: Hero
- **Eyebrow:** `→ POJAZDY I PARAMETRY`
- **H1:** „Nowoczesna **flota** dopasowana do skali"
- **Podtytuł:** „Busy, solówki i ciężarówki — dobieramy pojazd do realnego zakresu zlecenia."

### Sekcja 2: Co wyróżnia naszą flotę (z briefu, 7 punktów)
- Układ: 2 kolumny po 3-4 punkty z ikonami
- Treść:
  - ✔ Nowoczesne busy i samochody transportowe
  - ✔ Regularnie serwisowane pojazdy
  - ✔ Śledzenie w czasie rzeczywistym (GPS)
  - ✔ Duża przestrzeń transportowa
  - ✔ Pojazdy przystosowane do tras międzynarodowych
  - ✔ Małe i duże przeprowadzki
  - ✔ Terminowa i bezpieczna realizacja

### Sekcja 3: 3 typy pojazdów (główna sekcja)

**Karta 1 — Busy do 3,5 tony**
- Zdjęcie busa (placeholder — klient dostarcza)
- Parametry: **20-24 cbm · 1000 kg ładowności**
- Idealne dla:
  - Przeprowadzek mieszkań i kawalerek
  - Transportu mebli i sprzętu AGD
  - Transportu lokalnego i ekspresowych realizacji
- Cytat z briefu: „Zwrotne, pojemne i gotowe do działania nawet w trudno dostępnych miejscach."
- CTA: „Wyceń przeprowadzkę z busem →"

**Karta 2 — Solówki 7,2 tony**
- Zdjęcie
- Parametry: **40 cbm · 3000 kg ładowności**
- Idealne dla:
  - Przeprowadzek domów
  - Przeprowadzek biur i firm
  - Większej ilości wyposażenia
- Cytat: „Idealne rozwiązanie dla średnich i dużych przeprowadzek."
- CTA: „Wyceń przeprowadzkę z solówką →"

**Karta 3 — Ciężarówki 18 ton**
- Zdjęcie
- Parametry: **40-60 cbm · 7000-9000 kg ładowności**
- Idealne dla:
  - Przeprowadzek firm i magazynów
  - Transportu wielkogabarytowego
  - Przewozu dużych ilości mienia na długich trasach
- CTA: „Wyceń transport ciężarówką →"

### Sekcja 4: Dlaczego klienci wybierają nas (z briefu)
- ✔ Nowoczesna i zadbana flota
- ✔ Terminowość i pełen profesjonalizm
- ✔ Bezpieczne zabezpieczenie mienia
- ✔ Doświadczeni kierowcy
- ✔ Atrakcyjne ceny i indywidualna wycena
- ✔ Przeprowadzki lokalne i krajowe

### Sekcja 5: CTA przed footerem
- „Nie wiesz który pojazd wybrać? My to ocenimy za Ciebie."
- CTA: „Darmowa wycena →"

---

## 8. Jak to działa — `jak-to-dziala.html`
**Cel:** Redukcja niepewności. Klient wchodząc tu jest niezdecydowany — chcemy go upewnić że proces jest jasny i bezpieczny.

### Sekcja 1: Hero
- **Eyebrow:** `→ PROCES KROK PO KROKU`
- **H1:** „Jak wygląda **przeprowadzka**?"
- **Podtytuł:** „Szybki, przejrzysty i bezpieczny proces. Dbamy o każdy etap — od pierwszego kontaktu aż po wniesienie ostatniego kartonu."

### Sekcja 2: 7 kroków (główna sekcja)
**Każdy krok = osobna sekcja (alternating layout: tekst lewo / zdjęcie prawo, potem odwrotnie):**

**Krok 1 — Kontakt i darmowa wycena**
- „Skontaktuj się z nami telefonicznie lub przez formularz kontaktowy. Ustalimy:"
- Lista (z briefu): zakres, ilość rzeczy, adres odbioru/dostawy, termin, usługi dodatkowe
- Ikona/zdjęcie: telefon, laptop, rozmowa

**Krok 2 — Dobór odpowiedniego pojazdu**
- Lista typów pojazdów + krótko za co odpowiadają
- Cytat: „Dzięki temu klient nie przepłaca za zbyt duży transport."
- Ikona/zdjęcie: trzy pojazdy ułożone hierarchicznie

**Krok 3 — Przygotowanie do przeprowadzki**
- Co robimy (zabezpieczenie mebli, ochrona RTV/AGD, przygotowanie kartonów, oznaczenie delikatnych)
- „W razie potrzeby możemy zapewnić pomoc przy pakowaniu."
- Ikona/zdjęcie: pakowanie kartonów

**Krok 4 — Załadunek i zabezpieczenie mienia**
- Co robi ekipa (sprawnie załaduje, zabezpieczy, użyje pasów + materiałów)
- Ikona/zdjęcie: załadunek do busa

**Krok 5 — Bezpieczny transport**
- „Doświadczeni kierowcy dbają o terminowy i bezpieczny przewóz."
- Ikona/zdjęcie: bus na drodze / mapa Europy

**Krok 6 — Rozładunek i wniesienie**
- Co robimy (rozładunek, wniesienie do pomieszczeń, ustawienie większych elementów)
- Ikona/zdjęcie: wniesienie do nowego mieszkania

**Krok 7 — Zakończenie usługi**
- Upewniamy się że wszystko zgodne z ustaleniami
- „Najważniejsze jest dla nas zadowolenie klienta"

### Sekcja 3: Formularz wyceny (inline, na końcu)
- **Powtórzenie** formularza ze strony `/wycena` (skrócony lub pełny) lub
- **CTA box:** „Postaw na profesjonalną przeprowadzkę → Darmowa wycena"
- Decyzja: wstawić formularz inline (większa konwersja z tej strony) lub tylko CTA → osobna strona

---

# STRONY P3 (UZUPEŁNIAJĄCE)

## 9. Polityka prywatności — `polityka-prywatnosci.html`
- Standard layout legal page: 1 kolumna, szerokość czytania ~720px
- Spis treści po prawej (sticky) na desktop
- Treść: szablon RODO + dostosowanie do SLF (cookies, GA4, formularz, upload zdjęć)
- Footer + header standard

## 10. Regulamin — `regulamin.html`
- Identyczny layout co polityka
- Treść: warunki świadczenia usług, odpowiedzialność, reklamacje, ubezpieczenie

## 11. 404 — `404.html`
- Pełnoekranowa sekcja
- H1: „404 — Tego adresu nie ma na naszej trasie"
- Krótki opis: „Sprawdź adres lub wróć na stronę główną"
- 2 CTA: „← Strona główna" + „Darmowa wycena →"
- (lekki humor branżowy — pasuje do transportu)

---

# UWAGI KOŃCOWE

## Co jest najważniejsze (priorytet projektowy)
1. **Hero na home** — pierwszy widok, najwięcej czasu projektowego
2. **Formularz wyceny** — flow musi być bezbolesny (UX > estetyka)
3. **Sticky CTA mobile** — kluczowa konwersja na telefonach
4. **Sekcja flota na home + flota.html** — wow-element + decyzja klienta o pojazdzie
5. **Mapa Europy / kierunki** — wizualny anchor dla branży międzynarodowej

## Co dotrzymać przy projektowaniu
- **Każda podstrona kończy się CTA do `/wycena`** (lub telefon na mobile)
- **CTA „Darmowa wycena" zawsze w tym samym miejscu** (nav prawy róg + sticky mobile)
- **Bezpieczeństwo + cała Europa** to dwa motywy które powinny się przewijać przez wszystkie sekcje
- **Kierunek copy: konkretny, nie marketingowy** — w briefie klienta używa rzeczowych sformułowań

## Brakujące dane (do uzupełnienia przed projektem finalnym)
- Pełne dane firmy (NIP, REGON, adres) — footer + /kontakt
- Godziny pracy — /kontakt + box na /wycena
- Zdjęcia floty — sekcje flota, jak-to-dziala
- Konkretne liczby do sekcji „liczby" w /o-nas
- Imiona/inicjały w opiniach (lub zgoda na anonimowe)
- Treść finalna `/uslugi` — w briefie pusty nagłówek

## Co pomijamy w wireframe (decyzje wizualne)
- Konkretna paleta kolorów (czy dominuje czarny czy żółty)
- Wybór fontu
- Czy hero ma być z dużym zdjęciem czy tekstowy
- Styl ikon (line / fill / pixel / illustrative)
- Mikro-animacje

→ To wszystko zostawiamy na **`/visual-decision`** który puścimy następny.
