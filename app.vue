<template>
  <NuxtLayout>
    <NuxtPage class="text-slate-800 w-full"  />
  </NuxtLayout>
</template>



<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.25rem);
}


/* .layout-enter-active,
.layout-leave-active {
  transition: all 0.3;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
} */

</style>