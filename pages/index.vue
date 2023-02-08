<template>
  <main id="main">
    <h1>Программа курса "Разработка web-приложения на Laravel"</h1>
  </main>
  <div class="row">
    <div class="flex md3">
 Присоединяйся!
    </div>
    <div class="flex md6">
      <div>
        <section class="row">
          <div>
            <p>Welcome to SSR! <b>Server Side Rendering</b> application</p>
          <p>В рамках курса 'Разрабока web-приложения на Laravel' рассматриваются темы фронтенд и бэкенд программирования. В качестве фронтент фрэймворка используется Nuxt, а разработка бэкенд API ведется на Laravel. При данном разделении основной задачей бэкенда будет выполнение запросов и формирование ответов ввиде ресурсов. Основной задачей при разработке фронтенд - разработка компонентов.
          </p>
            <p>Основной задачей бэкенда - обслуживание определенных типов запросов клиента и предоставление ответов на каждый запрос ввиде ресурса. </p>
            <p>Исходный код готового бэкенд API приложения доступен по ссылке - <a href="https://github.com/mikhalkevich/backendapi">BackandAPI</a>.</p>
          </div>
        </section>
      </div>
    </div>
    <div class="md3">
      <div>
        <va-card>
          <va-card-title>Event</va-card-title>
          <va-card-content><p>Laravel 1-ое занятие</p><p><date>дата</date></p></va-card-content>
        </va-card>
      </div>
      <hr/>
      <div>
        <va-card>
          <va-card-title>Vacancy</va-card-title>
          <va-card-content>PHP Developer</va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: 'BackendAPI на Laravel',
  meta: [{name: 'description', content: 'Курс по разработке BackendAPI на Laravel'}],
})
</script>
