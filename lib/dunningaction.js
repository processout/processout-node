"use strict";
// The content of this file was automatically generated
var DunningAction = /** @class */ (function () {
    /**
     * DunningAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function DunningAction(client, prefill) {
        this.client = null;
        /**
         * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
         * @type {string}
         */
        this.action = null;
        /**
         * Delay in days that should be waited before executing the next dunning action
         * @type {number}
         */
        this.delayInDays = null;
        if (typeof client === 'undefined')
            throw new Error("The DunningAction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDunningAction()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    DunningAction.prototype.getProcessOutObjectClass = function () {
        return "DunningAction";
    };
    /**
     * Get Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @return {string}
     */
    DunningAction.prototype.getAction = function () {
        return this.action;
    };
    /**
     * Set Action
     * Dunning action. Can be either retry, cancel, set_past_due or leave_unchanged
     * @param {string} val
     * @return {DunningAction}
     */
    DunningAction.prototype.setAction = function (val) {
        this.action = val;
        return this;
    };
    /**
     * Get DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @return {number}
     */
    DunningAction.prototype.getDelayInDays = function () {
        return this.delayInDays;
    };
    /**
     * Set DelayInDays
     * Delay in days that should be waited before executing the next dunning action
     * @param {number} val
     * @return {DunningAction}
     */
    DunningAction.prototype.setDelayInDays = function (val) {
        this.delayInDays = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {DunningAction}
     */
    DunningAction.prototype.fillWithData = function (data) {
        if (data["action"])
            this.setAction(data["action"]);
        if (data["delay_in_days"])
            this.setDelayInDays(data["delay_in_days"]);
        return this;
    };
    return DunningAction;
}());
module.exports = DunningAction;
