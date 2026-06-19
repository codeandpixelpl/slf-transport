# Kierunek Wizualny — SLF Transport
**Data:** 2026-05-18
**Bazuje na:** brief.md, sitemap.md, wireframe-brief.md, logo SLF (SVG)

---

## Nastrój w 3 słowach
**Niezawodny · Bezpieczny · Międzynarodowy**

Nie „premium luxury", nie „budget cheap". **Mid-premium professional** — solidna firma transportowa którą polecisz teściowej.

---

## Paleta kolorów

Wyciągnięta bezpośrednio z SVG logo + rozszerzona o praktyczne tła i stany.

| Rola | Hex | Użycie |
|---|---|---|
| **Tło główne** | `#0A0A0A` | Body, hero, większość sekcji — czerń jak w `logo-zolte-na-czarnym` |
| **Tło wtórne** | `#141414` | Karty, accordion, FAQ, formularze, sekcje alternatywne |
| **Tło tertiary** | `#1C1C1C` | Inputs, hover na kartach, divider zones |
| **Tło jasne** (opcjonalne) | `#F5F2EC` | Wybrane sekcje na bright background (np. opinie, dziękujemy) — kontrast |
| **Akcent główny** | `#FEAF03` | CTA, linki, ikony, highlights, accent stripes (z logo SLF) |
| **Akcent hover** | `#FFC833` | Hover na buttonach, focus state |
| **Akcent dim** | `#5C4001` | Mute amber — używać do disabled / pre-state |
| **Tekst główny** | `#FFFFFF` | H1-H6, paragrafy na ciemnym tle |
| **Tekst wtórny** | `rgba(255,255,255,0.65)` | Lead, sub-headlines, opisy |
| **Tekst tertiary** | `rgba(255,255,255,0.40)` | Mikrocopy, etykiety, captions |
| **Tekst na jasnym** | `#0A0A0A` | Sekcje na bright background |
| **Border subtle** | `rgba(255,255,255,0.10)` | Hairlines, separatory |
| **Border strong** | `rgba(255,255,255,0.22)` | Karty, inputs, accordion |
| **Success (form)** | `#00C853` | „Wysłano!", checkmarks |
| **Error (form)** | `#FF5252` | Walidacja formularza |

