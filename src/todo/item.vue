<template>
	<div :class="['todoItem', todo.completed ? 'completed' : '']">
		<input type="checkbox"
			class="toggle"
			v-model="todo.completed"
		/>
		
		<label class="content">{{todo.content}}</label>
		<button class="destory" @click="delTodo">删除</button>
	</div>
</template>

<script>
export default{
	props: {
		todo: {
			type: Object,
			required: true
		}
	},
	methods: {
		delTodo(){
			this.$emit("del", this.todo.id)
		}
	}
}
</script>

<style lang="stylus" scoped>
.todoItem
	border-bottom 1px solid #eee
	overflow hidden
	line-height 40px

.todoItem.completed .content
	text-decoration line-through
	color #999

.todoItem .destory
	display none

.todoItem.completed .destory
	display block

.toggle
	float: left
	margin-right 20px
	margin-top 14px
	text-align left

.destory
	float right
	width 5% 
	margin-top 8px

.content
	display inline-block
	width 80%
</style>