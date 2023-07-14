<script setup lang="ts">
import { toCurrency } from '../shared/utils';
import { useCartStore } from '../store/cart';
import type { CartPreview } from '../store/cart';

const cartStore = useCartStore();

defineProps<{
    cartProduct: CartPreview
}>();
</script>

<template>
    <div class="card md:card-side bordered">
        <figure class="p-8">
            <img 
                :src="cartProduct.image" 
                alt="Card Image"
                class="object-contain w-full h-48"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${cartProduct.id}`">{{ cartProduct.id }}</router-link>
                <p>{{ cartProduct.title }}</p>
                <p>{{ toCurrency(cartProduct.cost) }}</p>
                <button class="btn btn-primary" @click="cartStore.remove(cartProduct.id)">-</button>
                <button class="btn btn-ghost no-animation" >{{ cartProduct.quantity }}</button>
                <button class="btn btn-primary" @click="cartStore.add(cartProduct.id)">+</button>
            </h2>
        </div>
        
    </div>
</template>