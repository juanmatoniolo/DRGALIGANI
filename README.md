@AGENTS.md

# PROMPT DE DESARROLLO: SITIO WEB ESTUDIO JURÍDICO

## Derecho de Daños - Especialización Profesional

---

## 🎯 VISIÓN GENERAL

**Tipo:** Landing page + sitio corporativo profesional
**Stack:** Next.js 16 App Router + Tailwind CSS + PHP backend (DonWeb)
**Objetivo:** Posicionamiento SEO máximo + conversión de consultas + experiencia mobile-first
**Presupuesto:** $250.000 ARS | Plazo: 20 días hábiles | 2 revisiones incluidas

---

## 📐 ESTRUCTURA Y NAVEGACIÓN

### Arquitectura de Páginas

```
Raíz (/)
├── /sobre-nosotros
├── /servicios
│   ├── /responsabilidad-civil
│   ├── /derecho-seguros
│   └── /accidentes-transito
├── /contacto
├── /faq
└── /politica-privacidad
```

### Navegación Principal (Header Sticky)

- **Logo/Nombre estudio** (click lleva a home)
- **Menu horizontal desktop** (inicio, sobre nosotros, servicios, contacto)
- **Hamburger menu mobile** (aparece en <768px)
- **CTA secundario** "Consultar" (botón destacado a la derecha)
- **Sticky behavior** (permanece visible al scroll)
- **z-index: 50** (arriba de todo contenido)

### Estructura de Contenido

Cada página sigue patrón:

1. **Hero section** (imagen/gradiente + H1 + CTA)
2. **Breadcrumbs** (Home > Servicios > Responsabilidad Civil)
3. **Contenido principal** (secciones con H2-H3)
4. **CTA section** (botón "Agendar consulta")
5. **Footer** (links, social, contacto)

---

## 🎨 DISEÑO UI/UX

### PALETA DE COLORES

```
Primarios:
  - Azul oscuro: #0f172a (headers, navegación, CTAs principales)
  - Azul medio: #1e40af (hover states, acentos)
  - Verde profesional: #059669 (CTAs secundarias, iconografía)

Secundarios:
  - Negro: #1f2937 (texto principal)
  - Gris claro: #f3f4f6 (backgrounds alternativos)
  - Blanco: #ffffff (fondos principales)
  - Gris texto: #6b7280 (body copy)

Funcionales:
  - Success: #10b981 (formularios)
  - Warning: #f59e0b (alerts)
  - Error: #ef4444 (validación)
```

### TIPOGRAFÍA

**Sistema de fuentes:**

- **Headings (H1-H6):** Inter (Google Fonts) - Bold/Semibold
- **Body text:** Inter (Google Fonts) - Regular/Medium
- **Monospace (opcional):** JetBrains Mono

**Escala de tamaños:**

```
H1: 48px (desktop) / 36px (mobile) - font-bold
H2: 36px (desktop) / 28px (mobile) - font-bold
H3: 24px (desktop) / 20px (mobile) - font-semibold
Body: 16px (desktop) / 16px (mobile) - font-regular
Small: 14px - font-regular
Caption: 12px - font-regular
```

**Line height:**

- Headings: 1.2
- Body: 1.6
- Tight text: 1.4

### ESPACIADO Y LAYOUT

**Sistema de padding/margin (8px base):**

```
xs: 4px (8)
sm: 8px (16)
md: 16px (32)
lg: 24px (48)
xl: 32px (64)
2xl: 48px (96)
```

**Estructura de secciones:**

- Padding vertical: `py-16 md:py-24` (64px mobile, 96px desktop)
- Padding horizontal: `px-4 md:px-8` (16px mobile, 32px desktop)
- Container max-width: `max-w-6xl` (1152px)
- Gap entre columnas: `gap-8` (32px)

### COMPONENTES UI

#### BOTONES

```
Primario (CTA principal):
- BG: #0f172a (azul oscuro)
- Texto: blanco
- Padding: px-8 py-3 (32px x 12px)
- Border-radius: rounded-lg (8px)
- Font-weight: bold
- Hover: bg-blue-800 (más claro)
- Transition: all 0.3s ease
- Min-width: 48px height (accesibilidad)

Secundario (CTAs alternativas):
- BG: #059669 (verde)
- Texto: blanco
- Same padding/size como primario
- Hover: bg-green-700

Ghost (links secundarios):
- BG: transparent
- Texto: #0f172a
- Border: 2px solid #0f172a
- Hover: bg-blue-50
```

