# Toaster-JS

[![npm](https://img.shields.io/npm/v/toaster-js.svg)](https://www.npmjs.com/package/toaster-js)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](http://npm.anvaka.com/#/view/2d/toaster-js)
[![npm](https://img.shields.io/npm/dm/toaster-js.svg)](https://www.npmjs.com/package/toaster-js)
[![License](https://img.shields.io/github/license/zitros/toaster-js.svg)](LICENSE)

The vanilla JavaScript ES6 minimalistic easy-to-use toast pup-up messages module.
The solution which "just works" – add the module to your project and go further.

Supported by all major browsers and IE 10+ (requestAnimationFrame support). Safe to use with ReactJS
and other virtual-dom frameworks.

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

Toaster-JS is primarily ES6 module. See it in action:

```bash
npm install toaster-js --save-dev
```

```javascript
import { Toast } from "toaster-js";

new Toast("Welcome!");
new Toast("There is no more toasts!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);
```

You can import pre-defined css/scss styles for your toasts. 
There are two files (css/scss) available.

```javascript
import "toaster-js/default.scss"; // or @import "../node_modules/toaster-js/default.scss"; from SCSS
```

You can set up additional options if you need. See the API below.

```javascript
import { configureToasts } from "toaster-js";

configureToasts({
    topOrigin: 0
});
```

If you need to load ES5 (UMD) module, use the following:

```javascript
var Toast = require("toaster-js/umd.js");
```

If you need the module with a script tag, use this:
```html
<script type="text/javascript" src="https://cdn.rawgit.com/ZitRos/toaster-js/master/umd.js"></script>
```

API
---

+ [Toast(message, type, timeout)](#toastmessage-type-timeout)
    + [TIME_SHORT](#time-short)
    + [TIME_NORMAL](#time-normal)
    + [TIME_LONG](#time-long)
    + [TYPE_INFO](#type-info)
    + [TYPE_MESSAGE](#type-message)
    + [TYPE_WARNING](#type-warning)
    + [TYPE_ERROR](#type-error)
    + [TYPE_DONE](#type-done)
+ [configureToasts(options)](#configuretoastsoptions)

##### Toast(message, type, timeout)
Creates a new toast pop-up message on the screen. Pass a string `message` to specify the message 
text, `type` = `Toast.TYPE_*` to specify the type and `timeout` = `Toast.TIME_*` to specify the 
timeout. Timeout constants are the numbers of milliseconds for message to stay on screen. For 
example, `new Toast("Baked!", Toast.TYPE_ERROR, 10000)` message will stay on the screen for 10 
seconds.

+ TIME_SHORT = 2 seconds
+ TIME_NORMAL = 4 seconds
+ TIME_LONG = 8 seconds
+ TYPE_INFO = "info"
+ TYPE_MESSAGE = "message"
+ TYPE_WARNING = "warning"
+ TYPE_ERROR = "error"
+ TYPE_DONE = "done"

##### configureToasts(options)
Allows to configure some options of the toast. The available optional options are listed below:

```js
configureToasts({
    topOrigin: -100 // [default=0] Y-axis origin of the messages. 
});
```

Contributing
------------

Feel free to help improving the project. Building the `umd.js` module:

```bash
npm install
npm run build
```