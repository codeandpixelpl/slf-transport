# Architektura — SLF Transport (strona internetowa)

**Data:** 2026-05-27
**Stack:** statyczny HTML + jeden `css/style.css` + jeden `js/main.js` (brak build systemu)
**Konwencja CSS:** BEM (`.header__inner`, `.nav__link`, `.btn--primary`, `.is-active`)
**Cel konwersji:** formularz `/wycena` → `/dziekujemy`, click-to-call (Łukasz/Sabina), e-mail

## Liczby

- **11 podstron głównych** (publiczne, w roocie) + 2 wewnętrzne (`prototypy.html`, `prezentacja-ia.html`)
- **1 podstrona tematyczna**: `odprawa-celna.html` (Brexit/ToR1)
- **21 podstron kierunkowych** w `kierunki/` (18 z SEO docu klienta + DE/CH/UK dorobione w stylu klienta)
- **= 33 strony publiczne razem**

---

## Tabela component reuse

Co JEST kopia-pasta między stronami (zmiana = ruszyć wszystkie te pliki).

| Komponent | Powtarza się na | Co zmieniać razem |
|---|---|---|
| **`<header>` + nav desktop+mobile** | wszystkie 33 strony publiczne | logo, lista linków, mobile CTA z telefonami. **W `kierunki/*.html` nav linki mają `../` prefix** |
| **`<footer>`** | wszystkie 33 strony publiczne | telefony Łukasz/Sabina, e-mail, lista krajów (12 flag w footerze), linki prawne. **W `kierunki/*.html` linki mają `../` prefix** |
| **`<li><a href="odprawa-celna.html">` w footer nav** | wszystkie 33 strony | dodany w Etapie 8 dopasowania treści; nie pomijaj przy nowej podstronie |
| **`.page-hero`** (z breadcrumb) | flota, jak-to-dziala, kontakt, o-nas, uslugi, wycena, odprawa-celna, wszystkie `kierunki/*.html` | struktura: eyebrow + h1 z `.accent` + subtitle |
| **`.cta-block`** (końcowy CTA) | index, kontakt, jak-to-dziala, odprawa-celna, wszystkie `kierunki/*.html` | "Darmowa wycena" + "Zadzwoń" — telefony muszą być aktualne |
| **`directions-grid`** (kraje docelowe) | index, uslugi | **MUSI być 1:1 identyczny** na obu stronach — 21 pełnych kart z kodami PL→XXX, frequencją, miastami, flagą + `directions__footer`. Linki: `kierunki/[slug].html`. Wersja z `index.html` = źródło prawdy. |
| **`fleet-*`** (karty pojazdów) | flota, częściowo index (tabs) | dane techniczne pojazdów |
| **Google Fonts: Anton + Inter + JetBrains Mono** | wszystkie strony | jeśli zmiana fontów → ruszyć każdy `<head>` |
| **`<script src="js/main.js" defer>`** | wszystkie strony | hamburger menu + handler formularza. **W `kierunki/*.html`: `../js/main.js`** |

**Praktycznie:** przy zmianie numeru telefonu, dodaniu kraju do listy, podmianie logo — **grep przez wszystkie `.html`** i podmiana ręczna. Nie ma includes / templating.

---

## Mapa unikalnych sekcji per strona

Co jest TYLKO na danej stronie (zmiana = jeden plik).

| Strona | Unikalne sekcje |
|---|---|
| `index.html` | hero bez breadcrumb, 7-kroków proces (alt-sections), tabs flota, testimonials, FAQ |
| `flota.html` | grid kart pojazdów z featurami |
| `jak-to-dziala.html` | 7 alt-sekcji (naprzemiennie L/R) — proces krok-po-kroku |
| `kontakt.html` | kafelki kontaktowe (lewa) + formularz wyceny (prawa) |
| `o-nas.html` | karty wartości (4 sztuki) |
| `uslugi.html` | `.service-blocks` (5 sekcji: zaladunek, pakowanie, demontaz, dokumenty-celne, door-to-door) + `.addons` (quick overview 6 ikon) + reuse `directions-grid` |
| `wycena.html` | wielokrokowy formularz + sidebar z info/cennikiem |
| `dziekujemy.html` | thanks state po formularzu |
| `odprawa-celna.html` | Brexit/ToR1 — 7 sekcji `.service-blocks` (intro, ToR1, lista inwentarzowa, dokumenty UK, czego nie wolno, UK→UE, jak pomagamy) + ważne informacje |
| `regulamin.html`, `polityka-prywatnosci.html` | treść prawna |
| `404.html` | error page |
| `kierunki/[slug].html` (21 plików) | hero kierunkowy + intro klienta + Co obejmuje + Dlaczego SLF + UK→[kraj] + FAQ (3 pytania) + CTA |

