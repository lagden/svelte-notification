import {setTimeout} from 'timers/promises'
import {
	expect,
	test,
} from '@playwright/test'

test('notifications', async ({page}) => {
	await page.goto('/')

	for (const btn of await page.locator('css=button').all()) {
		await btn.click()
	}

	const elemento = await page.locator('div._tadashi_svelte_notifications')
	await expect(elemento).toBeVisible()

	await setTimeout(1000)
	await page.screenshot({
		path: './test-results/screenshot.png',
	})
})
