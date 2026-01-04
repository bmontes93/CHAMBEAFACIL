#  Chambea Huaraz

> **Conectando Talento con Oportunidades en el Callejón de Huaylas.**

![Project Status](https://img.shields.io/badge/Status-MVP_Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-PERN%20Stack-blue?style=for-the-badge)

**Chambea Huaraz** es una plataforma de empleo hiper-local diseñada específicamente para la realidad de Huaraz y el Callejón de Huaylas. A diferencia de las bolsas de trabajo genéricas, nos enfocamos en reducir la fricción entre el empleador local y el talento operativo/profesional, ofreciendo una experiencia de usuario premium, rápida y segura.

---

##  Características Principales

###  Experiencia "Zero Fricción"

- **Diseño Glassmorphism**: Interfaz moderna, limpia y responsiva que inspira confianza.
- **Navegación Intuitiva**: Flujos de usuario optimizados para postular o publicar en menos de 3 clics.

###  Seguridad y Roles

- **Autenticación JWT Robusta**: Protección de rutas y persistencia de sesión segura.
- **Roles Diferenciados**:
  - **Empresas**: Panel de control para gestionar ofertas, ver métricas y filtrar candidatos.
  - **Trabajadores**: Dashboard personal para seguimiento de postulaciones y perfil profesional.

###  Funcionalidades Core

- **Publicación de Ofertas**: Formulario inteligente con validación y asignación automática de imágenes por categoría.
- **Postulación en un Clic**: Sistema interno de aplicaciones (adiós al "envíame un inbox").
- **Dashboards en Tiempo Real**: Métricas de rendimiento para empresas y estado de postulaciones para trabajadores.

---

##  Stack Tecnológico

La arquitectura sigue los principios de separación de preocupaciones, escalabilidad y mantenibilidad.

### Frontend (Client)

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Build ultra-rápido).
- **Estilos**: Vanilla CSS moderno con Variables (Custom Properties) para consistencia de diseño e implementación de Glassmorphism.
- **Animaciones**: `framer-motion` para micro-interacciones fluidas.
- **Iconografía**: `lucide-react`.
- **Enrutamiento**: `react-router-dom` con protección de rutas (Private Routes).

### Backend (Server)

- **Runtime**: [Node.js](https://nodejs.org/).
- **Framework**: [Express.js](https://expressjs.com/) (Arquitectura RESTful).
- **ORM**: [Prisma](https://www.prisma.io/) (Type-safe database access).
- **Base de Datos**: SQLite (Entorno Desarrollo) / Fácil migración a PostgreSQL.
- **Seguridad**: `bcryptjs` (Hashing de contraseñas), `jsonwebtoken` (Auth).

---

##  Estructura del Proyecto

```bash
Chambea-Huaraz/
├── src/                # Frontend Source
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── components/     # Componentes reutilizables (UI Kit)
│   ├── pages/          # Vistas principales (Router pages)
│   └── utils/          # Helpers y lógica compartida
├── server/             # Backend Source
│   ├── prisma/         # Schema y migraciones de BD
│   ├── src/
│   │   ├── controllers/ # Lógica de negocio
│   │   ├── middleware/  # Auth y validaciones
│   │   └── routes/      # Definición de endpoints API
│   └── app.js          # Entry point del servidor
└── ...
```

---

##  Instalación y Despliegue Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

### Prerrequisitos

- Node.js (v18 o superior)
- NPM o Yarn

### 1. Clonar el repositorio

```bash
git clone https://github.com/bmontes93/Chambea-Huaraz.git
cd Chambea-Huaraz
```

### 2. Configurar el Backend (Servidor)

```bash
cd server
npm install

# Configurar variables de entorno (Crear archivo .env en /server)
echo "DATABASE_URL=\"file:./dev.db\"" > .env
echo "JWT_SECRET=\"tu_super_secreto_seguro\"" >> .env

# Migrar la base de datos
npx prisma migrate dev --name init

# Iniciar servidor (Puerto 3000)
npm run dev
```

### 3. Configurar el Frontend (Cliente)

En una nueva terminal, regresa a la raíz y configura el cliente:

```bash
cd ..  # Volver a raíz si estabas en server
npm install

# Iniciar cliente (Vite)
npm run dev
```

¡Listo! La aplicación estará corriendo en `http://localhost:5173`.

---

##  Roadmap

- [x] MVP Core (Auth, Jobs, Applications).
- [ ] **Geolocalización Real**: Integración con Google Maps/Mapbox para ubicación precisa de chambas.
- [ ] **Login Social**: OAuth con Google y Facebook.
- [ ] **Notificaciones**: Alertas por Email/WhatsApp (Twilio/SendGrid).
- [ ] **Pagos**: Integración con Yape/Plin para destacar ofertas premium.

---

##  Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir lo que te gustaría cambiar o forkear el repositorio y enviar un Pull Request.

##  Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---


