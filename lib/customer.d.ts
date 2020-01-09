import ProcessOut = require('./processout');
import * as p from '.';
declare class Customer {
    private client;
    /**
     * ID of the customer
     * @type {string}
     */
    private id;
    /**
     * Project to which the customer belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the customer belongs
     * @type {string}
     */
    private projectId;
    /**
     * Default token of the customer
     * @type {p.Token}
     */
    private defaultToken;
    /**
     * ID of the default token of the customer
     * @type {string}
     */
    private defaultTokenId;
    /**
     * List of the customer tokens
     * @type {any}
     */
    private tokens;
    /**
     * List of the customer subscriptions
     * @type {any}
     */
    private subscriptions;
    /**
     * List of the customer transactions
     * @type {any}
     */
    private transactions;
    /**
     * Customer balance. Can be positive or negative
     * @type {string}
     */
    private balance;
    /**
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @type {string}
     */
    private currency;
    /**
     * Email of the customer
     * @type {string}
     */
    private email;
    /**
     * First name of the customer
     * @type {string}
     */
    private firstName;
    /**
     * Last name of the customer
     * @type {string}
     */
    private lastName;
    /**
     * Address of the customer
     * @type {string}
     */
    private address1;
    /**
     * Secondary address of the customer
     * @type {string}
     */
    private address2;
    /**
     * City of the customer
     * @type {string}
     */
    private city;
    /**
     * State of the customer
     * @type {string}
     */
    private state;
    /**
     * ZIP code of the customer
     * @type {string}
     */
    private zip;
    /**
     * Country code of the customer (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode;
    /**
     * IP address of the customer (IPv4 or IPv6)
     * @type {string}
     */
    private ipAddress;
    /**
     * Phone number of the customer
     * @type {string}
     */
    private phoneNumber;
    /**
     * Legal document number
     * @type {string}
     */
    private legalDocument;
    /**
     * Sex of the customer
     * @type {string}
     */
    private sex;
    /**
     * Define whether or not the customer is a business
     * @type {boolean}
     */
    private isBusiness;
    /**
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the customer is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the customer was created
     * @type {string}
     */
    private createdAt;
    /**
     * Customer constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Customer);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the customer
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the customer
     * @param {string} val
     * @return {Customer}
     */
    setId(val: string): Customer;
    /**
     * Get Project
     * Project to which the customer belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the customer belongs
     * @param {p.Project} val
     * @return {Customer}
     */
    setProject(val: p.Project): Customer;
    /**
     * Get ProjectId
     * ID of the project to which the customer belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the customer belongs
     * @param {string} val
     * @return {Customer}
     */
    setProjectId(val: string): Customer;
    /**
     * Get DefaultToken
     * Default token of the customer
     * @return {p.Token}
     */
    getDefaultToken(): p.Token;
    /**
     * Set DefaultToken
     * Default token of the customer
     * @param {p.Token} val
     * @return {Customer}
     */
    setDefaultToken(val: p.Token): Customer;
    /**
     * Get DefaultTokenId
     * ID of the default token of the customer
     * @return {string}
     */
    getDefaultTokenId(): string;
    /**
     * Set DefaultTokenId
     * ID of the default token of the customer
     * @param {string} val
     * @return {Customer}
     */
    setDefaultTokenId(val: string): Customer;
    /**
     * Get Tokens
     * List of the customer tokens
     * @return {any}
     */
    getTokens(): any;
    /**
     * Set Tokens
     * List of the customer tokens
     * @param {any} val
     * @return {Customer}
     */
    setTokens(val: any): Customer;
    /**
     * Get Subscriptions
     * List of the customer subscriptions
     * @return {any}
     */
    getSubscriptions(): any;
    /**
     * Set Subscriptions
     * List of the customer subscriptions
     * @param {any} val
     * @return {Customer}
     */
    setSubscriptions(val: any): Customer;
    /**
     * Get Transactions
     * List of the customer transactions
     * @return {any}
     */
    getTransactions(): any;
    /**
     * Set Transactions
     * List of the customer transactions
     * @param {any} val
     * @return {Customer}
     */
    setTransactions(val: any): Customer;
    /**
     * Get Balance
     * Customer balance. Can be positive or negative
     * @return {string}
     */
    getBalance(): string;
    /**
     * Set Balance
     * Customer balance. Can be positive or negative
     * @param {string} val
     * @return {Customer}
     */
    setBalance(val: string): Customer;
    /**
     * Get Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @param {string} val
     * @return {Customer}
     */
    setCurrency(val: string): Customer;
    /**
     * Get Email
     * Email of the customer
     * @return {string}
     */
    getEmail(): string;
    /**
     * Set Email
     * Email of the customer
     * @param {string} val
     * @return {Customer}
     */
    setEmail(val: string): Customer;
    /**
     * Get FirstName
     * First name of the customer
     * @return {string}
     */
    getFirstName(): string;
    /**
     * Set FirstName
     * First name of the customer
     * @param {string} val
     * @return {Customer}
     */
    setFirstName(val: string): Customer;
    /**
     * Get LastName
     * Last name of the customer
     * @return {string}
     */
    getLastName(): string;
    /**
     * Set LastName
     * Last name of the customer
     * @param {string} val
     * @return {Customer}
     */
    setLastName(val: string): Customer;
    /**
     * Get Address1
     * Address of the customer
     * @return {string}
     */
    getAddress1(): string;
    /**
     * Set Address1
     * Address of the customer
     * @param {string} val
     * @return {Customer}
     */
    setAddress1(val: string): Customer;
    /**
     * Get Address2
     * Secondary address of the customer
     * @return {string}
     */
    getAddress2(): string;
    /**
     * Set Address2
     * Secondary address of the customer
     * @param {string} val
     * @return {Customer}
     */
    setAddress2(val: string): Customer;
    /**
     * Get City
     * City of the customer
     * @return {string}
     */
    getCity(): string;
    /**
     * Set City
     * City of the customer
     * @param {string} val
     * @return {Customer}
     */
    setCity(val: string): Customer;
    /**
     * Get State
     * State of the customer
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * State of the customer
     * @param {string} val
     * @return {Customer}
     */
    setState(val: string): Customer;
    /**
     * Get Zip
     * ZIP code of the customer
     * @return {string}
     */
    getZip(): string;
    /**
     * Set Zip
     * ZIP code of the customer
     * @param {string} val
     * @return {Customer}
     */
    setZip(val: string): Customer;
    /**
     * Get CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @return {string}
     */
    getCountryCode(): string;
    /**
     * Set CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Customer}
     */
    setCountryCode(val: string): Customer;
    /**
     * Get IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @return {string}
     */
    getIpAddress(): string;
    /**
     * Set IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @param {string} val
     * @return {Customer}
     */
    setIpAddress(val: string): Customer;
    /**
     * Get PhoneNumber
     * Phone number of the customer
     * @return {string}
     */
    getPhoneNumber(): string;
    /**
     * Set PhoneNumber
     * Phone number of the customer
     * @param {string} val
     * @return {Customer}
     */
    setPhoneNumber(val: string): Customer;
    /**
     * Get LegalDocument
     * Legal document number
     * @return {string}
     */
    getLegalDocument(): string;
    /**
     * Set LegalDocument
     * Legal document number
     * @param {string} val
     * @return {Customer}
     */
    setLegalDocument(val: string): Customer;
    /**
     * Get Sex
     * Sex of the customer
     * @return {string}
     */
    getSex(): string;
    /**
     * Set Sex
     * Sex of the customer
     * @param {string} val
     * @return {Customer}
     */
    setSex(val: string): Customer;
    /**
     * Get IsBusiness
     * Define whether or not the customer is a business
     * @return {boolean}
     */
    getIsBusiness(): boolean;
    /**
     * Set IsBusiness
     * Define whether or not the customer is a business
     * @param {boolean} val
     * @return {Customer}
     */
    setIsBusiness(val: boolean): Customer;
    /**
     * Get Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Customer}
     */
    setMetadata(val: any): Customer;
    /**
     * Get Sandbox
     * Define whether or not the customer is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the customer is in sandbox environment
     * @param {boolean} val
     * @return {Customer}
     */
    setSandbox(val: boolean): Customer;
    /**
     * Get CreatedAt
     * Date at which the customer was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the customer was created
     * @param {string} val
     * @return {Customer}
     */
    setCreatedAt(val: string): Customer;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Customer}
     */
    fillWithData(data: any): Customer;
    /**
     * Get the subscriptions belonging to the customer.

     * @param {any} options
     * @return {array}
     */
    fetchSubscriptions(options: any): Promise<any>;
    /**
     * Verify a customer token's card is valid.
     * @param string tokenId
     * @param {any} options
     * @return {bool}
     */
    verifyToken(tokenId: any, options: any): Promise<any>;
    /**
     * Get the customer's tokens.

     * @param {any} options
     * @return {array}
     */
    fetchTokens(options: any): Promise<any>;
    /**
     * Find a customer's token by its ID.
     * @param string tokenId
     * @param {any} options
     * @return {Token}
     */
    findToken(tokenId: any, options: any): Promise<any>;
    /**
     * Delete a customer's token by its ID.
     * @param string tokenId
     * @param {any} options
     * @return {bool}
     */
    deleteToken(tokenId: any, options: any): Promise<any>;
    /**
     * Get the transactions belonging to the customer.

     * @param {any} options
     * @return {array}
     */
    fetchTransactions(options: any): Promise<any>;
    /**
     * Get all the customers.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Create a new customer.
     *
     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a customer by its ID.
     * @param string customerId
     * @param {any} options
     * @return {this}
     */
    find(customerId: any, options: any): Promise<any>;
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete the customer.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Customer;
//# sourceMappingURL=customer.d.ts.map