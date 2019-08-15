"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Activity = /** @class */ (function () {
    /**
     * Activity constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Activity(client, prefill) {
        this.client = null;
        /**
         * ID of the activity
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the activity belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the activity belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Title of the activity
         * @type {string}
         */
        this.title = null;
        /**
         * Content of the activity
         * @type {string}
         */
        this.content = null;
        /**
         * Level of the activity
         * @type {number}
         */
        this.level = null;
        /**
         * Date at which the transaction was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Activity object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newActivity()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Activity.prototype.getProcessOutObjectClass = function () {
        return "Activity";
    };
    /**
     * Get Id
     * ID of the activity
     * @return {string}
     */
    Activity.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the activity
     * @param {string} val
     * @return {Activity}
     */
    Activity.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the activity belongs
     * @return {p.Project}
     */
    Activity.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the activity belongs
     * @param {p.Project} val
     * @return {Activity}
     */
    Activity.prototype.setProject = function (val) {
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
     * ID of the project to which the activity belongs
     * @return {string}
     */
    Activity.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the activity belongs
     * @param {string} val
     * @return {Activity}
     */
    Activity.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Title
     * Title of the activity
     * @return {string}
     */
    Activity.prototype.getTitle = function () {
        return this.title;
    };
    /**
     * Set Title
     * Title of the activity
     * @param {string} val
     * @return {Activity}
     */
    Activity.prototype.setTitle = function (val) {
        this.title = val;
        return this;
    };
    /**
     * Get Content
     * Content of the activity
     * @return {string}
     */
    Activity.prototype.getContent = function () {
        return this.content;
    };
    /**
     * Set Content
     * Content of the activity
     * @param {string} val
     * @return {Activity}
     */
    Activity.prototype.setContent = function (val) {
        this.content = val;
        return this;
    };
    /**
     * Get Level
     * Level of the activity
     * @return {number}
     */
    Activity.prototype.getLevel = function () {
        return this.level;
    };
    /**
     * Set Level
     * Level of the activity
     * @param {number} val
     * @return {Activity}
     */
    Activity.prototype.setLevel = function (val) {
        this.level = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    Activity.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Activity}
     */
    Activity.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Activity}
     */
    Activity.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["title"])
            this.setTitle(data["title"]);
        if (data["content"])
            this.setContent(data["content"]);
        if (data["level"])
            this.setLevel(data["level"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Get all the project activities.
     *
     * @param {any} options
     * @return {array}
     */
    Activity.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/activities";
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
                var body = response.body['activities'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newActivity();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Find a specific activity and fetch its data.
     * @param string activityId
     * @param {any} options
     * @return {this}
     */
    Activity.prototype.find = function (activityId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/activities/" + encodeURI(activityId) + "";
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
                body = body['activity'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    return Activity;
}());
module.exports = Activity;
//# sourceMappingURL=activity.js.map