/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Notifications, acts} from '../src'

describe('Notifications', () => {
	afterEach(cleanup)

	test('should match snapshot', done => {
		const {container} = render(Notifications)
		acts.add({message: 'test'})

		setTimeout(() => {
			expect(container).toMatchSnapshot()
			done()
		}, 1000)
	})
})
