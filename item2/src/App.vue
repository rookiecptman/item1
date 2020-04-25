<template>
  <div id="app">
    <div class="alert" v-show="showAlert">
        <div class="alert-wrap">
            <div class="text">
                {{alertMsg}}
            </div>
        </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    name: 'App',
    
    computed:mapState({
      alertMsg: state => {
          return state.alertMsg 
      },            
      ...mapGetters([
          'showAlert'
        ]),
    }) 
  }
</script>
<style>

</style>
