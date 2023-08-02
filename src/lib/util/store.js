import {writable, get} from 'svelte/store'

function base_store(o = new Set([])) {
	const {set, update, subscribe} = writable(o)

	return {
		getData(store) {
			return globalThis.structuredClone(get(store))
		},
		set(data) {
			set(globalThis.structuredClone(data))
		},
		subscribe,
		update,
	}
}

const KEY = Symbol.for('store.notifications')
const singleton = {}
singleton[KEY] = base_store()

Object.freeze(singleton)

export default singleton[KEY]
