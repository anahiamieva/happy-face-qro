# Plan de SEO — Happy Face Qro

> **Objetivo:** posicionar `happyfaceqro.com.mx` en los primeros resultados de Google para búsquedas de eventos infantiles, pintacaritas, talleres creativos, glitter bar y artículos personalizados en Querétaro.
>
> **Cómo está pensado este documento:** es un plan ejecutable paso a paso. Trae el contenido y el código ya escritos para que un modelo económico (ej. Claude Haiku) lo aplique "al pie de la letra", sin tener que inventar nada.

---

## INSTRUCCIONES PARA EL MODELO QUE EJECUTE ESTE PLAN

Lee esto antes de empezar:

1. **Copia el contenido textualmente.** No reescribas, no resumas, no "mejores" los textos ni el código. Están así a propósito (por SEO).
2. **Trabaja fase por fase, en orden.** No saltes fases. Al terminar cada fase, haz un commit de git con el mensaje indicado y espera confirmación del usuario antes de seguir.
3. **No borres archivos** salvo cuando el plan lo indique explícitamente.
4. **Si algo no coincide** (un archivo cambió, no encuentras un texto exacto, una ruta no existe) **detente y pregunta.** No improvises.
5. Las marcas **`[CONFIRMAR]`** son datos que el dueño debe revisar. Si encuentras una, úsala tal cual y avísale al usuario al final.
6. Rutas: el sitio es **HTML estático** (sin framework, sin build). Las páginas viven en archivos `.html`. Las páginas nuevas van en **carpetas** (ej. `pintacaritas-queretaro/index.html`) para que la URL quede limpia (`/pintacaritas-queretaro/`).

---

## EXPECTATIVAS REALISTAS (léelo, Luis)

- El trabajo de este plan deja la web **técnicamente lista para competir**. Hoy no lo está.
- Para las búsquedas locales tipo "eventos infantiles queretaro", lo que más mueve la aguja **no es la web, es el Perfil de Empresa de Google** (Google Business Profile). Anáhi **no tiene uno** y es **gratis**. Está en la sección **ACCIONES MANUALES** y es la tarea #1 en prioridad.
- Google no es instantáneo: después de publicar los cambios tarda de **días a varias semanas** en re-rastrear e indexar. Posicionar en el top suele tomar **1 a 3 meses** cuando la competencia es débil (que es tu caso).
- Nadie puede *garantizar* el puesto #1 (depende de Google), pero con competencia tan floja como la que vimos, las probabilidades son muy buenas si se ejecuta todo: web + Perfil de Empresa + reseñas + constancia.

---

## RESUMEN DE LA AUDITORÍA (qué está mal hoy)

### 🔴 Críticos

1. **Dominio inconsistente.** El sitio vive en `happyfaceqro.com.mx`, pero dentro de `index.html` las etiquetas `og:url`, `og:image` y el schema apuntan a `happyfaceqro.com` (sin `.mx`). Esto confunde a Google sobre cuál es el dominio real.
2. **Falta la etiqueta `canonical`.** Ninguna página le dice a Google cuál es su URL oficial.
3. **Imágenes gigantes.** Las 12 fotos pesan **~29 MB en total** (cada una ~2.5 MB; deberían pesar menos de 200 KB). Esto hace el sitio lento, y la velocidad es factor de posicionamiento. Es el problema de rendimiento #1.
4. **Sitio de una sola página.** Con una sola URL es casi imposible posicionar bien para búsquedas distintas (pintacaritas, talleres, glitter bar, personalizados). Hay que crear páginas dedicadas.
5. **No hay Perfil de Empresa de Google.** Por eso el negocio no aparece en el mapa ni en el "paquete local". (Acción manual, ver más abajo.)

### 🟡 Importantes

6. **`sitemap.xml` mal hecho.** Lista anclas (`/#servicios`, `/#galeria`...) como si fueran páginas. Google ignora los `#`, así que el sitemap está prácticamente vacío de páginas reales.
7. **Schema markup incompleto.** Tiene un **teléfono falso** (`+524421234567`; el real es `442 751 3785`), y le falta descripción, redes sociales, horario y zona de servicio.
8. **`<title>` y `<h1>` sin la palabra clave.** El `<h1>` actual ("¡Transformamos tu Fiesta en un Mundo de Color y Magia!") es bonito pero no contiene "eventos infantiles" ni "Querétaro", así que Google no entiende de qué es la página.
9. **No se mencionan los llaveros personalizados**, que sí son un servicio.
10. **Accesibilidad del formulario.** Las etiquetas `<label>` no están asociadas a sus campos (`for`/`id`). Google Lighthouse lo marca como error.

### 🟢 Lo que ya está bien (buen punto de partida)

- `robots.txt` correcto. Archivo de verificación de Google Search Console presente. Google Tag Manager instalado. Los textos `alt` de las imágenes ya están optimizados. Hay un solo `<h1>`. La galería usa `loading="lazy"`.

> ⚠️ **Nota detectada:** el sitio **en vivo** carga Google Tag Manager (`GTM-KC288C4D`), pero el `index.html` de la carpeta **no lo tiene**. Lo más probable es que Netlify lo inyecte automáticamente. Esto se confirma en la FASE 0.

---

## CÓMO EJECUTAR ESTE PLAN CON CLAUDE CODE

1. Abre una terminal en la carpeta del proyecto y ejecuta `claude`.
2. Para ejecutar este plan, **usa un modelo económico**: escribe `/model` y elige **Haiku**. Todo el contenido ya está redactado en este documento, así que el modelo solo necesita copiar y pegar.
3. Dale esta instrucción: *"Lee el archivo `PLAN-SEO-Happy-Face-Qro.md` y ejecuta únicamente la FASE 0. Al terminar, detente y muéstrame lo que hiciste."*
4. Avanza **una fase a la vez**. Después de cada fase, revisa el resultado y luego pídele la siguiente.
5. Para ver la web localmente mientras pruebas: abre `index.html` en el navegador, o usa una extensión tipo *Live Server*.
6. Al final, el modelo hará `git push`. **Netlify publica los cambios solos** en uno o dos minutos. Si algo sale mal, en Netlify puedes volver a un despliegue anterior ("rollback") sin perder nada.

---

## DATOS A CONFIRMAR ANTES DE EMPEZAR (para Luis y Anáhi)

Revisa esta lista. El plan ya trae valores por defecto razonables; ajústalos si hace falta.

- **Correo del negocio:** el `index.html` actual usa `hola@happyfaceqro.com`. Si ese correo no existe, el plan lo **quita** del schema. Si tienen un correo real, anótalo: `[CONFIRMAR — correo del negocio]`
- **Horario de atención:** el schema usará Lun–Dom 09:00–20:00. Ajústalo si atienden distinto: `[CONFIRMAR — horario]`
- **Zona base:** el schema usará coordenadas del centro de Querétaro. Si quieres, ajústalas a su colonia: `[CONFIRMAR — colonia/zona]`
- **Precios en las páginas nuevas:** el plan **sí** muestra los precios actuales ($1,800 pintacaritas, etc.). Si prefieren no mostrarlos, díganle al modelo que omita los párrafos de precio.

---

# FASE 0 — Preparación

**Commit al terminar:** `chore: preparación plan SEO`

### Tarea 0.1 — Respaldo y rama de trabajo

En la terminal, dentro de la carpeta del proyecto, ejecuta:

```bash
git status
git pull
git checkout -b seo-mejoras
```

Esto baja la última versión y crea una rama `seo-mejoras` para trabajar sin riesgo. (Si `git pull` da error porque no hay cambios remotos, continúa sin problema.)

### Tarea 0.2 — Confirmar de dónde sale Google Tag Manager

El sitio en vivo carga `GTM-KC288C4D` pero el `index.html` local no lo tiene.

**Pregúntale al usuario:** *"¿Google Tag Manager está configurado en Netlify (en Site settings → Build & deploy → Post processing → Snippet injection) o debería estar en el código HTML?"*

- Si responde **"está en Netlify"** o no está seguro → **NO** agregues GTM al HTML en ninguna fase (se duplicaría el rastreo). Es el caso más probable.
- Si responde **"debería estar en el código"** → cuando llegues a la FASE 2, agrega también el bloque GTM del **Apéndice C**.

Anota la respuesta y continúa.

---

# FASE 1 — Optimización de imágenes (rendimiento)

**Objetivo:** pasar de ~29 MB a menos de ~2 MB en imágenes, sin perder calidad visible.
**Commit al terminar:** `perf: imágenes a WebP y optimizadas`

### Tarea 1.1 — Convertir las PNG a WebP

Crea un archivo temporal llamado `convertir_webp.py` en la raíz del proyecto con **exactamente** este contenido:

```python
from PIL import Image
import os, glob

MAX_LADO = 1280   # lado máximo en píxeles
CALIDAD = 82

for png in glob.glob("*.png"):
    if png == "logo.png":      # el logo se queda en PNG
        continue
    im = Image.open(png).convert("RGB")
    w, h = im.size
    if max(w, h) > MAX_LADO:
        escala = MAX_LADO / max(w, h)
        im = im.resize((round(w*escala), round(h*escala)), Image.LANCZOS)
    salida = png.rsplit(".", 1)[0] + ".webp"
    im.save(salida, "webp", quality=CALIDAD, method=6)
    print(f"{png}  ->  {salida}   {os.path.getsize(salida)//1024} KB")
```

Luego ejecútalo:

```bash
pip3 install Pillow --break-system-packages
python3 convertir_webp.py
```

Deberías ver 12 archivos `.webp` nuevos, cada uno de ~60–180 KB. Cuando termine, **borra el script temporal**:

```bash
rm convertir_webp.py
```

