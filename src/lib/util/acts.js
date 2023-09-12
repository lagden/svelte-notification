import hexID from '@tadashi/hex-id'
import store from './store.js'

const base = {
	mode: 'normal',
	message: '',
	lifetime: 0,
}

export function add(notification) {
	notification = {
		...base,
		...notification,
		id: `tadashi_svelte_notification_${hexID()}`,
	}
	store.update(n => {
		n.add(notification)
		return n
	})
}

export function remove(notification) {
	store.update(n => {
		n.delete(notification)
		return n
	})
}

export function getStore() {
	return store
}
