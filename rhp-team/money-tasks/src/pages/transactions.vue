<template>
	<h1>transactions is here...</h1>
	<div class="item" v-for="transaction in transactions" :key="transaction.id">
		<router-link
			:to="{
				name: 'transaction-details-route',
				params: { id: transaction.id },
			}"
			>{{ transaction.name }}
		</router-link>
		<div class="price">{{ transaction.price }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transactions: [
				{
					id: 1,
					name: 'market 17/05',
					price: 1000000,
				},
				{
					id: 2,
					name: 'home 18/05',
					price: 3000000,
				},
				{
					id: 3,
					name: 'electric 19/05',
					price: 1000000,
				},
			],
		};
	},
};
</script>
