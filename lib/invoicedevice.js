"use strict";
// The content of this file was automatically generated
var InvoiceDevice = /** @class */ (function () {
    /**
     * InvoiceDevice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceDevice(client, prefill) {
        this.client = null;
        /**
         * Channel of the device
         * @type {string}
         */
        this.channel = null;
        /**
         * IP address of the device
         * @type {string}
         */
        this.ipAddress = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDevice object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDevice()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceDevice.prototype.getProcessOutObjectClass = function () {
        return "InvoiceDevice";
    };
    /**
     * Get Channel
     * Channel of the device
     * @return {string}
     */
    InvoiceDevice.prototype.getChannel = function () {
        return this.channel;
    };
    /**
     * Set Channel
     * Channel of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    InvoiceDevice.prototype.setChannel = function (val) {
        this.channel = val;
        return this;
    };
    /**
     * Get IpAddress
     * IP address of the device
     * @return {string}
     */
    InvoiceDevice.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    /**
     * Set IpAddress
     * IP address of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    InvoiceDevice.prototype.setIpAddress = function (val) {
        this.ipAddress = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDevice}
     */
    InvoiceDevice.prototype.fillWithData = function (data) {
        if (data["channel"])
            this.setChannel(data["channel"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        return this;
    };
    return InvoiceDevice;
}());
module.exports = InvoiceDevice;