#### CARDS/TARJETAS

```
Contenedor:
- BG: white
- Border-radius: rounded-lg (8px)
- Box-shadow: shadow-md (0 4px 6px rgba(0,0,0,0.1))
- Hover: shadow-xl + translateY(-4px)
- Transition: all 0.3s ease
- Padding: p-6 md:p-8 (24px / 32px)
- Border: 1px solid #e5e7eb (gris muy claro)

Variantes:
  - Service card: grid md:grid-cols-3 gap-8
  - Testimonial: con avatar + quote icon
  - FAQ: accordion expandible
```

#### FORMULARIOS

```
Input/Textarea:
- BG: white
- Border: 2px solid #e5e7eb
- Border-radius: rounded-lg (8px)
- Padding: px-4 py-3 (16px x 12px)
- Font-size: 16px (evita zoom mobile)
- Focus: border-#1e40af (azul) + outline-none
- Transition: all 0.3s ease
- Label: font-semibold text-sm #1f2937

Placeholder:
- Color: #9ca3af (gris medio)
- Font-style: italic

Validation:
- Error: border-#ef4444 + text-#ef4444 text-sm
- Success: border-#10b981
- Loading: spinner animated dentro del input
```

#### ENLACES Y HOVER STATES

```
Links default:
- Color: #1e40af (azul)
- Text-decoration: none
- Border-bottom: 1px dotted (opcional)
- Hover: text-#0f172a + underline

Navigation links:
- Color: white (en header)
- Hover: text-#bfdbfe (azul muy claro)
- Active: border-bottom 3px solid #059669

Social media icons:
- Size: 24x24px
- Color: #6b7280
- Hover: color #0f172a + scale(1.1)
```

---

## 📱 RESPONSIVE & MOBILE-FIRST

### BREAKPOINTS (Tailwind)

```
Mobile: 320px - 639px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### MOBILE-FIRST RULES

- **Default:** diseño mobile (single column)
- **md:**: dos columnas / layouts más amplios
- **lg:**: tres columnas / espacios mayores
- **No horizontal scroll** nunca
- **Tap targets mínimo:** 48x48px (botones, links)
- **Font mínimo:** 16px (evita zoom auto)
- **Padding móvil:** px-4 (16px)
- **Hamburger menu:** aparece <768px
- **Imágenes:** 100% width con max-width
- **Modals:** pantalla completa en móvil

### HEADER RESPONSIVE

```
Desktop (md:):
- Navbar horizontal
- Logo + nav items + CTA button
- Flex row, justify-between

Mobile (<md):
- Logo + hamburger icon (derecha)
- Menú desplegable vertical (overlay)
- Full width, background opaco
- Close button (X) en esquina
```

---

## ✨ INTERACTIVIDAD Y ANIMACIONES

### TRANSICIONES GLOBALES

```css
/* Todos los elementos interactivos */
a,
button,
input,
textarea,
select {
	transition: all 0.3s ease;
}

/* Scroll smooth en toda la página */
html {
	scroll-behavior: smooth;
}
```

### ANIMACIONES ESPECÍFICAS

#### Hero Section

```
- Fade-in h1: opacity 0 → 1 (0.6s delay)
- Slide-up descripción: translateY(20px) → 0 (0.8s delay)
- CTA button: scale(0.95) on hover → 1
- Background gradient: subtle animation (10s loop)
```

#### Scroll Triggered (AOS - Animate On Scroll)

```
Service cards:
- data-aos="fade-up"
- data-aos-duration="600"
- data-aos-offset="100"

Testimonials:
- data-aos="zoom-in"
- data-aos-duration="700"

FAQ items:
- data-aos="fade-in"
- data-aos-duration="500"
```

#### Formulario Interactivo

```
Focus input:
- Border color: #1e40af
- Box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1)
- Label color: #1e40af
- Transition: 0.3s

Submit button:
- Default: cursor pointer
- Hover: bg-blue-800 + shadow-lg
- Active (click): scale(0.98)
- Disabled: opacity-50 + cursor-not-allowed
- Loading: spinner + disabled
```

#### Hover States

```
Card hover:
- Box-shadow: aumenta (shadow-md → shadow-xl)
- Transform: translateY(-4px)
- Transition: 0.3s ease

Link hover:
- Color change
- Underline animation (width 0 → 100%)

Navigation hover:
- Highlight color
- Border-bottom animation
```

#### Modal/Notification Animations

```
Entrada:
- Opacity: 0 → 1
- Scale: 0.95 → 1
- Duration: 0.3s

