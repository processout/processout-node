"use strict";
// The content of this file was automatically generated
var PaymentProcessingConfiguration = /** @class */ (function () {
    /**
     * PaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PaymentProcessingConfiguration(client, prefill) {
        this.client = null;
        /**
         * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
         * @type {boolean}
         */
        this.bypassUnsupportedSplitPayments = null;
        /**
         * Alternative Payment Method (APM) specific payment processing cofiguration.
         * @type {p.APMPaymentProcessingConfiguration}
         */
        this.apmPaymentConfig = null;
        if (typeof client === 'undefined')
            throw new Error("The PaymentProcessingConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentProcessingConfiguration()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PaymentProcessingConfiguration.prototype.getProcessOutObjectClass = function () {
        return "PaymentProcessingConfiguration";
    };
    /**
     * Get BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @return {boolean}
     */
    PaymentProcessingConfiguration.prototype.getBypassUnsupportedSplitPayments = function () {
        return this.bypassUnsupportedSplitPayments;
    };
    /**
     * Set BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @param {boolean} val
     * @return {PaymentProcessingConfiguration}
     */
    PaymentProcessingConfiguration.prototype.setBypassUnsupportedSplitPayments = function (val) {
        this.bypassUnsupportedSplitPayments = val;
        return this;
    };
    /**
     * Get ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @return {p.APMPaymentProcessingConfiguration}
     */
    PaymentProcessingConfiguration.prototype.getApmPaymentConfig = function () {
        return this.apmPaymentConfig;
    };
    /**
     * Set ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @param {p.APMPaymentProcessingConfiguration} val
     * @return {PaymentProcessingConfiguration}
     */
    PaymentProcessingConfiguration.prototype.setApmPaymentConfig = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPMPaymentProcessingConfiguration().getProcessOutObjectClass())
            this.apmPaymentConfig = val;
        else {
            var obj = this.client.newAPMPaymentProcessingConfiguration();
            obj.fillWithData(val);
            this.apmPaymentConfig = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentProcessingConfiguration}
     */
    PaymentProcessingConfiguration.prototype.fillWithData = function (data) {
        if (data["bypass_unsupported_split_payments"])
            this.setBypassUnsupportedSplitPayments(data["bypass_unsupported_split_payments"]);
        if (data["apm_payment_config"])
            this.setApmPaymentConfig(data["apm_payment_config"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    PaymentProcessingConfiguration.prototype.toJSON = function () {
        return {
            "bypass_unsupported_split_payments": this.getBypassUnsupportedSplitPayments(),
            "apm_payment_config": this.getApmPaymentConfig(),
        };
    };
    return PaymentProcessingConfiguration;
}());
module.exports = PaymentProcessingConfiguration;
//# sourceMappingURL=paymentprocessingconfiguration.js.map