<script>
	import {onDestroy} from 'svelte'
	import {remove} from './acts'

	import Base from './Base.svelte'

	export let notification

	const {
		mode = 'normal',
		message = '',
		lifetime = false
	} = notification

	let _timeout

	if (lifetime) {
		let _time = Number.isNaN(lifetime) ? 1000 : Number(lifetime) * 1000
		_timeout = setTimeout(() => {
			remove(notification)
		}, _time)
	}

	function onRemoveNotification(notification) {
		remove(notification)
	}

	onDestroy(() => {
		if (_timeout) {
			clearTimeout(_timeout)
		}
	})
</script>

<Base {mode} on:click={onRemoveNotification(notification)}>{@html message}</Base>
