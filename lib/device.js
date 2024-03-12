"use strict";
// The content of this file was automatically generated
var Device = /** @class */ (function () {
    /**
     * Device constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Device(client, prefill) {
        this.client = null;
        /**
         * Request origin. Use "backend" if the request is not coming directly from the frontend
         * @type {string}
         */
        this.requestOrigin = null;
        /**
         * Device identifier
         * @type {string}
         */
        this.id = null;
        /**
         * Device channel. Possible values: "web", "ios", "android", "other"
         * @type {string}
         */
        this.channel = null;
        /**
         * Device IP address. Use if request origin is "backend"
         * @type {string}
         */
        this.ipAddress = null;
        /**
         * Device user agent. Use if request origin is "backend"
         * @type {string}
         */
        this.userAgent = null;
        /**
         * Device accept header. Use if request origin is "backend"
         * @type {string}
         */
        this.headerAccept = null;
        /**
         * Device referer header. Use if request origin is "backend"
         * @type {string}
         */
        this.headerReferer = null;
        /**
         * Device color depth. Use if request origin is "backend"
         * @type {number}
         */
        this.appColorDepth = null;
        /**
         * Device Java enabled. Use if request origin is "backend"
         * @type {boolean}
         */
        this.appJavaEnabled = null;
        /**
         * Device language. Use if request origin is "backend"
         * @type {string}
         */
        this.appLanguage = null;
        /**
         * Device screen height. Use if request origin is "backend"
         * @type {number}
         */
        this.appScreenHeight = null;
        /**
         * Device screen width. Use if request origin is "backend"
         * @type {number}
         */
        this.appScreenWidth = null;
        /**
         * Device timezone offset. Use if request origin is "backend"
         * @type {number}
         */
        this.appTimezoneOffset = null;
        if (typeof client === 'undefined')
            throw new Error("The Device object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDevice()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Device.prototype.getProcessOutObjectClass = function () {
        return "Device";
    };
    /**
     * Get RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @return {string}
     */
    Device.prototype.getRequestOrigin = function () {
        return this.requestOrigin;
    };
    /**
     * Set RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setRequestOrigin = function (val) {
        this.requestOrigin = val;
        return this;
    };
    /**
     * Get Id
     * Device identifier
     * @return {string}
     */
    Device.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * Device identifier
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @return {string}
     */
    Device.prototype.getChannel = function () {
        return this.channel;
    };
    /**
     * Set Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setChannel = function (val) {
        this.channel = val;
        return this;
    };
    /**
     * Get IpAddress
     * Device IP address. Use if request origin is "backend"
     * @return {string}
     */
    Device.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    /**
     * Set IpAddress
     * Device IP address. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setIpAddress = function (val) {
        this.ipAddress = val;
        return this;
    };
    /**
     * Get UserAgent
     * Device user agent. Use if request origin is "backend"
     * @return {string}
     */
    Device.prototype.getUserAgent = function () {
        return this.userAgent;
    };
    /**
     * Set UserAgent
     * Device user agent. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setUserAgent = function (val) {
        this.userAgent = val;
        return this;
    };
    /**
     * Get HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @return {string}
     */
    Device.prototype.getHeaderAccept = function () {
        return this.headerAccept;
    };
    /**
     * Set HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setHeaderAccept = function (val) {
        this.headerAccept = val;
        return this;
    };
    /**
     * Get HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @return {string}
     */
    Device.prototype.getHeaderReferer = function () {
        return this.headerReferer;
    };
    /**
     * Set HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setHeaderReferer = function (val) {
        this.headerReferer = val;
        return this;
    };
    /**
     * Get AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @return {number}
     */
    Device.prototype.getAppColorDepth = function () {
        return this.appColorDepth;
    };
    /**
     * Set AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    Device.prototype.setAppColorDepth = function (val) {
        this.appColorDepth = val;
        return this;
    };
    /**
     * Get AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @return {boolean}
     */
    Device.prototype.getAppJavaEnabled = function () {
        return this.appJavaEnabled;
    };
    /**
     * Set AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @param {boolean} val
     * @return {Device}
     */
    Device.prototype.setAppJavaEnabled = function (val) {
        this.appJavaEnabled = val;
        return this;
    };
    /**
     * Get AppLanguage
     * Device language. Use if request origin is "backend"
     * @return {string}
     */
    Device.prototype.getAppLanguage = function () {
        return this.appLanguage;
    };
    /**
     * Set AppLanguage
     * Device language. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    Device.prototype.setAppLanguage = function (val) {
        this.appLanguage = val;
        return this;
    };
    /**
     * Get AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @return {number}
     */
    Device.prototype.getAppScreenHeight = function () {
        return this.appScreenHeight;
    };
    /**
     * Set AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    Device.prototype.setAppScreenHeight = function (val) {
        this.appScreenHeight = val;
        return this;
    };
    /**
     * Get AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @return {number}
     */
    Device.prototype.getAppScreenWidth = function () {
        return this.appScreenWidth;
    };
    /**
     * Set AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    Device.prototype.setAppScreenWidth = function (val) {
        this.appScreenWidth = val;
        return this;
    };
    /**
     * Get AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @return {number}
     */
    Device.prototype.getAppTimezoneOffset = function () {
        return this.appTimezoneOffset;
    };
    /**
     * Set AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    Device.prototype.setAppTimezoneOffset = function (val) {
        this.appTimezoneOffset = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Device}
     */
    Device.prototype.fillWithData = function (data) {
        if (data["request_origin"])
            this.setRequestOrigin(data["request_origin"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["channel"])
            this.setChannel(data["channel"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        if (data["user_agent"])
            this.setUserAgent(data["user_agent"]);
        if (data["header_accept"])
            this.setHeaderAccept(data["header_accept"]);
        if (data["header_referer"])
            this.setHeaderReferer(data["header_referer"]);
        if (data["app_color_depth"])
            this.setAppColorDepth(data["app_color_depth"]);
        if (data["app_java_enabled"])
            this.setAppJavaEnabled(data["app_java_enabled"]);
        if (data["app_language"])
            this.setAppLanguage(data["app_language"]);
        if (data["app_screen_height"])
            this.setAppScreenHeight(data["app_screen_height"]);
        if (data["app_screen_width"])
            this.setAppScreenWidth(data["app_screen_width"]);
        if (data["app_timezone_offset"])
            this.setAppTimezoneOffset(data["app_timezone_offset"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Device.prototype.toJSON = function () {
        return {
            "request_origin": this.getRequestOrigin(),
            "id": this.getId(),
            "channel": this.getChannel(),
            "ip_address": this.getIpAddress(),
            "user_agent": this.getUserAgent(),
            "header_accept": this.getHeaderAccept(),
            "header_referer": this.getHeaderReferer(),
            "app_color_depth": this.getAppColorDepth(),
            "app_java_enabled": this.getAppJavaEnabled(),
            "app_language": this.getAppLanguage(),
            "app_screen_height": this.getAppScreenHeight(),
            "app_screen_width": this.getAppScreenWidth(),
            "app_timezone_offset": this.getAppTimezoneOffset(),
        };
    };
    return Device;
}());
module.exports = Device;
//# sourceMappingURL=device.js.map