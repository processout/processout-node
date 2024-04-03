import ProcessOut = require('./processout');
declare class ProjectSFTPSettingsPublic {
    private client;
    /**
     * Whether the SFTP settings are enabled
     * @type {boolean}
     */
    private enabled;
    /**
     * SFTP server endpoint with port
     * @type {string}
     */
    private endpoint;
    /**
     * SFTP server username
     * @type {string}
     */
    private username;
    /**
     * ProjectSFTPSettingsPublic constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ProjectSFTPSettingsPublic);
    getProcessOutObjectClass(): string;
    /**
     * Get Enabled
     * Whether the SFTP settings are enabled
     * @return {boolean}
     */
    getEnabled(): boolean;
    /**
     * Set Enabled
     * Whether the SFTP settings are enabled
     * @param {boolean} val
     * @return {ProjectSFTPSettingsPublic}
     */
    setEnabled(val: boolean): ProjectSFTPSettingsPublic;
    /**
     * Get Endpoint
     * SFTP server endpoint with port
     * @return {string}
     */
    getEndpoint(): string;
    /**
     * Set Endpoint
     * SFTP server endpoint with port
     * @param {string} val
     * @return {ProjectSFTPSettingsPublic}
     */
    setEndpoint(val: string): ProjectSFTPSettingsPublic;
    /**
     * Get Username
     * SFTP server username
     * @return {string}
     */
    getUsername(): string;
    /**
     * Set Username
     * SFTP server username
     * @param {string} val
     * @return {ProjectSFTPSettingsPublic}
     */
    setUsername(val: string): ProjectSFTPSettingsPublic;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ProjectSFTPSettingsPublic}
     */
    fillWithData(data: any): ProjectSFTPSettingsPublic;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch the SFTP settings for the project.
     * @param string id
     * @param {any} options
     * @return {Promise<any>}
     */
    fetchSftpSettings(id: string, options: any): Promise<any>;
}
export = ProjectSFTPSettingsPublic;
//# sourceMappingURL=projectsftpsettingspublic.d.ts.map