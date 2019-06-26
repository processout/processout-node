"use strict";
// The content of this file was automatically generated
var Webhook = /** @class */ (function () {
    /**
     * Webhook constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Webhook(client, prefill) {
        this.client = null;
        /**
         * ID of the webhook
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the webhook belongs
         * @type {any}
         */
        this.project = null;
        /**
         * ID of the project to which the webhook belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Event the webhook is linked to
         * @type {any}
         */
        this.event = null;
        /**
         * ID of the event the webhook is linked to
         * @type {string}
         */
        this.eventId = null;
        /**
         * URL to which the webhook will be posted
         * @type {string}
         */
        this.requestUrl = null;
        /**
         * Method used to send the webhook (GET or POST)
         * @type {string}
         */
        this.requestMethod = null;
        /**
         * The response body the webhook received when sending its payload
         * @type {string}
         */
        this.responseBody = null;
        /**
         * The response code the webhook received when sending its payload
         * @type {string}
         */
        this.responseCode = null;
        /**
         * The response headers the webhook received when sending its payload
         * @type {string}
         */
        this.responseHeaders = null;
        /**
         * The time it took for the webhook to send its payload
         * @type {number}
         */
        this.responseTimeMs = null;
        /**
         * The status of the webhook. Either delivered or failed
         * @type {string}
         */
        this.status = null;
        /**
         * Date at which the webhook was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * Date at webhook will be/is released
         * @type {string}
         */
        this.releaseAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Webhook object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newWebhook()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Webhook.prototype.getProcessOutObjectClass = function () {
        return "Webhook";
    };
    /**
     * Get Id
     * ID of the webhook
     * @return {string}
     */
    Webhook.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the webhook
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the webhook belongs
     * @return {any}
     */
    Webhook.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the webhook belongs
     * @param {any} val
     * @return {Webhook}
     */
    Webhook.prototype.setProject = function (val) {
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
    Webhook.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the webhook belongs
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Event
     * Event the webhook is linked to
     * @return {any}
     */
    Webhook.prototype.getEvent = function () {
        return this.event;
    };
    /**
     * Set Event
     * Event the webhook is linked to
     * @param {any} val
     * @return {Webhook}
     */
    Webhook.prototype.setEvent = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newEvent().getProcessOutObjectClass())
            this.event = val;
        else {
            var obj = this.client.newEvent();
            obj.fillWithData(val);
            this.event = obj;
        }
        return this;
    };
    /**
     * Get EventId
     * ID of the event the webhook is linked to
     * @return {string}
     */
    Webhook.prototype.getEventId = function () {
        return this.eventId;
    };
    /**
     * Set EventId
     * ID of the event the webhook is linked to
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setEventId = function (val) {
        this.eventId = val;
        return this;
    };
    /**
     * Get RequestUrl
     * URL to which the webhook will be posted
     * @return {string}
     */
    Webhook.prototype.getRequestUrl = function () {
        return this.requestUrl;
    };
    /**
     * Set RequestUrl
     * URL to which the webhook will be posted
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setRequestUrl = function (val) {
        this.requestUrl = val;
        return this;
    };
    /**
     * Get RequestMethod
     * Method used to send the webhook (GET or POST)
     * @return {string}
     */
    Webhook.prototype.getRequestMethod = function () {
        return this.requestMethod;
    };
    /**
     * Set RequestMethod
     * Method used to send the webhook (GET or POST)
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setRequestMethod = function (val) {
        this.requestMethod = val;
        return this;
    };
    /**
     * Get ResponseBody
     * The response body the webhook received when sending its payload
     * @return {string}
     */
    Webhook.prototype.getResponseBody = function () {
        return this.responseBody;
    };
    /**
     * Set ResponseBody
     * The response body the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setResponseBody = function (val) {
        this.responseBody = val;
        return this;
    };
    /**
     * Get ResponseCode
     * The response code the webhook received when sending its payload
     * @return {string}
     */
    Webhook.prototype.getResponseCode = function () {
        return this.responseCode;
    };
    /**
     * Set ResponseCode
     * The response code the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setResponseCode = function (val) {
        this.responseCode = val;
        return this;
    };
    /**
     * Get ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @return {string}
     */
    Webhook.prototype.getResponseHeaders = function () {
        return this.responseHeaders;
    };
    /**
     * Set ResponseHeaders
     * The response headers the webhook received when sending its payload
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setResponseHeaders = function (val) {
        this.responseHeaders = val;
        return this;
    };
    /**
     * Get ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @return {number}
     */
    Webhook.prototype.getResponseTimeMs = function () {
        return this.responseTimeMs;
    };
    /**
     * Set ResponseTimeMs
     * The time it took for the webhook to send its payload
     * @param {number} val
     * @return {Webhook}
     */
    Webhook.prototype.setResponseTimeMs = function (val) {
        this.responseTimeMs = val;
        return this;
    };
    /**
     * Get Status
     * The status of the webhook. Either delivered or failed
     * @return {string}
     */
    Webhook.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * Set Status
     * The status of the webhook. Either delivered or failed
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setStatus = function (val) {
        this.status = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the webhook was created
     * @return {string}
     */
    Webhook.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the webhook was created
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get ReleaseAt
     * Date at webhook will be/is released
     * @return {string}
     */
    Webhook.prototype.getReleaseAt = function () {
        return this.releaseAt;
    };
    /**
     * Set ReleaseAt
     * Date at webhook will be/is released
     * @param {string} val
     * @return {Webhook}
     */
    Webhook.prototype.setReleaseAt = function (val) {
        this.releaseAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Webhook}
     */
    Webhook.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["event"])
            this.setEvent(data["event"]);
        if (data["event_id"])
            this.setEventId(data["event_id"]);
        if (data["request_url"])
            this.setRequestUrl(data["request_url"]);
        if (data["request_method"])
            this.setRequestMethod(data["request_method"]);
        if (data["response_body"])
            this.setResponseBody(data["response_body"]);
        if (data["response_code"])
            this.setResponseCode(data["response_code"]);
        if (data["response_headers"])
            this.setResponseHeaders(data["response_headers"]);
        if (data["response_time_ms"])
            this.setResponseTimeMs(data["response_time_ms"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["release_at"])
            this.setReleaseAt(data["release_at"]);
        return this;
    };
    return Webhook;
}());
module.exports = Webhook;
//# sourceMappingURL=webhook.js.map