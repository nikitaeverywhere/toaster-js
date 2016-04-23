# Toast

The vanilla JavaScript ES6 minimalistic easy-to-use toast pup-up messages module.
The solution which "just works" – add the module to your project and go further.

Preview
-------

![Screenshot](https://cloud.githubusercontent.com/assets/4989256/14760552/9480e966-094f-11e6-9425-739e000ffbd2.png)

Features
--------

+ Simple animated customizable toast pop-ups for any design;
+ Toasts have different types and apply any style you need;
+ Toasts appear and disappear by specifying optional timeout;
+ All you need to create a first toast is to write `new Toast("test")` in JavaScript.

Installation
------------

You can just take ready-to-use `index.js` with `Toaster.js` file from this repository.
But the better way would be to clone this repository as a git submodule into your project:

```bash
cd your/project/directory
git submodule add https://github.com/ZitRos/Toast.git source/client/js/Toast
```

**NOTE:** `your/project/directory` is the directory **of your project**, `source/js/Toast`
is the sub-directory **in your project** where this repository will be cloned.

Usage
-----

This simplest example requires `Toast` module and creates a toast in JavaScript.

```js
import { Toast } from "./Toast"; // the directory you cloned AutoGrid to, source/client/js/Toast

new Toast("Hello!");
new Toast("Error!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);
```

This will create toast with the message `Hello!` along with all others when your application starts.

Styling
-------

You can style toast message by yourself using CSS. Default CSS and SCSS templates are happy to help
you in `default.css` and `default.scss` files. When using SCSS, just `@import` the file from the
Toast project folder.

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
Creates a new toast pop-up message on the screen. Pass a string `message` to specify the message,
`type` = `Toast.TYPE_*` to specify the type and `timeout` = `Toast.TIME_*` to specify the timeout.
Timeout constant is the number of milliseconds for message to stay, so
`new Toast("test", Toast.TYPE_ERROR, 10000)` message would stay for 10 seconds.

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
    topOrigin: -100 // [default=0] Y-axis origin of the message. 
});
```
