# Plan dopasowania projektu pod treści klienta

**Data utworzenia:** 2026-05-27
**Status:** ✅ ZAKOŃCZONY 2026-05-27 (9 etapów wykonanych w jednej sesji)
**Cel:** dopasować treść strony do 3 plików .docx od klienta (`00 - Assets/SLF treści.docx`, `SLF treści-2-kopia 2.docx`, `SLF_Transport_Podstrony_SEO-kopia 2.docx`)

---

## Wyniki audytu (raport, na którym opiera się plan)

**Co JEST 1:1 z klientem (nie ruszać):** hero index, 6 kroków, 3 pojazdy, "Sprawdzona jakość" (6 powodów), 3 opinie, 6 FAQ, formularz wyceny (pola), telefony/email.

**Krytyczne braki / niedopasowania:**
1. Klient dostarczył **18 gotowych podstron SEO per kraj** (meta + H1 + treść + FAQ + CTA) — strona nie ma ANI JEDNEJ
2. Klient dał pełną podstronę **"Odprawa celna ToR1 / Brexit"** — strona traktuje to jako 1 addon
3. **Mismatch krajów:**
   - Strona ma: DE, NL, BE, FR, AT, CH, IT, ES, DK, NO, UK, IE (12)
   - SEO doc ma: AT, BE, HR, CZ, DK, FI, FR, GR, ES, NL, IE, NO, PL, PT, SE, SK, HU, IT (18)
   - **Wspólne 9:** AT, BE, DK, FR, ES, NL, IE, NO, IT
   - **Tylko strona (klient pominął w SEO): 3:** DE, CH, UK (klient miał te w briefie jako kluczowe — przeoczenie)
   - **Tylko w SEO klienta (nie na stronie): 9:** HR, CZ, FI, GR, PL, PT, SE, SK, HU
   - **Suma docelowa: 21 krajów**
4. `uslugi.html` — klient dał 5 pełnych sekcji (Załadunek, Packing Service, Demontaż/montaż, Dokumenty celne, Door-to-door), na stronie tylko skrót w addons
5. **GPS / tracking real-time** — klient wspomina, strona nie eksponuje
6. `o-nas.html` — `stats__grid` z liczbami (wymyślone, klient nie dał statystyk)
7. Brak/słabe **meta title + meta description** na podstronach (klient dał gotowe per kraj)

---

## Etapy realizacji

### Etap 1 — sprzątanie i szybkie wygrane (LOW RISK)
- [x] **1.1.** Usuń `stats__grid` z `o-nas.html` (klient nie podał statystyk firmy)
- [x] **1.2.** Zweryfikuj "Dlaczego warto" na `index.html` (klient: 7 powodów: Doświadczenie, Bezpieczeństwo, Terminowość, Stały kontakt, Indywidualne podejście, Cała Europa, Pomoc na każdym etapie) — uzupełnij/popraw jeśli się różni
- [x] **1.3.** Dodaj wzmiankę o GPS/tracking real-time — `flota.html` (sekcja "Co wyróżnia naszą flotę" lub dodatkowy bullet w "Sprawdzona jakość")

### Etap 2 — rozbudowa `uslugi.html`
- [x] **2.1.** Wymień obecny content na 5 pełnych sekcji z `SLF treści-2-kopia 2.docx`:
  - Załadunek i rozładunek
  - Packing Service – profesjonalne pakowanie
  - Demontaż i montaż mebli
  - Organizacja dokumentów celnych (z linkiem "więcej →" do podstrony z etapu 3)
  - Transport door-to-door
- [x] **2.2.** Zachowaj `.addons` ("Pomoc na każdym etapie") jako quick overview na górze
- [x] **2.3.** Zachowaj `directions-grid` (już zsync z home)

### Etap 3 — podstrona Odprawa Celna
- [x] **3.1.** Stwórz `odprawa-celna.html` z pełną treścią klienta (sekcja "6. Odprawa celna" z pliku 2):
  - Intro Brexit
  - Formularz ToR1 (kto może skorzystać)
  - Lista inwentarzowa
  - Dokumenty wymagane do odprawy UK
  - Czego nie można przewozić bez zgłoszenia
  - Przeprowadzka z UK do UE
  - Jak pomagamy?
  - Ważne informacje (terminy ToR1)
- [x] **3.2.** Dodaj link z `uslugi.html` (sekcja "Organizacja dokumentów celnych" → "Więcej o odprawie celnej →")
- [x] **3.3.** Dodaj do footera (sekcja "Pomocne linki" lub podobna)
- [x] **3.4.** NIE dodawaj do głównego nav (już ma 5 pozycji, zatłoczyłoby)

