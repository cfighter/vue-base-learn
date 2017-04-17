<template>
	<ul class="pagination" >
        <li v-show="curPage > 1" @click="curPage-- && goto(curPage)" ><a href="#">上一页</a></li>
        &nbsp;&nbsp;
        <li v-for="index in pages" @click="goto(index)" :class="{'active':curPage == index}" :key="index">
          <a href="#" >{{index}}</a>
        </li>
        &nbsp;&nbsp;
        <li v-show="curPage != totalPage && totalPage != 0 " @click="curPage++ && goto(curPage)"><a href="#" >下一页</a></li>
    </ul>
</template>

<script>
	export default {
		name:'pagination',
		data(){
			return{
				total:100,
				curPage:1,
				pageSize:10,
				showItem:5
			}
		},
		methods:{
			goto(index){
				if(index==this.curPage){
					return
				}else{
					this.curPage=index
				}
				this.$emit('callback',this.curPage);
			}
		},
		computed:{
			totalPage(){
				return Math.ceil(this.total/this.pageSize)
			},
			pages(){
				let pages=[];
				if(this.curPage<this.showItem){
					let showPage=Math.min(this.totalPage,this.showItem);
					while(showPage){
						pages.unshift(showPage--);
					}

				}else{
					let start=this.curPage-Math.floor(this.showItem/2);
					let end=Math.min(start+this.showItem-1,this.totalPage);
					while(start<=end){
						pages.push(start++)
					}
				}
				console.log(pages)
				return pages;
			}
		}

	}
</script>

<style scoped>
	.active{
		background-color: blue;
		color: #ffffff;
	}

</style>