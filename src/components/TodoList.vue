<template>
	<div class="todo-list">
		<header>
			<h1>TodoList</h1>
		<input type="text" v-model="newlist" placeholder="nput new item" @keyup.enter='addNew'/>
		
		</header>
		<ul>
			<li v-for="item, index in filterList"
				class="todo"
        		:keys="index"
        		:class="{ active: item.active}">
		        
		          <Checkbox v-model="item.active"  type=''>
		          	{{ item.name }}
		          </Checkbox>
		          <span @click='remove(item)'><Icon class='icon fr'type='trash-a'/></span>  
			</li>
		</ul>
		<div class='filter'>
	        <Button @click='changeVisibility("all")'>
	            all
	        </Button>
	        <Button  @click='changeVisibility("active")'>
	            active
	        </Button>
	        <Button  @click='changeVisibility("completed")'>
	            completed
	        </Button> 
	        <span class="fr">remaning:{{remaining}}</span>
	    </div>
    </Radio-group>
	

	</div>
</template>

<script>
import {todoStorage, filter} from '../utils/utils.js'
export default {
  name: 'todo-list',
  data () {
  	let list=todoStorage.fetch()
	return {
		newlist: '',
		list: list,
		visibility: 'all'
	}
  },
  methods: {
  	addNew () {
  		let newItem={
  			name: this.newlist,
  			active: false
  		}
  		this.list.push(newItem)
  		this.newlist=''
  		console.log('add success')
  	},
  	remove (item) {
  		let index=this.list.indexOf(item)
  		this.list.splice(index, 1)
  		console.log('remove success')
  	},
  	changeVisibility (val){
  		this.visibility=val
  	}
  	
  },
  watch: {
  	newlist (newVal, oldVal){
  		console.log(oldVal, newVal)
  	},
  	list: {
  		handler(list){
  			todoStorage.save(list);
  		},
  		deep: true
  	}
  },
  computed: {
  	filterList(){
  		console.log(filter[this.visibility](this.list))
  		return filter[this.visibility](this.list)
  	},
  	remaining(){
  		return filter.active(this.list).length
  	}
  }
}
</script>

<style scoped>
	.todo-list{
		margin-top: 10px;
	}
	header{
		text-align: center;
	}
	.todo-list ul{
		list-style: none;
		

	}
	.todo-list ul{
		font-size: 30px;
		line-height: 30px;
	}
	.todo-list ul li .icon{
		font-size: 20px;
		line-height: 30px;
	}
	.fr{
		float: right;
		vertical-align: middle;
	}
	.filter{
		margin-top: 10px;
	}
</style>