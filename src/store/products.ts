
import { defineStore } from "pinia"; 

export interface Product {
    id:number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface ProductState{
    items: Record<string, Product>;
    ids: number[];
}



export const useProductStore = defineStore({
    id:'products',
    state: ():ProductState => ({
        items:{},
        ids: [],
    }),
    //类似于computed 可以帮我们去修饰我们的值
    getters: {
        list(): Product[] {
            return this.ids.map((i) => this.items[i]);

        },
        loaded(): boolean{
            return this.ids.length > 0

        }
    },
   //可以操作异步 和 同步提交state
    actions: {
        async fetchAll() {
            if (this.loaded) return;

            const res = await fetch('https://fakestoreapi.com/products');
            const data: Product[] = await res.json();
            this.ids = data.map((product) => {
                this.items[product.id] = product;
                return product.id;
            });
        }
    }
})