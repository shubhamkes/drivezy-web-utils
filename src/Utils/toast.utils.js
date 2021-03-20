/*************************************************************************
 * Notification wrapper
 * Contain three methods for showing success, warn and error notification
 * All kind of notification will be sent through these methods
 ************************************************************************/

export class ToastNotifications {

    static register(elem) {
        this.currentScope = elem;
    }

    static openFlag() {
        this.currentScope && this.currentScope.addFlag();
    }

    /**
     * Shows success notification
     * @param  {string} message
     * @param  {Object} params={}
     */
    static success(params) {
        // overriding toast params
        this.currentScope && this.currentScope.success(params);
    }

    /**
     * Shows error notification
     * @param  {string} message
     * @param  {Object} params={}
     */
    static error(params) {
        // overriding toast params
        this.currentScope && this.currentScope.error(params);
    }

    /**
     * Shows warn notification
     * @param  {string} message
     * @param  {Object} params={}
     */
    static warning(params) {
        // overriding toast params
        this.currentScope && this.currentScope.warn(params);
    }
    /**
      * Shows info notification
      * @param  {string} message
      * @param  {Object} params={}
      */
    static info(params) {
        // overriding toast params
        this.currentScope && this.currentScope.info(params);
    }

}
