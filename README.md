# Reverb

Reverb es una microaplicación diseñada para facilitar la creación y gestión de encuestas dentro de las organizaciones. Su objetivo es fomentar la retroalimentación alineada y colaborativa entre empleados y administradores, en un entorno simple, moderno y eficiente.

---

## Características principales

- **Gestión de encuestas**: Los administradores pueden crear, publicar y gestionar encuestas en diferentes estados (borrador, publicada, cerrada).
- **Multiformato de preguntas**: Admite preguntas abiertas, de opción única y de selección múltiple, con la posibilidad de establecer límites de tiempo para las respuestas.
- **Flujo controlado**: Los empleados solo pueden responder una encuesta a la vez, y los creadores no pueden participar en sus propias encuestas.
- **Estados personalizados**: Estados diferenciados para encuestas (borrador, publicada, cerrada) y para las interacciones de los empleados con las mismas (pendiente, respondida, finalizada).

---

## Tecnologías utilizadas

### Backend
- **Node.js**: Plataforma principal para el servidor.
- **Express.js**: Framework para manejar rutas y lógica del backend.
- **PrismaORM**: Para la gestión de la base de datos.
- **SQLite**: Base de datos ligera y eficiente para desarrollo y pruebas.

### Frontend
- **React.js**: Biblioteca para construir interfaces de usuario dinámicas.
- **Vite.js**: Herramienta rápida para construir aplicaciones web modernas.
- **CSS Modules**: Para estilizar componentes de manera aislada y modular.

---

## Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/reverb.git
   cd reverb
   ```

2. Instala las dependencias del backend:
   ```bash
   cd backend
   npm install
   ```

3. Configura Prisma y la base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Llena la base de datos con datos de prueba:
   ```bash
   node prisma/seed.js
   ```

5. Inicia el servidor:
   ```bash
   npm run dev
   ```

6. Instala las dependencias del frontend:
   ```bash
   cd ../frontend
   npm install
   ```

7. Inicia el servidor de desarrollo del frontend:
   ```bash
   npm run dev
   ```

---

## Estructura del proyecto

```
reverb/
|── prisma/
│   ├── schema.prisma
│   └── seed.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── routes/
│   ├── package.json
│   └── app.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md
```

---

## Scripts disponibles

### Backend
- **`npm run dev`**: Inicia el servidor en modo desarrollo.
- **`npx prisma studio`**: Abre el panel interactivo de Prisma para gestionar datos.

### Frontend
- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Crea una versión optimizada de la aplicación para producción.

---

## Próximos pasos

- Implementar notificaciones en tiempo real para nuevas encuestas.
- Mejorar la experiencia del usuario con analíticas de encuestas.
- Integrar autenticación basada en roles.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, crea un *fork* del repositorio, realiza tus cambios en una rama y envía un *pull request*.

---

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).
