# Taller Nº 3: Desarrollo Web Móvil - Dashboard DataMobile

Este proyecto consiste en un Dashboard interactivo desarrollado con Next.js Full Stack. La aplicación permite visualizar métricas clave y filtrar datos de inventario en tiempo real, gestionando el estado global con Redux y persistiendo datos en PostgreSQL.

---

## 📋 Información del Grupo

**Número de grupo:** 5

**Integrantes:**
* **Bryan Carvajal** - 21.177.361-8
* **David Pino** - 21.274.006-3
* **Javier Pizarro** - 21.213.249-7
* **Fernando Aranda** - 20.007.253-7

---

## 🚀 Descripción del Proyecto

La aplicación **DataMobile Dashboard** ha sido diseñada bajo el enfoque *Mobile First* y cumple con los siguientes requerimientos técnicos:

* **Arquitectura:** Next.js 14 (App Router) integrando Frontend y Backend en el mismo repositorio.
* **Base de Datos:** Conexión a PostgreSQL (Neon) gestionada mediante el ORM **TypeORM**.
* **Gestión de Estado:** Implementación de **Redux Toolkit** para el manejo de filtros y sincronización de componentes.
* **Visualización:** Gráficos interactivos (Barras y Torta) implementados con **Recharts**.
* **Funcionalidad:** API Routes para operaciones de lectura y poblado de datos (Seed).

---

## 🛠️ Instrucciones de Instalación y Ejecución

Sigue estos pasos para desplegar la aplicación en un entorno local.

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd taller-3-web-movil
2. Instalar dependencias
Instala las librerías necesarias ejecutando:

Bash

npm install
3. Configurar Base de Datos (.env)
El proyecto requiere una conexión a base de datos PostgreSQL.

Crea un archivo llamado .env en la raíz del proyecto.

Define la variable DATABASE_URL con tus credenciales (local o Neon):

Fragmento de código

# Ejemplo de configuración en el archivo .env
DATABASE_URL="postgresql://usuario:password@host_neon/nombre_db?sslmode=require"
4. Ejecutar el Servidor
Inicia el entorno de desarrollo:

Bash

npm run dev
La aplicación estará disponible en: http://localhost:3000

📦 Poblar la Base de Datos (Seed)
Para facilitar las pruebas, el proyecto incluye una API automática que limpia y llena la base de datos con 50 productos de prueba.

Pasos para cargar datos:

Asegúrate de que el servidor esté corriendo (npm run dev).

Abre tu navegador web.

Ingresa a la siguiente ruta para ejecutar el script:

http://localhost:3000/api/seed
Espera a ver el mensaje de confirmación: {"message":"¡Base de datos llenada con 50 productos!"}.

Vuelve al inicio (http://localhost:3000) y verás el Dashboard con los datos cargados y los gráficos funcionando.