### Tarea 1.2 — Actualizar las referencias de imágenes a `.webp`

En **`index.html`**, reemplaza **todas** las apariciones de `.png"` por `.webp"` (afecta el preload, las etiquetas Open Graph y las 12 imágenes de la galería). `logo.png` no aparece en `index.html`, así que no se toca.

> Usa una sustitución global de `.png"` → `.webp"` dentro de `index.html`.

En **`styles.css`**, busca esta línea (dentro de la regla `.hero`):

```css
    background: url('pintacaritas-queretaro-maquillaje-infantil.png') no-repeat center center/cover;
```

y reemplázala por:

```css
    background: url('pintacaritas-queretaro-maquillaje-infantil.webp') no-repeat center center/cover;
```

### Tarea 1.3 — Eliminar las PNG viejas (ya reemplazadas)

Abre `index.html` en el navegador y verifica que **todas las imágenes se vean bien**. Cuando lo confirmes, borra las PNG pesadas (el logo se conserva):

```bash
git rm animacion-eventos-infantiles-queretaro.png chef-lab-decoracion-cupcakes-queretaro.png diversion-garantizada-eventos-queretaro.png fashion-lab-actividades-ninos-queretaro.png fiesta-neon-maquillaje-queretaro.png funny-rally-juegos-fiestas-infantiles.png glitter-bar-eventos-bodas-queretaro.png glitter-bar-premium-queretaro.png maquillaje-artistico-infantil-queretaro.png pintacaritas-queretaro-maquillaje-infantil.png taller-arte-pintura-ninos-queretaro.png talleres-creativos-ninos-fiestas-queretaro.png
```

> Si alguna imagen **no** se ve bien, no borres nada: detente y avisa.

---

# FASE 2 — Correcciones técnicas en `index.html`

**Commit al terminar:** `seo: correcciones técnicas y on-page en la portada`

### Tarea 2.1 — Reemplazar todo el `<head>`

Abre `index.html`. Reemplaza **todo el bloque** que va desde `<head>` hasta `</head>` (incluidas ambas etiquetas) por **exactamente** esto:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO principal -->
    <title>Eventos Infantiles y Pintacaritas en Querétaro | Happy Face Qro</title>
    <meta name="description"
        content="Eventos infantiles en Querétaro: pintacaritas, talleres creativos, glitter bar y animación profesional para fiestas inolvidables. ¡Reserva por WhatsApp al 442 751 3785!">
    <link rel="canonical" href="https://happyfaceqro.com.mx/">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="Happy Face Qro">
    <meta name="geo.region" content="MX-QUE">
    <meta name="geo.placename" content="Santiago de Querétaro">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="Happy Face Qro">
    <meta property="og:url" content="https://happyfaceqro.com.mx/">
    <meta property="og:title" content="Eventos Infantiles y Pintacaritas en Querétaro | Happy Face Qro">
    <meta property="og:description"
        content="Pintacaritas, talleres creativos, glitter bar y animación profesional para fiestas infantiles en Querétaro.">
    <meta property="og:image" content="https://happyfaceqro.com.mx/pintacaritas-queretaro-maquillaje-infantil.webp">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Eventos Infantiles y Pintacaritas en Querétaro | Happy Face Qro">
    <meta name="twitter:description"
        content="Pintacaritas, talleres creativos y glitter bar para fiestas infantiles en Querétaro.">
    <meta name="twitter:image" content="https://happyfaceqro.com.mx/pintacaritas-queretaro-maquillaje-infantil.webp">

    <!-- Preload de la imagen principal (mejora velocidad de carga) -->
    <link rel="preload" as="image" href="/pintacaritas-queretaro-maquillaje-infantil.webp">

    <!-- Schema Markup: LocalBusiness -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://happyfaceqro.com.mx/#happyfaceqro",
      "name": "Happy Face Qro",
      "description": "Eventos infantiles en Querétaro: pintacaritas profesional, talleres creativos, glitter bar y animación para fiestas inolvidables.",
      "url": "https://happyfaceqro.com.mx/",
      "telephone": "+524427513785",
      "image": "https://happyfaceqro.com.mx/pintacaritas-queretaro-maquillaje-infantil.webp",
      "logo": "https://happyfaceqro.com.mx/logo.png",
      "priceRange": "$$",
      "currenciesAccepted": "MXN",
      "paymentAccepted": "Efectivo, Transferencia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago de Querétaro",
        "addressRegion": "Querétaro",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.5888,
        "longitude": -100.3899
      },
      "areaServed": [
        { "@type": "City", "name": "Santiago de Querétaro" },
        { "@type": "City", "name": "El Marqués" },
        { "@type": "City", "name": "Corregidora" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
        "https://www.instagram.com/happyfaceqro/",
        "https://www.facebook.com/p/Happy-Face-Qro-100071186373246/",
        "https://www.tiktok.com/@happy.face.qro"
      ]
    }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Outfit:wght@300;400;600;800&display=swap"
        rel="stylesheet">

    <!-- Estilos -->
    <link rel="stylesheet" href="/styles.css">

    <!-- Iconos (Phosphor Icons) -->
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
</head>
```

> **Datos a revisar en este bloque:** el horario (`opens`/`closes`) y las coordenadas (`latitude`/`longitude`). El schema **no incluye correo** a propósito; si Anáhi tiene un correo de negocio real, agrega `"email": "su-correo-aqui",` justo después de la línea de `"telephone"`.

### Tarea 2.2 — Mejorar el `<h1>` de la portada

En `index.html`, busca este bloque:

```html
            <h1>¡Transformamos tu Fiesta en un Mundo de <span class="text-gradient">Color</span> y <span
                    class="text-gradient-2">Magia!</span></h1>
            <p>Pintacaritas profesional, barra de brillo, y maquillaje festivo para crear recuerdos inolvidables en
                Querétaro.</p>
```

y reemplázalo por:

```html
            <h1>Eventos Infantiles y Pintacaritas en <span class="text-gradient-2">Querétaro</span></h1>
            <p>Pintacaritas profesional, talleres creativos, glitter bar y animación que transforman tu fiesta en un
                mundo de color y magia. ¡Diversión garantizada para los peques!</p>
```

### Tarea 2.3 — Reemplazar la barra de navegación

En `index.html`, busca el bloque `<nav class="navbar">` ... `</nav>` y reemplázalo **completo** por:

```html
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="ph-fill ph-sparkle"></i> Happy Face Qro
            </a>
            <div class="nav-links">
                <a href="/pintacaritas-queretaro/">Pintacaritas</a>
                <a href="/talleres-creativos-ninos-queretaro/">Talleres</a>
                <a href="/glitter-bar-queretaro/">Glitter Bar</a>
                <a href="/recuerdos-personalizados-queretaro/">Personalizados</a>
                <a href="/#contacto">Contacto</a>
                <a href="/#reservar" class="btn-primary-small">¡Reserva Ahora!</a>
            </div>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </nav>
```

### Tarea 2.4 — Reemplazar el pie de página (footer)

En `index.html`, busca el bloque `<footer class="footer">` ... `</footer>` y reemplázalo **completo** por:

```html
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <i class="ph-fill ph-sparkle"></i> Happy Face Qro
                </div>
                <nav class="footer-links" aria-label="Servicios">
                    <a href="/">Inicio</a>
                    <a href="/pintacaritas-queretaro/">Pintacaritas Querétaro</a>
                    <a href="/talleres-creativos-ninos-queretaro/">Talleres Creativos</a>
                    <a href="/glitter-bar-queretaro/">Glitter Bar Querétaro</a>
                    <a href="/recuerdos-personalizados-queretaro/">Recuerdos Personalizados</a>
                </nav>
                <div class="footer-social">
                    <a href="https://www.facebook.com/p/Happy-Face-Qro-100071186373246/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook"><i
                            class="ph-logo ph-facebook-logo"></i></a>
                    <a href="https://www.instagram.com/happyfaceqro/" target="_blank" rel="noopener" aria-label="Instagram"><i
                            class="ph-logo ph-instagram-logo"></i></a>
                    <a href="https://www.tiktok.com/@happy.face.qro" target="_blank" rel="noopener" aria-label="TikTok"><i class="ph-logo ph-tiktok-logo"></i></a>
                </div>
                <p class="copyright">© 2026 Happy Face Qro · Eventos infantiles en Querétaro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
```

### Tarea 2.5 — Corregir la accesibilidad del formulario

En `index.html`, dentro del formulario de contacto, asocia cada `<label>` con su campo agregando el atributo `for`. Haz estos 5 reemplazos:

| Busca | Reemplaza por |
|---|---|
| `<label>Nombre Completo</label>` | `<label for="name">Nombre Completo</label>` |
| `<label>Teléfono / WhatsApp</label>` | `<label for="phone">Teléfono / WhatsApp</label>` |
| `<label>Fecha del Evento</label>` | `<label for="date">Fecha del Evento</label>` |
| `<label>Servicio de Interés</label>` | `<label for="service">Servicio de Interés</label>` |
| `<label>Detalles Adicionales</label>` | `<label for="details">Detalles Adicionales</label>` |

### Tarea 2.6 — Enlaces internos contextuales en la portada

En `index.html`, busca esta línea:

```html
                <p class="category-description">Experiencias únicas donde los niños crean y se llevan su obra.</p>
```

y **justo debajo** agrega esta línea nueva:

```html
                <p class="category-description"><a href="/talleres-creativos-ninos-queretaro/" style="color:var(--primary);font-weight:600;">Ver todo sobre nuestros talleres creativos para niños en Querétaro →</a></p>
```

Después busca esta línea:

```html
                <p class="category-description">Los favoritos que nunca fallan.</p>
