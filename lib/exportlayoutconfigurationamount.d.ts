import ProcessOut = require('./processout');
declare class ExportLayoutConfigurationAmount {
    private client;
    /**
     * Chosen precision for the amount fields in the export.
     * @type {string}
     */
    private precision;
    /**
     * Chosen separator for the amount fields in the export.
     * @type {string}
     */
    private separator;
    /**
     * ExportLayoutConfigurationAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationAmount);
    getProcessOutObjectClass(): string;
    /**
     * Get Precision
     * Chosen precision for the amount fields in the export.
     * @return {string}
     */
    getPrecision(): string;
    /**
     * Set Precision
     * Chosen precision for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    setPrecision(val: string): ExportLayoutConfigurationAmount;
    /**
     * Get Separator
     * Chosen separator for the amount fields in the export.
     * @return {string}
     */
    getSeparator(): string;
    /**
     * Set Separator
     * Chosen separator for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    setSeparator(val: string): ExportLayoutConfigurationAmount;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationAmount}
     */
    fillWithData(data: any): ExportLayoutConfigurationAmount;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfigurationAmount;
//# sourceMappingURL=exportlayoutconfigurationamount.d.ts.map