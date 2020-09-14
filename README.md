# Suite

Suite - это мой бойлерплейт для приложения на React. В данный момент находится в разработке.


# Что планируется

  - Библиотека стилей компонентов на SCSS для быстройнастройки тем
  - Настройка react-router-dom
  - Общий комплект утилит для работы с текстом и числами (склонение, числительные, рода и т.д.)
  - Интеграция с MongoDB
  - Настройка Redux (Redux-Rematch)
  - Демо-приложение

# Что сделано

  - Установлен и натроен Webpack:
    * установлен и настроен webpack-dev-server
    * реализованы dev, analyze и prod конфигурации webpack config
  - Настроен импорт SCSS в компоненты приложения
  - Установлен и настроен TypeScript
  - Для транспиляции кода используется Babel
  - Установлен и настроен ESlint
  - Для юнит тестирования используется Jest + Enzyme
  - Для E2E тестирования используется Cypress
  - Намечена файловая структура


# Как стартануть проект

Для корректной работы приложения на машине должен быть установлен Node.js 12+.

1. Клонировать проект на локальную машину:
    ```sh
    $ git clone https://github.com/Binetsky/suite.git
    ```
2. Установить зависимости проекта:
    ```sh
    $ npm i
    ```
3. Запустить локальный Дев-сервер:
    ```sh
    $ npm start
    ```


# Другие NPM команды проекта

1. Скомпилировать prod версию проекта:
    ```sh
    $ npm run build
    ```
2. Проанализировать состав проекта:
    ```sh
    $ npm run analyze
    ```
3. Проверить код линтом:
    ```sh
    $ npm run lint
    ```
4. Проверить код на ошибки в TypeScript:
    ```sh
    $ npm run tsc
    ```
5. Комплексная проверка lint + tsc:
    ```sh
    $ npm run check
    ```
6. Очистка директории dist:
    ```sh
    $ npm run clean
    ```
1. Запуск тестов Jest для проекта:
    ```sh
    $ jest
    ```


# Над бойлерплейтом работают
[Алексей Бинецкий](https://github.com/Binetsky)


Лицензия
----

MIT


[//]: # (Оставь надежду всяк сюда приходящий)
