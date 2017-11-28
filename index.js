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
	deleteDelay: 300,
    topOrigin: 0
};

/**
 * Allows you to configure Toasts options during the application setup.
 * @param newOptions
 */
export function configureToasts (newOptions = {}) {
    Object.assign(options, newOptions);
}

/**
 * Delete all toast currently displayed.
 */
export function deleteAllToasts () {
    return toaster.removeAll();
}

/**
 * On-screen toast message.
 * @param {string|Element} text - Message text.
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
    if (text instanceof Element) {
        el2.appendChild(text);
    } else {
	    el2.textContent = `${text}`;
    }

    this.element = el1;
    this.position = 0;

    toaster.push(this, timeout);

}

/**
 * Attaches toast to DOM and returns the height of the element.
 */
Toast.prototype.attach = function (position) {

    this.position = position;
    this.updateVisualPosition();
    document.body.appendChild(this.element);
    requestAnimationFrame(() => {
	    this.element.classList.add("displayed");
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
        this.element.style.bottom = -options.topOrigin + this.position + "px";
    });

};

/**
 * Removes toast from DOM.
 */
Toast.prototype.detach = function () {

    let self = this;

    if (!this.element.parentNode) return;

    requestAnimationFrame(() => {
	    this.element.classList.remove("displayed");
        this.element.classList.add("deleted");
    });
    setTimeout(() => {
        requestAnimationFrame(() => {
            if (!self.element || !self.element.parentNode)
                return;
            self.element.parentNode.removeChild(self.element);
        });
    }, options.deleteDelay);

};

Toast.prototype.delete = function () {

    toaster.remove(this);

};