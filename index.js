import { toaster } from "./Toaster.js";

Toast.TYPE_INFO = "info";
Toast.TYPE_MESSAGE = "message";
Toast.TYPE_WARNING = "warning";
Toast.TYPE_ERROR = "error";
Toast.TYPE_DONE = "done";

Toast.TIME_SHORT = 2000;
Toast.TIME_NORMAL = 4000;
Toast.TIME_LONG = 8000;

let options = {
    topOrigin: 0
};

/**
 * Allows you to configure Toasts options during the application setup.
 * @param newOptions
 */
export function configureToasts (newOptions = {}) {
    options = Object.assign(options, newOptions);
}

/**
 * On-screen toast message.
 * @param {string} text - Message text.
 * @param {string} [type] - Toast.TYPE_*
 * @param {number} [timeout] - Toast.TIME_*
 * @constructor
 */
export function Toast (text = `No text!`, type = Toast.TYPE_INFO, timeout = Toast.TIME_LONG) {

    let el1 = document.createElement("div"),
        el2 = document.createElement("div");

    el1.className = "toast";
    el2.className = `body ${type}`;
    el1.appendChild(el2);
    el2.innerHTML = `${text}`;
    el1.style.opacity = 0;

    this.element = el1;
    this.position = 0;

    toaster.push(this, timeout);

}

/**
 * Attaches toast to GUI and returns the height of the element.
 */
Toast.prototype.attach = function (position) {

    this.position = position;
    this.updateVisualPosition();
    document.body.appendChild(this.element);
    requestAnimationFrame(() => {
        this.element.style.opacity = 1;
    });

    return this.element.offsetHeight;

};

/**
 * Seek the toast message by Y coordinate.
 * @param delta
 */
Toast.prototype.seek = function (delta) {

    this.position += delta;
    this.updateVisualPosition();

};

/**
 * @private
 */
Toast.prototype.updateVisualPosition = function () {

    requestAnimationFrame(() => {
        this.element.style.bottom = -options.topOrigin + this.position + "px"
    });

};

Toast.prototype.detach = function () {

    let self = this;

    if (!this.element.parentNode) return;

    requestAnimationFrame(() => {
        this.element.style.opacity = 0;
    });
    setTimeout(() => {
        requestAnimationFrame(() => {
            self.element.parentNode.removeChild(self.element);
        });
    }, 300);

};