**Dominanta:** ciemna (czarne tło 80% layoutu), akcent amber dla CTA i hierarchii. Sekcje light (#F5F2EC) używamy świadomie, jako kontrastowe wstawki (max 1-2 sekcje na podstronę).

---

## Typografia

- **Display (H1-H3):** **Anton** — Google Fonts, kondensowany sans, mocny industrialowy charakter, transport DNA. Bardzo wąskie litery = lepsze duże nagłówki na ograniczonej szerokości mobile.
- **Body (paragrafy, listy, formularze):** **Inter** — Google Fonts, neutralny, świetna czytelność na każdym urządzeniu, naturalna para z Anton (mocny kontrast wagi i proporcji).
- **Mono (kod / numery / etykiety techniczne):** **JetBrains Mono** — Google Fonts, do listingu obsługiwanych krajów, parametrów floty, breadcrumbs.

Wszystkie 3 fonty z Google Fonts, darmowe komercyjnie, embed jednym linkiem.

---

## Skala typograficzna

**Desktop:**
| Element | Rozmiar | Line-height | Letter-spacing | Waga |
|---|---|---|---|---|
| H1 Display (hero) | 80-112px | 0.95 | -0.01em | Anton 400 |
| H1 standard | 64-80px | 1.0 | -0.005em | Anton 400 |
| H2 | 48-64px | 1.05 | 0 | Anton 400 |
| H3 | 28-36px | 1.15 | 0.01em | Anton 400 |
| H4 | 20-24px | 1.2 | 0.02em uppercase | Inter 700 |
| Lead | 19-22px | 1.5 | 0 | Inter 400 |
| Body | 16-17px | 1.6 | 0 | Inter 400 |
| Small | 13-14px | 1.5 | 0.02em | Inter 500 |
| Eyebrow | 11-12px | 1.4 | 0.18em uppercase | Inter 600 |
| Mono | 12-13px | 1.4 | 0.06em | JetBrains 500 |

**Mobile (poniżej 768px):**
- H1 hero: 48-64px
- H2: 36-44px
- H3: 24-28px
- Body: 16px
- Lead: 17-18px

---

## Styl wizualny

| Element | Decyzja |
|---|---|
| **Zaokrąglenia** | **4px maksymalnie** (cards, inputs, buttons). Hero / sekcje pełne = **0px**. Industrialny, nie playful. |
| **Cienie** | **Brak lub bardzo subtle**. Operujemy borderem i tłem, nie cieniem. Wyjątek: floating sticky CTA mobile = lekki shadow `0 -4px 12px rgba(0,0,0,0.3)`. |
| **Buttons** | Primary: amber tło + czarny tekst, hover = `#FFC833` + lekkie scale 1.02. Outline: 2px border amber + amber tekst, hover = fill. Padding generously (16px 28px desktop). |
| **Borders** | 1px na większości. 2px na kartach floty / kierunkach (większy weight = transport-grade). |
| **Ikony** | **Outline 1.5-2px stroke**, monoline, square caps. Inspiracja: Lucide / Phosphor. Akcent kolor w ramach grupy. Dodatkowo: **żółta strzałka z logo** jako powtarzający się motyw (sekcje, ozdoba, dividery). |
| **Zdjęcia** | **Dokumentalne, surowe, w trasie.** Fotografia floty SLF (busy/solówki/ciężarówki na autostradzie, załadunek, ekipa). Tonal grading: lekko zwiększony kontrast, lekko stłumione saturacje (poza akcentem żółtym jeśli jest). **Bez stockowych uśmiechniętych rodzin.** |
| **Mapa Europy** | Jako element wizualny w sekcji „kierunki" — outline EU + zaznaczone 12 krajów + żółte linie tras wychodzące z Polski. Custom SVG (nie Google Maps w hero). |
| **Spacing** | **Airy.** Section padding: 96-128px desktop, 64-80px mobile. Container max-width: 1280px. Gutter: 32px desktop / 16px mobile. |
| **Grid** | 12-kolumnowy desktop / 4-kolumnowy mobile. |
| **Akcent decoracyjny** | Powtarzający się motyw: **strzałka 45° w górę** (z logo) + **dashed border-bottom amber** pod eyebrow-labelami. |
| **Animacje** | Subtelne. Fade-up sekcji on scroll (200ms ease). Hover na kartach: lift + border accent. Brak parallax, brak ciężkich Lottie. |

---

## Zdjęcia — kierunek konkretny

**Co fotografujemy / zamawiamy:**
- Busy / solówki / ciężarówki SLF w trasie (autostrada, zachód słońca = ciepłe światło = pasuje do amber)
- Załadunek (kierowca + ekipa, pasy mocujące, zabezpieczanie mebli)
- Wnętrze floty (pusta przestrzeń ładunkowa, gotowa)
- Ekipa SLF (zespół przed pojazdem — buduje zaufanie)
- Detale: pasy, koce transportowe, zabezpieczone meble, ręka kierowcy na kierownicy
- Mapa / GPS / planowanie trasy (subtle nawiązanie do tech-savvy)

**Tonal grading:**
- Lekko ciemniejsze cienie (matchuje czarne tło strony)
- Akcent amber wzmocniony tam gdzie jest naturalnie (logo na pojeździe, zachód słońca, light kabiny)
- Reszta saturacji lekko zredukowana (-10% sat)

**Czego unikać w zdjęciach:**
- Stockowe rodziny z kartonami w stylu „happy moving day"
- Zdjęcia ze stockphoto z białym tłem
- Photoshop kompozycje (wycięty produkt na żółtym tle)
- Pojazdy konkurencji (oczywiste)

---

## Czego unikać (cała estetyka)

- **Niebieski** — kolor DHL, korporacyjnego transportu, budżetowych linii lotniczych. Odbiera SLF unikalność i wpycha w generyczność.
- **Zielony** — kojarzy się z eko / spożywczym / aptekami, nie z transportem międzynarodowym.
- **Gradient tła** — wyjątek: dim gradient na zdjęciach w hero dla czytelności tekstu. Nigdy color-to-color.
- **Zaokrąglone bańki / pill buttons** — playful, nieodpowiednie dla B2B + poważnego transportu.
- **Stockowe ikony Material Design** — generyczne, niewyróżnione. Lucide / Phosphor lub custom.
- **Emoji w treści sprzedażowej** — `✔️` w checklistach OK (z briefu klienta), ale nie w nagłówkach.
- **Comic sans / Pacifico / Lobster** — żadne playful fonty.
- **Duże dropshadowy** — przestarzałe, pogarszają kontrast.
- **Hero z dużym wideo** — ciężkie do ładowania, mobile-unfriendly, nie konwertuje lepiej niż statyczne zdjęcie.
- **Karuzele opinii** — ludzie nie scrollują karuzeli. 3 opinie pokazane na raz w gridzie.
- **Cookie modal pełnoekranowy** — irytuje, używamy bottom bar zgodnego z RODO.

---

## Akcenty wizualne — SLF identity DNA

Z logo wynikają 3 powtarzające się elementy graficzne:

1. **Żółta strzałka 45° w górę** — używana jako dekoracja eyebrow, dividery sekcji, punkty na listach (✓ → ↗), akcent w nagłówkach.
2. **Heksagonalny outline** (z logo — abstrakcyjny kontener) — można użyć jako maska dla niektórych zdjęć floty lub jako mikro-pattern w tle subtle sekcji.
3. **„Transport & Removals" thin dash** — cienka pozioma linia z dwoma końcówkami pod eyebrow/labelami (z logo: linie obok napisu „Transport & Removals").

