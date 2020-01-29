"use strict";
// The content of this file was automatically generated
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var CardInformation = /** @class */ (function () {
    /**
     * CardInformation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CardInformation(client, prefill) {
        this.client = null;
        /**
         * First 6 digits of the card
         * @type {string}
         */
        this.iin = null;
        /**
         * Scheme of the card, such as visa or mastercard
         * @type {string}
         */
        this.scheme = null;
        /**
         * Type of the card (Credit, Debit, ...)
         * @type {string}
         */
        this.type = null;
        /**
         * Name of the bank of the card
         * @type {string}
         */
        this.bankName = null;
        /**
         * Level of the card (Electron, Classic, Gold, ...)
         * @type {string}
         */
        this.brand = null;
        /**
         * Category of the card (consumer, commercial, ...)
         * @type {string}
         */
        this.category = null;
        /**
         * Country that issued the card
         * @type {string}
         */
        this.country = null;
        if (typeof client === 'undefined')
            throw new Error("The CardInformation object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardInformation()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CardInformation.prototype.getProcessOutObjectClass = function () {
        return "CardInformation";
    };
    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    CardInformation.prototype.getIin = function () {
        return this.iin;
    };
    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setIin = function (val) {
        this.iin = val;
        return this;
    };
    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    CardInformation.prototype.getScheme = function () {
        return this.scheme;
    };
    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setScheme = function (val) {
        this.scheme = val;
        return this;
    };
    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    CardInformation.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    CardInformation.prototype.getBankName = function () {
        return this.bankName;
    };
    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setBankName = function (val) {
        this.bankName = val;
        return this;
    };
    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    CardInformation.prototype.getBrand = function () {
        return this.brand;
    };
    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setBrand = function (val) {
        this.brand = val;
        return this;
    };
    /**
     * Get Category
     * Category of the card (consumer, commercial, ...)
     * @return {string}
     */
    CardInformation.prototype.getCategory = function () {
        return this.category;
    };
    /**
     * Set Category
     * Category of the card (consumer, commercial, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setCategory = function (val) {
        this.category = val;
        return this;
    };
    /**
     * Get Country
     * Country that issued the card
     * @return {string}
     */
    CardInformation.prototype.getCountry = function () {
        return this.country;
    };
    /**
     * Set Country
     * Country that issued the card
     * @param {string} val
     * @return {CardInformation}
     */
    CardInformation.prototype.setCountry = function (val) {
        this.country = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardInformation}
     */
    CardInformation.prototype.fillWithData = function (data) {
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["category"])
            this.setCategory(data["category"]);
        if (data["country"])
            this.setCountry(data["country"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CardInformation.prototype.toJSON = function () {
        return {
            "iin": this.getIin(),
            "scheme": this.getScheme(),
            "type": this.getType(),
            "bank_name": this.getBankName(),
            "brand": this.getBrand(),
            "category": this.getCategory(),
            "country": this.getCountry(),
        };
    };
    /**
     * Fetch card information from the IIN.
     * @param string iin
     * @param {any} options
     * @return {this}
     */
    CardInformation.prototype.fetch = function (iin, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/iins/" + encodeURI(iin) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['card_information'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    return CardInformation;
}());
module.exports = CardInformation;
//# sourceMappingURL=cardinformation.js.map