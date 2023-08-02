<script>
	import { Notifications, acts } from '$lib/index.js';

	function add(notification) {
		return () => {
			acts.add(notification);
		};
	}

	let triggers = [
		{ mode: 'normal', message: 'Nothing to say...', lifetime: 2 },
		{ mode: 'success', message: 'Nice!!!!' },
		{ mode: 'info', message: 'Leve a japona' },
		{ mode: 'warn', message: 'Piso escorregadio' },
		{ mode: 'danger', message: 'Alta tensão' },
	];
</script>

{#each triggers as trigger}
	<button type="button" on:click={add(trigger)}>Add {trigger.mode}</button>
{/each}

<Notifications />
