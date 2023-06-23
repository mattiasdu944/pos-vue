<script setup lang="ts">
import Link from './Link.vue';

</script>

<template>
    <header class="px-10 bg-gray-800 py-5 flex justify-between absolute top-0 w-full z-10">
        <div>
            <h1 class="text-3xl font-black text-white">
                POS
                <span class="text-green-400">Vue</span>
            </h1>
        </div>
        <nav>
            <Link path="admin">
                Administrador
            </Link>
        </nav>
    </header>
</template>