```

y **justo debajo** agrega:

```html
                <p class="category-description"><a href="/pintacaritas-queretaro/" style="color:var(--primary);font-weight:600;">Pintacaritas en Querétaro</a> · <a href="/glitter-bar-queretaro/" style="color:var(--primary);font-weight:600;">Glitter Bar en Querétaro</a></p>
```

### Tarea 2.7 — Ajustar el idioma del documento

En `index.html`, en la primera línea de contenido, reemplaza:

```html
<html lang="es">
```

por:

```html
<html lang="es-MX">
```

---

# FASE 3 — Páginas nuevas por palabra clave

**Objetivo:** crear 4 páginas dedicadas para posicionar cada grupo de búsquedas.
**Commit al terminar:** `feat: páginas de servicio para SEO local`

Páginas a crear (cada una en su carpeta):

| Carpeta / URL | Palabra clave principal |
|---|---|
| `pintacaritas-queretaro/index.html` | pintacaritas Querétaro |
| `talleres-creativos-ninos-queretaro/index.html` | talleres creativos para niños Querétaro |
| `glitter-bar-queretaro/index.html` | glitter bar Querétaro |
| `recuerdos-personalizados-queretaro/index.html` | llaveros / gorras / tote bags personalizados Querétaro |

### Tarea 3.0 — Agregar estilos para las páginas nuevas

Abre `styles.css` y **agrega al final del archivo** este bloque completo:

```css

/* ===================================================== */
/*  Páginas internas de servicios (SEO)                  */
/* ===================================================== */
.page-hero {
    position: relative;
    min-height: 56vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: calc(var(--header-height) + 60px) 20px 60px;
    background-size: cover;
    background-position: center;
}
.page-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.66));
}
.page-hero .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 820px;
}
.page-hero h1 {
    font-size: 3.1rem;
    line-height: 1.1;
    margin-bottom: 16px;
    color: var(--dark);
}
.page-hero p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 28px;
}
.breadcrumb {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 14px;
}
.breadcrumb a {
    color: var(--primary);
    font-weight: 600;
}
.prose {
    max-width: 820px;
    margin: 0 auto;
}
.prose h2 {
    font-size: 2rem;
    color: var(--dark);
    margin: 36px 0 14px;
}
.prose h2:first-child {
    margin-top: 0;
}
.prose h3 {
    font-size: 1.3rem;
    color: var(--secondary);
    margin: 24px 0 8px;
}
.prose p {
    margin-bottom: 16px;
    color: #444;
}
.prose ul {
    margin: 0 0 18px 20px;
    color: #444;
}
.prose li {
    margin-bottom: 8px;
}
.prose strong {
    color: var(--dark);
}
.faq {
    max-width: 820px;
    margin: 0 auto;
}
.faq details {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    padding: 18px 22px;
    margin-bottom: 14px;
}
.faq summary {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--dark);
    list-style: none;
}
.faq summary::-webkit-details-marker {
    display: none;
}
.faq summary::after {
    content: " +";
    color: var(--primary);
    float: right;
}
.faq details[open] summary::after {
    content: " –";
}
.faq details[open] summary {
    color: var(--primary);
    margin-bottom: 10px;
}
.faq details p {
    color: #555;
    margin: 0;
}
.cta-final {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}
.cta-final h2 {
    font-size: 2.2rem;
    margin-bottom: 14px;
    color: var(--dark);
}
.cta-final p {
    color: #666;
    margin-bottom: 26px;
}
.footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 22px;
    justify-content: center;
}
.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
}
.footer-links a:hover {
    color: var(--primary);
}
@media (max-width: 768px) {
    .page-hero h1 {
        font-size: 2.2rem;
    }
    .prose h2 {
        font-size: 1.6rem;
    }
}
```

### Tarea 3.1 — Crear la página de Pintacaritas

Crea la carpeta `pintacaritas-queretaro/` y dentro un archivo `index.html` con **exactamente** este contenido. **Esta es la página modelo**: las siguientes 3 usan la misma estructura.

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pintacaritas en Querétaro para Fiestas Infantiles | Happy Face Qro</title>
    <meta name="description"
        content="Servicio de pintacaritas profesional en Querétaro para fiestas infantiles. Maquillaje hipoalergénico, diseños de princesas, superhéroes y animales. Reserva al 442 751 3785.">
    <link rel="canonical" href="https://happyfaceqro.com.mx/pintacaritas-queretaro/">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="geo.region" content="MX-QUE">
    <meta name="geo.placename" content="Santiago de Querétaro">

    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="Happy Face Qro">
    <meta property="og:url" content="https://happyfaceqro.com.mx/pintacaritas-queretaro/">
    <meta property="og:title" content="Pintacaritas en Querétaro para Fiestas Infantiles | Happy Face Qro">
    <meta property="og:description"
        content="Pintacaritas profesional en Querétaro: maquillaje hipoalergénico y diseños para niñas y niños.">
    <meta property="og:image" content="https://happyfaceqro.com.mx/pintacaritas-queretaro-maquillaje-infantil.webp">

    <link rel="preload" as="image" href="/pintacaritas-queretaro-maquillaje-infantil.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Pintacaritas en Querétaro",
          "serviceType": "Pintacaritas para fiestas infantiles",
          "provider": { "@id": "https://happyfaceqro.com.mx/#happyfaceqro" },
          "areaServed": { "@type": "City", "name": "Santiago de Querétaro" },
          "description": "Servicio profesional de pintacaritas y maquillaje artístico infantil para fiestas y eventos en Querétaro.",
          "url": "https://happyfaceqro.com.mx/pintacaritas-queretaro/",
          "offers": { "@type": "Offer", "price": "1800", "priceCurrency": "MXN" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://happyfaceqro.com.mx/" },
            { "@type": "ListItem", "position": 2, "name": "Pintacaritas en Querétaro", "item": "https://happyfaceqro.com.mx/pintacaritas-queretaro/" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuánto cuesta el servicio de pintacaritas en Querétaro?", "acceptedAnswer": { "@type": "Answer", "text": "El paquete de pintacaritas tiene un costo de $1,800 por 2 horas de servicio con una maquillista profesional. El precio puede variar si amplías el tiempo o el número de niños." } },
            { "@type": "Question", "name": "¿Cuánto dura el servicio de pintacaritas?", "acceptedAnswer": { "@type": "Answer", "text": "El servicio estándar es de 2 horas continuas, suficiente para maquillar cómodamente a los invitados de una fiesta infantil. Se puede ampliar según el tamaño del evento." } },
            { "@type": "Question", "name": "¿La pintura es segura para la piel de los niños?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usamos pinturas de grado cosmético, hipoalergénicas y aptas para piel sensible. Se retiran fácilmente con agua y jabón." } },
            { "@type": "Question", "name": "¿Con cuánta anticipación debo reservar?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos reservar con al menos 2 a 3 semanas de anticipación, sobre todo en fines de semana y temporada alta, para asegurar la fecha." } },
            { "@type": "Question", "name": "¿Llegan hasta el lugar del evento?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, llevamos todo el material hasta la sede de tu fiesta dentro de Querétaro y zonas conurbadas." } }
          ]
        }
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Outfit:wght@300;400;600;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
</head>

<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="ph-fill ph-sparkle"></i> Happy Face Qro
            </a>
            <div class="nav-links">
                <a href="/pintacaritas-queretaro/">Pintacaritas</a>
                <a href="/talleres-creativos-ninos-queretaro/">Talleres</a>
                <a href="/glitter-bar-queretaro/">Glitter Bar</a>
                <a href="/recuerdos-personalizados-queretaro/">Personalizados</a>
                <a href="/#contacto">Contacto</a>
                <a href="/#reservar" class="btn-primary-small">¡Reserva Ahora!</a>
            </div>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </nav>

    <header class="page-hero" style="background-image:url('/pintacaritas-queretaro-maquillaje-infantil.webp')">
        <div class="hero-inner">
            <nav class="breadcrumb" aria-label="Ruta de navegación">
                <a href="/">Inicio</a> › Pintacaritas en Querétaro
            </nav>
            <h1>Pintacaritas en Querétaro</h1>
            <p>Maquillaje artístico profesional para fiestas infantiles, eventos escolares y celebraciones. Diseños que
                enamoran a niñas y niños.</p>
            <div class="hero-buttons">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20pintacaritas"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Reservar por WhatsApp
                </a>
                <a href="/#servicios" class="btn-secondary">Ver todos los servicios</a>
            </div>
        </div>
    </header>

    <section class="section">
        <div class="container prose">
            <h2>Pintacaritas profesional para fiestas infantiles en Querétaro</h2>
            <p>En Happy Face Qro convertimos cada celebración en una experiencia mágica. Nuestro servicio de
                <strong>pintacaritas en Querétaro</strong> está pensado para fiestas infantiles, cumpleaños, eventos
                escolares, kermeses, posadas y celebraciones familiares. Llegamos hasta el lugar de tu evento con todo
                el material listo para que niñas y niños se transformen en sus personajes favoritos.</p>

            <h2>¿Qué incluye nuestro servicio de pintacaritas?</h2>
            <ul>
                <li>Maquillista profesional especializada en pintacaritas y maquillaje artístico infantil.</li>
                <li>2 horas de servicio continuas, con opción a ampliar.</li>
                <li>Catálogo amplio de diseños para niñas y niños.</li>
                <li>Aplicación de piedras, brillos y blings para un acabado espectacular.</li>
                <li>Todo el material y los productos incluidos.</li>
            </ul>

            <h2>Diseños para todos los gustos</h2>
            <p>Nuestro catálogo incluye princesas, mariposas, unicornios, superhéroes, animalitos, dragones, calaveritas
                y diseños de fantasía. Si tu fiesta tiene una temática específica, la adaptamos para que todo combine a
                la perfección.</p>

            <h2>Productos seguros e hipoalergénicos</h2>
            <p>La seguridad de los peques es lo primero. Trabajamos con pinturas de <strong>grado cosmético,
                hipoalergénicas</strong> y fáciles de retirar con agua y jabón. Son aptas para piel sensible y cumplen
                con las normas de seguridad para uso en niños.</p>

            <h2>Zonas de Querétaro donde damos servicio</h2>
            <p>Damos servicio de pintacaritas en toda la ciudad de Santiago de Querétaro y zonas conurbadas: Juriquilla,
                El Refugio, Milenio III, Centro Histórico, Cimatario y El Mirador, así como en los municipios de El
                Marqués y Corregidora. Si tu evento es fuera de estas zonas, escríbenos y lo revisamos.</p>

            <h2>Precio del servicio de pintacaritas en Querétaro</h2>
            <p>Nuestro paquete de pintacaritas tiene un costo de <strong>$1,800</strong> e incluye 2 horas de servicio
                con maquillista profesional. Para grupos grandes puedes ampliar el tiempo o el número de niños con un
                costo adicional. ¿Quieres una experiencia más completa? Combínalo con nuestros
                <a href="/talleres-creativos-ninos-queretaro/">talleres creativos</a> o el
                <a href="/glitter-bar-queretaro/">glitter bar</a>.</p>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>Preguntas <span class="text-gradient-2">frecuentes</span></h2>
                <p>Todo lo que necesitas saber sobre nuestro servicio de pintacaritas</p>
            </div>
            <div class="faq">
                <details>
                    <summary>¿Cuánto cuesta el servicio de pintacaritas en Querétaro?</summary>
                    <p>El paquete de pintacaritas tiene un costo de $1,800 por 2 horas de servicio con una maquillista
                        profesional. El precio puede variar si amplías el tiempo o el número de niños.</p>
                </details>
                <details>
                    <summary>¿Cuánto dura el servicio de pintacaritas?</summary>
                    <p>El servicio estándar es de 2 horas continuas, suficiente para maquillar cómodamente a los
                        invitados de una fiesta infantil. Se puede ampliar según el tamaño del evento.</p>
                </details>
                <details>
                    <summary>¿La pintura es segura para la piel de los niños?</summary>
                    <p>Sí. Usamos pinturas de grado cosmético, hipoalergénicas y aptas para piel sensible. Se retiran
                        fácilmente con agua y jabón.</p>
                </details>
                <details>
                    <summary>¿Con cuánta anticipación debo reservar?</summary>
                    <p>Recomendamos reservar con al menos 2 a 3 semanas de anticipación, sobre todo en fines de semana y
                        temporada alta, para asegurar la fecha.</p>
                </details>
                <details>
                    <summary>¿Llegan hasta el lugar del evento?</summary>
                    <p>Sí, llevamos todo el material hasta la sede de tu fiesta dentro de Querétaro y zonas conurbadas.</p>
                </details>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container cta-final">
            <h2>¿Lista tu fiesta? Reserva tu <span class="text-gradient">pintacaritas</span></h2>
            <p>Aparta tu fecha hoy mismo. Escríbenos por WhatsApp y con gusto te ayudamos a planear una celebración
                inolvidable en Querétaro.</p>
            <div class="hero-buttons" style="justify-content:center">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20pintacaritas"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Escribir por WhatsApp
                </a>
                <a href="/#reservar" class="btn-secondary">Llenar formulario</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <i class="ph-fill ph-sparkle"></i> Happy Face Qro
                </div>
                <nav class="footer-links" aria-label="Servicios">
                    <a href="/">Inicio</a>
                    <a href="/pintacaritas-queretaro/">Pintacaritas Querétaro</a>
                    <a href="/talleres-creativos-ninos-queretaro/">Talleres Creativos</a>
                    <a href="/glitter-bar-queretaro/">Glitter Bar Querétaro</a>
                    <a href="/recuerdos-personalizados-queretaro/">Recuerdos Personalizados</a>
                </nav>
                <div class="footer-social">
                    <a href="https://www.facebook.com/p/Happy-Face-Qro-100071186373246/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook"><i class="ph-logo ph-facebook-logo"></i></a>
                    <a href="https://www.instagram.com/happyfaceqro/" target="_blank" rel="noopener" aria-label="Instagram"><i class="ph-logo ph-instagram-logo"></i></a>
                    <a href="https://www.tiktok.com/@happy.face.qro" target="_blank" rel="noopener" aria-label="TikTok"><i class="ph-logo ph-tiktok-logo"></i></a>
                </div>
                <p class="copyright">© 2026 Happy Face Qro · Eventos infantiles en Querétaro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>

</html>
```

