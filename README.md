# SLF Transport — strona internetowa

Statyczna strona dla SLF Transport & Removals (slftransport.eu) — firma transportowo-przeprowadzkowa działająca w Europie.

**Slogan:** *European Wide Removals — We Handle With Care*

## Kontakt klienta

- **Łukasz:** +48 698 753 941
- **Sabina:** +48 784 362 268
- **E-mail:** office@slftransport.eu

## Stack

- Pure HTML + CSS + Vanilla JavaScript
- Brak build systemu, brak frameworków
- Docelowo: wdrożenie pod **WordPress** (przez inny zespół)

## Struktura

```
/
├── index.html              # strona główna
├── o-nas.html              # o firmie
├── uslugi.html             # 5 sekcji szczegółowych
├── flota.html              # 3 typy pojazdów (busy, solówki, ciężarówki)
├── jak-to-dziala.html      # proces 7 kroków
├── kontakt.html            # kafelki + formularz
├── wycena.html             # wielokrokowy formularz wyceny
├── dziekujemy.html         # thanks page po formularzu
├── odprawa-celna.html      # Brexit / ToR1 / HMRC
├── regulamin.html
├── polityka-prywatnosci.html
├── 404.html
├── kierunki/               # 21 podstron kierunkowych SEO
│   ├── niemcy.html
│   ├── hiszpania.html
│   ├── … (19 pozostałych krajów)
│   └── wielka-brytania.html
├── css/style.css           # jeden plik CSS (BEM)
├── js/main.js              # hamburger menu + handler formularza
└── assets/
    ├── logo/               # SVG logo
    ├── img/                # zdjęcia: hero, process, fleet
    ├── img/hero/           # tła page-hero
    ├── img/process/        # 7 zdjęć do alt-sections na jak-to-dziala
    └── icons/
```

## Strony — 33 publiczne

- 11 podstron głównych (index, o-nas, uslugi, flota, jak-to-dziala, kontakt, wycena, dziekujemy, odprawa-celna, regulamin, polityka-prywatnosci, 404)
- 1 podstrona tematyczna (odprawa-celna.html — Brexit/ToR1)
- 21 podstron kierunkowych w `kierunki/` (gotowy content SEO per kraj)

## Konwencje

- **CSS:** BEM (`.header__inner`, `.nav__link`, `.btn--primary`, `.is-active`)
- **Język:** PL (EN przygotowane jako linki w nav, do dorobienia)
- **Obrazki:** wszystkie skompresowane (max 1920px, JPG 82%)
- **Komponenty współdzielone:** `<header>`, `<footer>`, `.cta-block`, `.directions-grid` — 1:1 na wszystkich stronach
- **Telefony występują w 4 miejscach na stronę:** mobile CTA bar, footer, cta-block, kontakt.html

## Preview lokalnie

```bash
python3 -m http.server 8080
# otwórz http://localhost:8080
```

## Co MUSI klient zweryfikować przed publikacją

- **Częstotliwości tras** w `directions-grid` (CO TYDZIEŃ / 2× W TYG. / NA ŻYCZENIE) — wstawione przez agencję jako placeholdery
- **Miasta** w kartach kierunków (Berlin, Sztokholm, Warszawa…) — do potwierdzenia
- **DE/CH/UK podstrony kierunkowe** — treść napisana w stylu klienta (klient pominął w SEO doc)
- **Dane firmowe** (nazwa pełna, NIP, adres) — brak w footerze, do uzupełnienia

## Co poza zakresem (do osobnej rozmowy)

- Wersja EN strony (klient w briefie: "PL + EN od początku") — osobny etap
- Foto floty od klienta (stocki AI do wymiany na realne)
- Integracja formularza wyceny z e-mailem (idzie do WP)
- Pełna polityka prywatności / regulamin (zgodność RODO — osobny audyt)
- Tracking GPS — feature dla klienta końcowego (obecnie tylko wzmianka)

## Formularz wyceny (`wycena.html` → `dziekujemy.html`)

Pola wymagane przez klienta (z briefu):
- Imię i nazwisko
- Telefon
- E-mail
- Miejsce odbioru (kraj, miejscowość)
- Miejsce dostawy (kraj, miejscowość)
- Planowany termin
- Rodzaj usługi (multi-select: załadunek/rozładunek, demontaż/montaż, zabezpieczanie, pakowanie, dodatkowy pomocnik, winda zewnętrzna)
- Lista rzeczy / opis ładunku
- Dom / Apartament (piętro + winda)
- Zdjęcia rzeczy (opcjonalne upload)

Submit → `dziekujemy.html` (placeholder — w WP podpiąć pod e-mail do office@slftransport.eu)

## Wersja

v1 · 2026-05-28 · PROUP Studio
