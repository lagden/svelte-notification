<script>
	import {fade} from 'svelte/transition'
	import {store} from './store'

	import Notification from './Notification.svelte'

	function init(node) {
		document.body.insertAdjacentElement('beforeend', node)
	}
</script>

{#if $store.size > 0}
	<div
		class="_tadashi_svelte_notifications"
		use:init
		in:fade
		out:fade
	>
		{#each [...$store] as notification (notification.id)}
			<Notification {notification} />
		{/each}
	</div>
{/if}

<style>
:root {
	--tadashi_svelte_notifications_width: 270px;
	--tadashi_svelte_notifications_margin: 0.9em;
	--tadashi_svelte_notifications_zindex: 1001;
}

._tadashi_svelte_notifications {
	position: fixed;
	width: var(--tadashi_svelte_notifications_width);
	margin: var(--tadashi_svelte_notifications_margin);
	top: 0;
	right: 0;
	z-index: var(--tadashi_svelte_notifications_zindex);
}
</style>