Salida:
- Opacity: 1 → 0
- Scale: 1 → 0.95
- Duration: 0.2s

Toast (success/error):
- Slide-in desde arriba derecha
- Auto-hide después 4s
```

---

## 🔍 SEO Y ESTRUCTURA TÉCNICA

### META TAGS Y HEAD

**Página raíz (/):**

```html
<meta
	name="description"
	content="Estudio jurídico especializado en derecho de daños, responsabilidad civil y accidentes de tránsito. [Nombre] abogado con 25+ años de experiencia."
/>
<meta
	name="keywords"
	content="abogado derecho daños, responsabilidad civil, accidentes tránsito, derecho seguros, Buenos Aires"
/>
<meta property="og:title" content="Estudio Jurídico - Derecho de Daños" />
<meta
	property="og:description"
	content="Especialista en responsabilidad civil y accidentes de tránsito"
/>
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="charset" content="UTF-8" />
<link rel="canonical" href="https://dominio.com/" />
<link rel="icon" href="/favicon.ico" />
```

**Cada página de servicio:**

```html
<!-- Ejemplo: responsabilidad-civil -->
<meta
	name="description"
	content="Asesoramiento integral en responsabilidad civil. Recupera el máximo resarcimiento con nuestro equipo especializado."
/>
<meta property="og:title" content="Responsabilidad Civil - [Nombre Abogado]" />
<link
	rel="canonical"
	href="https://dominio.com/servicios/responsabilidad-civil"
/>
```

### STRUCTURED DATA (JSON-LD)

**Organization Schema (en layout raíz):**

```json
{
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"name": "[Nombre Estudio/Abogado]",
	"image": "https://dominio.com/logo.png",
	"description": "Estudio jurídico especializado en derecho de daños",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "[Dirección]",
		"addressLocality": "Buenos Aires",
		"postalCode": "[CP]",
		"addressCountry": "AR"
	},
	"telephone": "[Teléfono]",
	"email": "[Email]",
	"url": "https://dominio.com",
	"sameAs": [
		"https://www.linkedin.com/in/[perfil]",
		"https://www.instagram.com/[perfil]"
	],
	"areaServed": "AR",
	"knowsAbout": [
		"Derecho de Daños",
		"Responsabilidad Civil",
		"Accidentes de Tránsito"
	]
}
```

**BreadcrumbList Schema (cada página):**

```json
{
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Inicio",
			"item": "https://dominio.com"
		},
		{
			"@type": "ListItem",
			"position": 2,
			"name": "Servicios",
			"item": "https://dominio.com/servicios"
		},
		{
			"@type": "ListItem",
			"position": 3,
			"name": "Responsabilidad Civil",
			"item": "https://dominio.com/servicios/responsabilidad-civil"
		}
	]
}
```

**FAQPage Schema (en página FAQ):**

```json
{
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": [
		{
			"@type": "Question",
			"name": "¿Cuánto tiempo tarda un juicio de daños?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "[Respuesta larga]"
			}
		}
	]
}
```

**Person Schema (si lo requiere cliente):**

```json
{
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "[Nombre Completo]",
	"jobTitle": "Abogado Especialista",
	"image": "https://dominio.com/foto-profesional.jpg",
	"sameAs": ["https://linkedin.com/in/..."],
	"knowsAbout": ["Derecho de Daños", "Responsabilidad Civil"]
}
```

### SITEMAP Y ROBOTS

**sitemap.xml (dinámico en Next.js):**

```
/
/sobre-nosotros
/servicios
/servicios/responsabilidad-civil
/servicios/derecho-seguros
/servicios/accidentes-transito
/contacto
/faq
/politica-privacidad
```

**robots.txt:**

```
User-agent: *
Allow: /
Disallow: /api
Disallow: /admin

Sitemap: https://dominio.com/sitemap.xml
```

### HEADINGS HIERARCHY

**Cada página debe tener:**

- **1 H1 único** (título principal de página)
- **2-3 H2** (secciones principales)
- **H3** (subsecciones bajo H2)
- **Nunca saltear niveles** (H1 → H3 es incorrecto)

Ejemplo estructura Home:

```
H1: "Especialista en Derecho de Daños"
  H2: "Servicios"
    H3: "Responsabilidad Civil"
    H3: "Derecho de Seguros"
    H3: "Accidentes de Tránsito"
  H2: "Sobre Nosotros"
    H3: "[subsección]"
  H2: "Testimonios"
  H2: "Preguntas Frecuentes"
