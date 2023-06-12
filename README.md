# React Chat

React Chat é um aplicativo web de bate-papo em tempo real que permite enviar e receber mensagens instantaneamente. Ele é construído usando React, Firebase e Tailwind CSS.

![React Chat screenshot](react-app-video.gif)

## Características

- Envie mensagens em tempo real para outros usuários conectados.
- Interface de usuário intuitiva e responsiva.
- Cadastro e autenticação de usuários com Firebase.
- Armazenamento de mensagens no banco de dados em tempo real do Firebase.
- Estilos personalizados usando Tailwind CSS.

## Pré-requisitos

- Node.js (v14 ou superior)
- Conta Firebase para configurar o projeto

## Instalação

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/tu-usuario/react-chat.git
```

2. Navegue até o diretório do projeto:

```bash
cd react-chat
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Configuração

1. Crea un nuevo proyecto en Firebase: [https://console.firebase.google.com/](https://console.firebase.google.com/)

2. Habilita la autenticación por correo electrónico y contraseña en la sección "Authentication" de tu proyecto Firebase.

3. Crea una nueva base de datos en tiempo real en la sección "Database" de tu proyecto Firebase.

4. En la página de configuración de tu proyecto Firebase, busca la sección "SDK de Firebase" y copia las variables de configuración.


## Usar

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Abra seu navegador e vá para "http://localhost:5173" para ver o aplicativo em execução.


## Contribuição

Se você quiser contribuir com este projeto, seja bem-vindo! Você pode fazer melhorias, correções de bugs ou adicionar novos recursos. Para contribuir, siga estas etapas:

- Faça um fork neste repositório.
- Crie uma ramificação com o nome da sua função ou aprimoramento: git checkout -b my-improvement.
- Faça as alterações necessárias e confirme: git commit -m "Add my improvement".
- Envie suas alterações para o repositório remoto: git push origin my-enhancement.
- Abra uma solicitação pull no GitHub.

## Créditos

Este projeto foi criado por Humberto Colmenares.

Agradecimentos especiais aos seguintes recursos e bibliotecas utilizados:

[freeCodeCamp.org](https://www.freecodecamp.org/)

- React
- Firebase
 -Tailwind CSS
