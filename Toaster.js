//! Do not import this module to the application! Import index.js instead.

/**
 * @type {Toaster}
 */
export let toaster = new Toaster();

/**
 * Toasts controller. Controls toasts that appear on the screen.
 * @constructor
 * @private
 */
function Toaster () {

    /**
     * @type {Toast[]}
     */
    this.toasts = [];

}

/**
 * @param {Toast} toast
 * @param {number} timeout
 */
Toaster.prototype.push = function (toast, timeout) {

    requestAnimationFrame(() => {
        let height = toast.attach(0),
            self = this;

        this.toasts.forEach((toast) => {
            toast.seek(height);
        });
        this.toasts.push(toast);

        setTimeout(() => {
            self.toasts.splice(0, 1)[0].detach();
        }, timeout);
    });

};