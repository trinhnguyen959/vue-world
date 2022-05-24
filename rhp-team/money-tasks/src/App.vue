<template>
	<h1>hello dom</h1>
	<base-nav />
	<router-view></router-view>
</template>

<script>
import Nav from '@/components/Nav';
export default {
	name: 'App',
	components: {
		BaseNav: Nav,
	},
	created() {},
	mounted() {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
