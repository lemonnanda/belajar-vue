<script>
export default {
  computed: {
    totalItemKeranjang() {
      return this.$store.getters.totalItems;
    },

    daftarKeranjang() {
      return this.$store.state.product.cart;
    },
    daftarProduk() {
     
      return this.$store.state.product.products; //FIXED: kurang .product karena products ada di module product (file index)
    },
  },
  methods: {
    beliBarang(nama) {
      this.$store.dispatch('tambahBarang', nama);
    },
    hapusBarang(index) {
      this.$store.dispatch('hapus', index)
    },
    
  },
  mounted() { //di luar methods bukan di dlm
      this.$store.dispatch('getProductData');
    }
};

</script>

<template>
  <div>
    <h2>Toko Online</h2>

    <p>Total item di keranjang (Getter): <strong> {{ totalItemKeranjang }}</strong></p>

    <button @click="beliBarang('Buku Pemrograman')">+ Buku Pemrograman</button>
    <button @click="beliBarang('Kebab')">+ Kebab</button>

    <h3>Isi Keranjang</h3>
    <ul>
      <li v-for="(item, index) in daftarKeranjang" :key="index">{{ item }}
        <button @click="hapusBarang(index)">delete</button>
      </li>
    </ul>
    <div style="display:flex">
      <div 
          v-for="(item, key) in daftarProduk" 
          :key="key" 
          style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          
          <img 
            :src="item.imageUrl" 
            :alt="item.name" 
            style="width: 100%; height: 140px; object-fit: cover; border-radius: 4px;" 
          />
          
            <h4 style="margin: 12px 0 6px;">{{ item.name }}</h4>
            <p style="color: #666; margin: 0 0 6px; font-size: 14px;">Kategori: {{ item.category }}</p>
            <p style="font-weight: bold; color: #2e7d32; margin: 0 0 12px;">
              Rp {{ Number(item.price).toLocaleString('id-ID') }}
            </p>
          </div>
        </div>
  </div>
</template>

<style scoped></style>