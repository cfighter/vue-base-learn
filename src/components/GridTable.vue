<template>
	<div class="grid-table">
		<div class="table-responsive">
		<div class="search form-inline">
			<label>search&nbsp;</label><input class="form-control" v-model='search'>
		</div>
		  <table class="table">
		    <thead>
				<tr class="active">
					<th v-for='title in columns'>
						{{title}}
						<span :class="sortOrder[title]== - 1 ? 'glyphicon-triangle-bottom glyphicon':'glyphicon-triangle-top glyphicon'" @click='sortBy(title)'></span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='items in compCon'>
					<th v-for='item in items'>{{item}}</th>
				</tr>
			</tbody>
		  </table>
		</div>
	</div>
	
</template>

<script>
	const data={
		columns:['name', 'power'],
		content: [
	      { name: 'Chuck Norris', power: 10000 },
	      { name: 'Bruce Lee', power: 9000 },
	      { name: 'Ani Norris', power: 10000 },
	      { name: 'Hury Lee', power: 9000 },
	      { name: 'Jackie Chan', power: 7000 },
	      { name: 'Jet Li', power: 8000 }
	    ]
	}
	export default{
		name:'grid-table',
		data () {
			let sortOrder={}
			data.columns.forEach((key)=>{
				sortOrder[key]=1
			})
			return {
				columns:data.columns,
				content:data.content,
				sortOrder:sortOrder,
				sortKey:'',
				search:''
			}
		},
		mounted(){
			this.sortKey=this.sortKey||'name'
		},
		methods:{
			sortBy(key){
				this.sortKey=key;
				this.sortOrder[key]*=-1;
			},
			compared(prop){
				return (a,b)=>{
					return (a[prop]> b[prop]? 1 : -1)*this.sortOrder[this.sortKey];
				}
			}

		},
		watch:{

		},
		computed:{
			compCon(){
				let filterContent= this.content.filter((item)=>{
					return item.name.toLowerCase().indexOf(this.search.toLowerCase())>=0?true:false
				})
				return filterContent.sort(this.compared(this.sortKey));
			}
		}
	}
</script>

<style scoped>
	.grid-table{
		margin-top: 30px;
	},
	.search{
		margin:10px 0;
	}
</style>