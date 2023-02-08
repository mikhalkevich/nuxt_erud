<template>
  <main id="main">
    <h1>Практика курса "Разработка web-приложения на Laravel"</h1>
  </main>
  <div class="content">
    <div class="row">
      <div class="flex md1">
        &nbsp;
      </div>
      <div class="flex md3">
        <div>
        Практические занятия дисциплины:
        <ol class="rounded">
          <li  v-for="l in catalog.data.data.lessons" :id="l.id">
            <div class="li_item" ref="lesson_item" @click="changeText(l.id)">
              {{l.name}}
            </div>
          </li>
        </ol>
        </div>
      </div>
      <div class="flex md6">
        <div id="empty">
          <h2>{{lesson_name}}</h2>
          <div v-html="lesson_description"></div>
        </div>
      </div>
      <div class="flex md2">
        <div>
          ИНСТРУМЕНТАРИЙ

          <ol class="rounded">
            <li>
              <div class="li_ite">
                <a href="http://erud.by/laravel">Сервер Apache (или Nginx)</a>
              </div>
            </li>
            <li>
              <div class="li_ite">
                <a href="http://erud.by/php_base">PHP, Composer</a>
              </div>
            </li>
            <li>
              <div class="li_ite">
                <a href="http://erud.by/node">Node, npm, npx</a>
              </div>
            </li>
            <li>
              <div class="li_ite">
                <a href="http://erud.by/laravel">База данных, MySQL</a>
              </div>
            </li>
            <li>
              <div class="li_ite">
                <a href="http://erud.by/object_orient_program">Postmen</a>
              </div>
            </li>
            <li>
              <div class="li_ite">
                <a href="http://erud.by/function_javascript">GIT, github</a>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: 'Post page',
  meta: [    { name: 'description for post', content: 'My post site.' }  ],
});

import {ref, onMounted} from 'vue'
import axios from 'axios';
const lesson_item = ref('');
const lesson_name = ref('Задание 1');
const lesson_description = ref('Установка Laravel');
const catalog = ref({data:{data:{},lessons:[]}});
const lesson = ref({});
onMounted(async () => {
  catalog.value = await axios.get('catalog/214?lessons=true');
});
const changeText = async (id) => {
  let id_num = Number(id);
  lesson.value = await axios.get('lesson/'+id_num);
  lesson_description.value = lesson.value.data.data.description;
  lesson_name.value = lesson.value.data.data.name;
  console.log(lesson.value.data.data.name, lesson_item.value);
  return true;
}
</script>