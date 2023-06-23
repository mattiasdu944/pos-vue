<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    path: string;
}>();

</script>

<template>
    <RouterLink 
        class="rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10"
        :to="path"
    >

        <slot></slot>
    </RouterLink>
</template>