> **Nota sobre las páginas 3.2, 3.3 y 3.4:** son idénticas en estructura a la de Pintacaritas. Para crearlas, **copia el archivo completo de arriba** y reemplaza únicamente: (a) el bloque `<head>` completo, (b) el contenido del `<header class="page-hero">`, (c) el contenido del `<section class="section">` con la clase `prose`, y (d) el contenido del `<section class="section section-light">` (FAQ) y del `<section class="section">` final (CTA). El `<nav>`, el `<footer>` y los `<script>` quedan **igual**.

### Tarea 3.2 — Crear la página de Talleres Creativos

Crea la carpeta `talleres-creativos-ninos-queretaro/` y dentro un archivo `index.html` con **exactamente** este contenido:

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Talleres Creativos para Niños en Querétaro | Happy Face Qro</title>
    <meta name="description"
        content="Talleres creativos para fiestas infantiles en Querétaro: los niños decoran gorras, tote bags, cupcakes y pulseras y se llevan su creación. Reserva al 442 751 3785.">
    <link rel="canonical" href="https://happyfaceqro.com.mx/talleres-creativos-ninos-queretaro/">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="geo.region" content="MX-QUE">
    <meta name="geo.placename" content="Santiago de Querétaro">

    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="Happy Face Qro">
    <meta property="og:url" content="https://happyfaceqro.com.mx/talleres-creativos-ninos-queretaro/">
    <meta property="og:title" content="Talleres Creativos para Niños en Querétaro | Happy Face Qro">
    <meta property="og:description"
        content="Talleres creativos para fiestas infantiles en Querétaro: cada niño crea y se lleva su obra.">
    <meta property="og:image" content="https://happyfaceqro.com.mx/talleres-creativos-ninos-fiestas-queretaro.webp">

    <link rel="preload" as="image" href="/talleres-creativos-ninos-fiestas-queretaro.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Talleres creativos para niños en Querétaro",
          "serviceType": "Talleres creativos para fiestas infantiles",
          "provider": { "@id": "https://happyfaceqro.com.mx/#happyfaceqro" },
          "areaServed": { "@type": "City", "name": "Santiago de Querétaro" },
          "description": "Talleres creativos para fiestas infantiles en Querétaro: decoración de gorras, tote bags, cupcakes, pulseras y pintura en lienzo.",
          "url": "https://happyfaceqro.com.mx/talleres-creativos-ninos-queretaro/"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://happyfaceqro.com.mx/" },
            { "@type": "ListItem", "position": 2, "name": "Talleres creativos para niños en Querétaro", "item": "https://happyfaceqro.com.mx/talleres-creativos-ninos-queretaro/" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué edades pueden participar en los talleres?", "acceptedAnswer": { "@type": "Answer", "text": "Nuestros talleres están diseñados para niños en edad de fiestas infantiles, normalmente de 4 a 12 años. El facilitador adapta la actividad al grupo." } },
            { "@type": "Question", "name": "¿Los niños se llevan lo que hacen en el taller?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. La gracia del taller es que cada niño crea algo propio (una gorra, una pulsera, un cupcake o un cuadro) y se lo lleva como recuerdo de la fiesta." } },
            { "@type": "Question", "name": "¿El material está incluido?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, todos nuestros talleres incluyen el material, las decoraciones y el facilitador experto. Tú solo pones el espacio." } },
            { "@type": "Question", "name": "¿Cuántos niños pueden participar en un taller?", "acceptedAnswer": { "@type": "Answer", "text": "Depende del taller: entre 15 y 20 niños. Para grupos más grandes podemos ampliar el cupo con un costo adicional." } },
            { "@type": "Question", "name": "¿Llegan hasta el lugar del evento?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, llevamos todo el montaje hasta la sede de tu fiesta en Querétaro y zonas conurbadas." } }
          ]
        }
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Outfit:wght@300;400;600;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
</head>

