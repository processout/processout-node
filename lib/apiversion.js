"use strict";
// The content of this file was automatically generated
var APIVersion = /** @class */ (function () {
    /**
     * APIVersion constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function APIVersion(client, prefill) {
        this.client = null;
        /**
         * Name used to identify the API version
         * @type {string}
         */
        this.name = null;
        /**
         * Description of the API version. Can contain a changelog
         * @type {string}
         */
        this.description = null;
        /**
         * Date at which the API version was released
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The APIVersion object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPIVersion()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    APIVersion.prototype.getProcessOutObjectClass = function () {
        return "APIVersion";
    };
    /**
     * Get Name
     * Name used to identify the API version
     * @return {string}
     */
    APIVersion.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name used to identify the API version
     * @param {string} val
     * @return {APIVersion}
     */
    APIVersion.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Description
     * Description of the API version. Can contain a changelog
     * @return {string}
     */
    APIVersion.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Set Description
     * Description of the API version. Can contain a changelog
     * @param {string} val
     * @return {APIVersion}
     */
    APIVersion.prototype.setDescription = function (val) {
        this.description = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the API version was released
     * @return {string}
     */
    APIVersion.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the API version was released
     * @param {string} val
     * @return {APIVersion}
     */
    APIVersion.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APIVersion}
     */
    APIVersion.prototype.fillWithData = function (data) {
        if (data["name"])
            this.setName(data["name"]);
        if (data["description"])
            this.setDescription(data["description"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    return APIVersion;
}());
module.exports = APIVersion;
