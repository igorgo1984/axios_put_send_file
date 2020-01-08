const alerts = {
	/**
	 * [{type: string, message:string, id:number}]
	 */
	state : [],
	mutations : {
		clearAlert(state, id) {
			const inx = state.findIndex(item => item.id === id);
			state.splice(inx, 1)
		},
		addAlert(state, data) {
			data.id = Date.now();
			state.push(data)
		},
	}
};

export {alerts};
