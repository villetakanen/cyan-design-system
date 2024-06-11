---
name: "App Tray"
html: "<nav class='cn-tray'>"
noun: "layout"
---

# App Tray

The App Tray is a vertical tray that slides in from the right side of the screen. It is used to display a list of
tools and pages that are available to the user. The tray can be toggled on and off by clicking the tray icon in the
App Bar. 

To open App Tray programmatically, add the aria-expanded attribute to the tray button (cn-tray-button)[/components/cn-tray-button] and set it to true.

```html
<cn-tray-button aria-expanded="true"></cn-tray-button>
```

As there is only on tray button, the the same can be done in JavaScript by selecting the button and setting the attribute.

```javascript
document.querySelector('cn-tray-button').setAttribute('aria-expanded', 'true');
```