## 🚀 Inicio Rápido

Ejecuta el siguiente comando para iniciar el entorno de desarrollo:

```bash
# Elige según tu gestor de paquetes
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🏗️ Arquitectura del Proyecto

Arquitectura por Capas (DDD o Clean Architecture)

/src
  /core               → Lógica de negocio
  /features           → Funcionalidades agrupadas (ej: auth, dashboard)
  /shared             → Utilidades compartidas (hooks, contextos)
  /ui                 → Componentes UI reutilizables
  /pages              → Páginas

📁 Estructura Detallada

Assets Globales
public
├── assets/                 # Assets globales (logos, íconos, imágenes compartidas)
│   ├── images/             # Ej: logo.png, default-avatar.svg
│   ├── icons/              # Íconos SVG (opcional)
├── locales/                # Archivos de traduccion en formato json
│   ├── es/                 # Archivos de traduccion en español
│   ├── en/                 # Archivos de traduccion en ingles

Estilos
src
├── core/                # Lógica de negocio (sin estilos aquí)
├── features/            # Estilos específicos por feature
│   └── auth/
│       ├── components/  
│       ├── styles/      # Estilos locales (ej: `Auth.module.css`)
├── shared/              # Estilos globales y compartidos
│   ├── styles/
│   │   ├── globals.css  # Estilos globales (reset, fuentes)
│   │   ├── themes/      # Variables de temas (CSS/TS/SASS)
│   │   └── mixins.scss  # Mixins reutilizables (si usas SASS)
├── ui/                  # Estilos de componentes UI
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css  # CSS Modules (recomendado)
│   └── ...
/pages                   # Estilos por página (si son necesarios)

📝 Convenciones de Código

Tipo                            |   Convención                                 |   Ejemplo
_____________________________________________________________________________________________________________
URLs, nombres de archivos, HTML |   kebab-case                                 |   user-profile
_____________________________________________________________________________________________________________
Variables/Funciones             |   camelCase                                  |   const userName = 'John';
_____________________________________________________________________________________________________________
Clases/Tipos                    |   PascalCase                                 |   class UserProfile {}

_____________________________________________________________________________________________________________
Interfaces                      |   PascalCase (prefijar con I es opcional*)   |   interface UserProps {} o IUserProps
_____________________________________________________________________________________________________________
Enums                           |   PascalCase                                 |  enum UserRole {}
_____________________________________________________________________________________________________________
Constantes                      |   UPPER_SNAKE_CASE                           |  const MAX_USERS = 100;

## Standard de codificacion

Versión JavaScript de standardJS (cero configuración):

## https://standardjs.com/#usage

Características:
 . Sin punto y coma.
 . Comillas simples.
 . Tipado estricto por defecto