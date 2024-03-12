import ProcessOut = require('./processout');
declare class Device {
    private client;
    /**
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @type {string}
     */
    private requestOrigin;
    /**
     * Device identifier
     * @type {string}
     */
    private id;
    /**
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @type {string}
     */
    private channel;
    /**
     * Device IP address. Use if request origin is "backend"
     * @type {string}
     */
    private ipAddress;
    /**
     * Device user agent. Use if request origin is "backend"
     * @type {string}
     */
    private userAgent;
    /**
     * Device accept header. Use if request origin is "backend"
     * @type {string}
     */
    private headerAccept;
    /**
     * Device referer header. Use if request origin is "backend"
     * @type {string}
     */
    private headerReferer;
    /**
     * Device color depth. Use if request origin is "backend"
     * @type {number}
     */
    private appColorDepth;
    /**
     * Device Java enabled. Use if request origin is "backend"
     * @type {boolean}
     */
    private appJavaEnabled;
    /**
     * Device language. Use if request origin is "backend"
     * @type {string}
     */
    private appLanguage;
    /**
     * Device screen height. Use if request origin is "backend"
     * @type {number}
     */
    private appScreenHeight;
    /**
     * Device screen width. Use if request origin is "backend"
     * @type {number}
     */
    private appScreenWidth;
    /**
     * Device timezone offset. Use if request origin is "backend"
     * @type {number}
     */
    private appTimezoneOffset;
    /**
     * Device constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Device);
    getProcessOutObjectClass(): string;
    /**
     * Get RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @return {string}
     */
    getRequestOrigin(): string;
    /**
     * Set RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @param {string} val
     * @return {Device}
     */
    setRequestOrigin(val: string): Device;
    /**
     * Get Id
     * Device identifier
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * Device identifier
     * @param {string} val
     * @return {Device}
     */
    setId(val: string): Device;
    /**
     * Get Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @return {string}
     */
    getChannel(): string;
    /**
     * Set Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @param {string} val
     * @return {Device}
     */
    setChannel(val: string): Device;
    /**
     * Get IpAddress
     * Device IP address. Use if request origin is "backend"
     * @return {string}
     */
    getIpAddress(): string;
    /**
     * Set IpAddress
     * Device IP address. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    setIpAddress(val: string): Device;
    /**
     * Get UserAgent
     * Device user agent. Use if request origin is "backend"
     * @return {string}
     */
    getUserAgent(): string;
    /**
     * Set UserAgent
     * Device user agent. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    setUserAgent(val: string): Device;
    /**
     * Get HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @return {string}
     */
    getHeaderAccept(): string;
    /**
     * Set HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    setHeaderAccept(val: string): Device;
    /**
     * Get HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @return {string}
     */
    getHeaderReferer(): string;
    /**
     * Set HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    setHeaderReferer(val: string): Device;
    /**
     * Get AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @return {number}
     */
    getAppColorDepth(): number;
    /**
     * Set AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    setAppColorDepth(val: number): Device;
    /**
     * Get AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @return {boolean}
     */
    getAppJavaEnabled(): boolean;
    /**
     * Set AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @param {boolean} val
     * @return {Device}
     */
    setAppJavaEnabled(val: boolean): Device;
    /**
     * Get AppLanguage
     * Device language. Use if request origin is "backend"
     * @return {string}
     */
    getAppLanguage(): string;
    /**
     * Set AppLanguage
     * Device language. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    setAppLanguage(val: string): Device;
    /**
     * Get AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @return {number}
     */
    getAppScreenHeight(): number;
    /**
     * Set AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    setAppScreenHeight(val: number): Device;
    /**
     * Get AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @return {number}
     */
    getAppScreenWidth(): number;
    /**
     * Set AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    setAppScreenWidth(val: number): Device;
    /**
     * Get AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @return {number}
     */
    getAppTimezoneOffset(): number;
    /**
     * Set AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    setAppTimezoneOffset(val: number): Device;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Device}
     */
    fillWithData(data: any): Device;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = Device;
//# sourceMappingURL=device.d.ts.map