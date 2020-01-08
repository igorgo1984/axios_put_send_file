<template>
	<v-toolbar color="indigo" dark fixed app>
		<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
		<v-toolbar-title>Welcome to Vue frame</v-toolbar-title>
	</v-toolbar>
</template>

<script>
	export default {
		name: 'MenuTop',
		computed: {
			drawer : {
				get() {
					return this.$store.state.drawer
				},
				set(value) {
					this.$store.commit('changeDrawer', value)
				}
			}
		},
	}
</script>

<style scoped>

</style>
