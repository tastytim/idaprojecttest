<template>
  <div class="header_container">
    <div class="col add_col"><h2>Add product</h2></div>
    <div class="col default_col">
      <SELECT></SELECT>
    </div>
  </div>
</template>

<script>
import SELECT from '../components/Select.vue'
export default {
  components:{
    SELECT
  }
};
</script>

<style style="scope">
.header_container {
  display: flex;
}
.col {
  width: 50%;
}

.add_col {
  text-align: left;
}
.default_col {
  text-align: right;
}

</style>
