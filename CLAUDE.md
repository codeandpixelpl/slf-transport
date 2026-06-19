# CLAUDE.md — SLF Transport (strona internetowa)

> **Przeczytaj PRZED dotknięciem czegokolwiek w tym folderze.**
> Pełna mapa komponentów współdzielonych i reguły zmian: [docs/architecture.md](docs/architecture.md)

## Co to za projekt

Statyczna strona dla SLF Transport — firma transportowo-przeprowadzkowa działająca w Europie (PL → DE/NL/BE/FR/AT/CH/IT/ES/DK/NO/UK/IE). Slogan: *"European Wide Removals — We Handle With Care"*.

- **Klient:** Łukasz (+48 698 753 941), Sabina (+48 784 362 268), office@slftransport.eu
- **Stack:** pure HTML/CSS/JS, brak build systemu. Docelowo prototyp → WordPress.
- **Cel konwersji:** formularz `/wycena` → `/dziekujemy`, click-to-call, e-mail.
- **Brief:** [brief.md](brief.md) · **Sitemap:** [sitemap.md](sitemap.md) · **Wireframe:** [wireframe-brief.md](wireframe-brief.md) · **Visual:** [visual-direction.md](visual-direction.md) · **QA:** [audit-quality.md](audit-quality.md)

## Preview lokalnie

```bash
cd "01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa"
python3 -m http.server 8767
# http://localhost:8767/index.html
```

## Strony

**Publiczne (9):** index, o-nas, uslugi, flota, jak-to-dziala, kontakt, wycena, dziekujemy, regulamin, polityka-prywatnosci, 404
**Wewnętrzne (NIE wdrażać, NIE linkować z nav):** prototypy.html (galeria mockupów), prezentacja-ia.html (output `/information-architecture`)

## Najczęstsze pułapki

- **Nav + footer to kopia-pasta na 9 stronach.** Zmiana telefonu / linku / kraju → musisz ruszyć każdy plik. Sprawdź tabelę w `docs/architecture.md` przed edycją.
- **`.is-active` na navie** ustawiana lokalnie na każdej stronie — przy dodawaniu nowej strony nie zapomnij.
- **Telefony są w 4 miejscach na każdej stronie:** mobile CTA bar, footer, cta-block, niektóre stronie kontakt — grep, nie ręczne wyszukiwanie.
- **CSS w jednym `css/style.css`** — BEM. Nie wstawiać inline `<style>`. Nie tworzyć drugiego pliku CSS.
- **`assets/` vs `00 - Assets/`** — `assets/` to to, co używa produkcyjna strona (logo SVG, img). `00 - Assets/` to surowe materiały od klienta (logo w 4 formatach, zdjęcia WhatsApp, SLF treści.docx). Nie linkuj z HTML do `00 - Assets/`.

## Architektura — kiedy do niej wracać

`docs/architecture.md` jest **źródłem prawdy** o tym co jest współdzielone vs unikalne. Wracaj do niej:

- Przed zmianą czegokolwiek w nav/footer/CTA
- Przy dodawaniu nowej strony (lista miejsc do uzupełnienia)
- Przy podmianie danych kontaktowych (lista grepów)
- Przy onboardingu nowego czatu / powrocie do projektu po przerwie
