import ProcessOut = require('./processout');
declare class ExportLayoutConfigurationColumn {
    private client;
    /**
     * Name of the column. Must match with supported ones for chosen export type.
     * @type {string}
     */
    private name;
    /**
     * Rename of the chosen column if needed.
     * @type {string}
     */
    private rename;
    /**
     * ExportLayoutConfigurationColumn constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayoutConfigurationColumn);
    getProcessOutObjectClass(): string;
    /**
     * Get Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    setName(val: string): ExportLayoutConfigurationColumn;
    /**
     * Get Rename
     * Rename of the chosen column if needed.
     * @return {string}
     */
    getRename(): string;
    /**
     * Set Rename
     * Rename of the chosen column if needed.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    setRename(val: string): ExportLayoutConfigurationColumn;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationColumn}
     */
    fillWithData(data: any): ExportLayoutConfigurationColumn;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExportLayoutConfigurationColumn;
//# sourceMappingURL=exportlayoutconfigurationcolumn.d.ts.map