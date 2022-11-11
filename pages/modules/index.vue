<script setup>
    definePageMeta({
        layout: "content",
    });
</script>
<template>
    <div>
        <h1>Modules</h1>

        <section class="grid md:grid-cols-3 gap-4">
            
                <UiCardModule path="/modules/viruses/" title="The Viruses" icon="material-symbols:coronavirus-outline-sharp" />
                <UiCardModule path="/modules/viruses/" title="The Climate" icon="material-symbols:partly-cloudy-day-outline-rounded" />
                <UiCardModule path="/modules/viruses/" icon="material-symbols:science-outline" />
                <UiCardModule path="/modules/viruses/" icon="material-symbols:mode-cool-off-rounded" />
                <UiCardModule path="/modules/viruses/" />
        </section>
    </div>
</template>