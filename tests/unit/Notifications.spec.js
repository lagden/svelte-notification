import { setTimeout } from 'timers/promises'
import { get } from 'svelte/store'
import { tick } from 'svelte'
import {
	test,
	expect,
	beforeEach,
	vi,
} from 'vitest'
import {
	Notifications,
	acts,
} from '$lib/index.js'

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

test('should match snapshot', async () => {
	const target = doc_query('main#xxx')
	new Notifications({ target })
	const notification = { message: 'one', lifetime: 10 }
	acts.add(notification)

	await setTimeout(2000)
	const div = doc_query('div')
	expect(div).toMatchSnapshot()

	const store = acts.getStore()
	console.log('notification', get(store).size)

	const spy = vi.fn()
	const btn = doc_query('button._tadashi_svelte_notification__btn')
	btn.addEventListener('click', () => {
		spy()
		acts.remove(notification)
		console.log('notification', get(store).size)
	})

	const clickEvent = new Event('click')
	btn.dispatchEvent(clickEvent)
	await tick()
	await setTimeout(2000)

	expect(spy, 'clicado').toHaveBeenCalledTimes(1)
	expect(() => doc_query('div')).toThrowError(/No element/)
})

test('size 1', async () => {
	const notification = { message: 'one', lifetime: 10 }
	acts.add(notification)

	const target = doc_query('main#xxx')
	new Notifications({ target })

	await setTimeout(2000)
	const div = doc_query('div')
	expect(div).toMatchSnapshot()
})