---

## Folder `kierunki/`

21 podstron kierunkowych — wszystkie z **identycznym szablonem** z treścią klienta z SEO doc:

**Z SEO doc klienta (18):** austria, belgia, chorwacja, czechy, dania, finlandia, francja, grecja, hiszpania, holandia, irlandia, norwegia, polska, portugalia, slowacja, szwecja, wegry, wlochy

**Dorobione w stylu klienta (3, klient pominął w SEO):** niemcy, szwajcaria, wielka-brytania

**Reguła synchronizacji:** zmiana w szablonie kierunku = update **wszystkich 21 plików**. Najbezpieczniej: edytuj `kierunki/hiszpania.html` jako "źródło prawdy", potem skrypt `python` przeparsuje i wygeneruje pozostałe 20 (analogicznie do `gen_directions.py` użytego podczas budowy).

**Special case `wielka-brytania.html`:** sekcja "UK → UK" zamieniona na "PL → UK" — bo "z UK do UK" jest nonsensem.

---

## Strony wyłączone z mapy (wewnętrzne)

- `prototypy.html` — galeria mockupów wewnętrzna
- `prezentacja-ia.html` — dokument architektury informacji (output `/information-architecture`)

Te dwie strony **nie są częścią produkcyjnego site'u** — nie linkuje do nich nav/footer.

---

## Sitemap → URL flow

```
index.html
  ├── o-nas.html
  ├── uslugi.html ─┬─► (sekcja "service-blocks" link)
  │                └─► odprawa-celna.html
  ├── flota.html
  ├── jak-to-dziala.html
  ├── kontakt.html
  ├── wycena.html ─────► dziekujemy.html
  ├── odprawa-celna.html (linkowane z uslugi + footer)
  ├── directions-grid ─► kierunki/[21 plików]
  └── (footer) ─► polityka-prywatnosci.html
                  regulamin.html
                  odprawa-celna.html
```

Pełny opis flow w [sitemap.md](../sitemap.md).

---

## Reguły zmian

Przed dotknięciem czegokolwiek, sprawdź tę tabelę:

1. **Zmiana w nav/footer** → musisz ruszyć **wszystkie 33 strony publiczne** (11 root + 1 odprawa + 21 kierunki). Nie zapomnij `.is-active` na navie (każda strona ma własny aktywny link). Pamiętaj o prefiksie `../` w `kierunki/*.html`.
2. **Zmiana numeru telefonu** → grep `698 753 941` ORAZ `784 362 268` (Łukasz + Sabina) — występują w nav mobile + footer + cta-block + kontakt.html + 21× w kierunki.
3. **Zmiana listy krajów w directions-grid** → footer flag (12 najważniejszych) ORAZ `directions-grid` (index + uslugi, 21 kart). Sekcja `directions-grid` MUSI być 1:1 między `index.html` a `uslugi.html` — zmień raz, skopiuj 1:1 do drugiego pliku. Diff = bug.
4. **Nowa strona** → skopiuj nav+footer z istniejącej. Dodaj link do nav we wszystkich pozostałych stronach (jeśli ma być w głównym menu). Dodaj do footera nawigacji. Ustaw `.is-active` lokalnie. Dla podstron w sub-folderze: prefix `../`.
5. **Nowa podstrona kierunkowa** → użyj `kierunki/hiszpania.html` jako wzorca (najbardziej kompletny). Dodaj kartę do `directions-grid` w `index.html` + `uslugi.html` (zsync 1:1). Sprawdź czy flaga kraju jest w CSS — jeśli nie, dodaj `.direction--xx .direction__flag { ... }`.
6. **Edycja CSS** → jeden `css/style.css`, BEM. Nie wstawiać inline `<style>` w nowych miejscach. Wciąż mamy inline `style="..."` w `o-nas.html` (2-kol layout) i `wycena.html` (paragraf footnote w odprawie celnej) — kandydaci do refaktoryzacji.
7. **Wycena (formularz)** → `js/main.js` zawiera obsługę. Sukces = redirect do `dziekujemy.html`.
8. **Treści klienta** → w `00 - Assets/SLF treści-2-kopia 2.docx` (najnowsza wersja z 27.05) i `SLF_Transport_Podstrony_SEO-kopia 2.docx`. Plan dopasowania treści: `docs/content-alignment-plan.md`.

---

## Plan dopasowania treści

Plik `docs/content-alignment-plan.md` — kompletny audyt + plan 9 etapów (zrealizowany 2026-05-27).
