

<script> 
  
export default {
  name: 'App',
  data:()=>{
   return {
    active : "green"
   }
  },
  methods:{
    cahngeCL(state){
      this.active = state;
    }
  },
  components: {
 
}
}
</script>

<style>
* {
  background: #35363A;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F3F3F3;
  background: #35363A;

}
</style>

<template>
  <button @click="cahngeCL('green')" :class="{btn_n:  active == 'green'}" >Green</button>
  <button @click="cahngeCL('red')" :class="{btn_n:  active == 'red'}">RED</button>
  <button @click="cahngeCL('blue')" :class="{btn_n:  active == 'blue'}">Blue</button>

  <div :class="active"></div>
<!-- <router-view/>  -->
</template>
