---
name: "Buttons"
noun: "gamepad"
---

We provide button styling for HTML `<button>` and `<a class="button">` elements.

A button has three substyles: [default], `.text` and `.call-to-action`. All three styles support styled pseudo-classes for `:active`, `:hover`, and `:disabled`

## Examples

### Buttons

| Demo | Code | Description |
| --- | --- | --- |
| <button>Default</button> | `<button>Default</button>` | A default button |
| <button class="text">Text</button> | `<button class="text">Text</button>` | A text button |
| <button class="call-to-action">Call to Action</button> | `<button class="cta">Call to Action</button>` | A call to action button |

#### Disabled Buttons

| Demo | Code | Description |
| --- | --- | --- |
| <button disabled>Default</button> | `<button disabled>Default</button>` | A default disabled button |
| <button class="text" disabled>Text</button> | `<button class="text" disabled>Text</button>` | A text disabled button |
| <button class="call-to-action" disabled>Call to Action</button> | `<button class="call-to-action" disabled>Call to Action</button>` | A call to action disabled button |

### Links

| Demo | Code | Description |
| --- | --- | --- |
| <a class="button">Default</a> | `<a class="button">Default</a>` | A default link button |
| <a class="button text">Text</a> | `<a class="button text">Text</a>` | A text link button |
| <a class="button call-to-action">Call to Action</a> | `<a class="button call-to-action">Call to Action</a>` | A call to action link button |

### Floating Action Buttons

| Demo | Description |
| --- | --- |
| <button class="fab"><cn-icon noun="gamepad"></cn-icon></button> | A floating action button |
| <button class="fab"><cn-icon noun="card" large></cn-icon><span>Text</span></button> | A floating action button with text |
| <button class="fab secondary"><cn-icon noun="tokens" large></cn-icon><span>Secondary</span></button> | A Secondary action button |
| <button class="fab small secondary"><cn-icon noun="d12" large></cn-icon><span>Small secondary</span></button> | A small and secondary action button |

### Using `cn-icon` Icons with Buttons

<div class=flex>
  <button class="button">
    <cn-icon noun="gamepad"></cn-icon>
    <span>Example</span>
  </button>
  <button class="button">
    <cn-icon noun="gamepad"></cn-icon>
    <span class="hide-on-mobile">Example</span>
  </button>
  <button class="button call-to-action">
    <cn-icon noun="gamepad"></cn-icon>
  </button>
</div>

```html
<button class="[ | text | call-to-action ]">
  <cn-icon noun="gamepad"></cn-icon>
  Example
</button>
```






   