### Etap 4 — template podstrony kierunkowej
- [x] **4.1.** Stwórz folder `kierunki/`
- [x] **4.2.** Zbuduj `kierunki/hiszpania.html` jako wzorzec (klient pokazał ją pierwszą w SEO doc, ma kompletną treść)
- [x] **4.3.** Sprawdź relatywne ścieżki (`../css/style.css`, `../js/main.js`, `../assets/logo/...`, nav linki `../index.html` itd.)
- [x] **4.4.** Struktura podstrony per klient:
  - Meta Title + Meta Description (z dokumentu)
  - .page-hero z H1 + intro
  - "Profesjonalne przeprowadzki międzynarodowe do [kraj]"
  - "Co obejmuje nasza usługa?" (bullet list)
  - "Dlaczego klienci wybierają SLF" (bullet list)
  - "Przeprowadzki z Wielkiej Brytanii do [kraj]"
  - FAQ (3 pytania per kraj)
  - CTA
- [x] **4.5.** Pokaż screenshot, zwykle review przed mnożeniem

### Etap 5 — wygeneruj 18 podstron z SEO doc
- [x] **5.1.** Wyciągnij meta + treść per kraj z SEO doc
- [x] **5.2.** Wygeneruj 18 plików w `kierunki/`:
  - hiszpania, portugalia, irlandia, belgia, holandia, dania, szwecja, norwegia, finlandia, polska, francja, czechy, slowacja, wegry, austria, wlochy, grecja, chorwacja
- [x] **5.3.** Zaktualizuj `directions-grid` w `index.html` + `uslugi.html`:
  - Linki: `wycena.html?kierunek=...` → `kierunki/[kraj].html`
- [x] **5.4.** Dodaj 9 brakujących krajów do `directions-grid` (PT, SE, FI, PL, CZ, SK, HU, GR, HR)
- [x] **5.5.** Zsync directions-grid między index a uslugi (jak zawsze)

### Etap 6 — DE/CH/UK (klient pominął w SEO, ale są kluczowe per brief)
- [x] **6.1.** Stwórz `kierunki/niemcy.html`, `kierunki/szwajcaria.html`, `kierunki/wielka-brytania.html` w tym samym stylu/template
- [x] **6.2.** Treść samodzielnie w duchu klienta (klient w briefie wymienia te jako kluczowe — szczególnie UK bo cały dokument Brexit)
- [x] **6.3.** Zaktualizuj directions-grid

### Etap 7 — meta tags na podstronach głównych
- [x] **7.1.** Sprawdź obecne `<title>` + `<meta description>` na 11 publicznych podstronach
- [x] **7.2.** Uzupełnij/dopasuj w duchu klienta (format: "[Strona] | SLF Transport and Removals")

### Etap 8 — nav / footer update
- [x] **8.1.** Decyzja: czy "Kierunki" do nav? Default: NIE (directions-grid wystarcza)
- [x] **8.2.** Decyzja: "Odprawa celna" do nav? Default: NIE, link w footerze i z uslugi
- [x] **8.3.** Footer — dodać linki do nowych podstron (odprawa celna + ew. lista popularnych kierunków)

### Etap 9 — aktualizacja architecture.md
- [x] **9.1.** Dopisz folder `kierunki/` jako nową sekcję
- [x] **9.2.** Zaktualizuj tabelę component reuse (directions-grid, odprawa link)
- [x] **9.3.** Dodaj regułę: "Przy dodawaniu nowego kierunku → dodać HTML w `kierunki/`, dodać link w `directions-grid` index + uslugi"

---

## Decyzje już podjęte (możesz zmienić jeśli źle założyłem)

1. **Folder vs root:** 21 podstron kierunkowych ląduje w `kierunki/` (semantyczne, gotowe pod WP permalinks `/kierunki/niemcy/`)
2. **DE/CH/UK:** dorabiam podstrony, klient prawdopodobnie pominął w SEO przez przeoczenie (są w briefie jako kluczowe)
3. **Nav:** nie rozszerzamy — 5 pozycji już sporo, "Kierunki" dostępne przez `index` i `uslugi` (directions-grid)
4. **Odprawa celna:** osobna podstrona, ale link z `uslugi.html` + footer, NIE z nav
5. **Stats na o-nas:** wycięte (klient nie dostarczył liczb)
6. **Wartości na o-nas:** zostawiam jako karty (lepiej wizualnie, ten sam content)

## Co poza zakresem (do osobnej rozmowy)

- Wersja EN strony (klient w briefie: "PL + EN od początku") — to osobny duży etap
- Sesja foto floty (placeholder stock zostaje do wymiany przez klienta)
- Integracja formularza wyceny z e-mailem (idzie do WP)
- Polityka prywatności / regulamin — sprawdzić czy zgodne z RODO (osobny audyt)
