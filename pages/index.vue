<template>
    <div>
        <h1 class="text-4xl">Hi There!</h1>
        {{color}}
    </div>
</template>

<script setup>
    const color = useColor();
</script>