<script setup lang="ts">
import { computed , onMounted } from 'vue';
import Nav from './components/Nav.vue';
import { useProductStore } from './store/products'
import { useCartStore } from './store/cart';

const cartStore = useCartStore();
const productStore = useProductStore();
const count = computed(() => cartStore.count);
productStore.fetchAll();
</script>

<template>
  <div class="drawer">
    <input id="drawer-input" type="checkbox" class="drawer-toggle" />
    <div class="bg-base-100 text-base-content min-h-screen drawer-content">
      <Nav />
      <router-view></router-view>
    </div>
  </div>
</template>