---

## Pozycjonowanie wizualne vs konkurencja (PL transport)

- Większość firm transportowych w PL ma strony **białe + niebieskie** (DHL clone) lub **białe + zielone** (eco-claim) lub **żółto-białe** (DHL/expressowe).
- **Czarne tło + amber accent = wyróżniamy się natychmiast.** Estetyka bliższa premium tech (Linear, Vercel) niż klasycznemu transportowi.
- To wspiera pozycjonowanie „od tanich po premium" — klient widzi że nie jest tanio, ale i nie korporacyjnie.
- Klient B2B (firma przenosząca biuro) odbiera to jako „świadomy, profesjonalny dostawca".
- Klient B2C (rodzina pakująca rodziców z UK) odbiera jako „wiarygodne, jasne, dobre CTA — wiem co zrobić".

---

## Uzasadnienie decyzji

Wyciągnęliśmy paletę bezpośrednio z brand-color SLF (#FEAF03 + czerń). Czarne tło dominuje bo:
1. **Logo SLF najlepiej działa na czarnym** (klient ma 2 oficjalne warianty: kolor na białym i żółte na czarnym — wybieramy ten drugi jako baseline).
2. **Branża transportowa na PL ma 90% białych stron** — czerń to natychmiastowe wyróżnienie + sygnał „premium-mid".
3. **Amber #FEAF03 (nie żółty #FFD600)** — ten amber jest cieplejszy, bardziej ludzki, bliższy „złotej godzinie w trasie" niż „taxi yellow" — co lepiej oddaje slogan „We Handle With Care".
4. **Anton + Inter** — kombinacja kondensowanego industrial display z neutralnym body daje hierarchię „mocne CTA / czytelne treści", co konwertuje.

Cała decyzja podporządkowana jednemu KPI: **konwersja = formularz wyceny lub telefon**. Każdy detal (kontrast amber na czarnym, sticky CTA, hierarchia typograficzna, brak rozpraszających animacji) działa na tę jedną akcję.