<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="ph-fill ph-sparkle"></i> Happy Face Qro
            </a>
            <div class="nav-links">
                <a href="/pintacaritas-queretaro/">Pintacaritas</a>
                <a href="/talleres-creativos-ninos-queretaro/">Talleres</a>
                <a href="/glitter-bar-queretaro/">Glitter Bar</a>
                <a href="/recuerdos-personalizados-queretaro/">Personalizados</a>
                <a href="/#contacto">Contacto</a>
                <a href="/#reservar" class="btn-primary-small">¡Reserva Ahora!</a>
            </div>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </nav>

    <header class="page-hero" style="background-image:url('/talleres-creativos-ninos-fiestas-queretaro.webp')">
        <div class="hero-inner">
            <nav class="breadcrumb" aria-label="Ruta de navegación">
                <a href="/">Inicio</a> › Talleres creativos para niños en Querétaro
            </nav>
            <h1>Talleres Creativos para Niños y Fiestas Infantiles en Querétaro</h1>
            <p>Experiencias donde cada niño crea, juega y se lleva a casa su propia obra. Decora gorras, tote bags,
                cupcakes, pulseras y mucho más.</p>
            <div class="hero-buttons">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20talleres%20creativos"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Reservar por WhatsApp
                </a>
                <a href="/#servicios" class="btn-secondary">Ver todos los servicios</a>
            </div>
        </div>
    </header>

    <section class="section">
        <div class="container prose">
            <h2>Talleres creativos para fiestas infantiles en Querétaro</h2>
            <p>Los <strong>talleres creativos</strong> de Happy Face Qro son actividades guiadas donde los invitados se
                convierten en los protagonistas. En lugar de solo mirar, los niños crean con sus propias manos y se
                llevan un recuerdo único de la fiesta. Son ideales para cumpleaños, eventos escolares, posadas y
                celebraciones en Querétaro.</p>

            <h2>Nuestros talleres</h2>
            <h3>Creative Lab — Diseño de gorras, tote bags y neceseres</h3>
            <p>Los niños personalizan su propia gorra, tote bag o neceser con parches, pines y decoraciones. Incluye
                montaje premium de mesa creativa y facilitador experto. Para grupos de hasta 15 niños.</p>
            <h3>Fashion Lab — Pulseras y lentes decorados</h3>
            <p>Una estación súper chic con cuentas, dijes y charms premium para crear pulseras y decorar lentes. Hasta
                15 niños, con facilitador incluido.</p>
            <h3>Artist Time — Pintura en caballete</h3>
            <p>Instalación tipo estudio de arte con pinturas, pinceles, mandiles y lienzos para que los niños pinten su
                obra maestra. Hasta 20 niños.</p>
            <h3>Chef Lab — Decoración de cupcakes</h3>
            <p>Una experiencia deliciosa: los pequeños decoran cupcakes y brochetas con toppings y chispas, con mandiles
                de chef incluidos. Hasta 15 niños.</p>

            <h2>¿Por qué elegir nuestros talleres?</h2>
            <ul>
                <li>Material de calidad incluido en cada taller.</li>
                <li>Facilitadores expertos que guían toda la actividad.</li>
                <li>Montajes vistosos, perfectos para las fotos del evento.</li>
                <li>Cada niño se lleva su creación como recuerdo.</li>
                <li>Adaptamos la temática y los colores a tu fiesta.</li>
            </ul>

            <h2>Precios y duración</h2>
            <p>Cada taller dura 1.5 horas. Precios: <strong>Creative Lab $5,000</strong>, <strong>Chef Lab
                $5,000</strong>, <strong>Fashion Lab $4,000</strong> y <strong>Artist Time $3,500</strong>. ¿Quieres la
                experiencia completa? El paquete Full Party combina
                <a href="/pintacaritas-queretaro/">pintacaritas</a> + un taller + rally por $7,000.</p>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>Preguntas <span class="text-gradient-2">frecuentes</span></h2>
                <p>Todo lo que necesitas saber sobre nuestros talleres creativos</p>
            </div>
            <div class="faq">
                <details>
                    <summary>¿Qué edades pueden participar en los talleres?</summary>
                    <p>Nuestros talleres están diseñados para niños en edad de fiestas infantiles, normalmente de 4 a 12
                        años. El facilitador adapta la actividad al grupo.</p>
                </details>
                <details>
                    <summary>¿Los niños se llevan lo que hacen en el taller?</summary>
                    <p>Sí. La gracia del taller es que cada niño crea algo propio (una gorra, una pulsera, un cupcake o
                        un cuadro) y se lo lleva como recuerdo de la fiesta.</p>
                </details>
                <details>
                    <summary>¿El material está incluido?</summary>
                    <p>Sí, todos nuestros talleres incluyen el material, las decoraciones y el facilitador experto. Tú
                        solo pones el espacio.</p>
                </details>
                <details>
                    <summary>¿Cuántos niños pueden participar en un taller?</summary>
                    <p>Depende del taller: entre 15 y 20 niños. Para grupos más grandes podemos ampliar el cupo con un
                        costo adicional.</p>
                </details>
                <details>
                    <summary>¿Llegan hasta el lugar del evento?</summary>
                    <p>Sí, llevamos todo el montaje hasta la sede de tu fiesta en Querétaro y zonas conurbadas.</p>
                </details>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container cta-final">
            <h2>Reserva un <span class="text-gradient">taller creativo</span> para tu fiesta</h2>
            <p>Escríbenos por WhatsApp con la fecha y el tipo de evento, y te ayudamos a elegir el taller perfecto para
                tus invitados.</p>
            <div class="hero-buttons" style="justify-content:center">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20talleres%20creativos"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Escribir por WhatsApp
                </a>
                <a href="/#reservar" class="btn-secondary">Llenar formulario</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <i class="ph-fill ph-sparkle"></i> Happy Face Qro
                </div>
                <nav class="footer-links" aria-label="Servicios">
                    <a href="/">Inicio</a>
                    <a href="/pintacaritas-queretaro/">Pintacaritas Querétaro</a>
                    <a href="/talleres-creativos-ninos-queretaro/">Talleres Creativos</a>
                    <a href="/glitter-bar-queretaro/">Glitter Bar Querétaro</a>
                    <a href="/recuerdos-personalizados-queretaro/">Recuerdos Personalizados</a>
                </nav>
                <div class="footer-social">
                    <a href="https://www.facebook.com/p/Happy-Face-Qro-100071186373246/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook"><i class="ph-logo ph-facebook-logo"></i></a>
                    <a href="https://www.instagram.com/happyfaceqro/" target="_blank" rel="noopener" aria-label="Instagram"><i class="ph-logo ph-instagram-logo"></i></a>
                    <a href="https://www.tiktok.com/@happy.face.qro" target="_blank" rel="noopener" aria-label="TikTok"><i class="ph-logo ph-tiktok-logo"></i></a>
                </div>
                <p class="copyright">© 2026 Happy Face Qro · Eventos infantiles en Querétaro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>

