<template>
  <div class="header_container">
    <div class="col add_col"><h2>Add product</h2></div>
    <div class="col default_col">
      <select name="default" id="default" value="default">
        <option>default</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
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

select,
option {
  color: rgb(226, 226, 226);
  box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
  border-radius: 10px;
  padding: 10px 2px;
  border: 1px rgb(211, 210, 210);
  margin: 5px 10px;
  background: white;
}
</style>
