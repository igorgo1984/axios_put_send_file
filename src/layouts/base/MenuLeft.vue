<template>
	<v-navigation-drawer
			v-model="drawer"
			fixed
			app
	>
		<v-list dense>

			<router-link  :to="routeDash">
				<v-list-tile>
					<v-list-tile-action>
						<v-icon>dashboard</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Dash</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</router-link>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	import {
		dash
	} from '../../constants/routePaths'

	export default {
		name: 'MenuLeft',
		computed: {
			routeDash() {
				return dash
			},
			drawer : {
				get() {
					return this.$store.state.drawer
				},
				set(value) {
					this.$store.commit('changeDrawer', value)
				}
			}
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none;
		color: black;
	}
	.router-link-active {
		color: #3f51b5;
	}
</style>
