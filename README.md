# Использование шаблона

1. Установить зависимости

```bash
npm install
```

2. Запустить сервер для разработки

```bash
npm run dev
```

---

-   Собрать проект

```bash
npm run build
```

# Использование `Docker`

1. Создать образ `nginx`

```bash
make docker_build
```

2. Запустить контейнер `nginx`

```bash
make docker_run
```

3. Войти в контейнер `nginx`

```bash
make docker_exe
```
