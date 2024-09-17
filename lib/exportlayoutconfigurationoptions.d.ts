import ProcessOut = require('./processout');
import * as p from '.';
declare class ExportLayoutConfigurationOptions {
    private client;
    /**
     * Columns options for configuration.
     * @type {any}
     */
    private columns;
    /**
     * Time options for configuration.
     * @type {p.ExportLayoutConfigurationConfigurationOptionsTime}
     */
    private time;
    /**
     * Amount options for configuration.
     * @type {p.ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    private amount;
    /**
     * ExportLayoutConfigurationOptions constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationOptions);
    getProcessOutObjectClass(): string;
    /**
     * Get Columns
     * Columns options for configuration.
     * @return {any}
     */
    getColumns(): any;
    /**
     * Set Columns
     * Columns options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationOptions}
     */
    setColumns(val: any): ExportLayoutConfigurationOptions;
    /**
     * Get Time
     * Time options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsTime}
     */
    getTime(): p.ExportLayoutConfigurationConfigurationOptionsTime;
    /**
     * Set Time
     * Time options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsTime} val
     * @return {ExportLayoutConfigurationOptions}
     */
    setTime(val: p.ExportLayoutConfigurationConfigurationOptionsTime): ExportLayoutConfigurationOptions;
    /**
     * Get Amount
     * Amount options for configuration.
     * @return {p.ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    getAmount(): p.ExportLayoutConfigurationConfigurationOptionsAmount;
    /**
     * Set Amount
     * Amount options for configuration.
     * @param {p.ExportLayoutConfigurationConfigurationOptionsAmount} val
     * @return {ExportLayoutConfigurationOptions}
     */
    setAmount(val: p.ExportLayoutConfigurationConfigurationOptionsAmount): ExportLayoutConfigurationOptions;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationOptions}
     */
    fillWithData(data: any): ExportLayoutConfigurationOptions;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch export layout configuration options.
     * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    fetch(exportType: string, options: any): Promise<any>;
}
export = ExportLayoutConfigurationOptions;
//# sourceMappingURL=exportlayoutconfigurationoptions.d.ts.map