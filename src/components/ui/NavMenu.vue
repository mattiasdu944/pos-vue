<script setup lang="ts">
import Link from './Link.vue';
import Logo from './Logo.vue';

</script>

<template>
    <header class="px-10 items-center bg-gray-800 py-5 flex justify-between absolute top-0 w-full z-10">
        <Logo/>
        <nav>
            <Link path="admin">
                Administrador
            </Link>
        </nav>
    </header>
</template>