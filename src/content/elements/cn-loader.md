---
name: 'Loading animations'
nodename: 'cn-loader'
noun: 'fox'
---

# Loading animations

We provide a set of loading animations that can be used to indicate that a page or component is loading. These animations are designed to be simple and unobtrusive, and can be used in a variety of contexts.

## Demo

<div class="flex">
  <div class="text-center">
    <cn-loader></cn-loader>
    <p>Default</p>
  </div>
  <div class="text-center">
    <cn-loader for="navigation" style="margin: 0 auto"></cn-loader>
    <p class="text-caption">Navigation</p>
  </div>
</div>

## Parameters

| Attribute | Description | Default |
| --- | --- | --- |
| `for` | The type of loading animation to display. Possible values are `navigation` and \[empty]. | \[ ] |