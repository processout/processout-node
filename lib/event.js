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
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Event.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "name": this.getName(),
            "data": this.getData(),
            "sandbox": this.getSandbox(),
            "fired_at": this.getFiredAt(),
        };
    };
    /**
     * Get all the webhooks of the event.

     * @param {any} options
     * @return {Promise<any>}
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
                                body = respBody['webhooks'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newWebhook();
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
     * Get all the events.
     *
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, a, body, i, tmp;
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
                                a = [];
                                body = respBody['events'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newEvent();
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
     * Find an event by its ID.
     * @param string eventId
     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['event'];
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
     * Find an event by the Resource ID that generated it.
     * @param string resourceId
     * @param {any} options
     * @return {Promise<any>}
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
                                body = respBody['events'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newEvent();
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
    return Event;
}());
module.exports = Event;
//# sourceMappingURL=event.js.map