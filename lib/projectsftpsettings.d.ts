import ProcessOut = require('./processout');
declare class ProjectSFTPSettings {
    private client;
    /**
     * SFTP server endpoint, port is required
     * @type {string}
     */
    private endpoint;
    /**
     * SFTP server username
     * @type {string}
     */
    private username;
    /**
     * SFTP server password, required when no 'private_key' is passed
     * @type {string}
     */
    private password;
    /**
     * SFTP server private key, required when no 'password' is passed
     * @type {string}
     */
    private privateKey;
    /**
     * ProjectSFTPSettings constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ProjectSFTPSettings);
    getProcessOutObjectClass(): string;
    /**
     * Get Endpoint
     * SFTP server endpoint, port is required
     * @return {string}
     */
    getEndpoint(): string;
    /**
     * Set Endpoint
     * SFTP server endpoint, port is required
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    setEndpoint(val: string): ProjectSFTPSettings;
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
     * @return {ProjectSFTPSettings}
     */
    setUsername(val: string): ProjectSFTPSettings;
    /**
     * Get Password
     * SFTP server password, required when no 'private_key' is passed
     * @return {string}
     */
    getPassword(): string;
    /**
     * Set Password
     * SFTP server password, required when no 'private_key' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    setPassword(val: string): ProjectSFTPSettings;
    /**
     * Get PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @return {string}
     */
    getPrivateKey(): string;
    /**
     * Set PrivateKey
     * SFTP server private key, required when no 'password' is passed
     * @param {string} val
     * @return {ProjectSFTPSettings}
     */
    setPrivateKey(val: string): ProjectSFTPSettings;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ProjectSFTPSettings}
     */
    fillWithData(data: any): ProjectSFTPSettings;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Save the SFTP settings for the project.
     * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    saveSftpSettings(id: string, options: any): Promise<boolean>;
    /**
     * Delete the SFTP settings for the project.
     * @param string id
     * @param {any} options
     * @return {Promise<boolean>}
     */
    deleteSftpSettings(id: string, options: any): Promise<boolean>;
}
export = ProjectSFTPSettings;
//# sourceMappingURL=projectsftpsettings.d.ts.map