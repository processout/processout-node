import ProcessOut = require('./processout');
declare class InvoiceDetail {
    private client;
    /**
     * Name of the invoice detail
     * @type {string}
     */
    private name;
    /**
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @type {string}
     */
    private type;
    /**
     * Amount represented by the invoice detail
     * @type {string}
     */
    private amount;
    /**
     * Quantity of items represented by the invoice detail
     * @type {number}
     */
    private quantity;
    /**
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Reference of the product
     * @type {string}
     */
    private reference;
    /**
     * Description of the invoice detail
     * @type {string}
     */
    private description;
    /**
     * Brand of the product
     * @type {string}
     */
    private brand;
    /**
     * Model of the product
     * @type {string}
     */
    private model;
    /**
     * Discount amount represented by the invoice detail
     * @type {string}
     */
    private discountAmount;
    /**
     * Condition of the product
     * @type {string}
     */
    private condition;
    /**
     * Marketplace merchant of the invoice detail
     * @type {string}
     */
    private marketplaceMerchant;
    /**
     * Define whether or not the marketplace merchant is a business
     * @type {boolean}
     */
    private marketplaceMerchantIsBusiness;
    /**
     * Date at which the merchant was created
     * @type {string}
     */
    private marketplaceMerchantCreatedAt;
    /**
     * Category of the product
     * @type {string}
     */
    private category;
    /**
     * InvoiceDetail constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceDetail);
    getProcessOutObjectClass(): string;
    /**
     * Get Name
     * Name of the invoice detail
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setName(val: string): InvoiceDetail;
    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setType(val: string): InvoiceDetail;
    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setAmount(val: string): InvoiceDetail;
    /**
     * Get Quantity
     * Quantity of items represented by the invoice detail
     * @return {number}
     */
    getQuantity(): number;
    /**
     * Set Quantity
     * Quantity of items represented by the invoice detail
     * @param {number} val
     * @return {InvoiceDetail}
     */
    setQuantity(val: number): InvoiceDetail;
    /**
     * Get Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {InvoiceDetail}
     */
    setMetadata(val: any): InvoiceDetail;
    /**
     * Get Reference
     * Reference of the product
     * @return {string}
     */
    getReference(): string;
    /**
     * Set Reference
     * Reference of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setReference(val: string): InvoiceDetail;
    /**
     * Get Description
     * Description of the invoice detail
     * @return {string}
     */
    getDescription(): string;
    /**
     * Set Description
     * Description of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setDescription(val: string): InvoiceDetail;
    /**
     * Get Brand
     * Brand of the product
     * @return {string}
     */
    getBrand(): string;
    /**
     * Set Brand
     * Brand of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setBrand(val: string): InvoiceDetail;
    /**
     * Get Model
     * Model of the product
     * @return {string}
     */
    getModel(): string;
    /**
     * Set Model
     * Model of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setModel(val: string): InvoiceDetail;
    /**
     * Get DiscountAmount
     * Discount amount represented by the invoice detail
     * @return {string}
     */
    getDiscountAmount(): string;
    /**
     * Set DiscountAmount
     * Discount amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setDiscountAmount(val: string): InvoiceDetail;
    /**
     * Get Condition
     * Condition of the product
     * @return {string}
     */
    getCondition(): string;
    /**
     * Set Condition
     * Condition of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setCondition(val: string): InvoiceDetail;
    /**
     * Get MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @return {string}
     */
    getMarketplaceMerchant(): string;
    /**
     * Set MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchant(val: string): InvoiceDetail;
    /**
     * Get MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @return {boolean}
     */
    getMarketplaceMerchantIsBusiness(): boolean;
    /**
     * Set MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @param {boolean} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchantIsBusiness(val: boolean): InvoiceDetail;
    /**
     * Get MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @return {string}
     */
    getMarketplaceMerchantCreatedAt(): string;
    /**
     * Set MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchantCreatedAt(val: string): InvoiceDetail;
    /**
     * Get Category
     * Category of the product
     * @return {string}
     */
    getCategory(): string;
    /**
     * Set Category
     * Category of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setCategory(val: string): InvoiceDetail;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDetail}
     */
    fillWithData(data: any): InvoiceDetail;
}
export = InvoiceDetail;
//# sourceMappingURL=invoicedetail.d.ts.map