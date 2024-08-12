---
name: "Select"
noun: "gamepad"
---

We provide styling for HTML `<select>` elements, including support for styled pseudo-classes for `:active`, `:hover`, and `:disabled`. This styling will make the select look like a form element, but it will not change the dropdown appearance - or other features natibe to the browsers.

**Opinionated:** *Select is a complicated element, with many different states and behaviors - which are best handled by the browser.*

## Examples

<label>
  A label
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</label>

```html
<label>
  A label
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</label>
```

## Toolbars

The select element can be used in a toolbar, in which case it it takes as much space as it needs.

<div class="toolbar">
  <label>
  A label
    <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </label>
</div>