```

### KEYWORDS POR PÁGINA

**Home (/):**

- Abogado derecho daños Buenos Aires
- Especialista responsabilidad civil
- Accidentes tránsito abogado
- Derecho seguros

**Sobre Nosotros:**

- [Nombre] abogado
- Experiencia derecho daños
- Certificaciones abogado
- Trayectoria profesional

**Servicios/Responsabilidad Civil:**

- Responsabilidad civil (secundaria)
- Indemnización por daños
- Abogado reclamación
- Reclamo responsabilidad civil

**Contacto:**

- Contactar abogado
- Consulta gratuita
- Agendar cita abogado

---

## 📊 PERFORMANCE Y VELOCIDAD

### CORE WEB VITALS OBJETIVOS

```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### OPTIMIZACIONES

**Imágenes:**

- Formato: WebP con fallback JPG
- Responsive: srcset en diferentes tamaños
- Lazy loading: loading="lazy"
- Compresión: tinypng.com
- Dimensiones: especificar width/height

**Fuentes:**

- Google Fonts optimizadas (1 font máximo)
- Font-display: swap (mostrar texto mientras carga)
- Preload: `<link rel="preload" as="font">`

**CSS/JS:**

- Minificar y comprimir (gzip)
- Code splitting en Next.js (dynamic imports)
- Tree shaking (eliminar código no usado)
- Defer scripts no-critical

**Caching:**

- Cache-Control: max-age=31536000 (imágenes)
- Cache-Control: max-age=3600 (HTML)

### LIGHTHOUSE CHECKLIST

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

---

## 📋 FORMULARIO DE CONTACTO

### CAMPOS REQUERIDOS

```
1. Nombre completo (text, required)
2. Email (email, required)
3. Teléfono (tel, optional pero recomendado)
4. Asunto (select con opciones:
   - Consulta general
   - Responsabilidad civil
   - Accidente tránsito
   - Derecho seguros
   - Otro)
5. Mensaje (textarea, required, min 10 chars)
6. CAPTCHA o honeypot (anti-spam)
7. Checkbox: "Acepto política privacidad" (required)
```

### VALIDACIÓN

**Frontend:**

- Campo requerido (required HTML5)
- Email válido (regex o HTML5 type="email")
- Teléfono formato (opcional validar)
- Mensaje mínimo 10 caracteres
- Errores inline debajo de cada campo

**Backend (PHP):**

- Validar todas las entradas
- Sanitizar HTML/SQL injection
- Rate limiting (máx 5 requests/IP por hora)
- Validar email con DNS check

### INTEGRACIÓN TELEGRAM

**Flujo:**

1. Usuario completa formulario
2. Frontend valida datos
3. POST a `/api/contact` (Next.js)
4. Backend valida y sanitiza
5. Envía mensaje a bot Telegram
6. Responde al usuario con success toast
7. Guarda en BD (opcional)

**Mensaje Telegram formato:**

```
📋 NUEVA CONSULTA
━━━━━━━━━━━━━━━━
👤 Nombre: [nombre]
📧 Email: [email]
☎️ Teléfono: [teléfono]
📌 Asunto: [asunto]
💬 Mensaje:
[mensaje]
━━━━━━━━━━━━━━━━
🕐 [hora argentina]
```

---

## 🎯 PÁGINA HOME - ESTRUCTURA DETALLADA

### SECCIÓN 1: HERO

```
[Fondo: gradiente azul-verde]
┌─────────────────────────────────┐
│                                 │
│  H1 "Especialista en Derecho   │
│      de Daños"                  │
│                                 │
│  Subtítulo: "Más de 25 años     │
│  de experiencia profesional"    │
│                                 │
│  [CTA Button: "Consultar Ahora"]│
│                                 │
└─────────────────────────────────┘

Animaciones:
- H1: fade-in + slide-up
- Descripción: fade-in delay 0.2s
- Button: pulse animation leve
```

### SECCIÓN 2: SERVICIOS (3 CARDS)

```
H2 "Nuestros Servicios"

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Responsab.  │  │ Derecho de  │  │ Accidentes  │
│ Civil       │  │ Seguros     │  │ de Tránsito │
│             │  │             │  │             │
│ [Icon]      │  │ [Icon]      │  │ [Icon]      │
│             │  │             │  │             │
│ Descripción │  │ Descripción │  │ Descripción │
│ breve       │  │ breve       │  │ breve       │
│             │  │             │  │             │
│[Leer más >] │  │[Leer más >] │  │[Leer más >] │
└─────────────┘  └─────────────┘  └─────────────┘

Animación:
- Cada card: fade-up on scroll
```

