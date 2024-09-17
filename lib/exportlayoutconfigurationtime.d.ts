import ProcessOut = require('./processout');
declare class ExportLayoutConfigurationTime {
    private client;
    /**
     * Format of the time fields in the export.
     * @type {string}
     */
    private format;
    /**
     * ExportLayoutConfigurationTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationTime);
    getProcessOutObjectClass(): string;
    /**
     * Get Format
     * Format of the time fields in the export.
     * @return {string}
     */
    getFormat(): string;
    /**
     * Set Format
     * Format of the time fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationTime}
     */
    setFormat(val: string): ExportLayoutConfigurationTime;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationTime}
     */
    fillWithData(data: any): ExportLayoutConfigurationTime;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfigurationTime;
//# sourceMappingURL=exportlayoutconfigurationtime.d.ts.map