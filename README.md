# svelte-notification

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/svelte-notification.svg
[npm]:             https://www.npmjs.com/package/@tadashi/svelte-notification
[ci-img]:          https://github.com/lagden/svelte-notification/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/svelte-notification/actions/workflows/nodejs.yml

---

Svelte component

## Install

```
$ npm i -S @tadashi/svelte-notification
```

## API

### acts.add(notification: Object): void

#### notification

property    | type         | required    | default               | description
----------- | ------------ | ----------- | -------------------   | ------------
mode        | String       | no          | 'normal'              | box type
message     | String       | no          | ''                    | message inside box
lifetime    | Number       | no          | 0                     | autodestroy in seconds


## Usage

You can see an example here: https://svelte.dev/repl/d11f78c338f543c2b9c4ec529009dd4e?version=3.35.0

```svelte
<script>
  import {Notifications, acts} from '@tadashi/svelte-notification'

  let triggers = [
    {mode: 'normal', message: 'Nothing to say...', lifetime: 2},
    {mode: 'success', message: 'Nice!!'},
    {mode: 'info', message: 'Leve a japona'},
    {mode: 'warn', message: 'Piso escorregadio'},
    {mode: 'danger', message: 'Alta tensão'},
  ]
</script>

{#each triggers as trigger}
  <button type=button on:click={() => {acts.add(trigger)}}>Add {trigger.mode}</button>
{/each}

<Notifications />
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
