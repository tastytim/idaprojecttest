<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="col-25"><Form></Form></div>
      <div class="col-75">
        <div class="col-4-12" v-for="item in 6" :key="item.name">
          <Card></Card>
        </div>
        <div
          class="col-4-12"
          v-for="(item, index) in filteredItems"
          :key="index"
        >
          <Card2 :itemdata="item" :index="index"></Card2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Form from "../src/components/Form.vue";
import Card from "../src/components/Card.vue";
import Card2 from "../src/components/Card2.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Form,
    Card,
    Card2,
  },
  computed: {
    ...mapGetters(["ITEMS", "SELECT"]),
    filteredItems() {
      if (this.sortedItems.length > 0) {
        return this.sortedItems;
      } else {
        return this.ITEMS;
      }
    },
  },
  data() {
    return {
      sortedItems: [],
    };
  },
  watch: {
    SELECT() {
      this.sortedItems = this.ITEMS;
      if (this.SELECT == "min") {
        console.log('min')
        this.sortedItems = this.sortedItems.sort(function (a, b) {
          let aPrice = a.price.replaceAll(/\s/g, "");
          let bPrice = b.price.replaceAll(/\s/g, "");
          return parseFloat(aPrice) - parseFloat(bPrice);
        });
      } else if (this.SELECT == "max") {
        console.log('max')
        this.sortedItems = this.sortedItems.sort((a, b) => {
          let aPrice = a.price.replaceAll(/\s/g, "");
          let bPrice = b.price.replaceAll(/\s/g, "");
          return parseFloat(bPrice) - parseFloat(aPrice);
        });
      } else if (this.SELECT == "name") {
        console.log('name')
        this.sortedItems = this.sortedItems.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else {
        console.log('all')
        this.sortedItems = [];
      }
    },
  },
};
</script>

<style lang="scss" style="scope">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #faf9f7;
  padding: 0 20px;
}
.container {
  display: flex;
  gap: 15px;
}
.col-25 {
  width: calc(25% - 30px);
}
.col-75 {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.col-4-12 {
  width: calc(100% / 3 - 10px);
}
</style>
