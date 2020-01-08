import LocalStore from './LocalStore'

const installer = {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$localStore', {
			get() {
				return LocalStore
			}
		})
	}
};

export default installer
