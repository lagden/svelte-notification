<script>
	import {fade, slide} from 'svelte/transition'

	export let mode
</script>

<div
	role="status"
	aria-live="polite"
	class="_tadashi_svelte_notification"
	class:_tadashi_svelte_notification__success={mode === 'success' || mode === 'ok'}
	class:_tadashi_svelte_notification__warning={mode === 'warning' || mode === 'warn'}
	class:_tadashi_svelte_notification__danger={mode === 'danger' || mode === 'error'}
	class:_tadashi_svelte_notification__info={mode === 'info'}
	in:fade|local
	out:slide|local
>
	<div class="_tadashi_svelte_notification__content">
		<slot />
	</div>
	<button
		aria-label="delete notification"
		class="_tadashi_svelte_notification__btn"
		on:click
	>×</button>
</div>

<style>
	:root {
		--tadashi_svelte_notification_margin: 0 0 0.9em;
		--tadashi_svelte_notification_background: hsl(0deg 100% 100% / 90%);
		--tadashi_svelte_notification_color: hsl(0deg 0% 0%);
		--tadashi_svelte_notification_border_radius: 3px;
		--tadashi_svelte_notification_box_shadow: 0 4px 10px hsl(0deg 0% 0% / 10%);

		--tadashi_svelte_notification__content_padding: 0.9em;

		--tadashi_svelte_notification__btn_font_size: 1.5em;
		--tadashi_svelte_notification__btn_font_family: monospace;

		--tadashi_svelte_notification__success_background: hsl(149deg 96% 42% / 90%);
		--tadashi_svelte_notification__success_color: hsl(0deg 100% 100%);

		--tadashi_svelte_notification__warning_background: hsl(44deg 100% 50%  / 90%);
		--tadashi_svelte_notification__warning_color: hsl(0deg 0% 0%);

		--tadashi_svelte_notification__danger_background: hsl(359deg 88% 64% / 90%);
		--tadashi_svelte_notification__danger_color: hsl(0deg 100% 100%);

		--tadashi_svelte_notification__info_background: hsl(213deg 56% 47% / 90%);
		--tadashi_svelte_notification__info_color: hsl(0deg 100% 100%);
	}

	._tadashi_svelte_notification {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 40px;
		grid-gap: 1px;
		margin: var(--tadashi_svelte_notification_margin);
		border-radius: var(--tadashi_svelte_notification_border_radius);
		box-shadow: var(--tadashi_svelte_notification_box_shadow);
		overflow: hidden;
	}

	._tadashi_svelte_notification__content {
		padding: var(--tadashi_svelte_notification__content_padding);
		box-sizing: border-box;
		word-wrap: break-word;
	}

	._tadashi_svelte_notification__btn {
		padding: 0;
		margin: 0;
		border: none;
		border-radius: 0;
		outline: none;
		background: none;
		cursor: pointer;
		box-sizing: border-box;
		font-size: var(--tadashi_svelte_notification__btn_font_size);
		font-family: var(--tadashi_svelte_notification__btn_font_family);
	}

	._tadashi_svelte_notification > ._tadashi_svelte_notification__content,
	._tadashi_svelte_notification > ._tadashi_svelte_notification__btn {
		background: var(--tadashi_svelte_notification_background);
		color: var(--tadashi_svelte_notification_color);
	}

	._tadashi_svelte_notification__success > ._tadashi_svelte_notification__content,
	._tadashi_svelte_notification__success > ._tadashi_svelte_notification__btn {
		background: var(--tadashi_svelte_notification__success_background);
		color: var(--tadashi_svelte_notification__success_color);
	}

	._tadashi_svelte_notification__warning > ._tadashi_svelte_notification__content,
	._tadashi_svelte_notification__warning > ._tadashi_svelte_notification__btn {
		background: var(--tadashi_svelte_notification__warning_background);
		color: var(--tadashi_svelte_notification__warning_color);
	}

	._tadashi_svelte_notification__danger > ._tadashi_svelte_notification__content,
	._tadashi_svelte_notification__danger > ._tadashi_svelte_notification__btn {
		background: var(--tadashi_svelte_notification__danger_background);
		color: var(--tadashi_svelte_notification__danger_color);
	}

	._tadashi_svelte_notification__info > ._tadashi_svelte_notification__content,
	._tadashi_svelte_notification__info > ._tadashi_svelte_notification__btn {
		background: var(--tadashi_svelte_notification__info_background);
		color: var(--tadashi_svelte_notification__info_color);
	}
</style>
