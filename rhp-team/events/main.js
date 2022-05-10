const app = Vue.createApp({
	data() {
		return {
			testClass: 'flex',
			products: [
				{
					thumb: './assets/favicon.ico',
					name: 'product a',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product b',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product c',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product d',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product e',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product f',
					price: 120.000
				},
				{
					thumb: './assets/favicon.ico',
					name: 'product g',
					price: 120.000
				},
			]
		};
	},
	methods: {
	},
});

app.mount('#contract');