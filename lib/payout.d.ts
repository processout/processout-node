import Promise = require("promise");
import ProcessOut = require("./processout");
declare class Payout {
    private client;
    /**
     * ID of the payout
     * @type {string}
     */
    private id;
    /**
     * Project to which the payout belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the payout belongs
     * @type {string}
     */
    private projectId;
    /**
     * Status of the payout
     * @type {string}
     */
    private status;
    /**
     * Amount of the payout
     * @type {string}
     */
    private amount;
    /**
     * Currency of the payout
     * @type {string}
     */
    private currency;
    /**
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Name of the bank to which the payout was issued, if available
     * @type {string}
     */
    private bankName;
    /**
     * Summary of the bank to which the payout was issued, if available
     * @type {string}
     */
    private bankSummary;
    /**
     * Number of completed transactions linked to the payout, if available
     * @type {number}
     */
    private salesTransactions;
    /**
     * Volume of completed transactions linked to the payout, if available
     * @type {string}
     */
    private salesVolume;
    /**
     * Number of refunded transactions linked to the payout, if available
     * @type {number}
     */
    private refundsTransactions;
    /**
     * Volume of refunded transactions linked to the payout, if available
     * @type {string}
     */
    private refundsVolume;
    /**
     * Number of chargebacked transactions linked to the payout, if available
     * @type {number}
     */
    private chargebacksTransactions;
    /**
     * Volume of chargebacked transactions linked to the payout, if available
     * @type {string}
     */
    private chargebacksVolume;
    /**
     * Fees linked to the payout, if available
     * @type {string}
     */
    private fees;
    /**
     * Adjustments linked to the payout, if available
     * @type {string}
     */
    private adjustments;
    /**
     * Reserve kept on the payout, if available
     * @type {string}
     */
    private reserve;
    /**
     * Date at which the payout was settled
     * @type {string}
     */
    private settledAt;
    /**
     * Date at which the payout was created
     * @type {string}
     */
    private createdAt;
    /**
     * Payout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Payout);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the payout
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the payout
     * @param {string} val
     * @return {Payout}
     */
    setId(val: string): Payout;
    /**
     * Get Project
     * Project to which the payout belongs
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the payout belongs
     * @param {any} val
     * @return {Payout}
     */
    setProject(val: any): Payout;
    /**
     * Get ProjectId
     * ID of the project to which the payout belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the payout belongs
     * @param {string} val
     * @return {Payout}
     */
    setProjectId(val: string): Payout;
    /**
     * Get Status
     * Status of the payout
     * @return {string}
     */
    getStatus(): string;
    /**
     * Set Status
     * Status of the payout
     * @param {string} val
     * @return {Payout}
     */
    setStatus(val: string): Payout;
    /**
     * Get Amount
     * Amount of the payout
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the payout
     * @param {string} val
     * @return {Payout}
     */
    setAmount(val: string): Payout;
    /**
     * Get Currency
     * Currency of the payout
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the payout
     * @param {string} val
     * @return {Payout}
     */
    setCurrency(val: string): Payout;
    /**
     * Get Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Payout}
     */
    setMetadata(val: any): Payout;
    /**
     * Get BankName
     * Name of the bank to which the payout was issued, if available
     * @return {string}
     */
    getBankName(): string;
    /**
     * Set BankName
     * Name of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    setBankName(val: string): Payout;
    /**
     * Get BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @return {string}
     */
    getBankSummary(): string;
    /**
     * Set BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    setBankSummary(val: string): Payout;
    /**
     * Get SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @return {number}
     */
    getSalesTransactions(): number;
    /**
     * Set SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    setSalesTransactions(val: number): Payout;
    /**
     * Get SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @return {string}
     */
    getSalesVolume(): string;
    /**
     * Set SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setSalesVolume(val: string): Payout;
    /**
     * Get RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @return {number}
     */
    getRefundsTransactions(): number;
    /**
     * Set RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    setRefundsTransactions(val: number): Payout;
    /**
     * Get RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @return {string}
     */
    getRefundsVolume(): string;
    /**
     * Set RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setRefundsVolume(val: string): Payout;
    /**
     * Get ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @return {number}
     */
    getChargebacksTransactions(): number;
    /**
     * Set ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    setChargebacksTransactions(val: number): Payout;
    /**
     * Get ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @return {string}
     */
    getChargebacksVolume(): string;
    /**
     * Set ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setChargebacksVolume(val: string): Payout;
    /**
     * Get Fees
     * Fees linked to the payout, if available
     * @return {string}
     */
    getFees(): string;
    /**
     * Set Fees
     * Fees linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setFees(val: string): Payout;
    /**
     * Get Adjustments
     * Adjustments linked to the payout, if available
     * @return {string}
     */
    getAdjustments(): string;
    /**
     * Set Adjustments
     * Adjustments linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setAdjustments(val: string): Payout;
    /**
     * Get Reserve
     * Reserve kept on the payout, if available
     * @return {string}
     */
    getReserve(): string;
    /**
     * Set Reserve
     * Reserve kept on the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setReserve(val: string): Payout;
    /**
     * Get SettledAt
     * Date at which the payout was settled
     * @return {string}
     */
    getSettledAt(): string;
    /**
     * Set SettledAt
     * Date at which the payout was settled
     * @param {string} val
     * @return {Payout}
     */
    setSettledAt(val: string): Payout;
    /**
     * Get CreatedAt
     * Date at which the payout was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the payout was created
     * @param {string} val
     * @return {Payout}
     */
    setCreatedAt(val: string): Payout;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Payout}
     */
    fillWithData(data: any): Payout;
    /**
     * Get all the items linked to the payout.

     * @param {any} options
     * @return {array}
     */
    fetchItems(options: any): Promise<any>;
    /**
     * Get all the payouts.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Find a payout by its ID.
     * @param string payoutId
     * @param {any} options
     * @return {this}
     */
    find(payoutId: any, options: any): Promise<any>;
}
export = Payout;
//# sourceMappingURL=payout.d.ts.map