# Auditoría SEO — Happy Face Qro

**Sitio:** https://happyfaceqro.com.mx
**Fecha:** 10 de junio de 2026
**Tipo de negocio detectado:** Servicio local (eventos infantiles — pintacaritas, talleres, glitter bar, personalizados) en Querétaro, México
**Hosting:** Netlify + Cloudflare (CDN, HTTPS, HSTS)

---

## Resumen Ejecutivo

### SEO Health Score: **80 / 100** 🟢

| Categoría | Peso | Score | Aporte |
|-----------|------|-------|--------|
| SEO Técnico | 22% | 88 | 19.4 |
| Calidad de Contenido | 23% | 75 | 17.3 |
| SEO On-Page | 20% | 85 | 17.0 |
| Schema / Datos estructurados | 10% | 82 | 8.2 |
| Performance (CWV) | 10% | 85 | 8.5 |
| Preparación para IA (GEO) | 10% | 50 | 5.0 |
| Imágenes | 5% | 88 | 4.4 |
| **TOTAL** | | | **~80** |

Es un sitio **sólido y bien optimizado** para su tamaño. La estructura on-page, el schema y las imágenes están en muy buen estado. Los dos frenos principales son: (1) el bloqueo autoinfligido de crawlers de IA y (2) la falta de señales de confianza/reseñas (E-E-A-T).

### Top 5 problemas críticos / importantes
1. **🔴 robots.txt bloquea crawlers de IA** (GPTBot, CCBot, anthropic-ai, Claude-Web) → invisibilidad en ChatGPT, Perplexity y AI Overviews.
2. **🟠 Sin reseñas ni testimonios** en el sitio ni `aggregateRating` en el schema → falta de prueba social (señal clave para negocios locales).
3. **🟠 Falta página/sección "Nosotros"** → débil señal de Experiencia y Autoridad (E-E-A-T).
4. **🟡 Faltan `Offer` en el schema** de las páginas Talleres y Recuerdos (sí lo tienen Pintacaritas y Glitter Bar).
5. **🟡 No existe `llms.txt`** para guiar a los motores de IA.

### Top 5 quick wins
1. Quitar (o comentar) el bloqueo de crawlers de IA en `robots.txt`.
2. Añadir bloque `aggregateRating` + reseñas reales al schema LocalBusiness.
3. Agregar `Offer` al schema de Talleres y Recuerdos.
4. Recortar 2-3 meta descriptions a ≤160 caracteres (van en 161-165).
5. Crear `llms.txt` con resumen del negocio, servicios y precios.

---

## 1. SEO Técnico — 88/100 🟢

**Lo que está bien:**
- ✅ HTTPS + HSTS (`max-age=31536000`) vía Cloudflare.
- ✅ `robots.txt` presente y apunta al sitemap.
- ✅ `sitemap.xml` válido, incluye las 5 URLs con `lastmod`, `changefreq` y `priority`.
- ✅ Canonicals correctos en todas las páginas.
- ✅ `<html lang="es-MX">`, `viewport`, `geo.region MX-QUE`.
- ✅ `meta robots: index, follow, max-image-preview:large`.
- ✅ URLs limpias, descriptivas y con keyword + ciudad.

**A mejorar:**
- 🟡 El `<meta name="geo.placename">` y `geo.region` son señales obsoletas (Google las ignora), pero no dañan. Mantener es opcional.
- 🟡 Verifica el sitemap `lastmod`: fecha `2026-05-22`. Mantenlo actualizado tras cada cambio.

---

## 2. Calidad de Contenido (E-E-A-T) — 75/100 🟡

**Lo que está bien:**
- ✅ Cada página de servicio tiene **800+ palabras** de contenido único y útil (nada de thin content).
- ✅ Estructura clara con H2 temáticos (qué incluye, diseños, seguridad, zonas, precio).
- ✅ Bloque FAQ con 5 preguntas reales por página — excelente para búsquedas long-tail y citación por IA.
- ✅ Precios transparentes (genera confianza y filtra leads).
- ✅ Cobertura de zonas específicas (Juriquilla, El Refugio, Milenio III, etc.) → muy buena señal local.

**A mejorar (el mayor margen del sitio):**
- 🟠 **Sin testimonios ni reseñas** visibles. Para eventos infantiles la prueba social es decisiva. Añade 3-6 testimonios reales de clientes (con nombre y, si se puede, foto del evento).
- 🟠 **Sin sección "Nosotros / Quiénes somos"**: no hay señal de *Experiencia* real (cuántos años, cuántos eventos, quién es la maquillista). Esto es justo lo que Google QRG valora en E-E-A-T.
- 🟡 La galería usa Instagram como prueba social — bien, pero conviene incrustar conteo de seguidores o reseñas de Google/Facebook.

---

## 3. SEO On-Page — 85/100 🟢

**Lo que está bien:**
- ✅ Títulos únicos, con keyword + "Querétaro" + marca. Longitudes correctas.
- ✅ Un solo H1 por página, descriptivo.
- ✅ Jerarquía de headings coherente.
- ✅ **Enlazado interno cruzado** entre servicios (pintacaritas ↔ talleres ↔ glitter bar) — muy bien hecho.
- ✅ Breadcrumbs visibles + en schema.

