import ProcessOut = require('./processout');
declare class ExportLayoutConfigurationConfigurationOptionsTime {
    private client;
    /**
     * Format options for configuration.
     * @type {any}
     */
    private format;
    /**
     * ExportLayoutConfigurationConfigurationOptionsTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationConfigurationOptionsTime);
    getProcessOutObjectClass(): string;
    /**
     * Get Format
     * Format options for configuration.
     * @return {any}
     */
    getFormat(): any;
    /**
     * Set Format
     * Format options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    setFormat(val: any): ExportLayoutConfigurationConfigurationOptionsTime;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    fillWithData(data: any): ExportLayoutConfigurationConfigurationOptionsTime;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfigurationConfigurationOptionsTime;
//# sourceMappingURL=exportlayoutconfigurationconfigurationoptionstime.d.ts.map