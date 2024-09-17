// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfigurationOptions {
    private client: ProcessOut = null;

    /**
     * Columns options for configuration.
     * @type {any}
     */
    private columns: any = null;

    /**
     * Time options for configuration.
     * @type {p.ExportLayoutConfigurationConfigurationOptionsTime}
     */
    private time: p.ExportLayoutConfigurationConfigurationOptionsTime = null;

    /**
     * Amount options for configuration.
     * @type {p.ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    private amount: p.ExportLayoutConfigurationConfigurationOptionsAmount = null;

    /**
     * ExportLayoutConfigurationOptions constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationOptions) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationOptions object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationOptions()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfigurationOptions";
    }

    /**
     * Get Columns
     * Columns options for configuration.
     * @return {any}
     */
    public getColumns(): any {
        return this.columns;
    }

    /**
     * Set Columns
     * Columns options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationOptions}
     */
    public setColumns(val: any): ExportLayoutConfigurationOptions {
        this.columns = val;
        return this;
    }

    /**
     * Get Time
     * Time options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsTime}
     */
    public getTime(): p.ExportLayoutConfigurationConfigurationOptionsTime {
        return this.time;
    }

    /**
     * Set Time
     * Time options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsTime} val
     * @return {ExportLayoutConfigurationOptions}
     */
    public setTime(val: p.ExportLayoutConfigurationConfigurationOptionsTime): ExportLayoutConfigurationOptions {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationConfigurationOptionsTime().getProcessOutObjectClass())
            this.time = val;
        else {
            var obj = this.client.newExportLayoutConfigurationConfigurationOptionsTime();
            obj.fillWithData(val);
            this.time = obj;
        }
        return this;
    }

    /**
     * Get Amount
     * Amount options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    public getAmount(): p.ExportLayoutConfigurationConfigurationOptionsAmount {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsAmount} val
     * @return {ExportLayoutConfigurationOptions}
     */
    public setAmount(val: p.ExportLayoutConfigurationConfigurationOptionsAmount): ExportLayoutConfigurationOptions {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationConfigurationOptionsAmount().getProcessOutObjectClass())
            this.amount = val;
        else {
            var obj = this.client.newExportLayoutConfigurationConfigurationOptionsAmount();
            obj.fillWithData(val);
            this.amount = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationOptions}
     */
    public fillWithData(data: any): ExportLayoutConfigurationOptions {
        if (data["columns"])
            this.setColumns(data["columns"]);
        if (data["time"])
            this.setTime(data["time"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "columns": this.getColumns(),
            "time": this.getTime(),
            "amount": this.getAmount(),
        };
    }

    /**
     * Fetch export layout configuration options.
	 * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    public fetch(exportType: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/exports/layouts/options/" + encodeURI(exportType) + "";

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
                body = body['export_layout_configuration_options'];
                        
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
export = ExportLayoutConfigurationOptions;
