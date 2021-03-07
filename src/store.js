import {writable, get} from 'svelte/store'

const store = writable(new Set([]))
const getData = store => get(store)

export {
	store,
	getData
}
