import Promise = require('promise');
import ProcessOut = require('./processout');
import * as p from '.';
declare class Product {
    private client;
    /**
     * ID of the product
     * @type {string}
     */
    private id;
    /**
     * Project to which the product belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the product belongs
     * @type {string}
     */
    private projectId;
    /**
     * URL to which you may redirect your customer to proceed with the payment
     * @type {string}
     */
    private url;
    /**
     * Name of the product
     * @type {string}
     */
    private name;
    /**
     * Amount of the product
     * @type {string}
     */
    private amount;
    /**
     * Currency of the product
     * @type {string}
     */
    private currency;
    /**
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * URL where the customer will be redirected upon payment
     * @type {string}
     */
    private returnUrl;
    /**
     * URL where the customer will be redirected if the paymen was canceled
     * @type {string}
     */
    private cancelUrl;
    /**
     * Define whether or not the product is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the product was created
     * @type {string}
     */
    private createdAt;
    /**
     * Product constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Product);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the product
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the product
     * @param {string} val
     * @return {Product}
     */
    setId(val: string): Product;
    /**
     * Get Project
     * Project to which the product belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the product belongs
     * @param {p.Project} val
     * @return {Product}
     */
    setProject(val: p.Project): Product;
    /**
     * Get ProjectId
     * ID of the project to which the product belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the product belongs
     * @param {string} val
     * @return {Product}
     */
    setProjectId(val: string): Product;
    /**
     * Get Url
     * URL to which you may redirect your customer to proceed with the payment
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the payment
     * @param {string} val
     * @return {Product}
     */
    setUrl(val: string): Product;
    /**
     * Get Name
     * Name of the product
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the product
     * @param {string} val
     * @return {Product}
     */
    setName(val: string): Product;
    /**
     * Get Amount
     * Amount of the product
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the product
     * @param {string} val
     * @return {Product}
     */
    setAmount(val: string): Product;
    /**
     * Get Currency
     * Currency of the product
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the product
     * @param {string} val
     * @return {Product}
     */
    setCurrency(val: string): Product;
    /**
     * Get Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Product}
     */
    setMetadata(val: any): Product;
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment
     * @return {string}
     */
    getReturnUrl(): string;
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment
     * @param {string} val
     * @return {Product}
     */
    setReturnUrl(val: string): Product;
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @return {string}
     */
    getCancelUrl(): string;
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @param {string} val
     * @return {Product}
     */
    setCancelUrl(val: string): Product;
    /**
     * Get Sandbox
     * Define whether or not the product is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the product is in sandbox environment
     * @param {boolean} val
     * @return {Product}
     */
    setSandbox(val: boolean): Product;
    /**
     * Get CreatedAt
     * Date at which the product was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the product was created
     * @param {string} val
     * @return {Product}
     */
    setCreatedAt(val: string): Product;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Product}
     */
    fillWithData(data: any): Product;
    /**
     * Create a new invoice from the product.

     * @param {any} options
     * @return {Invoice}
     */
    createInvoice(options: any): Promise<any>;
    /**
     * Get all the products.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Create a new product.
     *
     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a product by its ID.
     * @param string productId
     * @param {any} options
     * @return {this}
     */
    find(productId: any, options: any): Promise<any>;
    /**
     * Save the updated product attributes.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete the product.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Product;
//# sourceMappingURL=product.d.ts.map