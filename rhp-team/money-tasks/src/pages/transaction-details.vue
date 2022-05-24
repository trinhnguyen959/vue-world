<template>
	<div v-if="transition">
		<h1>Id: {{ $route.params.id }}</h1>
		<h3>Name: {{ transition.name }}</h3>
		<p>Price: {{ transition.price }}</p>
	</div>
	<div v-else>Loading transaction {{ $route.params.id }}</div>
</template>

<script>
export default {
	data() {
		return {
			transition: null,
		};
	},
	created() {
		fetch('http://localhost:3000/transactions/' + this.$route.params.id)
			.then(res => res.json())
			.then(data => (this.transition = data))
			.then(() => console.log(this.transition));
	},
};
</script>
