<template>
	<teleport to="body">
		<base-modal
			v-if="isShowModal"
			title="this is title from app"
			content="this is content"
			theme="example"
			@cancel="onToggleModal"
		>
			<template v-slot:header>
				<h2>this is the human sight</h2>
			</template>
			<p>this is second time</p>
			<template v-slot:footer>
				<button @click="onToggleModal">Cancel</button>
			</template>
		</base-modal>
	</teleport>

	<button @click="onToggleModal">Toggle modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
	name: 'App',
	components: {
		BaseModal: Modal,
	},
	data() {
		return {
			isShowModal: false,
		};
	},
	methods: {
		onToggleModal() {
			this.isShowModal = !this.isShowModal;
		},
	},
};
</script>

<!--<style></style>-->
