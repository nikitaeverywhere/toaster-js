# Toaster-JS

[![npm](https://img.shields.io/npm/v/toaster-js.svg)](https://www.npmjs.com/package/toaster-js)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](http://npm.anvaka.com/#/view/2d/toaster-js)
[![npm](https://img.shields.io/npm/dm/toaster-js.svg)](https://www.npmjs.com/package/toaster-js)
[![License](https://img.shields.io/github/license/zitros/toaster-js.svg)](LICENSE)

The simple vanilla JavaScript toast pop-up notifications module, which is fully CSS-customizable.
The solution which "just works": add the module to your project and go further.

Supported by all major browsers. Safe to use with ReactJS and other virtual-dom frameworks.

Preview
-------

#### [See the demo here.](https://zitros.github.io/toaster-js)

![Screenshot](https://user-images.githubusercontent.com/4989256/29067281-bda23354-7c3a-11e7-83e6-0134711d4b04.png)

Features
--------

+ Simple CSS-animated customizable toast pop-ups for any design;
+ No dependencies and `< 1kb` code; 
+ Toasts have different types and apply any style you need;
+ Toasts appear and disappear by specifying optional timeout.

Installation & Usage
--------------------

Toaster-JS is primarily ES6 module. Install it with NPM:

```bash
npm install toaster-js
```

Then, include it to your project:

```javascript
import { Toast } from "toaster-js";
import "toaster-js/default.scss"; // Assuming CSS/SCSS loader is present
// Import styles from SCSS: @import "../node_modules/toaster-js/default.scss";
// Or just copy default styles to your project from node_modules/toaster-js/default.*css. 

new Toast("Welcome!");
new Toast("There is a lot of toasts!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);

let element = document.createElement("div");
element.textContent = "You can pass any HTML elements to Toast. Clicking on this one deletes it!";
let newToast = new Toast(element, Toast.TYPE_MESSAGE);
element.addEventListener("click", () => newToast.delete()); // delete a toast on message click!
```

You can set up additional options if you need. See the [API](#api) section below for more details.

```javascript
import { configureToasts, deleteAllToasts } from "toaster-js";

configureToasts({
    topOrigin: 0,
    deleteDelay: 300
});
deleteAllToasts(); // just deletes all toasts on the screen
```

If you need to load ES5 (UMD) module, use the following:

```javascript
let Toast = require("toaster-js/umd.js");
```

If you need to include the module with a script tag (for example, for demos), use this:

```html
<script type="text/javascript" src="https://unpkg.com/toaster-js/umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/toaster-js/default.css"/>
```

API
---

+ [toast = new Toast(content, type, timeout)](#toastmessage-type-timeout)
    + `Toast.TIME_SHORT` (2000 ms)
    + `Toast.TIME_NORMAL` (4000 ms)
    + `Toast.TIME_LONG` (8000 ms, default)
    + `Toast.TYPE_INFO`
    + `Toast.TYPE_MESSAGE`
    + `Toast.TYPE_WARNING`
    + `Toast.TYPE_ERROR`
    + `Toast.TYPE_DONE`
    + `toast.delete()` - Deletes this toast from the DOM.
+ [configureToasts(options)](#configuretoastsoptions)
    + `options.topOrigin = 0` - A `number` in pixels of toasts Y-axis origin (negative values move toasts up).
    + `options.deleteDelay = 300` - A `number` representing delay in milliseconds. When toast is deleted, it stays in DOM for `deleteDelay` more milliseconds. Useful with CSS animations.
+ `deleteAllToasts()` - Deletes all toasts on the screen.

##### Toast(content, type, timeout)

Creates a new toast notification message on the screen. Pass a string `content` to specify the 
message text, `type` = `Toast.TYPE_*` to specify the type and `timeout` = `Toast.TIME_*` to specify
the timeout. Timeout constants are the numbers of milliseconds for message to stay on screen. For 
example, `new Toast("Baked!", Toast.TYPE_ERROR, 10000)` message will stay on the screen for 10 
seconds.

+ `TIME_SHORT` = 2 seconds
+ `TIME_NORMAL` = 4 seconds
+ `TIME_LONG` = 8 seconds
+ `TYPE_INFO` = `"info"`
+ `TYPE_MESSAGE` = `"message"`
+ `TYPE_WARNING` = `"warning"`
+ `TYPE_ERROR` = `"error"`
+ `TYPE_DONE` = `"done"`

When `content` is a valid DOM `Element`, it will be attached to the message's body directly, 
allowing you to customize toast however you want.

##### configureToasts(options)

Allows to configure some options of the toast. The available optional options are listed below:

```js
configureToasts({
    topOrigin: -100, // [default=0] Y-axis origin of the messages.
    deleteDelay: 300 // time until the toast is completely removed from the DOM after deleting. 
});
```

Styles
------

Import default toast styles from `node_modules/toaster-js/default.*css` (CSS, SCSS are available).

To style the toast properly, consider that toast elements (for example, `info` toasts) have three 
states: empty state (when the toast attaches to the DOM), `displayed` state (when the toast is moved
to its proper position), and `deleted` state, when the toast "fades out" from the DOM. You can 
control how much time the toast stays in `deleted` state until it disappears using 
[deleteDelay](#api) option. States:

```html
<div class="toast">           <div class="body info">...</div> </div>
<div class="toast displayed"> <div class="body info">...</div> </div>
<div class="toast deleted">   <div class="body info">...</div> </div>
```

Contributing
------------

Feel free to improve this project! Building the `umd.js` and `default.css` requires the following:

```bash
npm install
npm run build
```

License
-------

MIT © [Nikita Savchenko](https://nikita.tk)