"use strict";
// The content of this file was automatically generated
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
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
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the gateway configuration belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Gateway that the configuration configures
         * @type {p.Gateway}
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
        /**
         * Gateway's processing region (EEA, EEA-UK, UK etc)
         * @type {string}
         */
        this.processingRegion = null;
        /**
         * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
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
     * @return {p.Project}
     */
    GatewayConfiguration.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param {p.Project} val
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
     * @return {p.Gateway}
     */
    GatewayConfiguration.prototype.getGateway = function () {
        return this.gateway;
    };
    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param {p.Gateway} val
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
     * Get ProcessingRegion
     * Gateway's processing region (EEA, EEA-UK, UK etc)
     * @return {string}
     */
    GatewayConfiguration.prototype.getProcessingRegion = function () {
        return this.processingRegion;
    };
    /**
     * Set ProcessingRegion
     * Gateway's processing region (EEA, EEA-UK, UK etc)
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setProcessingRegion = function (val) {
        this.processingRegion = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    GatewayConfiguration.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the gateway configuration, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    GatewayConfiguration.prototype.setMetadata = function (val) {
        this.metadata = val;
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
        if (data["processing_region"])
            this.setProcessingRegion(data["processing_region"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    GatewayConfiguration.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "gateway": this.getGateway(),
            "gateway_id": this.getGatewayId(),
            "name": this.getName(),
            "default_currency": this.getDefaultCurrency(),
            "enabled": this.getEnabled(),
            "public_keys": this.getPublicKeys(),
            "created_at": this.getCreatedAt(),
            "enabled_at": this.getEnabledAt(),
            "processing_region": this.getProcessingRegion(),
            "metadata": this.getMetadata(),
        };
    };
    /**
     * Get all the gateway configurations.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    GatewayConfiguration.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations";
        var data = {
            'expand_merchant_accounts': (options['expand_merchant_accounts']) ? options['expand_merchant_accounts'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, a, body, i, tmp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['gateway_configurations'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newGatewayConfiguration();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find a gateway configuration by its ID.
     * @param string configurationId
     * @param {any} options
     * @return {Promise<any>}
     */
    GatewayConfiguration.prototype.find = function (configurationId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations/" + encodeURI(configurationId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_2 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['gateway_configuration'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Save the updated gateway configuration attributes and settings.

     * @param {any} options
     * @return {Promise<any>}
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
            'processing_region': this.getProcessingRegion(),
            'metadata': this.getMetadata(),
            'settings': (options['settings']) ? options['settings'] : null,
            'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_3 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['gateway_configuration'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.put(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Delete the gateway configuration.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    GatewayConfiguration.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateway-configurations/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_4 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                returnValues.push(response.isSuccess());
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.delete(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Create a new gateway configuration.
     * @param string gatewayName
     * @param {any} options
     * @return {Promise<any>}
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
            'processing_region': this.getProcessingRegion(),
            'metadata': this.getMetadata(),
            'settings': (options['settings']) ? options['settings'] : null,
            'sub_accounts_enabled': (options['sub_accounts_enabled']) ? options['sub_accounts_enabled'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_5, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_5 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['gateway_configuration'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.post(path, data, options).then(callback, callbackError);
        });
    };
    return GatewayConfiguration;
}());
module.exports = GatewayConfiguration;
//# sourceMappingURL=gatewayconfiguration.js.map