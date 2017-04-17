<template>
	 <transition name='modal'>
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click='close()'><span aria-hidden="true">&times;</span></button>
		        <slot name='header'>Header</slot>
		      </div>
		      <div class="modal-body">
		      	<form>
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email address</label>
				    <input type="email" name='email' class="form-control" id="exampleInputEmail1" placeholder="Email" v-model='formData.email'>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder="Password" v-model='formData.pwd'>
				  </div>
				  <div class="checkbox">
				    <label>
				      <input type="radio" name="formData.gender" value="0" checked> male
				      <input type="radio" name="formData.gender" value="1"> female
				    </label>
				  </div>
				</form>
		        <slot name='body'>One fine body&hellip;</slot>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal" @click='close()'>Close</button>
		        <button type="button" class="btn btn-primary" @click='sub($event)'>Save changes</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
	</transition>
</template>

<script>
export default {
  name:'modal',
  data(){
    return {
        formData: {
        	email:'',
        	pwd:'',
        	gender:'0'
        }
    }
  },
  methods:{
  	close(){
  		this.$emit('close')
  	},
  	sub(event){
  		this.$emit('sub', this.formData);
  		this.$emit('close');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-dialog{
	position: absolute;
	left:50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.modal-enter {
	-webkit-transform: scale(.8);
  transform: scale(.8);
  opacity: 0;
}
.modal-enter-active{
	transition: all 1.5s ease;
}

.modal-leave-active {
	transition: all 1.5s ease;
  opacity: 0;
}


.modal-leave-active {
	
  -webkit-transform: scale(.8);
  transform: scale(.8);
}
</style>


