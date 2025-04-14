"use strict";
// The content of this file was automatically generated
var InvoiceSubmerchant = /** @class */ (function () {
    /**
     * InvoiceSubmerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceSubmerchant(client, prefill) {
        this.client = null;
        /**
         * ID of the invoice submerchant
         * @type {string}
         */
        this.id = null;
        /**
         * Name of the submerchant
         * @type {string}
         */
        this.name = null;
        /**
         * Submerchant's reference ID
         * @type {string}
         */
        this.reference = null;
        /**
         * Submerchant's MCC (Merchant Category Code).
         * @type {string}
         */
        this.mcc = null;
        /**
         * Submerchant's phone number
         * @type {p.SubmerchantPhoneNumber}
         */
        this.phoneNumber = null;
        /**
         * Email address
         * @type {string}
         */
        this.email = null;
        /**
         * Submerchant's address
         * @type {p.SubmerchantAddress}
         */
        this.address = null;
        /**
         * Tax reference
         * @type {string}
         */
        this.taxReference = null;
        /**
         * Service establishment number
         * @type {string}
         */
        this.serviceEstablishmentNumber = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceSubmerchant object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceSubmerchant()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceSubmerchant.prototype.getProcessOutObjectClass = function () {
        return "InvoiceSubmerchant";
    };
    /**
     * Get Id
     * ID of the invoice submerchant
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the invoice submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Name
     * Name of the submerchant
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Reference
     * Submerchant's reference ID
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getReference = function () {
        return this.reference;
    };
    /**
     * Set Reference
     * Submerchant's reference ID
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setReference = function (val) {
        this.reference = val;
        return this;
    };
    /**
     * Get Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getMcc = function () {
        return this.mcc;
    };
    /**
     * Set Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setMcc = function (val) {
        this.mcc = val;
        return this;
    };
    /**
     * Get PhoneNumber
     * Submerchant's phone number
     * @return {p.SubmerchantPhoneNumber}
     */
    InvoiceSubmerchant.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    /**
     * Set PhoneNumber
     * Submerchant's phone number
     * @param {p.SubmerchantPhoneNumber} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setPhoneNumber = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubmerchantPhoneNumber().getProcessOutObjectClass())
            this.phoneNumber = val;
        else {
            var obj = this.client.newSubmerchantPhoneNumber();
            obj.fillWithData(val);
            this.phoneNumber = obj;
        }
        return this;
    };
    /**
     * Get Email
     * Email address
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Set Email
     * Email address
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setEmail = function (val) {
        this.email = val;
        return this;
    };
    /**
     * Get Address
     * Submerchant's address
     * @return {p.SubmerchantAddress}
     */
    InvoiceSubmerchant.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Set Address
     * Submerchant's address
     * @param {p.SubmerchantAddress} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setAddress = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubmerchantAddress().getProcessOutObjectClass())
            this.address = val;
        else {
            var obj = this.client.newSubmerchantAddress();
            obj.fillWithData(val);
            this.address = obj;
        }
        return this;
    };
    /**
     * Get TaxReference
     * Tax reference
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getTaxReference = function () {
        return this.taxReference;
    };
    /**
     * Set TaxReference
     * Tax reference
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setTaxReference = function (val) {
        this.taxReference = val;
        return this;
    };
    /**
     * Get ServiceEstablishmentNumber
     * Service establishment number
     * @return {string}
     */
    InvoiceSubmerchant.prototype.getServiceEstablishmentNumber = function () {
        return this.serviceEstablishmentNumber;
    };
    /**
     * Set ServiceEstablishmentNumber
     * Service establishment number
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.setServiceEstablishmentNumber = function (val) {
        this.serviceEstablishmentNumber = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceSubmerchant}
     */
    InvoiceSubmerchant.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["reference"])
            this.setReference(data["reference"]);
        if (data["mcc"])
            this.setMcc(data["mcc"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["address"])
            this.setAddress(data["address"]);
        if (data["tax_reference"])
            this.setTaxReference(data["tax_reference"]);
        if (data["service_establishment_number"])
            this.setServiceEstablishmentNumber(data["service_establishment_number"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceSubmerchant.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "reference": this.getReference(),
            "mcc": this.getMcc(),
            "phone_number": this.getPhoneNumber(),
            "email": this.getEmail(),
            "address": this.getAddress(),
            "tax_reference": this.getTaxReference(),
            "service_establishment_number": this.getServiceEstablishmentNumber(),
        };
    };
    return InvoiceSubmerchant;
}());
module.exports = InvoiceSubmerchant;
//# sourceMappingURL=invoicesubmerchant.js.map