"use strict";
// The content of this file was automatically generated
var InvoiceShipping = /** @class */ (function () {
    /**
     * InvoiceShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceShipping(client, prefill) {
        this.client = null;
        /**
         * Amount of the shipping
         * @type {string}
         */
        this.amount = null;
        /**
         * Delivery method
         * @type {string}
         */
        this.method = null;
        /**
         * Delivery provider
         * @type {string}
         */
        this.provider = null;
        /**
         * Shipping delay
         * @type {string}
         */
        this.delay = null;
        /**
         * Address where the shipment will be delivered
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address where the shipment will be delivered
         * @type {string}
         */
        this.address2 = null;
        /**
         * City where the shipment will be delivered
         * @type {string}
         */
        this.city = null;
        /**
         * State where the shipment will be delivered
         * @type {string}
         */
        this.state = null;
        /**
         * Country code where the shipment will be delivered
         * @type {string}
         */
        this.countryCode = null;
        /**
         * ZIP where the shipment will be delivered
         * @type {string}
         */
        this.zip = null;
        /**
         * Shipment full phone number, consisting of a combined dialing code and phone number
         * @type {string}
         */
        this.phoneNumber = null;
        /**
         * Phone number for the shipment
         * @type {p.InvoiceShippingPhone}
         */
        this.phone = null;
        /**
         * Date at which the shipment is expected to be sent
         * @type {string}
         */
        this.expectsShippingAt = null;
        /**
         * Relay store name
         * @type {string}
         */
        this.relayStoreName = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShipping()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceShipping.prototype.getProcessOutObjectClass = function () {
        return "InvoiceShipping";
    };
    /**
     * Get Amount
     * Amount of the shipping
     * @return {string}
     */
    InvoiceShipping.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the shipping
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Method
     * Delivery method
     * @return {string}
     */
    InvoiceShipping.prototype.getMethod = function () {
        return this.method;
    };
    /**
     * Set Method
     * Delivery method
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setMethod = function (val) {
        this.method = val;
        return this;
    };
    /**
     * Get Provider
     * Delivery provider
     * @return {string}
     */
    InvoiceShipping.prototype.getProvider = function () {
        return this.provider;
    };
    /**
     * Set Provider
     * Delivery provider
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setProvider = function (val) {
        this.provider = val;
        return this;
    };
    /**
     * Get Delay
     * Shipping delay
     * @return {string}
     */
    InvoiceShipping.prototype.getDelay = function () {
        return this.delay;
    };
    /**
     * Set Delay
     * Shipping delay
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setDelay = function (val) {
        this.delay = val;
        return this;
    };
    /**
     * Get Address1
     * Address where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get PhoneNumber
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @return {string}
     */
    InvoiceShipping.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    /**
     * Set PhoneNumber
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setPhoneNumber = function (val) {
        this.phoneNumber = val;
        return this;
    };
    /**
     * Get Phone
     * Phone number for the shipment
     * @return {p.InvoiceShippingPhone}
     */
    InvoiceShipping.prototype.getPhone = function () {
        return this.phone;
    };
    /**
     * Set Phone
     * Phone number for the shipment
     * @param {p.InvoiceShippingPhone} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setPhone = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newInvoiceShippingPhone().getProcessOutObjectClass())
            this.phone = val;
        else {
            var obj = this.client.newInvoiceShippingPhone();
            obj.fillWithData(val);
            this.phone = obj;
        }
        return this;
    };
    /**
     * Get ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @return {string}
     */
    InvoiceShipping.prototype.getExpectsShippingAt = function () {
        return this.expectsShippingAt;
    };
    /**
     * Set ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setExpectsShippingAt = function (val) {
        this.expectsShippingAt = val;
        return this;
    };
    /**
     * Get RelayStoreName
     * Relay store name
     * @return {string}
     */
    InvoiceShipping.prototype.getRelayStoreName = function () {
        return this.relayStoreName;
    };
    /**
     * Set RelayStoreName
     * Relay store name
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setRelayStoreName = function (val) {
        this.relayStoreName = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.fillWithData = function (data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["method"])
            this.setMethod(data["method"]);
        if (data["provider"])
            this.setProvider(data["provider"]);
        if (data["delay"])
            this.setDelay(data["delay"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["phone"])
            this.setPhone(data["phone"]);
        if (data["expects_shipping_at"])
            this.setExpectsShippingAt(data["expects_shipping_at"]);
        if (data["relay_store_name"])
            this.setRelayStoreName(data["relay_store_name"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceShipping.prototype.toJSON = function () {
        return {
            "amount": this.getAmount(),
            "method": this.getMethod(),
            "provider": this.getProvider(),
            "delay": this.getDelay(),
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
            "phone_number": this.getPhoneNumber(),
            "phone": this.getPhone(),
            "expects_shipping_at": this.getExpectsShippingAt(),
            "relay_store_name": this.getRelayStoreName(),
        };
    };
    return InvoiceShipping;
}());
module.exports = InvoiceShipping;
//# sourceMappingURL=invoiceshipping.js.map