</html>
```

### Tarea 3.3 — Crear la página de Glitter Bar

Crea la carpeta `glitter-bar-queretaro/` y dentro un archivo `index.html` con **exactamente** este contenido:

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Glitter Bar en Querétaro para Fiestas, Bodas y XV | Happy Face Qro</title>
    <meta name="description"
        content="Glitter Bar y barra de brillos en Querétaro para fiestas infantiles, XV años, bodas y eventos. Maquillaje con gemas, brillos y diseños neón. Reserva al 442 751 3785.">
    <link rel="canonical" href="https://happyfaceqro.com.mx/glitter-bar-queretaro/">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="geo.region" content="MX-QUE">
    <meta name="geo.placename" content="Santiago de Querétaro">

    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="Happy Face Qro">
    <meta property="og:url" content="https://happyfaceqro.com.mx/glitter-bar-queretaro/">
    <meta property="og:title" content="Glitter Bar en Querétaro para Fiestas, Bodas y XV | Happy Face Qro">
    <meta property="og:description"
        content="Barra de brillos y maquillaje neón en Querétaro para fiestas infantiles, XV años y bodas.">
    <meta property="og:image" content="https://happyfaceqro.com.mx/glitter-bar-premium-queretaro.webp">

    <link rel="preload" as="image" href="/glitter-bar-premium-queretaro.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Glitter Bar en Querétaro",
          "serviceType": "Glitter Bar y barra de brillos para eventos",
          "provider": { "@id": "https://happyfaceqro.com.mx/#happyfaceqro" },
          "areaServed": { "@type": "City", "name": "Santiago de Querétaro" },
          "description": "Glitter Bar y barra de brillos en Querétaro para fiestas infantiles, XV años, bodas y eventos.",
          "url": "https://happyfaceqro.com.mx/glitter-bar-queretaro/",
          "offers": { "@type": "Offer", "price": "3500", "priceCurrency": "MXN" }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://happyfaceqro.com.mx/" },
            { "@type": "ListItem", "position": 2, "name": "Glitter Bar en Querétaro", "item": "https://happyfaceqro.com.mx/glitter-bar-queretaro/" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuánto cuesta un Glitter Bar en Querétaro?", "acceptedAnswer": { "@type": "Answer", "text": "El paquete Classic cuesta $3,500 (2 horas) y el Premium $5,800 (3 horas). El precio puede ajustarse según el número de invitados." } },
            { "@type": "Question", "name": "¿Los brillos son seguros para la piel?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, usamos brillos de grado cosmético, aptos para la piel y la zona del rostro. Se retiran fácilmente." } },
            { "@type": "Question", "name": "¿El Glitter Bar funciona para bodas y XV años?", "acceptedAnswer": { "@type": "Answer", "text": "Claro. Es una de nuestras atracciones más solicitadas para XV años, bodas y eventos de adultos, no solo para fiestas infantiles." } },
            { "@type": "Question", "name": "¿Para cuántas personas alcanza el servicio?", "acceptedAnswer": { "@type": "Answer", "text": "El Classic está pensado para 30 a 40 personas y el Premium para 60 a 80. Para grupos más grandes lo cotizamos a tu medida." } },
            { "@type": "Question", "name": "¿Llevan todo el montaje al evento?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, llevamos la barra, la decoración y todo el material hasta tu evento en Querétaro y alrededores." } }
          ]
        }
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Outfit:wght@300;400;600;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
</head>

<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="ph-fill ph-sparkle"></i> Happy Face Qro
            </a>
            <div class="nav-links">
                <a href="/pintacaritas-queretaro/">Pintacaritas</a>
                <a href="/talleres-creativos-ninos-queretaro/">Talleres</a>
                <a href="/glitter-bar-queretaro/">Glitter Bar</a>
                <a href="/recuerdos-personalizados-queretaro/">Personalizados</a>
                <a href="/#contacto">Contacto</a>
                <a href="/#reservar" class="btn-primary-small">¡Reserva Ahora!</a>
            </div>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </nav>

    <header class="page-hero" style="background-image:url('/glitter-bar-premium-queretaro.webp')">
        <div class="hero-inner">
            <nav class="breadcrumb" aria-label="Ruta de navegación">
                <a href="/">Inicio</a> › Glitter Bar en Querétaro
            </nav>
            <h1>Glitter Bar en Querétaro</h1>
            <p>Barra de brillos, gemas y maquillaje neón para fiestas infantiles, XV años, bodas y eventos. El toque que
                hace brillar tu celebración.</p>
            <div class="hero-buttons">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20del%20glitter%20bar"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Reservar por WhatsApp
                </a>
                <a href="/#servicios" class="btn-secondary">Ver todos los servicios</a>
            </div>
        </div>
    </header>

    <section class="section">
        <div class="container prose">
            <h2>Glitter Bar para fiestas y eventos en Querétaro</h2>
            <p>El <strong>Glitter Bar</strong> es una estación de maquillaje con brillos donde los invitados eligen su
                diseño y se lo aplicamos al instante. Brillos, gemas faciales y maquillaje neón que se ven increíbles en
                las fotos y en la pista. Funciona para fiestas infantiles, XV años, bodas, despedidas y eventos de
                empresa en Querétaro.</p>

            <h2>Nuestros paquetes de Glitter Bar</h2>
            <h3>Glitter Bar Classic</h3>
            <p>Barra de brillos y gemas faciales con maquillaje neón incluido y montaje de mesa profesional. Ideal para
                fiestas y bodas pequeñas, de 30 a 40 personas. 2 horas de servicio. <strong>$3,500</strong>.</p>
            <h3>Glitter Bar Premium</h3>
            <p>Todo lo del Classic más diseños avanzados, backdrop, espejo con luz, decoración y tatuajes temporales
                personalizados. Para eventos de alto impacto de 60 a 80 personas. 3 horas de servicio.
                <strong>$5,800</strong>.</p>

            <h2>¿Por qué un Glitter Bar?</h2>
            <ul>
                <li>Es una actividad que entretiene a invitados de todas las edades.</li>
                <li>Brillos de grado cosmético, seguros para la piel.</li>
                <li>Se retiran fácilmente al terminar el evento.</li>
                <li>Funciona como el spot perfecto para fotos.</li>
                <li>Montaje vistoso que decora tu celebración.</li>
            </ul>

            <h2>Glitter Bar para bodas y XV años</h2>
            <p>No es solo para niños. Un Glitter Bar es una atracción que encanta a adolescentes y adultos: en bodas y
                XV años se vuelve la estación favorita de la fiesta. Lo adaptamos a la paleta de color de tu evento.
                ¿Buscas algo para los más pequeños? Conoce también nuestro servicio de
                <a href="/pintacaritas-queretaro/">pintacaritas en Querétaro</a>.</p>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>Preguntas <span class="text-gradient-2">frecuentes</span></h2>
                <p>Todo lo que necesitas saber sobre nuestro Glitter Bar</p>
            </div>
            <div class="faq">
                <details>
                    <summary>¿Cuánto cuesta un Glitter Bar en Querétaro?</summary>
                    <p>El paquete Classic cuesta $3,500 (2 horas) y el Premium $5,800 (3 horas). El precio puede
                        ajustarse según el número de invitados.</p>
                </details>
                <details>
                    <summary>¿Los brillos son seguros para la piel?</summary>
                    <p>Sí, usamos brillos de grado cosmético, aptos para la piel y la zona del rostro. Se retiran
                        fácilmente.</p>
                </details>
                <details>
                    <summary>¿El Glitter Bar funciona para bodas y XV años?</summary>
                    <p>Claro. Es una de nuestras atracciones más solicitadas para XV años, bodas y eventos de adultos,
                        no solo para fiestas infantiles.</p>
                </details>
                <details>
                    <summary>¿Para cuántas personas alcanza el servicio?</summary>
                    <p>El Classic está pensado para 30 a 40 personas y el Premium para 60 a 80. Para grupos más grandes
                        lo cotizamos a tu medida.</p>
                </details>
                <details>
                    <summary>¿Llevan todo el montaje al evento?</summary>
                    <p>Sí, llevamos la barra, la decoración y todo el material hasta tu evento en Querétaro y
                        alrededores.</p>
                </details>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container cta-final">
            <h2>Haz brillar tu evento — reserva tu <span class="text-gradient">Glitter Bar</span></h2>
            <p>Escríbenos por WhatsApp con la fecha y el tipo de evento y te enviamos una cotización a tu medida.</p>
            <div class="hero-buttons" style="justify-content:center">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20del%20glitter%20bar"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Escribir por WhatsApp
                </a>
                <a href="/#reservar" class="btn-secondary">Llenar formulario</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <i class="ph-fill ph-sparkle"></i> Happy Face Qro
                </div>
                <nav class="footer-links" aria-label="Servicios">
                    <a href="/">Inicio</a>
                    <a href="/pintacaritas-queretaro/">Pintacaritas Querétaro</a>
                    <a href="/talleres-creativos-ninos-queretaro/">Talleres Creativos</a>
                    <a href="/glitter-bar-queretaro/">Glitter Bar Querétaro</a>
                    <a href="/recuerdos-personalizados-queretaro/">Recuerdos Personalizados</a>
                </nav>
                <div class="footer-social">
                    <a href="https://www.facebook.com/p/Happy-Face-Qro-100071186373246/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook"><i class="ph-logo ph-facebook-logo"></i></a>
                    <a href="https://www.instagram.com/happyfaceqro/" target="_blank" rel="noopener" aria-label="Instagram"><i class="ph-logo ph-instagram-logo"></i></a>
                    <a href="https://www.tiktok.com/@happy.face.qro" target="_blank" rel="noopener" aria-label="TikTok"><i class="ph-logo ph-tiktok-logo"></i></a>
                </div>
                <p class="copyright">© 2026 Happy Face Qro · Eventos infantiles en Querétaro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>

</html>
```

### Tarea 3.4 — Crear la página de Recuerdos Personalizados

Crea la carpeta `recuerdos-personalizados-queretaro/` y dentro un archivo `index.html` con **exactamente** este contenido:

