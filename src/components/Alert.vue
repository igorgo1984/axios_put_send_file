<template>
	<div>
		<v-alert v-for="alert in alerts"
				:key="alert.id"
				:value="true"
				:type="alert.type"
				@click="close(alert.id)"
				v-html="alert.message"
		/>
	</div>
</template>

<script>
	export default {
		name: 'Alert',
		methods: {
			close(id) {
				this.$store.commit('clearAlert', id)
			}
		},
		computed: {
			alerts: {
				get() {
					return this.$store.state.alerts
				}
			}
		}
	}
</script>

<style scoped>

</style>
