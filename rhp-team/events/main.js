const app = Vue.createApp({
	data() {
		return {
			x: 0,
			y: 0,
		};
	},
	methods: {
		onLogEvent(event, newX, newY) {
			console.log(event);
			this.x = newX;
			this.y = newY;
		},
		onMouseMoveEvent(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
	},
});

app.mount('#contract');