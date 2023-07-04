<script setup lang="ts">
    import { ADMIN_MENU } from "../../constants/index";
    import Link from './Link.vue';
    import Logo from './Logo.vue';

</script>

<template>
    <header class="px-10 items-center bg-gray-800 py-5 flex justify-between absolute top-0 w-full z-10">
        <Logo/>
        <nav class="flex items-center gap-10">
            <ul class="flex items-center gap-5">
                <li v-for="item in ADMIN_MENU">
                    <RouterLink class="text-white" :to="{name: item.path}">
                        {{  item.name  }}
                    </RouterLink>
                </li>
            </ul>
            <Link path="home">
                Ir a tienda
            </Link>
        </nav>
    </header>
</template>