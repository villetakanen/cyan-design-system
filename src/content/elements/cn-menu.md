---
name: "Pop-up Menus"
nodename: 'cn-menu'
noun: 'layout'
---
### Examples

The two dropdowns here show that the menu opens to left or right depending on the side the
menu is closer to the edge of the screen.

<div class="flex justify-space-between">
<cn-menu>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">
      <cn-icon noun="close" xsmall></cn-icon>
    Link 2</a></li>
    <li><a href="/">Link 3: to root</a></li>
  </ul>
  <ul>
    <li><a href="#">Link 4</a></li>
    <li><a href="#">Link 5</a></li>
    <li><a href="#">Link 6</a></li>
  </ul>
</cn-menu>

<cn-menu>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><button onclick="alert('click')" >Button 1</button></li>
  </ul>
</cn-menu>
</div>
