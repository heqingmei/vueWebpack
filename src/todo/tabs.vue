<template>
	<div class="helper">
		<span class="left">{{unFinishTodoLength}} Items</span>
		<span class="tabs">
			<span 
				v-for="state in states"
				:key="state"
				:class="['state', filter === state ? 'active' : '']"
				@click="toggleFilter(state)"
			>{{state}}</span>
		</span>

		<span class="clear" @click="clearAllCompleted">Clear Completed</span>
	</div>
</template>

<script>
export default{
	data(){
		return {
			states: ["All", "Active", "completed"]
		}
	},
	props: {
		filter: {
			type: String,
			required: true
		},
		todos: {
			type: Array,
			required: true
		}
	},
	computed: {
		unFinishTodoLength(){
			return this.todos.filter(todo => !todo.completed).length
		}
	},
	methods: {
		toggleFilter(state){
			this.$emit("toggleFilter", state)
		},
		clearAllCompleted(){
			this.$emit("clearCompleted")
		}
	}
}
</script>

<style lang="stylus" scoped>
.helper
	overflow hidden
	line-height 26px
	margin-top 20px
	span{
		display inline-block
	}
	
.tabs
	width 80%
	text-align center
	float left
	margin 0 auto
	.state{
		margin 0 20px
		padding 0 6px
	}
	.state.active{
		border 1px solid #ccc
		border-radius 8px
		color rgb(175,47,47)
	}

.clear
	text-align right
	width 10%
	float left
	
.left
	text-align left
	width 10%
	float left

</style>