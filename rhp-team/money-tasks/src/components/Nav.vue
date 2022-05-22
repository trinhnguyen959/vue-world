<template>
	<nav class="nav">
		<router-link :to="{ name: 'overview-route' }">Overview</router-link>
		<router-link :to="{ name: 'transaction-route' }"
			>Transaction</router-link
		>
		<router-link to="/">Budget</router-link>
		<router-link to="/">Reports</router-link>
		<router-link to="/">Settings</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Nav',
};
</script>

<style scoped></style>
