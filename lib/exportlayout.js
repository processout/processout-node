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
var ExportLayout = /** @class */ (function () {
    /**
     * ExportLayout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayout(client, prefill) {
        this.client = null;
        /**
         * ID of the export layout
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the export layout belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the export layout belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Date at which the export layout was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * Name of the export layout.
         * @type {string}
         */
        this.name = null;
        /**
         * Type of the export layout.
         * @type {string}
         */
        this.type = null;
        /**
         * Whether the export layout is the default one for the project. It will be used for automatic exports.
         * @type {boolean}
         */
        this.isDefault = null;
        /**
         * Configuration of the export layout.
         * @type {p.ExportLayoutConfiguration}
         */
        this.configuration = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayout object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayout()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayout.prototype.getProcessOutObjectClass = function () {
        return "ExportLayout";
    };
    /**
     * Get Id
     * ID of the export layout
     * @return {string}
     */
    ExportLayout.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the export layout
     * @param {string} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the export layout belongs
     * @return {p.Project}
     */
    ExportLayout.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the export layout belongs
     * @param {p.Project} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setProject = function (val) {
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
     * ID of the project to which the export layout belongs
     * @return {string}
     */
    ExportLayout.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the export layout belongs
     * @param {string} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the export layout was created
     * @return {string}
     */
    ExportLayout.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the export layout was created
     * @param {string} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get Name
     * Name of the export layout.
     * @return {string}
     */
    ExportLayout.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Type
     * Type of the export layout.
     * @return {string}
     */
    ExportLayout.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @return {boolean}
     */
    ExportLayout.prototype.getIsDefault = function () {
        return this.isDefault;
    };
    /**
     * Set IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @param {boolean} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setIsDefault = function (val) {
        this.isDefault = val;
        return this;
    };
    /**
     * Get Configuration
     * Configuration of the export layout.
     * @return {p.ExportLayoutConfiguration}
     */
    ExportLayout.prototype.getConfiguration = function () {
        return this.configuration;
    };
    /**
     * Set Configuration
     * Configuration of the export layout.
     * @param {p.ExportLayoutConfiguration} val
     * @return {ExportLayout}
     */
    ExportLayout.prototype.setConfiguration = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfiguration().getProcessOutObjectClass())
            this.configuration = val;
        else {
            var obj = this.client.newExportLayoutConfiguration();
            obj.fillWithData(val);
            this.configuration = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayout}
     */
    ExportLayout.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["is_default"])
            this.setIsDefault(data["is_default"]);
        if (data["configuration"])
            this.setConfiguration(data["configuration"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayout.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "created_at": this.getCreatedAt(),
            "name": this.getName(),
            "type": this.getType(),
            "is_default": this.getIsDefault(),
            "configuration": this.getConfiguration(),
        };
    };
    /**
     * Get all the export layouts.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayout.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts";
        var data = {};
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
                                body = respBody['export_layouts'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newExportLayout();
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
     * Find an export layout by its ID.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayout.prototype.find = function (exportLayoutId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts/" + encodeURI(exportLayoutId) + "";
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
                                body = body['export_layout'];
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
     * Find the default export layout for given export type.
     * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayout.prototype.findDefault = function (exportType, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts/default/" + encodeURI(exportType) + "";
        var data = {};
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
                                body = body['export_layout'];
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
     * Create a new export layout.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayout.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts";
        var data = {
            'name': this.getName(),
            'type': this.getType(),
            'is_default': this.getIsDefault(),
            'configuration': this.getConfiguration()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['export_layout'];
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
    /**
     * Update the export layout.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayout.prototype.update = function (exportLayoutId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts/" + encodeURI(exportLayoutId) + "";
        var data = {
            'name': this.getName(),
            'is_default': this.getIsDefault(),
            'configuration': this.getConfiguration()
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
                                body = body['export_layout'];
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
     * Delete the export layout.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    ExportLayout.prototype.delete = function (exportLayoutId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts/" + encodeURI(exportLayoutId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_6, response, err, returnValues;
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
                                err_6 = _a.sent();
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
    return ExportLayout;
}());
module.exports = ExportLayout;
//# sourceMappingURL=exportlayout.js.map