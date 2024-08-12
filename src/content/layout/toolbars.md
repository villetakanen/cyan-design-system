---
name: "toolbars"
html: "<[section|div] class='toolbar'>"
noun: "layout"
---
# Toolbars

A toolbar is a single row container for controls, typically used for control fields or actions.

## Examples

### Basic Toolbar

<div class="toolbar">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

```html
<div class="toolbar">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

### Toolbar with an input

<div class="toolbar">
  <label class="flex-grow">
    Text
    <input type="text" placeholder="Type something">
  </label>
  <label>
    Select
    <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </label>
  <button>Button</button>
</div>

```html
<div class="toolbar">
  <label class="flex-grow">
    Text
    <input type="text" placeholder="Type something">
  </label>
  <label>
    Select
    <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </label>
  <button>Button</button>
</div>
```
