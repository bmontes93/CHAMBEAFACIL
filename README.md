<div align="center">
  <img src="src/assets/hero_bg.png" alt="ChambeaFacil Hero" width="100%" />
  <h1 align="center">CHAMBEAFACIL</h1>
  <h3 align="center">Plataforma Integral de Gestión y Empleo Hiper-local</h3>
  <p align="center">
    Una solución robusta y moderna para conectar talento con oportunidades en el Callejón de Huaylas.
    <br />
    <a href="https://github.com/bmontes93/CHAMBEAFACIL"><strong>Explorar los Docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/issues">Solicitar Feature</a>
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/bmontes93/CHAMBEAFACIL?style=for-the-badge" alt="Contributors">
    </a>
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/network/members">
      <img src="https://img.shields.io/github/forks/bmontes93/CHAMBEAFACIL?style=for-the-badge" alt="Forks">
    </a>
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/stargazers">
      <img src="https://img.shields.io/github/stars/bmontes93/CHAMBEAFACIL?style=for-the-badge" alt="Stars">
    </a>
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/issues">
      <img src="https://img.shields.io/github/issues/bmontes93/CHAMBEAFACIL?style=for-the-badge" alt="Issues">
    </a>
    <a href="https://github.com/bmontes93/CHAMBEAFACIL/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/bmontes93/CHAMBEAFACIL?style=for-the-badge" alt="License">
    </a>
  </p>
</div>

<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el Proyecto</a></li>
    <li><a href="#tecnologías">Tecnologías</a></li>
    <li>
      <a href="#instalación-y-despliegue">Instalación y Despliegue</a>
      <ul>
        <li><a href="#configuración-backend">Configuración Backend</a></li>
        <li><a href="#configuración-frontend">Configuración Frontend</a></li>
      </ul>
    </li>
    <li><a href="#licencia">Licencia</a></li>
  </ol>
</details>

<br />

## Sobre el Proyecto

**ChambeaFacil** is a hyper-local employment platform designed to bridge the gap between local employers and operational or professional talent. The application minimizes friction in the hiring process through a streamlined user experience, tailored specifically for the regional market dynamics.

The platform facilitates two primary user roles:

- **Companies**: Capabilities include job posting management, candidate filtering, and performance metrics analysis.
- **Workers**: Features include a personal dashboard for application tracking, profile management, and direct job application submission.

Key architectural highlights:

- **Zero Friction UX**: Optimized workflows for rapid job posting and application.
- **Secure Authentication**: Robust JWT-based session management and role-based route protection.
- **Scalable Architecture**: Built on the PERN stack principles with clean separation of concerns.

## Tecnologías

The architecture follows strict separation of concerns, ensuring scalability and maintainability.

### Client (Frontend)

- **Framework**: React (v19) with Vite for high-performance tooling.
- **Styling**: Modern Vanilla CSS with CSS Variables for theming; Glassmorphism design language.
- **State/Routing**: React Router DOM (v7) for client-side routing.
- **Animations**: Framer Motion for UI micro-interactions.
- **Icons**: Lucide React.

### Server (Backend)

- **Runtime**: Node.js.
- **Framework**: Express.js implementing RESTful API patterns.
- **Database/ORM**: Prisma ORM utilizing SQLite for development (migratable to PostgreSQL).
- **Security**: Bcryptjs for password hashing; JSON Web Tokens (JWT) for stateless authentication.

## Instalación y Despliegue

### Prerrequisitos

- Node.js (v18 or higher)
- npm or yarn package manager

### Configuración Backend

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `server` directory with the following variables:

   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your_secure_jwt_secret_key"
   ```

4. Initialize the database:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`.

### Configuración Frontend

1. Open a new terminal and navigate to the project root:

   ```bash
   cd .. # If currently in server directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the application:
   The client will run on `http://localhost:5173`.

## Licencia

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
