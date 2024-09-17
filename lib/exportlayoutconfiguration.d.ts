import ProcessOut = require('./processout');
import * as p from '.';
declare class ExportLayoutConfiguration {
    private client;
    /**
     * Columns that will be exported.
     * @type {any}
     */
    private columns;
    /**
     * Time related configurations.
     * @type {p.ExportLayoutConfigurationTime}
     */
    private time;
    /**
     * Amount related configurations.
     * @type {p.ExportLayoutConfigurationAmount}
     */
    private amount;
    /**
     * ExportLayoutConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfiguration);
    getProcessOutObjectClass(): string;
    /**
     * Get Columns
     * Columns that will be exported.
     * @return {any}
     */
    getColumns(): any;
    /**
     * Set Columns
     * Columns that will be exported.
     * @param {any} val
     * @return {ExportLayoutConfiguration}
     */
    setColumns(val: any): ExportLayoutConfiguration;
    /**
     * Get Time
     * Time related configurations.
     * @return {p.ExportLayoutConfigurationTime}
     */
    getTime(): p.ExportLayoutConfigurationTime;
    /**
     * Set Time
     * Time related configurations.
     * @param {p.ExportLayoutConfigurationTime} val
     * @return {ExportLayoutConfiguration}
     */
    setTime(val: p.ExportLayoutConfigurationTime): ExportLayoutConfiguration;
    /**
     * Get Amount
     * Amount related configurations.
     * @return {p.ExportLayoutConfigurationAmount}
     */
    getAmount(): p.ExportLayoutConfigurationAmount;
    /**
     * Set Amount
     * Amount related configurations.
     * @param {p.ExportLayoutConfigurationAmount} val
     * @return {ExportLayoutConfiguration}
     */
    setAmount(val: p.ExportLayoutConfigurationAmount): ExportLayoutConfiguration;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfiguration}
     */
    fillWithData(data: any): ExportLayoutConfiguration;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfiguration;
//# sourceMappingURL=exportlayoutconfiguration.d.ts.map