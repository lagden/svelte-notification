import {store} from './store'

let cc = 0
function hexId() {
	return Number(cc++).toString(26)
}

const base = {
	mode: 'normal',
	message: '',
	lifetime: false
}

export function add(notification) {
	notification = {
		...base,
		...notification,
		id: `tadashi_svelte_notification_${hexId()}`
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
