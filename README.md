# React Chat

React Chat es una aplicación web de chat en tiempo real que te permite enviar y recibir mensajes instantáneamente. Está construida utilizando React, Firebase y Tailwind CSS.

![Captura de pantalla del proyecto](screenshot.png)

## Características

- Envía mensajes en tiempo real a otros usuarios conectados.
- Interfaz de usuario intuitiva y receptiva.
- Registro de usuarios y autenticación con Firebase.
- Almacenamiento de mensajes en la base de datos en tiempo real de Firebase.
- Estilos personalizados utilizando Tailwind CSS.

## Requisitos Previos

- Node.js (v14 o superior)
- Cuenta de Firebase para configurar el proyecto

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/react-chat.git
```

2. Navega al directorio del proyecto:

```bash
cd react-chat
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

## Configuración

1. Crea un nuevo proyecto en Firebase: [https://console.firebase.google.com/](https://console.firebase.google.com/)

2. Habilita la autenticación por correo electrónico y contraseña en la sección "Authentication" de tu proyecto Firebase.

3. Crea una nueva base de datos en tiempo real en la sección "Database" de tu proyecto Firebase.

4. En la página de configuración de tu proyecto Firebase, busca la sección "SDK de Firebase" y copia las variables de configuración.

5. Crea un archivo `.env.local` en la raíz del proyecto y pega las variables de configuración copiadas en el paso anterior. Asegúrate de agregar el prefijo `VITE_` a cada variable:

```bash
VITE_API_KEY=valor_de_api_key
VITE_AUTH_DOMAIN=valor_de_auth_domain
VITE_PROJECT_ID=valor_de_project_id
VITE_STORAGE_BUCKET=valor_de_storage_bucket
VITE_MESSSAGING_SENDER_ID=valor_de_messaging_sender_id
VITE_APP_ID=valor_de_app_id
```

## Uso

1. Inicia el servidor de desarrollo:

```bash
npm run dev
```

2. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura de Archivos

La estructura de archivos del proyecto se organiza de la siguiente manera:

```
├── src/
│   ├── components/
│   ├── firebase/
│   ├── hooks/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── public/
│   ├── index.html
│   └── favicon.ico
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

- La carpeta `src/components/` contiene los componentes de React utilizados en la aplicación.
- La carpeta `src/firebase/` contiene la configuración y funciones de Firebase.
- La carpeta `src/hooks/` contiene los hooks personalizados utilizados en la aplicación.
- La carpeta `src/styles/` contiene los estilos personalizados utilizando Tailwind CSS.
- `App.js` es el componente principal que define la estructura y lógica de la aplicación.
- `index.js` es el punto de entrada de la aplicación.

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes realizar mejoras, correcciones de errores o agregar nuevas características. Para
