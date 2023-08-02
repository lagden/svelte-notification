<script>
	import {fade} from 'svelte/transition'
	import store from '../util/store.js'

	import Notification from './Notification.svelte'

	function init(node) {
		document.body.insertAdjacentElement('beforeend', node)
	}
</script>

{#if $store.size > 0}
	<div
		class="_tadashi_svelte_notifications"
		use:init
		in:fade|global
		out:fade|global
	>
		{#each [...$store] as notification (notification.id)}
			<Notification {notification} />
		{/each}
	</div>
{/if}

<style>
	._tadashi_svelte_notifications {
		position: fixed;
		width: var(--tadashi_svelte_notifications_width, 270px);
		margin: var(--tadashi_svelte_notifications_margin, 0.9em);
		top: 0;
		right: 0;
		z-index: var(--tadashi_svelte_notifications_zindex, 1001);
	}
</style>
