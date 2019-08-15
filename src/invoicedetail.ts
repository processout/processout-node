// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceDetail {
    private client: ProcessOut = null;

    /**
     * Name of the invoice detail
     * @type {string}
     */
    private name: string = null;

    /**
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @type {string}
     */
    private type: string = null;

    /**
     * Amount represented by the invoice detail
     * @type {string}
     */
    private amount: string = null;

    /**
     * Quantity of items represented by the invoice detail
     * @type {number}
     */
    private quantity: number = null;

    /**
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Reference of the product
     * @type {string}
     */
    private reference: string = null;

    /**
     * Description of the invoice detail
     * @type {string}
     */
    private description: string = null;

    /**
     * Brand of the product
     * @type {string}
     */
    private brand: string = null;

    /**
     * Model of the product
     * @type {string}
     */
    private model: string = null;

    /**
     * Discount amount represented by the invoice detail
     * @type {string}
     */
    private discountAmount: string = null;

    /**
     * Condition of the product
     * @type {string}
     */
    private condition: string = null;

    /**
     * Marketplace merchant of the invoice detail
     * @type {string}
     */
    private marketplaceMerchant: string = null;

    /**
     * Define whether or not the marketplace merchant is a business
     * @type {boolean}
     */
    private marketplaceMerchantIsBusiness: boolean = null;

    /**
     * Date at which the merchant was created
     * @type {string}
     */
    private marketplaceMerchantCreatedAt: string = null;

    /**
     * Category of the product
     * @type {string}
     */
    private category: string = null;

    /**
     * InvoiceDetail constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceDetail) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDetail object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDetail()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceDetail";
    }

    /**
     * Get Name
     * Name of the invoice detail
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setName(val: string): InvoiceDetail {
        this.name = val;
        return this;
    }

    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setType(val: string): InvoiceDetail {
        this.type = val;
        return this;
    }

    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setAmount(val: string): InvoiceDetail {
        this.amount = val;
        return this;
    }

    /**
     * Get Quantity
     * Quantity of items represented by the invoice detail
     * @return {number}
     */
    public getQuantity(): number {
        return this.quantity;
    }

    /**
     * Set Quantity
     * Quantity of items represented by the invoice detail
     * @param {number} val
     * @return {InvoiceDetail}
     */
    public setQuantity(val: number): InvoiceDetail {
        this.quantity = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {InvoiceDetail}
     */
    public setMetadata(val: any): InvoiceDetail {
        this.metadata = val;
        return this;
    }

    /**
     * Get Reference
     * Reference of the product
     * @return {string}
     */
    public getReference(): string {
        return this.reference;
    }

    /**
     * Set Reference
     * Reference of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setReference(val: string): InvoiceDetail {
        this.reference = val;
        return this;
    }

    /**
     * Get Description
     * Description of the invoice detail
     * @return {string}
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Set Description
     * Description of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setDescription(val: string): InvoiceDetail {
        this.description = val;
        return this;
    }

    /**
     * Get Brand
     * Brand of the product
     * @return {string}
     */
    public getBrand(): string {
        return this.brand;
    }

    /**
     * Set Brand
     * Brand of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setBrand(val: string): InvoiceDetail {
        this.brand = val;
        return this;
    }

    /**
     * Get Model
     * Model of the product
     * @return {string}
     */
    public getModel(): string {
        return this.model;
    }

    /**
     * Set Model
     * Model of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setModel(val: string): InvoiceDetail {
        this.model = val;
        return this;
    }

    /**
     * Get DiscountAmount
     * Discount amount represented by the invoice detail
     * @return {string}
     */
    public getDiscountAmount(): string {
        return this.discountAmount;
    }

    /**
     * Set DiscountAmount
     * Discount amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setDiscountAmount(val: string): InvoiceDetail {
        this.discountAmount = val;
        return this;
    }

    /**
     * Get Condition
     * Condition of the product
     * @return {string}
     */
    public getCondition(): string {
        return this.condition;
    }

    /**
     * Set Condition
     * Condition of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setCondition(val: string): InvoiceDetail {
        this.condition = val;
        return this;
    }

    /**
     * Get MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @return {string}
     */
    public getMarketplaceMerchant(): string {
        return this.marketplaceMerchant;
    }

    /**
     * Set MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setMarketplaceMerchant(val: string): InvoiceDetail {
        this.marketplaceMerchant = val;
        return this;
    }

    /**
     * Get MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @return {boolean}
     */
    public getMarketplaceMerchantIsBusiness(): boolean {
        return this.marketplaceMerchantIsBusiness;
    }

    /**
     * Set MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @param {boolean} val
     * @return {InvoiceDetail}
     */
    public setMarketplaceMerchantIsBusiness(val: boolean): InvoiceDetail {
        this.marketplaceMerchantIsBusiness = val;
        return this;
    }

    /**
     * Get MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @return {string}
     */
    public getMarketplaceMerchantCreatedAt(): string {
        return this.marketplaceMerchantCreatedAt;
    }

    /**
     * Set MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setMarketplaceMerchantCreatedAt(val: string): InvoiceDetail {
        this.marketplaceMerchantCreatedAt = val;
        return this;
    }

    /**
     * Get Category
     * Category of the product
     * @return {string}
     */
    public getCategory(): string {
        return this.category;
    }

    /**
     * Set Category
     * Category of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    public setCategory(val: string): InvoiceDetail {
        this.category = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDetail}
     */
    public fillWithData(data: any): InvoiceDetail {
        if (data["name"])
            this.setName(data["name"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["quantity"])
            this.setQuantity(data["quantity"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["reference"])
            this.setReference(data["reference"]);
        if (data["description"])
            this.setDescription(data["description"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["model"])
            this.setModel(data["model"]);
        if (data["discount_amount"])
            this.setDiscountAmount(data["discount_amount"]);
        if (data["condition"])
            this.setCondition(data["condition"]);
        if (data["marketplace_merchant"])
            this.setMarketplaceMerchant(data["marketplace_merchant"]);
        if (data["marketplace_merchant_is_business"])
            this.setMarketplaceMerchantIsBusiness(data["marketplace_merchant_is_business"]);
        if (data["marketplace_merchant_created_at"])
            this.setMarketplaceMerchantCreatedAt(data["marketplace_merchant_created_at"]);
        if (data["category"])
            this.setCategory(data["category"]);
        return this;
    }

    
}
export = InvoiceDetail;
