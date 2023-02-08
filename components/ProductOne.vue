<template>
  <va-card>
    <va-card-title>{{product.name}}</va-card-title>
    <va-image  :src="`${product.pictures[0]}`" :width="200" />
    <va-card-content>{{product.description}}</va-card-content>
  </va-card>
</template>
<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>