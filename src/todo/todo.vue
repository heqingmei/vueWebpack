<template>
	<section class="real-app">
		<input  type="text"
			class="add-input"
			autofacus = "autofacus"
			placeholder="接下去要做什么"
			@keyup.enter="addTodo"
		/>

		<Item 
			:todo = "todo"
			v-for="todo in filteredTodos"
			:key="todo.id"
			@del="delTodo"
		></Item>
		<Tabs :filter="filter" :todos="todos" @toggleFilter="toggleFilter"
			@clearCompleted="clearCompleted"
		/>
	</section>
</template>


<script>
	import Item from "./item.vue"
	import Tabs from "./tabs.vue"

	let id = 0;
	export default{
		data(){
			return {
				todos: [],
				filter: "All"
			}
		},
		components: {
			Item, Tabs
		},
		computed: {
			filteredTodos(){
				if(this.filter == "All"){
					return this.todos 
				}

				const completed = this.filter === "completed";
				return this.todos.filter(todo => completed === todo.completed )
			}
		},
		methods: {
			addTodo(e){
				this.todos.unshift({
					id: id++,
					content: e.target.value.trim(),
					completed: false
				})
				e.target.value = ""
			},
			delTodo(id){
				this.todos.splice(this.todos.findIndex(todo => todo.id == id),1)
			},
			toggleFilter(state){
				this.filter = state
			},
			clearCompleted(){
				this.todos = this.todos.filter(todo => !todo.completed)
			}
		}
	}
</script>

<style lang="stylus" scoped>
.real-app
	background #fff
	margin 20px
	padding 20px
	box-shadow 0 0 5px #666

.add-input
	width 100%
	font-size 14px
	font-family inherit
	font-weight inherit
	line-height 1.4em
	border 1px solid #f4f4f4
	outline none
	color inherit
	padding 6px
	box-shadow inset 0 -1px 1px 0 rgba(0,0,0,.1)
	box-sizing border-box
	font-smooting antialiased



</style>
