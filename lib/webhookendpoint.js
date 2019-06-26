"use strict";
// The content of this file was automatically generated
var WebhookEndpoint = /** @class */ (function () {
    /**
     * WebhookEndpoint constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function WebhookEndpoint(client, prefill) {
        this.client = null;
        /**
         * ID of the webhook endpoint
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the webhook endpoint belongs
         * @type {any}
         */
        this.project = null;
        /**
         * ID of the project to which the webhook belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * URL to which the webhook endpoint points to
         * @type {string}
         */
        this.url = null;
        /**
         * Slice of string representing the whitelisted events posted to the endpoint
         * @type {any}
         */
        this.eventsWhitelist = null;
        /**
         * Define whether or not the webhook endpoint is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the webhook endpoint was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The WebhookEndpoint object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhookEndpoint()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    WebhookEndpoint.prototype.getProcessOutObjectClass = function () {
        return "WebhookEndpoint";
    };
    /**
     * Get Id
     * ID of the webhook endpoint
     * @return {string}
     */
    WebhookEndpoint.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the webhook endpoint
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the webhook endpoint belongs
     * @return {any}
     */
    WebhookEndpoint.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the webhook endpoint belongs
     * @param {any} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ProjectId
     * ID of the project to which the webhook belongs
     * @return {string}
     */
    WebhookEndpoint.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the webhook belongs
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Url
     * URL to which the webhook endpoint points to
     * @return {string}
     */
    WebhookEndpoint.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL to which the webhook endpoint points to
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @return {any}
     */
    WebhookEndpoint.prototype.getEventsWhitelist = function () {
        return this.eventsWhitelist;
    };
    /**
     * Set EventsWhitelist
     * Slice of string representing the whitelisted events posted to the endpoint
     * @param {any} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setEventsWhitelist = function (val) {
        this.eventsWhitelist = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @return {boolean}
     */
    WebhookEndpoint.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the webhook endpoint is in sandbox environment
     * @param {boolean} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the webhook endpoint was created
     * @return {string}
     */
    WebhookEndpoint.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the webhook endpoint was created
     * @param {string} val
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {WebhookEndpoint}
     */
    WebhookEndpoint.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["events_whitelist"])
            this.setEventsWhitelist(data["events_whitelist"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    return WebhookEndpoint;
}());
module.exports = WebhookEndpoint;
