"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var GatewayConfiguration = /** @class */ (function () {
    /**
     * GatewayConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function GatewayConfiguration(client, prefill) {
        this.client = null;
        /**
         * ID of the gateway configuration
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the gateway configuration belongs
         * @type {any}
         */
        this.project = null;
        /**
         * ID of the project to which the gateway configuration belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Gateway that the configuration configures
         * @type {any}
         */
        this.gateway = null;
        /**
         * ID of the gateway to which the gateway configuration belongs
         * @type {number}
         */
        this.gatewayId = null;
        /**
         * Name of the gateway configuration
         * @type {string}
         */
        this.name = null;
        /**
         * Default currency of the gateway configuration
         * @type {string}
         */
        this.defaultCurrency = null;
        /**
         * Define whether or not the gateway configuration is enabled
         * @type {boolean}
         */
        this.enabled = null;
        /**
         * Public keys of the payment gateway configuration (key-value pair)
         * @type {any}
         */
        this.publicKeys = null;
        /**
         * Date at which the gateway configuration was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * Date at which the gateway configuration was enabled
         * @type {string}
         */
        this.enabledAt = null;
        if (typeof client === 'undefined')
            throw new Error("The GatewayConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGatewayConfiguration()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    GatewayConfiguration.prototype.getProcessOutObjectClass = function () {
        return "GatewayConfiguration";
    };
    /**
     * Get Id
     * ID of the gateway configuration
     * @return {string}
     */
    GatewayConfiguration.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the gateway configuration belongs
     * @return {any}
     */
    GatewayConfiguration.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setProject = function (val) {
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
     * ID of the project to which the gateway configuration belongs
     * @return {string}
     */
    GatewayConfiguration.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the gateway configuration belongs
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Gateway
     * Gateway that the configuration configures
     * @return {any}
     */
    GatewayConfiguration.prototype.getGateway = function () {
        return this.gateway;
    };
    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setGateway = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGateway().getProcessOutObjectClass())
            this.gateway = val;
        else {
            var obj = this.client.newGateway();
            obj.fillWithData(val);
            this.gateway = obj;
        }
        return this;
    };
    /**
     * Get GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @return {number}
     */
    GatewayConfiguration.prototype.getGatewayId = function () {
        return this.gatewayId;
    };
    /**
     * Set GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @param {number} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setGatewayId = function (val) {
        this.gatewayId = val;
        return this;
    };
    /**
     * Get Name
     * Name of the gateway configuration
     * @return {string}
     */
    GatewayConfiguration.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get DefaultCurrency
     * Default currency of the gateway configuration
     * @return {string}
     */
    GatewayConfiguration.prototype.getDefaultCurrency = function () {
        return this.defaultCurrency;
    };
    /**
     * Set DefaultCurrency
     * Default currency of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setDefaultCurrency = function (val) {
        this.defaultCurrency = val;
        return this;
    };
    /**
     * Get Enabled
     * Define whether or not the gateway configuration is enabled
     * @return {boolean}
     */
    GatewayConfiguration.prototype.getEnabled = function () {
        return this.enabled;
    };
    /**
     * Set Enabled
     * Define whether or not the gateway configuration is enabled
     * @param {boolean} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setEnabled = function (val) {
        this.enabled = val;
        return this;
    };
    /**
     * Get PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @return {any}
     */
    GatewayConfiguration.prototype.getPublicKeys = function () {
        return this.publicKeys;
    };
    /**
     * Set PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setPublicKeys = function (val) {
        this.publicKeys = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the gateway configuration was created
     * @return {string}
     */
    GatewayConfiguration.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the gateway configuration was created
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get EnabledAt
     * Date at which the gateway configuration was enabled
     * @return {string}
     */
    GatewayConfiguration.prototype.getEnabledAt = function () {
        return this.enabledAt;
    };
    /**
     * Set EnabledAt
     * Date at which the gateway configuration was enabled
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setEnabledAt = function (val) {
        this.enabledAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["gateway_id"])
            this.setGatewayId(data["gateway_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["default_currency"])
            this.setDefaultCurrency(data["default_currency"]);
        if (data["enabled"])
            this.setEnabled(data["enabled"]);
        if (data["public_keys"])
            this.setPublicKeys(data["public_keys"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["enabled_at"])
            this.setEnabledAt(data["enabled_at"]);
        return this;
    };
    /**
     * Get all the gateway configurations.
     *
     * @param {any} options
     * @return {array}
     */
    GatewayConfiguration.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newGatewayConfiguration();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Find a gateway configuration by its ID.
     * @param string configurationId
     * @param {any} options
     * @return {this}
     */
    GatewayConfiguration.prototype.find = function (configurationId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations/" + encodeURI(configurationId) + "";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['gateway_configuration'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Save the updated gateway configuration attributes and settings.

     * @param {any} options
     * @return {this}
     */
    GatewayConfiguration.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations/" + encodeURI(this.getId()) + "";
        var data = {
            'id': this.getId(),
            'name': this.getName(),
            'enabled': this.getEnabled(),
            'default_currency': this.getDefaultCurrency(),
            'settings': (options['settings']) ? options['settings'] : null,
            'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
        };
        var req = request.put(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['gateway_configuration'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Delete the gateway configuration.

     * @param {any} options
     * @return {bool}
     */
    GatewayConfiguration.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations/" + encodeURI(this.getId()) + "";
        var data = {};
        var req = request.delete(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Create a new gateway configuration.
     * @param string gatewayName
     * @param {any} options
     * @return {this}
     */
    GatewayConfiguration.prototype.create = function (gatewayName, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateways/" + encodeURI(gatewayName) + "/gateway-configurations";
        var data = {
            'id': this.getId(),
            'name': this.getName(),
            'enabled': this.getEnabled(),
            'default_currency': this.getDefaultCurrency(),
            'settings': (options['settings']) ? options['settings'] : null,
            'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
        };
        var req = request.post(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['gateway_configuration'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    return GatewayConfiguration;
}());
module.exports = GatewayConfiguration;
