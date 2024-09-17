// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ExportLayoutConfiguration {
    private client: ProcessOut = null;

    /**
     * Columns that will be exported.
     * @type {any}
     */
    private columns: any = null;

    /**
     * Time related configurations.
     * @type {p.ExportLayoutConfigurationTime}
     */
    private time: p.ExportLayoutConfigurationTime = null;

    /**
     * Amount related configurations.
     * @type {p.ExportLayoutConfigurationAmount}
     */
    private amount: p.ExportLayoutConfigurationAmount = null;

    /**
     * ExportLayoutConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfiguration) {
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfiguration()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ExportLayoutConfiguration";
    }

    /**
     * Get Columns
     * Columns that will be exported.
     * @return {any}
     */
    public getColumns(): any {
        return this.columns;
    }

    /**
     * Set Columns
     * Columns that will be exported.
     * @param {any} val
     * @return {ExportLayoutConfiguration}
     */
    public setColumns(val: any): ExportLayoutConfiguration {
        if (val.length > 0 && typeof val[0] === 'object')
            this.columns = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newExportLayoutConfigurationColumn();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.columns = a;
        }
        return this;
    }

    /**
     * Get Time
     * Time related configurations.
     * @return {p.ExportLayoutConfigurationTime}
     */
    public getTime(): p.ExportLayoutConfigurationTime {
        return this.time;
    }

    /**
     * Set Time
     * Time related configurations.
     * @param {p.ExportLayoutConfigurationTime} val
     * @return {ExportLayoutConfiguration}
     */
    public setTime(val: p.ExportLayoutConfigurationTime): ExportLayoutConfiguration {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationTime().getProcessOutObjectClass())
            this.time = val;
        else {
            var obj = this.client.newExportLayoutConfigurationTime();
            obj.fillWithData(val);
            this.time = obj;
        }
        return this;
    }

    /**
     * Get Amount
     * Amount related configurations.
     * @return {p.ExportLayoutConfigurationAmount}
     */
    public getAmount(): p.ExportLayoutConfigurationAmount {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount related configurations.
     * @param {p.ExportLayoutConfigurationAmount} val
     * @return {ExportLayoutConfiguration}
     */
    public setAmount(val: p.ExportLayoutConfigurationAmount): ExportLayoutConfiguration {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationAmount().getProcessOutObjectClass())
            this.amount = val;
        else {
            var obj = this.client.newExportLayoutConfigurationAmount();
            obj.fillWithData(val);
            this.amount = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfiguration}
     */
    public fillWithData(data: any): ExportLayoutConfiguration {
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

    
}
export = ExportLayoutConfiguration;
