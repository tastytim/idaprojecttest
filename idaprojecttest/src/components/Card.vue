<template>
  <div class="card">
    <img :src="require('../assets/images/imageee.jpg')" alt="img" />
    <div class="card_body">
      <h2>Product name</h2>
      <div>
        Description description description description description description
        description Description
      </div>
      <h1>10 000 rub.</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style style="scope">
.card {
  text-align: left;
  border: 1px solid rgb(231, 227, 227);
  border-radius: 2%;
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
</style>
