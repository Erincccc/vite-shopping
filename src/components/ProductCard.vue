<script setup lang="ts">
import { toCurrency } from '../shared/utils';
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products';

const cartStore = useCartStore();
defineProps<{product: Product}>();
</script>

<template>
    <div class="card borderd">
        <figure class="px-8 pt-10">
            <img :src="product.image" 
                 alt="Card Image"  
                 class="object-contain w-full h-64" 
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="cartStore.add(product.id)">Add To Cart</button>
            </div>

        </div>

    </div>
</template>