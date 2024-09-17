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
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Activity.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "title": this.getTitle(),
            "content": this.getContent(),
            "level": this.getLevel(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the project activities.
     *
     * @param {any} options
     * @return {Promise<any>}
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
                                body = respBody['activities'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newActivity();
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
     * Find a specific activity and fetch its data.
     * @param string activityId
     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['activity'];
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
    return Activity;
}());
module.exports = Activity;
//# sourceMappingURL=activity.js.map