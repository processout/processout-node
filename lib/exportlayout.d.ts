import ProcessOut = require('./processout');
import * as p from '.';
declare class ExportLayout {
    private client;
    /**
     * ID of the export layout
     * @type {string}
     */
    private id;
    /**
     * Project to which the export layout belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the export layout belongs
     * @type {string}
     */
    private projectId;
    /**
     * Date at which the export layout was created
     * @type {string}
     */
    private createdAt;
    /**
     * Name of the export layout.
     * @type {string}
     */
    private name;
    /**
     * Type of the export layout.
     * @type {string}
     */
    private type;
    /**
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @type {boolean}
     */
    private isDefault;
    /**
     * Configuration of the export layout.
     * @type {p.ExportLayoutConfiguration}
     */
    private configuration;
    /**
     * ExportLayout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExportLayout);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the export layout
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the export layout
     * @param {string} val
     * @return {ExportLayout}
     */
    setId(val: string): ExportLayout;
    /**
     * Get Project
     * Project to which the export layout belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the export layout belongs
     * @param {p.Project} val
     * @return {ExportLayout}
     */
    setProject(val: p.Project): ExportLayout;
    /**
     * Get ProjectId
     * ID of the project to which the export layout belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the export layout belongs
     * @param {string} val
     * @return {ExportLayout}
     */
    setProjectId(val: string): ExportLayout;
    /**
     * Get CreatedAt
     * Date at which the export layout was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the export layout was created
     * @param {string} val
     * @return {ExportLayout}
     */
    setCreatedAt(val: string): ExportLayout;
    /**
     * Get Name
     * Name of the export layout.
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    setName(val: string): ExportLayout;
    /**
     * Get Type
     * Type of the export layout.
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the export layout.
     * @param {string} val
     * @return {ExportLayout}
     */
    setType(val: string): ExportLayout;
    /**
     * Get IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @return {boolean}
     */
    getIsDefault(): boolean;
    /**
     * Set IsDefault
     * Whether the export layout is the default one for the project. It will be used for automatic exports.
     * @param {boolean} val
     * @return {ExportLayout}
     */
    setIsDefault(val: boolean): ExportLayout;
    /**
     * Get Configuration
     * Configuration of the export layout.
     * @return {p.ExportLayoutConfiguration}
     */
    getConfiguration(): p.ExportLayoutConfiguration;
    /**
     * Set Configuration
     * Configuration of the export layout.
     * @param {p.ExportLayoutConfiguration} val
     * @return {ExportLayout}
     */
    setConfiguration(val: p.ExportLayoutConfiguration): ExportLayout;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayout}
     */
    fillWithData(data: any): ExportLayout;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get all the export layouts.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
    /**
     * Find an export layout by its ID.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(exportLayoutId: string, options: any): Promise<any>;
    /**
     * Find the default export layout for given export type.
     * @param string exportType
     * @param {any} options
     * @return {Promise<any>}
     */
    findDefault(exportType: string, options: any): Promise<any>;
    /**
     * Create a new export layout.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    create(options: any): Promise<any>;
    /**
     * Update the export layout.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    update(exportLayoutId: string, options: any): Promise<any>;
    /**
     * Delete the export layout.
     * @param string exportLayoutId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    delete(exportLayoutId: string, options: any): Promise<boolean>;
}
export = ExportLayout;
//# sourceMappingURL=exportlayout.d.ts.map