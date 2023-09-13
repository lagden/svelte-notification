import {setTimeout} from 'timers/promises'
import {get} from 'svelte/store'
import {test, expect, beforeEach, vi} from 'vitest'
import {Notifications, acts} from '$lib/index.js'

beforeEach(() => {
	document.body.innerHTML = '<main id="xxx"></main>'
})

function doc_query(selector) {
	const node = document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

test('Notifications', async () => {
	const target = doc_query('main#xxx')
	new Notifications({target})

	const notification = {message: 'one', lifetime: 10}
	acts.add(notification)

	await setTimeout(100)
	const div = doc_query('div._tadashi_svelte_notifications')
	expect(div).toBeDefined()

	const store = acts.getStore()
	expect(get(store).size).toBe(1)

	const spy = vi.fn()
	const btn = doc_query('button._tadashi_svelte_notification__btn')
	btn.addEventListener('click', () => {
		spy()
		acts.remove(notification)
		expect(get(store).size).toBe(0)
	})

	const clickEvent = new Event('click')
	btn.dispatchEvent(clickEvent)

	expect(spy, 'clicado').toHaveBeenCalledTimes(1)
	await setTimeout(2500)
	expect(() => doc_query('div._tadashi_svelte_notification__content')).toThrowError(/No element/)
})

test('Size', async () => {
	const notification = {message: 'one', lifetime: 10}
	acts.add(notification)
	acts.add(notification)
	acts.add(notification)

	const target = doc_query('main#xxx')
	new Notifications({target})

	const store = acts.getStore()
	expect(get(store).size).toBe(3)
})
