<template>
  <main id="main">
    <h1>Занятия курса "Разработка web-приложения на Laravel"</h1>
  </main>
  <div class="row">
    <div class="flex md3">&nbsp;</div>
    <div class="flex md6">
      <div>
        <ul class="content_erud">
            <li><a href="#intro">Введение</a></li>
          <li>
            1    <a href="#2">
            Бэкенд. Инструментарий и требования к серверу
          </a>
            <ul>
            </ul>
          </li>                    <li>
          2    <a href="#8">
          Бэкенд. Установка Laravel
        </a>
          <ul>
            <li>
              2.1
              <a href="#736">
                Установка с помощью composer
              </a>
              <ul>
              </ul>
            </li>                                            <li>
            2.2
            <a href="#166">
              Установка через git
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            2.3
            <a href="#737">
              Настройка базы данных
            </a>
            <ul>
            </ul>
          </li>
            <li>
            2.4
            <a href="#737">
              Запуск проекта
            </a>
            <ul>
            </ul>
          </li>
          </ul>
        </li>                    <li>
          3    <a href="#9">
          Бэкенд. Структура и жизненный цикл фрэймворка
        </a>
          <ul>
          </ul>
        </li>                    <li>
          4    <a href="#12">
          Бэкенд. Маршрутизация. Шаблон проектирвания HMVC
        </a>
          <ul>
          </ul>
        </li>                    <li>
          5    <a href="#14">
          Бэкенд. Контроллеры и виды приложения.
        </a>
          <ul>
          </ul>
        </li>                    <li>
          6    <a href="#17">
          Бэкенд. Модели
        </a>
          <ul>
            <li>
              6.1
              <a href="#18">
                Миграции
              </a>
              <ul>
              </ul>
            </li>                                            <li>
            6.2
            <a href="#19">
              Загрузка первоначальных данных в БД, сиды
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            6.3
            <a href="#1326">
              Фабрики моделей
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            6.4
            <a href="#1408">
              Связи моделей
            </a>
            <ul>
              <li>
                6.4
                .1
                <a href="#1409">
                  hasOne - один к одному
                </a>
                <ul>
                </ul>
              </li>                                            <li>
              6.4
              .2
              <a href="#1410">
                hasMany - содержит много
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              6.4
              .3
              <a href="#1411">
                belongsTo - принадлежит к
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              6.4
              .4
              <a href="#1412">
                belongsToMany - принадлежит многим
              </a>
              <ul>
              </ul>
            </li>                                    </ul>
          </li>                                            <li>
            6.5
            <a href="#1439">
              Постраничная навигация
            </a>
            <ul>
            </ul>
          </li>                                    </ul>
        </li>                    <li>
          7    <a href="#24">
         Бэкенд. Ресурсы в Laravel
        </a>
          <ul>
            <li>
              7.1
              <a href="#1295">
                Маршрутизация ресурсов
              </a>
              <ul>
              </ul>
            </li>                                            <li>
            7.2
            <a href="#15">
              Контроллеры и ресурсные контроллеры
            </a>
            <ul>
            </ul>
          </li>
                                                                    </ul>
        </li>                    <li>
          8    <a href="#23">
          Бэкенд. Аутентификация и авторизация
        </a>
          <ul>
            <li>
              8.1
              <a href="#1324">
                Авторизация с помощью laravel/ui
              </a>
              <ul>
              </ul>
            </li>                                            <li>
            8.2
            <a href="#1433">
              Авторизация с помощью Sanctum
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            8.3
            <a href="#1327">
              Авторизация с помощью Jetstream
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            8.4
            <a href="#1323">
              Авторизация с помощью Passport
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            8.5
            <a href="#1328">
              Авторизация в API с помощью Jetstream и Sanctum
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            8.6
            <a href="#106">
              Авторизация в Facebook с помощью Jetstream
            </a>
            <ul>
            </ul>
          </li>                                    </ul>
        </li>                    <li>
          9    <a href="#26">
          Бэкенд. Библиотека файлов
        </a>
          <ul>
            <li>
              9.1
              <a href="#1440">
                Установка модуля laravel/medialibrary
              </a>
            </li>
            <li>
              9.2
              <a href="#1440">
                Подлкючение к модели
              </a>
            </li>
            <li>
              9.3
              <a href="#1440">
                Ресурсы для медифайлов, пути к изображениям
              </a>
            </li>
          </ul>
        </li>                    <li>
          10    <a href="#105">
          Бэкенд. Фильтры в моделях.
        </a>
          <ul>
            <li>
              10.1
              <a href="#29">
                ServiceProvider и передача переменных
              </a>
              <ul>
              </ul>
            </li>                                                <li>
            10.2
            <a href="#38">
              Фильтры в запросах
            </a>
            <ul>
            </ul>
          </li>                                            <li>
            10.11
            <a href="#73">
              Другие модули Laravel
            </a>
            <ul>
            </ul>
          </li>                                    </ul>
        </li>
          <li>
          11    <a href="#1337">
         Бэкенд. Авторизация
        </a>
          <ul>
            <li>
              11.1
              <a href="#1338">
               Встроенная token-авторизация Laravel.
              </a>
              <ul>
              </ul>
            </li>
            <li>
            11.2
            <a href="#1339">
              bearer-авторизация
            </a>
          </li>
            <li>
            11.3
            <a href="#1339">
              Middleware
            </a>
          </li>
          </ul>
        </li>
          <li>
            12    <a href="#1337">
            Бэкенд. Админские и публичные запросы моделей Catalog и Product
          </a>
            <ul>
              <li>
                11.1
                <a href="#1338">
                  Создание и выполнение соответствующих миграций
                </a>
                <ul>
                </ul>
              </li>
              <li>
                11.2
                <a href="#1339">
                  Разрешения в моделях
                </a>
              </li>
              <li>
                11.3
                <a href="#1339">
                  Middleware
                </a>
              </li>
            </ul>
          </li>
          <li>
            12    <a href="#1549">
            Фронтенд. Начало проекта
          </a>
            <ul>
              <li>
                12.1
                <a href="#1551">
                  Файл package.json
                </a>
                <ul>
                </ul>
              </li>                                            <li>
              12.2
              <a href="#1552">
                Маршрутизация проекта Nuxt
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.3
              <a href="#1553">
                Запуск фронтенда
              </a>
              <ul>
              </ul>
            </li>                                    </ul>
          </li>
          <li>
            13    <a href="#1550">
            Фронтенд. Структура Nuxt.
          </a>
            <ul>
              <li>
                12.1
                <a href="#1554">
                  pages
                </a>
                <ul>
                </ul>
              </li>                                            <li>
              12.2
              <a href="#1555">
                components
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.3
              <a href="#1556">
                assets
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.4
              <a href="#1557">
                public
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.5
              <a href="#1558">
                plugins
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.6
              <a href="#1559">
                layouts
              </a>
              <ul>
              </ul>
            </li>                                            <li>
              12.7
              <a href="#1560">
                nuxt.config.js
              </a>
              <ul>
              </ul>
            </li>                                    </ul>
          </li>
          <li>
            13    <a href="#1549">
            Фронтенд. Авторизация и админские запросы
          </a>
            <ul>
              <li>
                13.1
                <a href="#1551">
                  bearer-авторизация
                </a>
                <ul>
                </ul>
              </li>                                            <li>
              13.2
              <a href="#1552">
               axios и настройки axios
              </a>
            </li>   <li>
              13.3
              <a href="#1552">
              Публичные и админские запросы на бэкенд
              </a>
            </li>                                            <li>
              13.4
              <a href="#1553">
                Основы компонентного программирования.
              </a>
              <ul>
              </ul>
            </li>                                    </ul>
          </li>
          <li><a href="#end">Заключение</a></li>
          <li><a href="#spisok">Список использованных источников</a></li>
          <li><a href="#materials">Приложения</a></li>
        </ul>

      </div>
    </div>
  </div>

</template>
<script setup>



</script>