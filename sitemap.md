# Mapa Stron — SLF Transport
**Data:** 2026-05-18
**Stack:** HTML/CSS/JS (prototyp) → WordPress (wdrożenie)
**Język:** PL + EN
**Cel konwersji:** umówienie usługi (formularz wyceny / telefon / e-mail)

---

## Flow konwersji

**Ścieżka główna (desktop):**
`Wejście (Google/Ads/direct) → Home → Hero CTA „Darmowa wycena" → /wycena (formularz) → Wysłanie → /dziekujemy`

**Ścieżka mobile (najczęstsza w branży transportowej):**
`Wejście → Home → Sticky CTA „Zadzwoń" → click-to-call → Łukasz/Sabina`

**Ścieżka budowania zaufania (kupujący „bada"):**
`Wejście → Home → /jak-to-dziala lub /flota lub /o-nas → CTA na końcu sekcji → /wycena → formularz`

**Ścieżka SEO (wszedł z długiego ogona, np. „przeprowadzka do Holandii"):**
`Wejście na /uslugi (lub w przyszłości landing per-kierunek) → CTA „Bezpłatna wycena" → /wycena → formularz`

**3 kanały konwersji (na każdej stronie):**
1. **Formularz wyceny** — `/wycena` (primary CTA, button żółty)
2. **Telefon** — `tel:+48698753941` / `tel:+48784362268` (mobile primary, sticky bottom)
3. **E-mail** — `mailto:office@slftransport.eu` (uzupełniający, w stopce + na /kontakt)

---

## Nawigacja główna (6 pozycji + CTA + lang switcher)

```
[LOGO SLF]   O nas   Usługi   Flota   Jak to działa   Kontakt   [PL/EN]   [Darmowa wycena →]
```

- **Logo** → klik → Home
- **O nas** → /o-nas
- **Usługi** → /uslugi
- **Flota** → /flota
- **Jak to działa** → /jak-to-dziala
- **Kontakt** → /kontakt
- **Switcher języka** PL ↔ EN (oddzielnie, prawy róg przed CTA)
- **CTA „Darmowa wycena"** → /wycena (żółty button, wyróżniony, sticky w mobile)

**Mobile:**
- Hamburger z tymi samymi pozycjami
- Sticky bottom bar: `[📞 Zadzwoń] [Darmowa wycena →]` (dwa stałe CTA widoczne zawsze)

---

## Strony

### P1 — Krytyczne (bez tego projekt nie istnieje)

| Strona | Plik | Cel | Główne CTA |
|---|---|---|---|
| **Strona główna** | `index.html` | Pierwsze wrażenie, kondensuje wszystko, kieruje do wyceny | „Darmowa wycena" + click-to-call |
| **Darmowa wycena** | `wycena.html` | Formularz konwersji — zbiera dane do zlecenia | „Wyślij zapytanie" (form submit) |
| **Dziękujemy** | `dziekujemy.html` | Potwierdzenie wysłania, info o czasie odpowiedzi, fallback CTA (tel) | „Wróć na stronę główną" + „Zadzwoń teraz" |
| **Kontakt** | `kontakt.html` | Wszystkie kanały kontaktu, mapa, godziny pracy, dane firmy | Telefon (Łukasz/Sabina) + „Darmowa wycena" |

### P2 — Ważne (budują wiarygodność, realizują cel)

| Strona | Plik | Cel | Główne CTA |
|---|---|---|---|
| **O nas** | `o-nas.html` | Buduje zaufanie — kim jest SLF, doświadczenie, podejście | „Skontaktuj się z nami" → /wycena |
| **Nasze usługi** | `uslugi.html` | Lista oferowanych usług (przeprowadzki, transport mienia, pomoc przy pakowaniu itd.) | „Zamów wycenę usługi" → /wycena |
| **Nasza flota** | `flota.html` | Pokazuje 3 typy pojazdów z parametrami — pomaga klientowi zrozumieć co mu pasuje | „Dobierzemy pojazd — wyceń" → /wycena |
| **Jak to działa** | `jak-to-dziala.html` | 7-etapowy proces — redukcja niepewności u klienta | „Zarezerwuj termin" → /wycena |

### P3 — Uzupełniające (wymogi prawne + 404)

| Strona | Plik | Cel |
|---|---|---|
| **Polityka prywatności** | `polityka-prywatnosci.html` | RODO — wymóg przy formularzu z danymi osobowymi |
| **Regulamin / Warunki świadczenia usług** | `regulamin.html` | Zasady realizacji zleceń, odpowiedzialność, reklamacje |
| **Cookies / Cookie consent** | (overlay JS, nie osobna strona) | Banner zgody na cookies (przy GA4) |
| **404** | `404.html` | Fallback na nieistniejące URL — kierunek z powrotem do home / wyceny |

---

## Struktura URL i język

**Prototyp HTML (PROUP Studio):**
```
/index.html                  ← PL home (root)
/o-nas.html
/uslugi.html
/flota.html
/jak-to-dziala.html
/kontakt.html
/wycena.html
/dziekujemy.html
/polityka-prywatnosci.html
/regulamin.html
/404.html

/en/index.html               ← EN home
/en/about.html
/en/services.html
/en/fleet.html
/en/how-it-works.html
/en/contact.html
/en/quote.html
/en/thank-you.html
/en/privacy-policy.html
/en/terms.html
/en/404.html
```

**Docelowy WordPress:**
- Domena root = PL (`slftransport.eu/o-nas`, `/uslugi`, `/flota`...)
- EN przez subkatalog (`slftransport.eu/en/about`, `/services`...) lub plugin (Polylang / WPML)
- Strona główna = static front page (nie blog)
- Permalinki = post-name

---

## Hierarchia treści — Strona główna (kondensacja)

Home zawiera „przedsmak" każdej podstrony + CTA do wyceny. Sekcje w tej kolejności:

1. **Hero** — H1 + slogan + 4 benefity ✔️ + **[Darmowa wycena →]** + telefon
2. **Obsługiwane kierunki** — 12 krajów Europy (mapa lub flagi) + „inne kraje"
3. **Nasze usługi (preview)** — 3–4 kafle z linkiem do /uslugi
4. **Jak wygląda współpraca** — 6 kroków (skrócona wersja /jak-to-dziala)
5. **Nasza flota (preview)** — 3 typy pojazdów z parametrami, link do /flota
6. **Dlaczego warto nam zaufać** — 7 powodów (siatka ikon + krótki opis)
7. **Opinie klientów** — 3 cytaty
8. **FAQ** — 6 pytań (accordion)
9. **CTA blok** — „Planujesz przeprowadzkę?" + button + telefon
10. **Kontakt (skrót)** — telefony Łukasz/Sabina + e-mail + link do /kontakt

---

## Stopka (każda strona)

```
[LOGO SLF + slogan EN]

NAWIGACJA           KONTAKT                     LEGAL
- O nas             📞 Łukasz +48 698 753 941   - Polityka prywatności
- Usługi            📞 Sabina +48 784 362 268   - Regulamin
- Flota             📧 office@slftransport.eu   - Cookies
- Jak to działa     [adres firmy]
- Kontakt           NIP: [BRAK]
- Darmowa wycena

[Switcher PL/EN]                                © 2026 SLF Transport
```

---

## Poza zakresem V1 (na później / V2)

- ❌ **Blog / artykuły** — np. „Jak spakować się na przeprowadzkę do UK"
- ❌ **Panel klienta** — śledzenie statusu zlecenia
- ❌ **Tracking GPS w UI klienta** — z briefu wynika że to wewnętrzne narzędzie
- ❌ **Booking online / kalendarz** — termin ustalany ręcznie po formularzu
- ❌ **Landingi per-kierunek** (np. `/przeprowadzki-do-niemiec`) — silne SEO, ale na V2
- ❌ **Cennik szczegółowy** — wycena indywidualna, brak widełek (chyba że klient doda)
- ❌ **Live chat / WhatsApp widget** — możliwy do dodania w WP
- ❌ **Integracja CRM** — V1 = formularz → e-mail; CRM po WP

---

## Decyzje IA (uzasadnienia)

1. **`/wycena` jako osobna strona, nie tylko sekcja na home** — to jest GŁÓWNA konwersja. Osobny URL = łatwiejsze linki, lepsze tracking, czytelny CTA z każdego miejsca, gotowy landing dla Ads.
2. **`/dziekujemy` jako osobna strona** — wymagana do śledzenia konwersji w Google Ads / GA4 (thank-you page = conversion event). Też daje klientowi pewność „formularz poszedł".
3. **`/kontakt` mimo że kontakt jest też w stopce** — strona transportowa = klient szuka konkretów (adres, godziny pracy, mapa). Osobna podstrona = standard branży.
4. **Click-to-call sticky w mobile** — branża transportowa: bardzo wysoki udział telefonów vs formularzy, zwłaszcza od starszych klientów (rodzina pakująca rodziców na powrót z UK).
5. **Język na podkatalogu, nie subdomenie** — `/en/` daje lepsze SEO niż `en.slftransport.eu` i upraszcza WP (Polylang/WPML).
6. **6 pozycji w głównej navi + 1 CTA button** — granica czytelności. „Darmowa wycena" wyciągnięte jako CTA-button, nie zwykły link (wyróżnia się wizualnie, akcent kolorystyczny).
7. **Brak osobnej strony „FAQ"** — 6 pytań mieści się na home; gdy urosną do 15+ wydzielimy podstronę.
