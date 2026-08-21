"use strict";
// The content of this file was automatically generated
var Submerchant = /** @class */ (function () {
    /**
     * Submerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Submerchant(client, prefill) {
        this.client = null;
        /**
         * ID of the submerchant at ProcessOut
         * @type {string}
         */
        this.id = null;
        /**
         * Legal name of the submerchant
         * @type {string}
         */
        this.name = null;
        /**
         * Time at which the submerchant was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Submerchant object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchant()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Submerchant.prototype.getProcessOutObjectClass = function () {
        return "Submerchant";
    };
    /**
     * Get Id
     * ID of the submerchant at ProcessOut
     * @return {string}
     */
    Submerchant.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the submerchant at ProcessOut
     * @param {string} val
     * @return {Submerchant}
     */
    Submerchant.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Name
     * Legal name of the submerchant
     * @return {string}
     */
    Submerchant.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Legal name of the submerchant
     * @param {string} val
     * @return {Submerchant}
     */
    Submerchant.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Time at which the submerchant was created
     * @return {string}
     */
    Submerchant.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Time at which the submerchant was created
     * @param {string} val
     * @return {Submerchant}
     */
    Submerchant.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Submerchant}
     */
    Submerchant.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Submerchant.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "created_at": this.getCreatedAt(),
        };
    };
    return Submerchant;
}());
module.exports = Submerchant;
//# sourceMappingURL=submerchant.js.map