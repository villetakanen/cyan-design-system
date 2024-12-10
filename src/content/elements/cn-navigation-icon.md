---
title: 'Navigation Icons (buttons)'
nodename: 'cn-navigation-icon'
icon: 'card'
---

## Navigation icons

A <code>cn-navigation-icon</code> element is a styled icon that displays an icon and an optional label. It is used to navigate to a different page or section of a page. The element takes 56x56 pixels of space by default, and should
be placed inside a <code>a</code> or <code>button</code> element.

<div class="flex flex-row">
  <nav class="flex flex-col border-radius border py-1" style="width: 80px">
    <cn-navigation-icon noun="fox"></cn-navigation-icon>
    <cn-navigation-icon noun="card" label="cards"></cn-navigation-icon>
  </nav>

  <nav class="flex flex-row border-radius border px-1 align-center justify-center" style="height: 80px">
    <cn-navigation-icon noun="fox"></cn-navigation-icon>
    <cn-navigation-icon noun="card" label="card"></cn-navigation-icon>
  </nav>
</div>

The icon handles all visual aspects of the icon, including the icon itself, the label, and the hover effect. It 

#### Code 

The following code creates the above example:

```html
<div class="flex flex-row">
  <nav class="flex flex-col border-radius border py-1" style="width: 80px">
    <cn-navigation-icon noun="fox"></cn-navigation-icon>
    <cn-navigation-icon noun="card" label="cards"></cn-navigation-icon>
  </nav>

  <nav class="flex flex-row border-radius border px-1 align-center justify-center" style="height: 80px">
    <cn-navigation-icon noun="fox"></cn-navigation-icon>
    <cn-navigation-icon noun="card" label="card"></cn-navigation-icon>
  </nav>
</div>
```