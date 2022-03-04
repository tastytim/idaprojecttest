<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="col-25"><Form></Form></div>
      <div class="col-75">
        <div class="col-4-12" v-for="item in 6" :key="item">
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import Form from "../src/components/Form.vue";
import Card from "../src/components/Card.vue";
export default {
  name: "App",
  components: {
    Header,
    Form,
    Card,
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
  gap:15px;
}
.col-25 {
  width: calc(25% - 30px);

}
.col-75{
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
}

.col-4-12{
  width: calc(100% / 3 - 10px);
}
</style>
