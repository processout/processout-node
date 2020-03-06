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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Project.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "supervisor_project": this.getSupervisorProject(),
            "supervisor_project_id": this.getSupervisorProjectId(),
            "api_version": this.getApiVersion(),
            "name": this.getName(),
            "logo_url": this.getLogoUrl(),
            "email": this.getEmail(),
            "default_currency": this.getDefaultCurrency(),
            "private_key": this.getPrivateKey(),
            "dunning_configuration": this.getDunningConfiguration(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Fetch the current project information.

     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['project'];
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
     * Save the updated project's attributes.

     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['project'];
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
     * Delete the project. Be careful! Executing this request will prevent any further interaction with the API that uses this project.
     *
     * @param {any} options
     * @return {Promise<boolean>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues;
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
     * Get all the supervised projects.
     *
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues, a, body, i, tmp;
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
                                a = [];
                                body = respBody['projects'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newProject();
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
     * Create a new supervised project.
     *
     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['project'];
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
    return Project;
}());
module.exports = Project;
//# sourceMappingURL=project.js.map