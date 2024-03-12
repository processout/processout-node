// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Device {
    private client: ProcessOut = null;

    /**
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @type {string}
     */
    private requestOrigin: string = null;

    /**
     * Device identifier
     * @type {string}
     */
    private id: string = null;

    /**
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @type {string}
     */
    private channel: string = null;

    /**
     * Device IP address. Use if request origin is "backend"
     * @type {string}
     */
    private ipAddress: string = null;

    /**
     * Device user agent. Use if request origin is "backend"
     * @type {string}
     */
    private userAgent: string = null;

    /**
     * Device accept header. Use if request origin is "backend"
     * @type {string}
     */
    private headerAccept: string = null;

    /**
     * Device referer header. Use if request origin is "backend"
     * @type {string}
     */
    private headerReferer: string = null;

    /**
     * Device color depth. Use if request origin is "backend"
     * @type {number}
     */
    private appColorDepth: number = null;

    /**
     * Device Java enabled. Use if request origin is "backend"
     * @type {boolean}
     */
    private appJavaEnabled: boolean = null;

    /**
     * Device language. Use if request origin is "backend"
     * @type {string}
     */
    private appLanguage: string = null;

    /**
     * Device screen height. Use if request origin is "backend"
     * @type {number}
     */
    private appScreenHeight: number = null;

    /**
     * Device screen width. Use if request origin is "backend"
     * @type {number}
     */
    private appScreenWidth: number = null;

    /**
     * Device timezone offset. Use if request origin is "backend"
     * @type {number}
     */
    private appTimezoneOffset: number = null;

    /**
     * Device constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Device) {
        if (typeof client === 'undefined')
            throw new Error("The Device object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDevice()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Device";
    }

    /**
     * Get RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @return {string}
     */
    public getRequestOrigin(): string {
        return this.requestOrigin;
    }

    /**
     * Set RequestOrigin
     * Request origin. Use "backend" if the request is not coming directly from the frontend
     * @param {string} val
     * @return {Device}
     */
    public setRequestOrigin(val: string): Device {
        this.requestOrigin = val;
        return this;
    }

    /**
     * Get Id
     * Device identifier
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * Device identifier
     * @param {string} val
     * @return {Device}
     */
    public setId(val: string): Device {
        this.id = val;
        return this;
    }

    /**
     * Get Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @return {string}
     */
    public getChannel(): string {
        return this.channel;
    }

    /**
     * Set Channel
     * Device channel. Possible values: "web", "ios", "android", "other"
     * @param {string} val
     * @return {Device}
     */
    public setChannel(val: string): Device {
        this.channel = val;
        return this;
    }

    /**
     * Get IpAddress
     * Device IP address. Use if request origin is "backend"
     * @return {string}
     */
    public getIpAddress(): string {
        return this.ipAddress;
    }

    /**
     * Set IpAddress
     * Device IP address. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    public setIpAddress(val: string): Device {
        this.ipAddress = val;
        return this;
    }

    /**
     * Get UserAgent
     * Device user agent. Use if request origin is "backend"
     * @return {string}
     */
    public getUserAgent(): string {
        return this.userAgent;
    }

    /**
     * Set UserAgent
     * Device user agent. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    public setUserAgent(val: string): Device {
        this.userAgent = val;
        return this;
    }

    /**
     * Get HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @return {string}
     */
    public getHeaderAccept(): string {
        return this.headerAccept;
    }

    /**
     * Set HeaderAccept
     * Device accept header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    public setHeaderAccept(val: string): Device {
        this.headerAccept = val;
        return this;
    }

    /**
     * Get HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @return {string}
     */
    public getHeaderReferer(): string {
        return this.headerReferer;
    }

    /**
     * Set HeaderReferer
     * Device referer header. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    public setHeaderReferer(val: string): Device {
        this.headerReferer = val;
        return this;
    }

    /**
     * Get AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @return {number}
     */
    public getAppColorDepth(): number {
        return this.appColorDepth;
    }

    /**
     * Set AppColorDepth
     * Device color depth. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    public setAppColorDepth(val: number): Device {
        this.appColorDepth = val;
        return this;
    }

    /**
     * Get AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @return {boolean}
     */
    public getAppJavaEnabled(): boolean {
        return this.appJavaEnabled;
    }

    /**
     * Set AppJavaEnabled
     * Device Java enabled. Use if request origin is "backend"
     * @param {boolean} val
     * @return {Device}
     */
    public setAppJavaEnabled(val: boolean): Device {
        this.appJavaEnabled = val;
        return this;
    }

    /**
     * Get AppLanguage
     * Device language. Use if request origin is "backend"
     * @return {string}
     */
    public getAppLanguage(): string {
        return this.appLanguage;
    }

    /**
     * Set AppLanguage
     * Device language. Use if request origin is "backend"
     * @param {string} val
     * @return {Device}
     */
    public setAppLanguage(val: string): Device {
        this.appLanguage = val;
        return this;
    }

    /**
     * Get AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @return {number}
     */
    public getAppScreenHeight(): number {
        return this.appScreenHeight;
    }

    /**
     * Set AppScreenHeight
     * Device screen height. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    public setAppScreenHeight(val: number): Device {
        this.appScreenHeight = val;
        return this;
    }

    /**
     * Get AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @return {number}
     */
    public getAppScreenWidth(): number {
        return this.appScreenWidth;
    }

    /**
     * Set AppScreenWidth
     * Device screen width. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    public setAppScreenWidth(val: number): Device {
        this.appScreenWidth = val;
        return this;
    }

    /**
     * Get AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @return {number}
     */
    public getAppTimezoneOffset(): number {
        return this.appTimezoneOffset;
    }

    /**
     * Set AppTimezoneOffset
     * Device timezone offset. Use if request origin is "backend"
     * @param {number} val
     * @return {Device}
     */
    public setAppTimezoneOffset(val: number): Device {
        this.appTimezoneOffset = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Device}
     */
    public fillWithData(data: any): Device {
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
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
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
    }

    
}
export = Device;
