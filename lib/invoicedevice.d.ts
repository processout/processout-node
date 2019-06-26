import ProcessOut = require("./processout");
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
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDevice}
     */
    fillWithData(data: any): InvoiceDevice;
}
export = InvoiceDevice;
//# sourceMappingURL=invoicedevice.d.ts.map