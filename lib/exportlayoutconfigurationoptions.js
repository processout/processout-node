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
var ExportLayoutConfigurationOptions = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationOptions constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationOptions(client, prefill) {
        this.client = null;
        /**
         * Columns options for configuration.
         * @type {any}
         */
        this.columns = null;
        /**
         * Time options for configuration.
         * @type {p.ExportLayoutConfigurationConfigurationOptionsTime}
         */
        this.time = null;
        /**
         * Amount options for configuration.
         * @type {p.ExportLayoutConfigurationConfigurationOptionsAmount}
         */
        this.amount = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationOptions object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationOptions()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationOptions.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationOptions";
    };
    /**
     * Get Columns
     * Columns options for configuration.
     * @return {any}
     */
    ExportLayoutConfigurationOptions.prototype.getColumns = function () {
        return this.columns;
    };
    /**
     * Set Columns
     * Columns options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationOptions}
     */
    ExportLayoutConfigurationOptions.prototype.setColumns = function (val) {
        this.columns = val;
        return this;
    };
    /**
     * Get Time
     * Time options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsTime}
     */
    ExportLayoutConfigurationOptions.prototype.getTime = function () {
        return this.time;
    };
    /**
     * Set Time
     * Time options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsTime} val
     * @return {ExportLayoutConfigurationOptions}
     */
    ExportLayoutConfigurationOptions.prototype.setTime = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationConfigurationOptionsTime().getProcessOutObjectClass())
            this.time = val;
        else {
            var obj = this.client.newExportLayoutConfigurationConfigurationOptionsTime();
            obj.fillWithData(val);
            this.time = obj;
        }
        return this;
    };
    /**
     * Get Amount
     * Amount options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    ExportLayoutConfigurationOptions.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsAmount} val
     * @return {ExportLayoutConfigurationOptions}
     */
    ExportLayoutConfigurationOptions.prototype.setAmount = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationConfigurationOptionsAmount().getProcessOutObjectClass())
            this.amount = val;
        else {
            var obj = this.client.newExportLayoutConfigurationConfigurationOptionsAmount();
            obj.fillWithData(val);
            this.amount = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationOptions}
     */
    ExportLayoutConfigurationOptions.prototype.fillWithData = function (data) {
        if (data["columns"])
            this.setColumns(data["columns"]);
        if (data["time"])
            this.setTime(data["time"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfigurationOptions.prototype.toJSON = function () {
        return {
            "columns": this.getColumns(),
            "time": this.getTime(),
            "amount": this.getAmount(),
        };
    };
    /**
     * Fetch export layout configuration options.
     * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    ExportLayoutConfigurationOptions.prototype.fetch = function (exportType, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/exports/layouts/options/" + encodeURI(exportType) + "";
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
                                body = body['export_layout_configuration_options'];
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
    return ExportLayoutConfigurationOptions;
}());
module.exports = ExportLayoutConfigurationOptions;
//# sourceMappingURL=exportlayoutconfigurationoptions.js.map