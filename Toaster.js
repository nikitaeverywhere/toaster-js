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
        let height = toast.attach(0);

        this.toasts.forEach((toast) => {
            toast.seek(height);
        });
        this.toasts.push(toast);

        setTimeout(() => {
            let index = this.toasts.indexOf(toast),
                tst = this.toasts.splice(index, 1)[0];
            tst.detach();
            this.toasts.slice(0, index).forEach(t => t.seek(-height));
        }, timeout);
    });

};