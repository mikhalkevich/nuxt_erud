<template>
  <div>
    <MenuTop />
    <slot />
    <div class="footer">
    <va-alert dense color="info" border="top" border-color="info" center class="mb-6 footer_text">
      Электронный Ресурс Учебных Дисциплин <a href="http://erud.by">erud.by</a>
    </va-alert>
    </div>
  </div>
</template>