**A mejorar:**
- 🟡 Meta descriptions de 3 páginas en **161-165 caracteres** → Google puede truncarlas (~155-160 ideal). Recórtalas ligeramente.
- 🟡 La página **Recuerdos personalizados** no está en el menú de navegación principal (solo en el footer). Considera añadirla al nav o enlazarla desde más páginas.

---

## 4. Schema / Datos estructurados — 82/100 🟢

**Lo que está bien:**
- ✅ `LocalBusiness` en homepage con `@id`, teléfono, dirección, geo, `areaServed`, horarios y `sameAs` (redes).
- ✅ `Service` + `BreadcrumbList` + `FAQPage` en cada página de servicio.
- ✅ Uso de `@graph` y referencia al `@id` del negocio (arquitectura correcta).

**A mejorar:**
- 🟠 **Falta `Offer`** en Talleres y Recuerdos (Pintacaritas y Glitter Bar sí lo tienen). Añádelo para mostrar precio en resultados.
- 🟠 **Falta `aggregateRating` + `Review`** en el LocalBusiness → es lo que activa las estrellas. Implementar cuando tengas reseñas reales (no inventar).
- 🟡 Considera un tipo más específico que `LocalBusiness`: `EntertainmentBusiness` o `ChildrensEntertainment` describen mejor el negocio.
- ℹ️ Nota sobre `FAQPage`: desde ago-2023 Google ya **no muestra rich results de FAQ en sitios comerciales**. No lo quites — sigue aportando valor para citación en IA/LLM —, pero no esperes las estrellitas de FAQ en Google.

---

## 5. Performance (Core Web Vitals) — 85/100 🟢

**Lo que está bien:**
- ✅ Imágenes en **WebP** (62-273 KB cada una, muy ligeras).
- ✅ `preload` de la imagen hero → mejora LCP.
- ✅ `loading="lazy"` en galería + atributos `width`/`height` → previene CLS.
- ✅ CDN de Cloudflare/Netlify.

**A mejorar:**
- 🟡 Google Fonts y los iconos Phosphor (`unpkg.com`) son recursos de terceros que bloquean renderizado. Considera auto-hospedar la fuente o reducir pesos.
- 🟡 Sin datos de campo (CrUX/GSC) por no haber API key configurada. Para CWV reales, conecta Google Search Console.

---

## 6. Preparación para IA / GEO — 50/100 🔴

**El punto más débil — y es autoinfligido:**
- 🔴 `robots.txt` **bloquea explícitamente** a `GPTBot`, `CCBot`, `anthropic-ai` y `Claude-Web`. Esto impide que ChatGPT, Claude, Perplexity y otros motores generativos lean y citen tu sitio. Para un negocio local que busca visibilidad, **recomiendo desbloquearlos**.
- 🔴 No existe `llms.txt`.

**Lo que sí ayuda:**
- ✅ Contenido en formato FAQ y por secciones → muy citable a nivel de pasaje.
- ✅ Precios y datos concretos extraíbles.

> Decisión tuya: si el bloqueo de IA fue intencional (no querer que entrenen con tu contenido), respétalo. Pero ten claro que el costo es perder presencia en respuestas de IA, que cada vez pesan más en cómo la gente busca proveedores de eventos.

---

## 7. Imágenes — 88/100 🟢

**Lo que está bien:**
- ✅ **Alt text descriptivo y con keywords** en español en toda la galería.
- ✅ Nombres de archivo descriptivos (`pintacaritas-queretaro-maquillaje-infantil.webp`).
- ✅ WebP + lazy loading + dimensiones explícitas.

**A mejorar:**
- 🟡 Sin `srcset`/imágenes responsivas (un solo tamaño por imagen). Mejora menor.
- 🟡 **29 MB de PNG originales** viven en el repositorio (no se sirven, pero se deployan). Añádelos a `.gitignore` o muévelos fuera del directorio público para limpieza.

---

## Plan de Acción Priorizado

### 🔴 Crítico (esta semana)
1. **Desbloquear crawlers de IA** en `robots.txt` (si la visibilidad en IA te interesa).
   - _Cómo sabrás que funcionó:_ ChatGPT/Perplexity empiezan a mencionar el sitio en búsquedas de "pintacaritas Querétaro".

### 🟠 Importante (este mes)
2. **Añadir reseñas/testimonios reales** al sitio + `aggregateRating` al schema.
3. **Crear sección "Nosotros"** con experiencia, años, número de eventos.
4. **Agregar `Offer`** al schema de Talleres y Recuerdos.

### 🟡 Optimización (backlog)
5. Recortar meta descriptions a ≤160 caracteres.
6. Crear `llms.txt`.
7. Añadir "Recuerdos personalizados" al menú principal.
8. Auto-hospedar fuentes / reducir recursos de terceros.
9. `.gitignore` para los PNG originales.
10. Considerar `EntertainmentBusiness` como tipo de schema.

---

_Auditoría generada con la skill claude-seo._
