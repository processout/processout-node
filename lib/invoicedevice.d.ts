import ProcessOut = require('./processout');
declare class InvoiceDevice {
    private client;
    /**
     * Channel of the device
     * @type {string}
     */
    private channel;
    /**
     * IP address of the device
     * @type {string}
     */
    private ipAddress;
    /**
     * ID of the device
     * @type {string}
     */
    private id;
    /**
     * InvoiceDevice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceDevice);
    getProcessOutObjectClass(): string;
    /**
     * Get Channel
     * Channel of the device
     * @return {string}
     */
    getChannel(): string;
    /**
     * Set Channel
     * Channel of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    setChannel(val: string): InvoiceDevice;
    /**
     * Get IpAddress
     * IP address of the device
     * @return {string}
     */
    getIpAddress(): string;
    /**
     * Set IpAddress
     * IP address of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    setIpAddress(val: string): InvoiceDevice;
    /**
     * Get Id
     * ID of the device
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    setId(val: string): InvoiceDevice;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDevice}
     */
    fillWithData(data: any): InvoiceDevice;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceDevice;
//# sourceMappingURL=invoicedevice.d.ts.map