"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Event = /** @class */ (function () {
    /**
     * Event constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Event(client, prefill) {
        this.client = null;
        /**
         * ID of the event
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the event belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the event belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Name of the event
         * @type {string}
         */
        this.name = null;
        /**
         * Data object associated to the event
         * @type {any}
         */
        this.data = null;
        /**
         * Define whether or not the event is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the event was fired
         * @type {string}
         */
        this.firedAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Event object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newEvent()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Event.prototype.getProcessOutObjectClass = function () {
        return "Event";
    };
    /**
     * Get Id
     * ID of the event
     * @return {string}
     */
    Event.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the event
     * @param {string} val
     * @return {Event}
     */
    Event.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the event belongs
     * @return {p.Project}
     */
    Event.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the event belongs
     * @param {p.Project} val
     * @return {Event}
     */
    Event.prototype.setProject = function (val) {
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
     * ID of the project to which the event belongs
     * @return {string}
     */
    Event.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the event belongs
     * @param {string} val
     * @return {Event}
     */
    Event.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Name
     * Name of the event
     * @return {string}
     */
    Event.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the event
     * @param {string} val
     * @return {Event}
     */
    Event.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Data
     * Data object associated to the event
     * @return {any}
     */
    Event.prototype.getData = function () {
        return this.data;
    };
    /**
     * Set Data
     * Data object associated to the event
     * @param {any} val
     * @return {Event}
     */
    Event.prototype.setData = function (val) {
        this.data = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the event is in sandbox environment
     * @return {boolean}
     */
    Event.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the event is in sandbox environment
     * @param {boolean} val
     * @return {Event}
     */
    Event.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get FiredAt
     * Date at which the event was fired
     * @return {string}
     */
    Event.prototype.getFiredAt = function () {
        return this.firedAt;
    };
    /**
     * Set FiredAt
     * Date at which the event was fired
     * @param {string} val
     * @return {Event}
     */
    Event.prototype.setFiredAt = function (val) {
        this.firedAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Event}
     */
    Event.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["data"])
            this.setData(data["data"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["fired_at"])
            this.setFiredAt(data["fired_at"]);
        return this;
    };
    /**
     * Get all the webhooks of the event.

     * @param {any} options
     * @return {array}
     */
    Event.prototype.fetchWebhooks = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/events/" + encodeURI(this.getId()) + "/webhooks";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['webhooks'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newWebhook();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    /**
     * Get all the events.
     *
     * @param {any} options
     * @return {array}
     */
    Event.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/events";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['events'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newEvent();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    /**
     * Find an event by its ID.
     * @param string eventId
     * @param {any} options
     * @return {this}
     */
    Event.prototype.find = function (eventId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/events/" + encodeURI(eventId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['event'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    /**
     * Find an event by the Resource ID that generated it.
     * @param string resourceId
     * @param {any} options
     * @return {array}
     */
    Event.prototype.findByResourceId = function (resourceId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/events/by_resource_id/" + encodeURI(resourceId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['events'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newEvent();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    return Event;
}());
module.exports = Event;
//# sourceMappingURL=event.js.map