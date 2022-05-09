const app = Vue.createApp({
	template: `
		<h1>hello from {{name}} and {{!isDisplay ? firstName + " " + lastName : ""}}</h1>
		<!-- <button v-on:click="onchangeName">change name</button> -->
		<button @click="onchangeName">change name shorter</button>
		<div class="model" v-if="isShow">
			<h1>model content</h1>
		</div>`
	,
	data() {
		return {
			name: 'the other side',
			firstName: 'cuba',
			lastName: 'vn',
			isDisplay: false,
			isShow: false
		};
	},
	methods: {
		onchangeName() {
			this.firstName = 'alo';
			this.lastName = 'ha';
			this.isDisplay = !this.isDisplay;
			this.isShow = !this.isShow;
		},
	},
});

app.mount('#contract');