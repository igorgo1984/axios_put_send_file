import Api from './Api'

const installer = {
	install(Vue) {
		Object.defineProperty(Vue.prototype, '$api', {
			get() {
				return Api
			}
		})
	}
};

export default installer
