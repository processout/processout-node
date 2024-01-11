// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ProjectSFTPSettings {
    private client: ProcessOut = null;

    /**
     * SFTP server endpoint, port is required.
     * @type {string}
     */
    private endpoint: string = null;

    /**
     * SFTP server username
     * @type {string}
     */
    private username: string = null;

    /**
     * SFTP server password, required when no 'private_key' is passed
     * @type {string}
     */
    private password: string = null;

    /**
     * SFTP server private key, required when no 'password' is passed
     * @type {string}
     */
    private privateKey: string = null;

    /**
     * ProjectSFTPSettings constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ProjectSFTPSettings) {
        if (typeof client === 'undefined')
            throw new Error("The ProjectSFTPSettings object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProjectSFTPSettings()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ProjectSFTPSettings";
    }

    /**
     * Get Endpoint
     * SFTP server endpoint, port is required.
     * @return {string}
     */
    public getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Set Endpoint
     * SFTP server endpoint, port is required.
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    public setEndpoint(val: string): ProjectSFTPSettings {
        this.endpoint = val;
        return this;
    }

    /**
     * Get Username
     * SFTP server username
     * @return {string}
     */
    public getUsername(): string {
        return this.username;
    }

    /**
     * Set Username
     * SFTP server username
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    public setUsername(val: string): ProjectSFTPSettings {
        this.username = val;
        return this;
    }

    /**
     * Get Password
     * SFTP server password, required when no 'private_key' is passed
     * @return {string}
     */
    public getPassword(): string {
        return this.password;
    }

    /**
     * Set Password
     * SFTP server password, required when no 'private_key' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    public setPassword(val: string): ProjectSFTPSettings {
        this.password = val;
        return this;
    }

    /**
     * Get PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @return {string}
     */
    public getPrivateKey(): string {
        return this.privateKey;
    }

    /**
     * Set PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    public setPrivateKey(val: string): ProjectSFTPSettings {
        this.privateKey = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ProjectSFTPSettings}
     */
    public fillWithData(data: any): ProjectSFTPSettings {
        if (data["endpoint"])
            this.setEndpoint(data["endpoint"]);
        if (data["username"])
            this.setUsername(data["username"]);
        if (data["password"])
            this.setPassword(data["password"]);
        if (data["private_key"])
            this.setPrivateKey(data["private_key"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "endpoint": this.getEndpoint(),
            "username": this.getUsername(),
            "password": this.getPassword(),
            "private_key": this.getPrivateKey(),
        };
    }

    /**
     * Save the SFTP settings for the project.
	 * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public saveSftpSettings(id: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/" + encodeURI(id) + "/sftp-settings";

        var data = {
			'endpoint': this.getEndpoint(), 
			'username': this.getUsername(), 
			'password': this.getPassword(), 
			'private_key': this.getPrivateKey()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete the SFTP settings for the project.
	 * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public deleteSftpSettings(id: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/" + encodeURI(id) + "/sftp-settings";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = ProjectSFTPSettings;
