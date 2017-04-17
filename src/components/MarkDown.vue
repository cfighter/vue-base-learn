<template>
	<div id="editor" class="mark-down">
		<h3>蠢萌的编辑器</h3>
		<textarea v-model='input'></textarea>
		<div class='result' v-html='compileMark'></div>
	</div>
</template>
<script>
	export default {
		name:'mark-down',
		data(){
			return{
				input:'#hello'
			}
		},
		computed:{
			compileMark(){
				return marked(this.input,{ sanitize: true})
			}
		}
	}
</script>
<style scoped>
.mark-down{
	margin: 30px 0;
}

h3{
	line-height: 50px;
	height: 50px;
}
 #editor {
  margin: 20px 0;
  overflow: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 200px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f6f6f6;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>