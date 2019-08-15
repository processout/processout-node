"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Project = /** @class */ (function () {
    /**
     * Project constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Project(client, prefill) {
        this.client = null;
        /**
         * ID of the project
         * @type {string}
         */
        this.id = null;
        /**
         * Project used to create this project
         * @type {p.Project}
         */
        this.supervisorProject = null;
        /**
         * ID of the project used to create this project
         * @type {string}
         */
        this.supervisorProjectId = null;
        /**
         * Current API version of the project
         * @type {p.APIVersion}
         */
        this.apiVersion = null;
        /**
         * Name of the project
         * @type {string}
         */
        this.name = null;
        /**
         * Name of the project
         * @type {string}
         */
        this.logoUrl = null;
        /**
         * Email of the project
         * @type {string}
         */
        this.email = null;
        /**
         * Default currency of the project, used to compute analytics amounts
         * @type {string}
         */
        this.defaultCurrency = null;
        /**
         * Private key of the project. Only returned when creating a project
         * @type {string}
         */
        this.privateKey = null;
        /**
         * Dunning configuration of the project
         * @type {any}
         */
        this.dunningConfiguration = null;
        /**
         * Date at which the project was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Project object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProject()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Project.prototype.getProcessOutObjectClass = function () {
        return "Project";
    };
    /**
     * Get Id
     * ID of the project
     * @return {string}
     */
    Project.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get SupervisorProject
     * Project used to create this project
     * @return {p.Project}
     */
    Project.prototype.getSupervisorProject = function () {
        return this.supervisorProject;
    };
    /**
     * Set SupervisorProject
     * Project used to create this project
     * @param {p.Project} val
     * @return {Project}
     */
    Project.prototype.setSupervisorProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.supervisorProject = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.supervisorProject = obj;
        }
        return this;
    };
    /**
     * Get SupervisorProjectId
     * ID of the project used to create this project
     * @return {string}
     */
    Project.prototype.getSupervisorProjectId = function () {
        return this.supervisorProjectId;
    };
    /**
     * Set SupervisorProjectId
     * ID of the project used to create this project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setSupervisorProjectId = function (val) {
        this.supervisorProjectId = val;
        return this;
    };
    /**
     * Get ApiVersion
     * Current API version of the project
     * @return {p.APIVersion}
     */
    Project.prototype.getApiVersion = function () {
        return this.apiVersion;
    };
    /**
     * Set ApiVersion
     * Current API version of the project
     * @param {p.APIVersion} val
     * @return {Project}
     */
    Project.prototype.setApiVersion = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPIVersion().getProcessOutObjectClass())
            this.apiVersion = val;
        else {
            var obj = this.client.newAPIVersion();
            obj.fillWithData(val);
            this.apiVersion = obj;
        }
        return this;
    };
    /**
     * Get Name
     * Name of the project
     * @return {string}
     */
    Project.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get LogoUrl
     * Name of the project
     * @return {string}
     */
    Project.prototype.getLogoUrl = function () {
        return this.logoUrl;
    };
    /**
     * Set LogoUrl
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setLogoUrl = function (val) {
        this.logoUrl = val;
        return this;
    };
    /**
     * Get Email
     * Email of the project
     * @return {string}
     */
    Project.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Set Email
     * Email of the project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setEmail = function (val) {
        this.email = val;
        return this;
    };
    /**
     * Get DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @return {string}
     */
    Project.prototype.getDefaultCurrency = function () {
        return this.defaultCurrency;
    };
    /**
     * Set DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setDefaultCurrency = function (val) {
        this.defaultCurrency = val;
        return this;
    };
    /**
     * Get PrivateKey
     * Private key of the project. Only returned when creating a project
     * @return {string}
     */
    Project.prototype.getPrivateKey = function () {
        return this.privateKey;
    };
    /**
     * Set PrivateKey
     * Private key of the project. Only returned when creating a project
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setPrivateKey = function (val) {
        this.privateKey = val;
        return this;
    };
    /**
     * Get DunningConfiguration
     * Dunning configuration of the project
     * @return {any}
     */
    Project.prototype.getDunningConfiguration = function () {
        return this.dunningConfiguration;
    };
    /**
     * Set DunningConfiguration
     * Dunning configuration of the project
     * @param {any} val
     * @return {Project}
     */
    Project.prototype.setDunningConfiguration = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.dunningConfiguration = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newDunningAction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.dunningConfiguration = a;
        }
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the project was created
     * @return {string}
     */
    Project.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the project was created
     * @param {string} val
     * @return {Project}
     */
    Project.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Project}
     */
    Project.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["supervisor_project"])
            this.setSupervisorProject(data["supervisor_project"]);
        if (data["supervisor_project_id"])
            this.setSupervisorProjectId(data["supervisor_project_id"]);
        if (data["api_version"])
            this.setApiVersion(data["api_version"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["default_currency"])
            this.setDefaultCurrency(data["default_currency"]);
        if (data["private_key"])
            this.setPrivateKey(data["private_key"]);
        if (data["dunning_configuration"])
            this.setDunningConfiguration(data["dunning_configuration"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Regenerate the project private key. Make sure to store the new private key and use it in any future request.
     *
     * @param {any} options
     * @return {this}
     */
    Project.prototype.regeneratePrivateKey = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/private-keys";
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
                body = body['project'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    /**
     * Fetch the current project information.

     * @param {any} options
     * @return {this}
     */
    Project.prototype.fetch = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/" + encodeURI(this.getId()) + "";
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
                body = body['project'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Save the updated project's attributes.

     * @param {any} options
     * @return {this}
     */
    Project.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/" + encodeURI(this.getId()) + "";
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
                body = body['project'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.put(path, data, options, callback);
        });
    };
    /**
     * Delete the project. Be careful! Executing this request will prevent any further interaction with the API that uses this project.
     *
     * @param {any} options
     * @return {bool}
     */
    Project.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/{project_id}";
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
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.delete(path, data, options, callback);
        });
    };
    /**
     * Get all the supervised projects.
     *
     * @param {any} options
     * @return {array}
     */
    Project.prototype.fetchSupervised = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/supervised-projects";
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
                var body = response.body['projects'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newProject();
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
     * Create a new supervised project.
     *
     * @param {any} options
     * @return {this}
     */
    Project.prototype.createSupervised = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/supervised-projects";
        var data = {
            'id': this.getId(),
            'name': this.getName(),
            'default_currency': this.getDefaultCurrency(),
            'dunning_configuration': this.getDunningConfiguration(),
            'applepay_settings': (options['applepay_settings']) ? options['applepay_settings'] : null
        };
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
                body = body['project'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    return Project;
}());
module.exports = Project;
//# sourceMappingURL=project.js.map