```html
<!DOCTYPE html>
<html lang="es-MX">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Llaveros, Gorras y Tote Bags Personalizados en Querétaro | Happy Face Qro</title>
    <meta name="description"
        content="Estación de personalización para fiestas en Querétaro: los invitados decoran llaveros, gorras y tote bags con parches y stickers. Recuerdos únicos. 442 751 3785.">
    <link rel="canonical" href="https://happyfaceqro.com.mx/recuerdos-personalizados-queretaro/">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="geo.region" content="MX-QUE">
    <meta name="geo.placename" content="Santiago de Querétaro">

    <link rel="icon" type="image/png" href="/logo.png">
    <link rel="apple-touch-icon" href="/logo.png">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="Happy Face Qro">
    <meta property="og:url" content="https://happyfaceqro.com.mx/recuerdos-personalizados-queretaro/">
    <meta property="og:title" content="Llaveros, Gorras y Tote Bags Personalizados en Querétaro | Happy Face Qro">
    <meta property="og:description"
        content="Estación de personalización para fiestas en Querétaro: llaveros, gorras y tote bags decorados por tus invitados.">
    <meta property="og:image" content="https://happyfaceqro.com.mx/fashion-lab-actividades-ninos-queretaro.webp">

    <link rel="preload" as="image" href="/fashion-lab-actividades-ninos-queretaro.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Llaveros, gorras y tote bags personalizados en Querétaro",
          "serviceType": "Estación de personalización para eventos",
          "provider": { "@id": "https://happyfaceqro.com.mx/#happyfaceqro" },
          "areaServed": { "@type": "City", "name": "Santiago de Querétaro" },
          "description": "Estación de personalización para fiestas y eventos en Querétaro donde los invitados decoran llaveros, gorras y tote bags con parches y stickers.",
          "url": "https://happyfaceqro.com.mx/recuerdos-personalizados-queretaro/"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://happyfaceqro.com.mx/" },
            { "@type": "ListItem", "position": 2, "name": "Llaveros, gorras y tote bags personalizados en Querétaro", "item": "https://happyfaceqro.com.mx/recuerdos-personalizados-queretaro/" }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué productos se pueden personalizar?", "acceptedAnswer": { "@type": "Answer", "text": "Llaveros, gorras y tote bags. Los invitados los decoran con parches y stickers que se fijan con calor durante el evento." } },
            { "@type": "Question", "name": "¿Es una actividad o solo un recuerdo?", "acceptedAnswer": { "@type": "Answer", "text": "Las dos cosas. Tus invitados viven la experiencia de crear su producto y, al mismo tiempo, se llevan el recuerdo de la fiesta." } },
            { "@type": "Question", "name": "¿Sirve para fiestas de adultos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Además de fiestas infantiles, funciona muy bien en despedidas, baby showers, eventos escolares y activaciones de empresa." } },
            { "@type": "Question", "name": "¿Cuánto cuesta la estación de personalizados?", "acceptedAnswer": { "@type": "Answer", "text": "El precio se cotiza según el producto, el número de invitados y la decoración. Escríbenos por WhatsApp con los detalles y te pasamos un presupuesto." } },
            { "@type": "Question", "name": "¿Llevan todo el material?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, llevamos los productos, los parches, los stickers y el equipo necesario hasta tu evento en Querétaro." } }
          ]
        }
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Outfit:wght@300;400;600;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
</head>

<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">
                <i class="ph-fill ph-sparkle"></i> Happy Face Qro
            </a>
            <div class="nav-links">
                <a href="/pintacaritas-queretaro/">Pintacaritas</a>
                <a href="/talleres-creativos-ninos-queretaro/">Talleres</a>
                <a href="/glitter-bar-queretaro/">Glitter Bar</a>
                <a href="/recuerdos-personalizados-queretaro/">Personalizados</a>
                <a href="/#contacto">Contacto</a>
                <a href="/#reservar" class="btn-primary-small">¡Reserva Ahora!</a>
            </div>
            <button class="mobile-menu-btn" aria-label="Abrir menú">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </nav>

    <header class="page-hero" style="background-image:url('/fashion-lab-actividades-ninos-queretaro.webp')">
        <div class="hero-inner">
            <nav class="breadcrumb" aria-label="Ruta de navegación">
                <a href="/">Inicio</a> › Recuerdos personalizados en Querétaro
            </nav>
            <h1>Llaveros, Gorras y Tote Bags Personalizados en Querétaro</h1>
            <p>Una estación donde tus invitados decoran su propio recuerdo con parches y stickers. El souvenir perfecto
                para fiestas y eventos.</p>
            <div class="hero-buttons">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20recuerdos%20personalizados"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Cotizar por WhatsApp
                </a>
                <a href="/#servicios" class="btn-secondary">Ver todos los servicios</a>
            </div>
        </div>
    </header>

    <section class="section">
        <div class="container prose">
            <h2>Recuerdos personalizados para fiestas en Querétaro</h2>
            <p>En Happy Face Qro montamos una <strong>estación de personalización</strong> donde cada invitado crea su
                propio recuerdo: llaveros, gorras y tote bags que decoran con parches y stickers que se fijan con calor.
                En lugar de un recuerdo genérico, cada quien se lleva algo único hecho por sus propias manos.</p>

            <h2>¿Qué pueden personalizar?</h2>
            <h3>Llaveros personalizados</h3>
            <p>Llaveros que los invitados decoran a su gusto. Un detalle pequeño, divertido y económico, perfecto como
                recuerdo para fiestas infantiles, eventos escolares o de empresa.</p>
            <h3>Gorras personalizadas</h3>
            <p>Cada invitado diseña su gorra con parches y stickers. Un recuerdo útil que la gente sí se vuelve a poner.</p>
            <h3>Tote bags personalizadas</h3>
            <p>Bolsas de tela que se decoran con parches y stickers termoadheribles. Prácticas, reutilizables y muy
                fotogénicas.</p>

            <h2>Ideal para todo tipo de eventos</h2>
            <p>Esta estación funciona en fiestas infantiles, despedidas, baby showers, eventos escolares, posadas y
                activaciones de empresa. Es a la vez una actividad que entretiene y el recuerdo del evento, todo en uno.</p>

            <h2>¿Por qué elegir esta estación?</h2>
            <ul>
                <li>Cada invitado se lleva un recuerdo único.</li>
                <li>Actividad y souvenir en una sola experiencia.</li>
                <li>Material y montaje incluidos.</li>
                <li>Facilitador que guía toda la actividad.</li>
                <li>Se adapta a la temática y los colores de tu evento.</li>
            </ul>

            <h2>Cotiza tu estación de personalizados</h2>
            <p>El costo depende del producto (llavero, gorra o tote bag), la cantidad de invitados y el tipo de
                decoración. Escríbenos con los detalles de tu evento y te armamos una cotización a tu medida. Conoce
                también nuestros <a href="/talleres-creativos-ninos-queretaro/">talleres creativos para niños</a>.</p>
        </div>
    </section>

    <section class="section section-light">
        <div class="container">
            <div class="section-header">
                <h2>Preguntas <span class="text-gradient-2">frecuentes</span></h2>
                <p>Todo lo que necesitas saber sobre nuestra estación de personalizados</p>
            </div>
            <div class="faq">
                <details>
                    <summary>¿Qué productos se pueden personalizar?</summary>
                    <p>Llaveros, gorras y tote bags. Los invitados los decoran con parches y stickers que se fijan con
                        calor durante el evento.</p>
                </details>
                <details>
                    <summary>¿Es una actividad o solo un recuerdo?</summary>
                    <p>Las dos cosas. Tus invitados viven la experiencia de crear su producto y, al mismo tiempo, se
                        llevan el recuerdo de la fiesta.</p>
                </details>
                <details>
                    <summary>¿Sirve para fiestas de adultos?</summary>
                    <p>Sí. Además de fiestas infantiles, funciona muy bien en despedidas, baby showers, eventos
                        escolares y activaciones de empresa.</p>
                </details>
                <details>
                    <summary>¿Cuánto cuesta la estación de personalizados?</summary>
                    <p>El precio se cotiza según el producto, el número de invitados y la decoración. Escríbenos por
                        WhatsApp con los detalles y te pasamos un presupuesto.</p>
                </details>
                <details>
                    <summary>¿Llevan todo el material?</summary>
                    <p>Sí, llevamos los productos, los parches, los stickers y el equipo necesario hasta tu evento en
                        Querétaro.</p>
                </details>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container cta-final">
            <h2>Crea recuerdos únicos — cotiza tu <span class="text-gradient">estación</span></h2>
            <p>Escríbenos por WhatsApp con la fecha, el producto y el número de invitados y te enviamos tu cotización.</p>
            <div class="hero-buttons" style="justify-content:center">
                <a href="https://wa.me/524427513785?text=Hola%20Happy%20Face%20Qro%2C%20quiero%20informacion%20de%20recuerdos%20personalizados"
                    target="_blank" rel="noopener" class="btn-primary">
                    <i class="ph-fill ph-whatsapp-logo"></i> Escribir por WhatsApp
                </a>
                <a href="/#reservar" class="btn-secondary">Llenar formulario</a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <i class="ph-fill ph-sparkle"></i> Happy Face Qro
                </div>
                <nav class="footer-links" aria-label="Servicios">
                    <a href="/">Inicio</a>
                    <a href="/pintacaritas-queretaro/">Pintacaritas Querétaro</a>
                    <a href="/talleres-creativos-ninos-queretaro/">Talleres Creativos</a>
                    <a href="/glitter-bar-queretaro/">Glitter Bar Querétaro</a>
                    <a href="/recuerdos-personalizados-queretaro/">Recuerdos Personalizados</a>
                </nav>
                <div class="footer-social">
                    <a href="https://www.facebook.com/p/Happy-Face-Qro-100071186373246/?locale=es_LA" target="_blank" rel="noopener" aria-label="Facebook"><i class="ph-logo ph-facebook-logo"></i></a>
                    <a href="https://www.instagram.com/happyfaceqro/" target="_blank" rel="noopener" aria-label="Instagram"><i class="ph-logo ph-instagram-logo"></i></a>
                    <a href="https://www.tiktok.com/@happy.face.qro" target="_blank" rel="noopener" aria-label="TikTok"><i class="ph-logo ph-tiktok-logo"></i></a>
                </div>
                <p class="copyright">© 2026 Happy Face Qro · Eventos infantiles en Querétaro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>

</html>
```

### Tarea 3.5 — Reescribir el `sitemap.xml`

Reemplaza **todo** el contenido del archivo `sitemap.xml` por **exactamente** esto (cambia las 5 fechas `<lastmod>` por la fecha real del día en que ejecutes esto, en formato AAAA-MM-DD):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://happyfaceqro.com.mx/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://happyfaceqro.com.mx/pintacaritas-queretaro/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://happyfaceqro.com.mx/talleres-creativos-ninos-queretaro/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://happyfaceqro.com.mx/glitter-bar-queretaro/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://happyfaceqro.com.mx/recuerdos-personalizados-queretaro/</loc>
    <lastmod>2026-05-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

### Tarea 3.6 — Revisión final de la FASE 3

Abre en el navegador cada una de las 4 páginas nuevas y verifica que: se vean bien, el menú funcione, las imágenes de fondo carguen y los enlaces internos lleven a donde deben. Si todo está bien, haz el commit.

---

# FASE 4 — Blog (opcional, para después)

El blog **no es urgente**, pero es lo que hace crecer el tráfico a mediano plazo: cada artículo es una puerta de entrada nueva desde Google. Haz esta fase **solo cuando las fases 0–3 estén publicadas y funcionando**.

**Idea:** crear una carpeta `blog/` con un índice (`blog/index.html`) y un artículo por carpeta (ej. `blog/ideas-fiesta-infantil-queretaro/index.html`), usando la misma plantilla de las páginas de servicio (con la clase `prose`).

Artículos recomendados (palabra clave de baja competencia → buen encaje con el negocio):

| Título del artículo | Palabra clave objetivo |
|---|---|
| 10 ideas para una fiesta infantil inolvidable en Querétaro | ideas fiesta infantil Querétaro |
| ¿Cuánto cuesta una fiesta infantil en Querétaro? Guía de precios | precio fiesta infantil Querétaro |
| Pintacaritas paso a paso: diseños fáciles para fiestas | diseños de pintacaritas para niños |
| Actividades para mantener entretenidos a los niños en una fiesta | actividades para fiestas infantiles |
| Recuerdos de fiesta infantil: ideas originales y personalizadas | recuerdos para fiestas infantiles |
| Glitter Bar: la atracción de moda para XV años y bodas | glitter bar para XV años |

> ⚠️ **Importante sobre el blog:** los textos de blog **sí necesitan voz propia** para destacar y enganchar al lector. El contenido genérico de IA aburre. Lo ideal es que Anáhi escriba un borrador con sus historias y consejos reales, o que estos artículos se redacten con un modelo más capaz (no el económico) y luego ella los revise. Por eso el blog está separado del resto del plan.

**Commit al terminar (si se hace):** `feat: blog inicial`

---

# FASE 5 — Verificación y publicación

**Commit al terminar:** `chore: verificación final SEO`

