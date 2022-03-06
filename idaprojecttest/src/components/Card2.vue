<template>
  <div class="card">
    <div class="btn_delete" @click="deleteItem(index)"></div>
    <img :src="itemdata.url" :alt="itemdata.url" />
    <div class="card_body">
      <h2>{{ itemdata.name }}</h2>
      <div class="card_description">
        {{ itemdata.description }}
      </div>
      <h1>{{ itemdata.price }} rub.</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    itemdata: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_ITEMS"]),
    deleteItem(index) {
      this.DELETE_FROM_ITEMS(index);
    },
  },
};
</script>

<style style="scope">
.card {
  text-align: left;
  border: 1px solid rgb(231, 227, 227);
  border-radius: 2%;
  height: inherit;
  height: 100%;
  position: relative;
}

.card:hover .btn_delete {
  display: inline-block;
}

.btn_delete {
  position: absolute;
  right: 0;
  transform: translate(50%, -50%);
  width: 50px;
  height: 50px;
  background: url("~@/assets/images/delete.jpg");
  padding-right: 5px;
  background-size: cover;
  border-radius: 10px;
  z-index: 1;
  

  display: none;
}

.card_body {
  padding: 10px 10px;
}

img {
  width: 100%;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
}

h2 {
  margin-top: 0;
}
.card_description {
  overflow-wrap: break-word;
}
</style>
