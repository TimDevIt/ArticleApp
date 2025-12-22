# ArticleApp

ArticleApp — веб‑приложение для работы со статьями и комментариями

## Стек
- Vue 3  
- Vuex (модули статей и комментариев)
- Vue Router
- Vuetify
- Express.js
- Sequelize

## Структура проекта

- `frontend/` — клиентское приложение (интерфейс, роуты, Vuex-модули, страницы аналитики комментариев).
- `backend/` — серверная часть (API для статей и комментариев). 

## Запуск проекта

### 1. Клонировать репозиторий
```
git clone https://github.com/TimDevIt/ArticleApp.git
cd ArticleApp
```

### 2. Запуск фронтенда
```
cd frontend
npm install
npm run serve
```

### 3. Запуск backend

 ```
cd backend
npm install
node server.js
 ```

