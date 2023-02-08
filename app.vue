<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import {onMounted} from 'vue';

onMounted(function () {
  const token = localStorage.getItem('token');

  if(token){
    console.log('yes');
  }else{
    console.log('no');
  }
})
</script>