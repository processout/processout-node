import ProcessOut = require('./processout');
import * as p from '.';
declare class Project {
    private client;
    /**
     * ID of the project
     * @type {string}
     */
    private id;
    /**
     * Project used to create this project
     * @type {p.Project}
     */
    private supervisorProject;
    /**
     * ID of the project used to create this project
     * @type {string}
     */
    private supervisorProjectId;
    /**
     * Current API version of the project
     * @type {p.APIVersion}
     */
    private apiVersion;
    /**
     * Name of the project
     * @type {string}
     */
    private name;
    /**
     * Name of the project
     * @type {string}
     */
    private logoUrl;
    /**
     * Email of the project
     * @type {string}
     */
    private email;
    /**
     * Default currency of the project, used to compute analytics amounts
     * @type {string}
     */
    private defaultCurrency;
    /**
     * Private key of the project. Only returned when creating a project
     * @type {string}
     */
    private privateKey;
    /**
     * Dunning configuration of the project
     * @type {any}
     */
    private dunningConfiguration;
    /**
     * Date at which the project was created
     * @type {string}
     */
    private createdAt;
    /**
     * Project constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Project);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the project
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the project
     * @param {string} val
     * @return {Project}
     */
    setId(val: string): Project;
    /**
     * Get SupervisorProject
     * Project used to create this project
     * @return {p.Project}
     */
    getSupervisorProject(): p.Project;
    /**
     * Set SupervisorProject
     * Project used to create this project
     * @param {p.Project} val
     * @return {Project}
     */
    setSupervisorProject(val: p.Project): Project;
    /**
     * Get SupervisorProjectId
     * ID of the project used to create this project
     * @return {string}
     */
    getSupervisorProjectId(): string;
    /**
     * Set SupervisorProjectId
     * ID of the project used to create this project
     * @param {string} val
     * @return {Project}
     */
    setSupervisorProjectId(val: string): Project;
    /**
     * Get ApiVersion
     * Current API version of the project
     * @return {p.APIVersion}
     */
    getApiVersion(): p.APIVersion;
    /**
     * Set ApiVersion
     * Current API version of the project
     * @param {p.APIVersion} val
     * @return {Project}
     */
    setApiVersion(val: p.APIVersion): Project;
    /**
     * Get Name
     * Name of the project
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    setName(val: string): Project;
    /**
     * Get LogoUrl
     * Name of the project
     * @return {string}
     */
    getLogoUrl(): string;
    /**
     * Set LogoUrl
     * Name of the project
     * @param {string} val
     * @return {Project}
     */
    setLogoUrl(val: string): Project;
    /**
     * Get Email
     * Email of the project
     * @return {string}
     */
    getEmail(): string;
    /**
     * Set Email
     * Email of the project
     * @param {string} val
     * @return {Project}
     */
    setEmail(val: string): Project;
    /**
     * Get DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @return {string}
     */
    getDefaultCurrency(): string;
    /**
     * Set DefaultCurrency
     * Default currency of the project, used to compute analytics amounts
     * @param {string} val
     * @return {Project}
     */
    setDefaultCurrency(val: string): Project;
    /**
     * Get PrivateKey
     * Private key of the project. Only returned when creating a project
     * @return {string}
     */
    getPrivateKey(): string;
    /**
     * Set PrivateKey
     * Private key of the project. Only returned when creating a project
     * @param {string} val
     * @return {Project}
     */
    setPrivateKey(val: string): Project;
    /**
     * Get DunningConfiguration
     * Dunning configuration of the project
     * @return {any}
     */
    getDunningConfiguration(): any;
    /**
     * Set DunningConfiguration
     * Dunning configuration of the project
     * @param {any} val
     * @return {Project}
     */
    setDunningConfiguration(val: any): Project;
    /**
     * Get CreatedAt
     * Date at which the project was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the project was created
     * @param {string} val
     * @return {Project}
     */
    setCreatedAt(val: string): Project;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Project}
     */
    fillWithData(data: any): Project;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch the current project information.

     * @param {any} options
     * @return {this}
     */
    fetch(options: any): Promise<any>;
    /**
     * Save the updated project's attributes.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete the project. Be careful! Executing this request will prevent any further interaction with the API that uses this project.
     *
     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
    /**
     * Get all the supervised projects.
     *
     * @param {any} options
     * @return {array}
     */
    fetchSupervised(options: any): Promise<any>;
    /**
     * Create a new supervised project.
     *
     * @param {any} options
     * @return {this}
     */
    createSupervised(options: any): Promise<any>;
}
export = Project;
//# sourceMappingURL=project.d.ts.map