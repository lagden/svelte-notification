<script>
	import {onDestroy} from 'svelte'
	import {remove} from '../util/acts.js'

	import Base from './Base.svelte'

	export let notification

	const {mode = 'normal', message = '', lifetime = 0, id} = notification

	let _timeout

	if (lifetime > 0) {
		_timeout = setTimeout(() => {
			remove(notification)
		}, lifetime * 1000)
	}

	const onRemoveNotification = () => {
		remove(notification)
	}

	onDestroy(() => {
		if (_timeout) {
			clearTimeout(_timeout)
		}
	})
</script>

<Base {mode} {id} on:click={onRemoveNotification}>{@html message}</Base>
