<template>
	<v-app id="inspire">
		<MenuLeft/>
		<MenuTop/>
		<v-content>
			<Alert />
			<v-container fluid fill-height>
				<v-layout>
					<v-flex text-xs-center><slot/></v-flex>
				</v-layout>
			</v-container>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">Power by Igor Stcherbina &copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
	import MenuLeft from './MenuLeft'
	import MenuTop from './MenuTop'
	import Alert from '../../components/Alert'

	export default {
		components: {
			MenuLeft,
			MenuTop,
			Alert,
		},
	}
</script>
