# svelte-notification

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]: https://img.shields.io/npm/v/@tadashi/svelte-notification.svg
[npm]: https://www.npmjs.com/package/@tadashi/svelte-notification
[ci-img]: https://github.com/lagden/svelte-notification/actions/workflows/nodejs.yml/badge.svg
[ci]: https://github.com/lagden/svelte-notification/actions/workflows/nodejs.yml
[coveralls-img]: https://coveralls.io/repos/github/lagden/svelte-notification/badge.svg?branch=main
[coveralls]: https://coveralls.io/github/lagden/svelte-notification?branch=main

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-notification
```

## API

### acts.add(notification: Object): void

#### notification

| property | type   | required | default | description            |
| -------- | ------ | -------- | ------- | ---------------------- |
| mode\*   | Enums  | no       | normal  | box type               |
| message  | String | no       | -       | message inside box     |
| lifetime | Number | no       | 0       | autodestroy in seconds |

The `mode` can be:

```
- normal
- info
- success || ok
- warning || warn
- danger  || error
```

### CSS Vars

| vars                                                | default                          |
| --------------------------------------------------- | -------------------------------- |
| --tadashi_svelte_notifications_width                | 270px                            |
| --tadashi_svelte_notifications_margin               | 0.9em                            |
| --tadashi_svelte_notifications_zindex               | 1001                             |
| \-                                                  | \-
| --tadashi_svelte_notification_margin                | 0 0 0.9em                        |
| --tadashi_svelte_notification_border_radius         | 3px                              |
| --tadashi_svelte_notification_box_shadow            | 0 4px 10px hsl(0deg 0% 0% / 10%) |
| --tadashi_svelte_notification\_\_content_padding    | 0.9em                            |
| --tadashi_svelte_notification\_\_btn_font_size      | 1.5em                            |
| --tadashi_svelte_notification\_\_btn_font_family    | monospace                        |
| --tadashi_svelte_notification\_\_btn_after_content  | ✗                                |
| --tadashi_svelte_notification_background            | hsl(0deg 100% 100% / 90%)        |
| --tadashi_svelte_notification_color                 | hsl(0deg 0% 0%)                  |
| --tadashi_svelte_notification\_\_success_background | hsl(149deg 96% 42% / 90%)        |
| --tadashi_svelte_notification\_\_success_color      | hsl(0deg 100% 100%)              |
| --tadashi_svelte_notification\_\_warning_background | hsl(44deg 100% 50% / 90%)        |
| --tadashi_svelte_notification\_\_warning_color      | hsl(0deg 0% 0%)                  |
| --tadashi_svelte_notification\_\_danger_background  | hsl(359deg 88% 64% / 90%)        |
| --tadashi_svelte_notification\_\_danger_color       | hsl(0deg 100% 100%)              |
| --tadashi_svelte_notification\_\_info_background    | hsl(213deg 56% 47% / 90%)        |
| --tadashi_svelte_notification\_\_info_color         | hsl(0deg 100% 100%)              |

## Usage

You can see an example here: https://svelte.dev/repl/d11f78c338f543c2b9c4ec529009dd4e

```svelte
<script>
  import {Notifications, acts} from '@tadashi/svelte-notification'

  let triggers = [
    {mode: 'normal', message: 'Nothing to say...', lifetime: 2},
    {mode: 'success', message: '✓ Nice!'},
    {mode: 'info', message: 'ℹ Leve a japona'},
    {mode: 'warn', message: '⚠ Já chegou o disco voador!'},
    {mode: 'danger', message: '☠ Alta tensão'},
  ]
</script>

{#each triggers as trigger}
  <button
    type="button"
    on:click={() => {
      acts.add(trigger)
    }}>Add {trigger.mode}</button
  >
{/each}

<Notifications />
```

## Donate ❤️

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)