### SECCIÓN 3: SOBRE NOSOTROS (PREVIEW)

```
[Fondo: gris claro]
┌──────────────────────────────────┐
│ H2 "Sobre Nosotros"              │
│                                  │
│ [Foto profesional 400x400]       │
│                                  │
│ Breve biografía (150-200 words)  │
│ - Años experiencia               │
│ - Certificaciones clave          │
│ - Filosofía de trabajo           │
│                                  │
│ [Button: "Conocer más >"]        │
└──────────────────────────────────┘
```

### SECCIÓN 4: POR QUÉ ELEGIRNOS (FEATURES)

```
H2 "¿Por qué elegirnos?"

4 CARDS CON ICONOS:
┌────────┐  ┌────────┐
│ 25+    │  │Matríc. │
│ Años   │  │Colegio │
│        │  │Abog.   │
└────────┘  └────────┘

┌────────┐  ┌────────┐
│ Espec. │  │ Resul- │
│Univ.   │  │tados   │
│Católica│  │Probados│
└────────┘  └────────┘

Animación: grid reveal on scroll
```

### SECCIÓN 5: TESTIMONIOS (CAROUSEL)

```
[Fondo: blanco]
H2 "Lo que dicen nuestros clientes"

┌─────────────────────────┐
│ [Avatar circular]       │
│ "Excelente profesional. │
│  Resolvió mi caso en... │
│  Muy recomendado."      │
│                         │
│ - Cliente Name          │
│ - Tipo de caso          │
└─────────────────────────┘

[Dots de navegación]
[Botones prev/next]

Animación: fade + zoom on scroll
```

### SECCIÓN 6: FAQ (ACCORDION)

```
[Fondo: gris claro]
H2 "Preguntas Frecuentes"

├─ ¿Cuánto cuesta una consulta? [+]
├─ ¿Cuál es el plazo de un juicio? [+]
├─ ¿Qué documentos necesito? [+]
└─ ¿Cómo es el proceso? [+]

Animación:
- Click abre accordion con animate
- Altura: 0 → auto
- Opacity: 0 → 1
```

### SECCIÓN 7: CTA FINAL

```
[Fondo: gradiente azul-verde]
┌─────────────────────────────────┐
│  H2 "¿Necesitas ayuda?"         │
│                                 │
│  "Contacta con nosotros para    │
│   una consulta sin compromiso"  │
│                                 │
│  [CTA Button: "Agendar Consulta"]│
│                                 │
│  ☎️ [Teléfono] | 📧 [Email]    │
└─────────────────────────────────┘
```

---

## 📧 PÁGINA CONTACTO

### FORMULARIO + INFO

```
LAYOUT: Grid 2 columnas (md:)
└─ Columna 1: Formulario
└─ Columna 2: Info contacto + mapa

FORMULARIO:
├─ Nombre *
├─ Email *
├─ Teléfono
├─ Asunto * (select)
├─ Mensaje * (textarea)
├─ Checkbox privacidad *
└─ Button Submit

INFO LATERAL:
├─ H3 "Contacto directo"
├─ ☎️ Teléfono
├─ 📧 Email
├─ 📍 Dirección
├─ 🕐 Horarios de atención
└─ [Google Maps embed]

SOCIAL MEDIA:
├─ LinkedIn
├─ Instagram (si aplica)
└─ WhatsApp
```

---

## 🎨 PÁGINA SOBRE NOSOTROS

### ESTRUCTURA

```
HERO (pequeño):
├─ H1 "Sobre Nosotros"
└─ Descripción breve

SECCIÓN 1: PRESENTACIÓN
├─ [Foto profesional grande]
└─ Biografía completa (500+ palabras)
   ├─ Formación académica
   ├─ Experiencia profesional
   ├─ Especialización
   └─ Filosofía de trabajo

SECCIÓN 2: CERTIFICACIONES
├─ H2 "Formación y Certificaciones"
├─ Timeline vertical con:
   ├─ Año
   ├─ Certificación/Diploma
   └─ Institución

SECCIÓN 3: LOGROS/CIFRAS
├─ Grid 4 items:
   ├─ 25+ años experiencia
   ├─ 500+ casos resueltos
   ├─ 98% satisfacción clientes
   └─ Especialista certificado

SECCIÓN 4: VALORES
├─ H2 "Nuestros Valores"
├─ 3 cards:
   ├─ Profesionalismo
   ├─ Integridad
   └─ Compromiso
```

