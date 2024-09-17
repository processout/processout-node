import ProcessOut = require('./processout');
declare class ExportLayoutConfigurationConfigurationOptionsAmount {
    private client;
    /**
     * Precision options for configuration.
     * @type {any}
     */
    private precision;
    /**
     * Separator options for configuration.
     * @type {any}
     */
    private separator;
    /**
     * ExportLayoutConfigurationConfigurationOptionsAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationConfigurationOptionsAmount);
    getProcessOutObjectClass(): string;
    /**
     * Get Precision
     * Precision options for configuration.
     * @return {any}
     */
    getPrecision(): any;
    /**
     * Set Precision
     * Precision options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    setPrecision(val: any): ExportLayoutConfigurationConfigurationOptionsAmount;
    /**
     * Get Separator
     * Separator options for configuration.
     * @return {any}
     */
    getSeparator(): any;
    /**
     * Set Separator
     * Separator options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    setSeparator(val: any): ExportLayoutConfigurationConfigurationOptionsAmount;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    fillWithData(data: any): ExportLayoutConfigurationConfigurationOptionsAmount;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfigurationConfigurationOptionsAmount;
//# sourceMappingURL=exportlayoutconfigurationconfigurationoptionsamount.d.ts.map