### Tarea 5.1 — Revisar errores técnicos con Lighthouse (manual, Luis)

En el navegador Chrome, abre el sitio, haz clic derecho → *Inspeccionar* → pestaña *Lighthouse* → *Analyze page load*. Hazlo para la portada y para una página nueva. Si la puntuación de *Performance*, *Accessibility*, *Best Practices* o *SEO* no es alta, copia el reporte y pídele a Claude Code: *"Corrige estos puntos de Lighthouse sin cambiar el diseño"*.

### Tarea 5.2 — Validar el schema markup (manual, Luis)

Entra a **[validator.schema.org](https://validator.schema.org)** o a la **Prueba de resultados enriquecidos de Google** (search.google.com/test/rich-results). Pega la URL de la portada y de una página de servicio. Verifica que no haya errores en el `LocalBusiness`, `Service`, `BreadcrumbList` ni `FAQPage`.

### Tarea 5.3 — Publicar los cambios

Cuando todas las fases estén verificadas, el modelo debe publicar fusionando la rama de trabajo a `main`:

```bash
git checkout main
git merge seo-mejoras
git push origin main
```

**Netlify detecta el push y publica solo** en 1–2 minutos. Revisa el sitio en vivo `https://happyfaceqro.com.mx/`.

> 🛟 **Si algo se ve mal:** en el panel de Netlify, ve a *Deploys*, busca un despliegue anterior que funcionaba y haz clic en *Publish deploy* para revertir. No se pierde nada.

### Tarea 5.4 — Avisar en Google Search Console (manual, Luis)

Esto **le dice a Google que venga a ver los cambios** (sin esto, puede tardar semanas en notarlos):

1. Entra a **[search.google.com/search-console](https://search.google.com/search-console)** con la cuenta de Google del negocio.
2. Si el sitio aún no está agregado, agrégalo (la verificación ya está lista: el archivo `google8184b8938f10e23e.html` existe en el sitio).
3. En el menú **Sitemaps**, escribe `sitemap.xml` y dale *Enviar*.
4. En la barra superior **Inspección de URL**, pega una por una las 5 URLs (portada + 4 páginas nuevas) y en cada una haz clic en **Solicitar indexación**.

---

# 🌟 ACCIONES MANUALES PARA LUIS Y ANÁHI (no son código)

Esto **no lo hace Claude Code**: lo tienen que hacer ustedes. Y ojo: **esta sección es la que más impacto tiene** en búsquedas como "eventos infantiles queretaro". La web sola no basta.

## 1. Crear el Perfil de Empresa de Google ⭐ (LO MÁS IMPORTANTE)

Cuando alguien busca "pintacaritas queretaro", lo primero que aparece es el **mapa con 3 negocios**. Ese bloque **no sale de la web, sale del Perfil de Empresa de Google**. Anáhi no tiene uno, así que hoy es imposible aparecer ahí. Es **gratis** y es la acción #1.

Pasos:

1. Entra a **[business.google.com](https://business.google.com)**. Usa (o crea) una cuenta de Google **del negocio**, no la personal.
2. Crea el perfil con el nombre exacto **Happy Face Qro**.
3. **Categoría principal:** elige la más cercana, por ejemplo *"Servicio de fiestas infantiles"* o *"Servicio de entretenimiento"*. Agrega categorías secundarias como *"Pintacaritas"* / *"Animador"* si aparecen.
4. Como el servicio es a domicilio (no tienen local con clientes), elige la opción de **"Presto servicios a domicilio"** y **oculta la dirección**; luego define la **zona de servicio**: Santiago de Querétaro, El Marqués, Corregidora y los municipios donde trabajen.
5. Teléfono: **442 751 3785**. Sitio web: **https://happyfaceqro.com.mx/**.
6. **Verifica el perfil** (Google pide verificación por video, teléfono o tarjeta postal). Sin verificar, no aparece en el mapa.
7. Completa el perfil **al 100%**: descripción, horario, lista de servicios con precios, atributos, y **sube 20+ fotos buenas** (las mismas del sitio sirven).
8. Publica novedades de vez en cuando y **responde todas las reseñas**.

## 2. Conseguir reseñas en Google ⭐

Las reseñas son, después del perfil, lo que más pesa para el mapa local. Plan:

- A **cada cliente satisfecho**, pídanle una reseña en Google. Lo mejor es mandarles el link directo (Google da un link corto "para reseñar" desde el panel del perfil).
- Apunten a un flujo **constante** (ej. 2–4 reseñas al mes) en lugar de muchas de golpe.
- Respondan a todas, agradeciendo. Eso también suma.

## 3. NAP consistente (Nombre, teléfono, dirección)

Google confía más en un negocio cuando ve sus datos **idénticos** en todos lados. Revisen que en **Facebook, Instagram, TikTok y el Perfil de Google** aparezca exactamente:

- Nombre: **Happy Face Qro**
- Teléfono: **442 751 3785**
- Zona: **Querétaro, Qro.**
- Web: **https://happyfaceqro.com.mx/**

## 4. Enlaces y presencia local (backlinks)

Que otros sitios mencionen su web le da autoridad ante Google. Ideas fáciles en Querétaro:

- Den de alta el negocio en directorios locales y de eventos (por ejemplo en portales como *de-paseo.com* o directorios de fiestas infantiles de Querétaro).
- Hagan alianzas con negocios complementarios (salones de fiestas, reposterías, renta de mobiliario, fotógrafos infantiles): que se recomienden y enlacen entre sí.
- Participen en grupos de Facebook de mamás y eventos de Querétaro.

## 5. Que las redes apunten a la web

El sitio ya enlaza a sus redes; falta lo inverso: pongan el link **https://happyfaceqro.com.mx/** en la biografía de **Instagram, TikTok y Facebook**. Así mandan visitas (y señales) a la web.

## 6. Medición (recomendado)

Ya tienen Google Tag Manager instalado (`GTM-KC288C4D`). Si aún no tienen **Google Analytics 4**, vale la pena conectarlo a través de ese contenedor de GTM para ver cuántas visitas llegan y de dónde. Es gratis.

---

# Apéndice A — Mapa de palabras clave

| Página | Palabra clave principal | Palabras secundarias / relacionadas |
|---|---|---|
| Portada `/` | eventos infantiles Querétaro | fiestas infantiles Querétaro · animación para fiestas infantiles · entretenimiento infantil Querétaro · Happy Face Qro |
| `/pintacaritas-queretaro/` | pintacaritas Querétaro | pintacaritas para fiestas infantiles · pintacaritas a domicilio · maquillaje infantil Querétaro · pintacaras Querétaro · maquillaje artístico infantil |
| `/talleres-creativos-ninos-queretaro/` | talleres creativos para niños Querétaro | talleres para fiestas infantiles · actividades para fiestas infantiles Querétaro · taller de cupcakes para niños · taller de pintura para niños |
| `/glitter-bar-queretaro/` | glitter bar Querétaro | barra de brillos Querétaro · glitter bar para bodas · glitter bar XV años · maquillaje con brillos |
| `/recuerdos-personalizados-queretaro/` | llaveros personalizados Querétaro | gorras personalizadas para fiestas · tote bags personalizadas Querétaro · estación de personalizados para eventos · recuerdos para fiestas infantiles |

---

# Apéndice B — Checklist on-page (úsalo para cada página nueva o de blog)

Cada página debe cumplir:

- [ ] Un solo `<h1>`, con la palabra clave principal.
- [ ] `<title>` único, de ~55–60 caracteres, con la palabra clave + "Querétaro" + marca.
- [ ] `<meta name="description">` única, de ~150–155 caracteres, atractiva y con llamada a la acción.
- [ ] Etiqueta `<link rel="canonical">` con la URL propia de la página.
- [ ] La palabra clave principal aparece en las primeras 100 palabras del texto.
- [ ] Subtítulos `<h2>`/`<h3>` que organizan el contenido e incluyen variantes de la palabra clave.
- [ ] Al menos 2 enlaces internos a otras páginas del sitio y, si aplica, 1 enlace externo de calidad.
- [ ] Todas las imágenes en formato WebP, con `alt` descriptivo y `width`/`height`.
- [ ] Schema markup correcto (`Service` + `BreadcrumbList` + `FAQPage` en páginas de servicio).
- [ ] La URL es corta, en minúsculas, con guiones y con la palabra clave.
- [ ] La página está incluida en `sitemap.xml`.
- [ ] Texto de mínimo ~500 palabras, útil y sin relleno.

---

# Apéndice C — Bloque de Google Tag Manager (solo si la FASE 0 lo indicó)

Úsalo **únicamente** si en la Tarea 0.2 se confirmó que GTM **debe ir en el código** (y no lo inyecta Netlify).

Pega esto **justo después de `<head>`**, como primer elemento, en `index.html` y en las 4 páginas nuevas:

```html
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KC288C4D');</script>
    <!-- End Google Tag Manager -->
```

Y pega esto **justo después de `<body>`**, como primer elemento, en cada página:

```html
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC288C4D"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager -->
```

---

# Resumen del orden de ejecución

1. **FASE 0** — Preparación (rama de trabajo, confirmar GTM).
2. **FASE 1** — Imágenes a WebP (de 29 MB a ~2 MB).
3. **FASE 2** — Correcciones técnicas en la portada (dominio, schema, title, H1, menú, accesibilidad).
4. **FASE 3** — 4 páginas nuevas + sitemap.
5. **FASE 5** — Verificar y publicar (Netlify) + avisar a Search Console.
6. **ACCIONES MANUALES** — Perfil de Empresa de Google + reseñas. *(Esto es lo que más posiciona; háganlo aunque sea lo único.)*
7. **FASE 4** — Blog (cuando haya tiempo).

*Fin del plan.*

