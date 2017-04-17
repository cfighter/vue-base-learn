<template>
  <div id="app">
    <todo-list></todo-list>
    <grid-table></grid-table>
    
    <modal v-if="showModal" @close='close()' @sub='sub'>
      <h3 slot='header'>modal title</h3>
      <p slot='body'>One fine body&hellip;</p>
    </modal>
    <mark-down></mark-down>
    <div>
          <button class="btn btn-primary" @click='show()'>show modal</button>
    </div>
    <pagination @callback='getData'></pagination>

  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import GridTable from './components/GridTable.vue'
import Modal from './components/Modal.vue'
import MarkDown from './components/MarkDown.vue'
import Pagination from './components/Pagination.vue'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return {
      showModal:false
    }
  },
  methods:{
    show(){
      this.showModal=true;
    },
    close(){
      this.showModal=false;
    },
    sub(data){
      axios({
        method:'get',
        url:'/user',
        params:data
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
      
    },
    getData(index){
      axios({
        method:'get',
        url:'/user',
        params:{page:index}
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  components:{
    TodoList,
    GridTable,
    Modal,
    MarkDown,
    Pagination
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 700px;
  margin: 10px auto;
}
</style>
