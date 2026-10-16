import axios from'axios' //FIXED: import axios dulu
export default {
    state() {
        return {
            cart: [],
            users: [],
            products:null //FIXED:kurang kode ini
        };
    },

    getters: {
        totalItems(state) {
            return state.cart.length;
        }
    },

    mutations: {
        ADD_TO_CART(state, namaItem) {
            state.cart.push(namaItem);
        },
        REMOVE_FROMCART(state, index) {
            state.cart.splice(index, 1)
        },
        setProductData(state, payload) {
            console.log(payload, "payload<<<")
            state.products = payload
        }
    },

    actions: {
        tambahBarang({ commit }, namaItem) {
            commit('ADD_TO_CART', namaItem);
        },
        hapus({ commit }, index) {
            commit('REMOVE_FROMCART', index)
        },
        async getProductData({ commit }) {
            try {
                const { data } = await axios.get(
                    "https://book-store-1e851-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
                )
               
                commit("setProductData", data || {}) 
            } catch (err) {
                console.error('Gagal mengambil data produk via axios:', err);
            }
        }
    }
};

