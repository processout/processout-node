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
var ProjectSFTPSettings = /** @class */ (function () {
    /**
     * ProjectSFTPSettings constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ProjectSFTPSettings(client, prefill) {
        this.client = null;
        /**
         * SFTP server endpoint, port is required.
         * @type {string}
         */
        this.endpoint = null;
        /**
         * SFTP server username
         * @type {string}
         */
        this.username = null;
        /**
         * SFTP server password, required when no 'private_key' is passed
         * @type {string}
         */
        this.password = null;
        /**
         * SFTP server private key, required when no 'password' is passed
         * @type {string}
         */
        this.privateKey = null;
        if (typeof client === 'undefined')
            throw new Error("The ProjectSFTPSettings object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProjectSFTPSettings()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ProjectSFTPSettings.prototype.getProcessOutObjectClass = function () {
        return "ProjectSFTPSettings";
    };
    /**
     * Get Endpoint
     * SFTP server endpoint, port is required.
     * @return {string}
     */
    ProjectSFTPSettings.prototype.getEndpoint = function () {
        return this.endpoint;
    };
    /**
     * Set Endpoint
     * SFTP server endpoint, port is required.
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    ProjectSFTPSettings.prototype.setEndpoint = function (val) {
        this.endpoint = val;
        return this;
    };
    /**
     * Get Username
     * SFTP server username
     * @return {string}
     */
    ProjectSFTPSettings.prototype.getUsername = function () {
        return this.username;
    };
    /**
     * Set Username
     * SFTP server username
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    ProjectSFTPSettings.prototype.setUsername = function (val) {
        this.username = val;
        return this;
    };
    /**
     * Get Password
     * SFTP server password, required when no 'private_key' is passed
     * @return {string}
     */
    ProjectSFTPSettings.prototype.getPassword = function () {
        return this.password;
    };
    /**
     * Set Password
     * SFTP server password, required when no 'private_key' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    ProjectSFTPSettings.prototype.setPassword = function (val) {
        this.password = val;
        return this;
    };
    /**
     * Get PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @return {string}
     */
    ProjectSFTPSettings.prototype.getPrivateKey = function () {
        return this.privateKey;
    };
    /**
     * Set PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    ProjectSFTPSettings.prototype.setPrivateKey = function (val) {
        this.privateKey = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ProjectSFTPSettings}
     */
    ProjectSFTPSettings.prototype.fillWithData = function (data) {
        if (data["endpoint"])
            this.setEndpoint(data["endpoint"]);
        if (data["username"])
            this.setUsername(data["username"]);
        if (data["password"])
            this.setPassword(data["password"]);
        if (data["private_key"])
            this.setPrivateKey(data["private_key"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ProjectSFTPSettings.prototype.toJSON = function () {
        return {
            "endpoint": this.getEndpoint(),
            "username": this.getUsername(),
            "password": this.getPassword(),
            "private_key": this.getPrivateKey(),
        };
    };
    /**
     * Save the SFTP settings for the project.
     * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    ProjectSFTPSettings.prototype.saveSftpSettings = function (id, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/" + encodeURI(id) + "/sftp-settings";
        var data = {
            'endpoint': this.getEndpoint(),
            'username': this.getUsername(),
            'password': this.getPassword(),
            'private_key': this.getPrivateKey()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues;
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
                                returnValues.push(response.isSuccess());
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
     * Delete the SFTP settings for the project.
     * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    ProjectSFTPSettings.prototype.deleteSftpSettings = function (id, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/projects/" + encodeURI(id) + "/sftp-settings";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues;
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
    return ProjectSFTPSettings;
}());
module.exports = ProjectSFTPSettings;
//# sourceMappingURL=projectsftpsettings.js.map