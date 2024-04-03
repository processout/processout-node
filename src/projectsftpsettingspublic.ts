// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ProjectSFTPSettingsPublic {
    private client: ProcessOut = null;

    /**
     * Whether the SFTP settings are enabled
     * @type {boolean}
     */
    private enabled: boolean = null;

    /**
     * SFTP server endpoint with port
     * @type {string}
     */
    private endpoint: string = null;

    /**
     * SFTP server username
     * @type {string}
     */
    private username: string = null;

    /**
     * ProjectSFTPSettingsPublic constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ProjectSFTPSettingsPublic) {
        if (typeof client === 'undefined')
            throw new Error("The ProjectSFTPSettingsPublic object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProjectSFTPSettingsPublic()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ProjectSFTPSettingsPublic";
    }

    /**
     * Get Enabled
     * Whether the SFTP settings are enabled
     * @return {boolean}
     */
    public getEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Set Enabled
     * Whether the SFTP settings are enabled
     * @param {boolean} val
     * @return {ProjectSFTPSettingsPublic}
     */
    public setEnabled(val: boolean): ProjectSFTPSettingsPublic {
        this.enabled = val;
        return this;
    }

    /**
     * Get Endpoint
     * SFTP server endpoint with port
     * @return {string}
     */
    public getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Set Endpoint
     * SFTP server endpoint with port
     * @param {string} val
     * @return {ProjectSFTPSettingsPublic}
     */
    public setEndpoint(val: string): ProjectSFTPSettingsPublic {
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
     * @return {ProjectSFTPSettingsPublic}
     */
    public setUsername(val: string): ProjectSFTPSettingsPublic {
        this.username = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ProjectSFTPSettingsPublic}
     */
    public fillWithData(data: any): ProjectSFTPSettingsPublic {
        if (data["enabled"])
            this.setEnabled(data["enabled"]);
        if (data["endpoint"])
            this.setEndpoint(data["endpoint"]);
        if (data["username"])
            this.setUsername(data["username"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "enabled": this.getEnabled(),
            "endpoint": this.getEndpoint(),
            "username": this.getUsername(),
        };
    }

    /**
     * Fetch the SFTP settings for the project.
	 * @param string id
     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchSftpSettings(id: string, options): Promise<any> {
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

                
                var body = respBody;
                body = body['sftp_settings'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = ProjectSFTPSettingsPublic;
