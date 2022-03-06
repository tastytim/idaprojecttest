<template>
  <div>
      <select name="select" id="select" v-model="select" value="all">
          <option  selected value="all">all</option>
          <option value="min">min</option>
          <option value="max">max</option>
          <option value="name">name</option>
      </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data(){
        return{
            select: "all",
        }
    },
    watch:{
        select(){
            console.log("changed " + this.select);
          this.GET_SELECT(this.select);
        }
    },
    methods:{
        ...mapActions(['GET_SELECT']),
    }
    


    
}
</script>

<style>
select,
option {

  color: rgb(68, 67, 67);
  box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
  border-radius: 10px;
  padding: 10px 2px;
  border: 1px rgb(211, 210, 210);
  margin: 5px 10px;
  background: white;
}
</style>