<template>
  <main id="main">
    <h1>Материалы курса "Разработка web-приложения на Laravel"</h1>
  </main>
  <div class="content">

    <p>ТЕОРИЯ</p>
    <p>
      <a href="http://erud.by/laravel">Laravel</a> <br />
      <a href="http://erud.by/object_orient_program">Объектно-ориентированное программирование</a> <br />
      <a href="http://erud.by/resource_programming">Ресурсно-компонентное программирование</a>
    </p>
    <p>ИСХОДНЫЙ КОД</p>
    <a href="https://github.com/mikhalkevich/nuxt_erud">https://github.com/mikhalkevich/nuxt_erud</a> <br />
    <a href="https://github.com/mikhalkevich/backandApi">https://github.com/mikhalkevich/backandApi</a>
    <p>СВЯЗНЫЕ ДИСЦИПЛИНЫ</p>
  </div>
  <va-carousel :items="items" v-model="value"/>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios';
const value = ref(0);
const items = ref([
  'https://picsum.photos/1500',
  'https://picsum.photos/1501',
  'https://picsum.photos/1502',
  'https://picsum.photos/1503',
  'https://picsum.photos/1504',
]);
const catalogs = ref({data: []});
onMounted(async () => {
  catalogs.value = await axios.get('public/catalogs?lessons=true');
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