---

## 📄 PÁGINA SERVICIOS (GRID)

```
HERO pequeño:
├─ H1 "Nuestros Servicios"
└─ Descripción general

SERVICIOS PRINCIPALES (3 cards):
├─ Card 1: Responsabilidad Civil
│  ├─ Icon
│  ├─ Descripción
│  ├─ Puntos clave (lista)
│  └─ CTA "Más información"
├─ Card 2: Derecho de Seguros
└─ Card 3: Accidentes de Tránsito

Cada servicio clickeable lleva a:
/servicios/[servicio-slug]/page.jsx
```

### SUB-PÁGINA SERVICIO (ej: responsabilidad-civil)

```
H1 "Responsabilidad Civil"

CONTENIDO:
├─ H2 "¿Qué es?"
│  └─ Explicación simple 200 palabras
├─ H2 "¿Cuándo aplica?"
│  └─ Casos comunes (lista)
├─ H2 "Proceso legal"
│  └─ Timeline 5 pasos
├─ H2 "Preguntas frecuentes"
│  └─ FAQ accordion
└─ CTA: "Consultar sobre este servicio"
```

---

## 🔐 PÁGINA POLÍTICA PRIVACIDAD

- Texto completo, legal
- Secciones claras (H2)
- Última actualización
- Datos que se recopilan
- Cómo se usan
- Derechos del usuario
- Contacto DPO (si aplica)

---

## 📈 ANALYTICS Y TRACKING

### GOOGLE ANALYTICS 4

```javascript
// En layout.jsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Eventos a rastrear:**

- `view_page`: cada página
- `form_submit`: envío de formulario
- `click_cta`: clicks en botones CTA
- `scroll_milestone`: usuario llega a footer
- `phone_click`: clicks en teléfono

### GOOGLE SEARCH CONSOLE

- Vincular dominio
- Submit sitemap
- Monitorear keywords
- Errores de crawling

---

## 🛠️ STACK TÉCNICO FINAL

### FRONTEND

```
Next.js 16 (App Router)
├─ React 19
├─ Tailwind CSS 4
├─ TypeScript (opcional pero recomendado)
├─ Framer Motion (animaciones avanzadas)
├─ react-hook-form (formularios)
├─ zod (validación)
├─ axios (requests HTTP)
└─ lucide-react (iconos)
```

### BACKEND (PHP)

```
/api/contact (handler formulario)
├─ Validación POST
├─ Sanitización inputs
├─ Rate limiting
├─ Envío Telegram webhook
├─ Respuesta JSON
└─ Logging de errores
```

### HOSTING & DEPLOYMENT

```
Frontend: Vercel (Next.js native)
Backend: DonWeb (plan básico)
Domain: comprado
SSL: automático (Vercel + DonWeb)
```

---

## ✅ CHECKLIST DE ENTREGA

- [ ] Estructura de carpetas Next.js completa
- [ ] Layout y páginas (/, /sobre-nosotros, /servicios, /contacto)
- [ ] Header sticky con navegación responsive
- [ ] Footer con links y social media
- [ ] Hero section con animaciones
- [ ] Service cards con hover effects
- [ ] Formulario con validación frontend+backend
- [ ] Integración Telegram webhook
- [ ] Metadatos en todas las páginas
- [ ] Schema.org JSON-LD
- [ ] Sitemap.xml dinámico
- [ ] Robots.txt
- [ ] Imágenes optimizadas (WebP)
- [ ] Google Fonts integradas
- [ ] Tailwind CSS configurado
- [ ] Mobile responsive comprobado
- [ ] Lighthouse >90 en todas métricas
- [ ] Google Analytics configurado
- [ ] HTTPS en producción
- [ ] 404 page customizado

---

## 📝 NOTAS FINALES

1. **Esperar materiales del cliente:**
    - Logo
    - Foto profesional
    - Texto sobre nosotros
    - Datos contacto
    - Paleta colores exacta (si aplica)

2. **SEO no es "set and forget":**
    - Añadir contenido regularmente
    - Blog posts en `/blog` (opcional)
    - Mantener keywords actualizadas

3. **Mantenimiento post-launch:**
    - Monitorear Google Search Console
    - Revisar Lighthouse mensualmente
    - Update certificados SSL
    - Backup regular del código

4. **Iteraciones futuras:**
    - Blog con artículos jurídicos
    - Chatbot con IA
    - Integración WhatsApp Business
    - Sistema de citas/agendamiento
