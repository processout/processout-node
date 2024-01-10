// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CategoryErrorCodes {
    private client: ProcessOut = null;

    /**
     * Generic error codes.
     * @type {any}
     */
    private generic: any = null;

    /**
     * Service related error codes.
     * @type {any}
     */
    private service: any = null;

    /**
     * Gateway related error codes.
     * @type {any}
     */
    private gateway: any = null;

    /**
     * Card related error codes.
     * @type {any}
     */
    private card: any = null;

    /**
     * Check related error codes.
     * @type {any}
     */
    private check: any = null;

    /**
     * Shipping related error codes.
     * @type {any}
     */
    private shipping: any = null;

    /**
     * Customer related error codes.
     * @type {any}
     */
    private customer: any = null;

    /**
     * Payment related error codes.
     * @type {any}
     */
    private payment: any = null;

    /**
     * Refund related error codes.
     * @type {any}
     */
    private refund: any = null;

    /**
     * Wallet related error codes.
     * @type {any}
     */
    private wallet: any = null;

    /**
     * Request related error codes.
     * @type {any}
     */
    private request: any = null;

    /**
     * CategoryErrorCodes constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CategoryErrorCodes) {
        if (typeof client === 'undefined')
            throw new Error("The CategoryErrorCodes object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCategoryErrorCodes()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CategoryErrorCodes";
    }

    /**
     * Get Generic
     * Generic error codes.
     * @return {any}
     */
    public getGeneric(): any {
        return this.generic;
    }

    /**
     * Set Generic
     * Generic error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setGeneric(val: any): CategoryErrorCodes {
        this.generic = val;
        return this;
    }

    /**
     * Get Service
     * Service related error codes.
     * @return {any}
     */
    public getService(): any {
        return this.service;
    }

    /**
     * Set Service
     * Service related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setService(val: any): CategoryErrorCodes {
        this.service = val;
        return this;
    }

    /**
     * Get Gateway
     * Gateway related error codes.
     * @return {any}
     */
    public getGateway(): any {
        return this.gateway;
    }

    /**
     * Set Gateway
     * Gateway related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setGateway(val: any): CategoryErrorCodes {
        this.gateway = val;
        return this;
    }

    /**
     * Get Card
     * Card related error codes.
     * @return {any}
     */
    public getCard(): any {
        return this.card;
    }

    /**
     * Set Card
     * Card related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setCard(val: any): CategoryErrorCodes {
        this.card = val;
        return this;
    }

    /**
     * Get Check
     * Check related error codes.
     * @return {any}
     */
    public getCheck(): any {
        return this.check;
    }

    /**
     * Set Check
     * Check related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setCheck(val: any): CategoryErrorCodes {
        this.check = val;
        return this;
    }

    /**
     * Get Shipping
     * Shipping related error codes.
     * @return {any}
     */
    public getShipping(): any {
        return this.shipping;
    }

    /**
     * Set Shipping
     * Shipping related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setShipping(val: any): CategoryErrorCodes {
        this.shipping = val;
        return this;
    }

    /**
     * Get Customer
     * Customer related error codes.
     * @return {any}
     */
    public getCustomer(): any {
        return this.customer;
    }

    /**
     * Set Customer
     * Customer related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setCustomer(val: any): CategoryErrorCodes {
        this.customer = val;
        return this;
    }

    /**
     * Get Payment
     * Payment related error codes.
     * @return {any}
     */
    public getPayment(): any {
        return this.payment;
    }

    /**
     * Set Payment
     * Payment related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setPayment(val: any): CategoryErrorCodes {
        this.payment = val;
        return this;
    }

    /**
     * Get Refund
     * Refund related error codes.
     * @return {any}
     */
    public getRefund(): any {
        return this.refund;
    }

    /**
     * Set Refund
     * Refund related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setRefund(val: any): CategoryErrorCodes {
        this.refund = val;
        return this;
    }

    /**
     * Get Wallet
     * Wallet related error codes.
     * @return {any}
     */
    public getWallet(): any {
        return this.wallet;
    }

    /**
     * Set Wallet
     * Wallet related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setWallet(val: any): CategoryErrorCodes {
        this.wallet = val;
        return this;
    }

    /**
     * Get Request
     * Request related error codes.
     * @return {any}
     */
    public getRequest(): any {
        return this.request;
    }

    /**
     * Set Request
     * Request related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    public setRequest(val: any): CategoryErrorCodes {
        this.request = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CategoryErrorCodes}
     */
    public fillWithData(data: any): CategoryErrorCodes {
        if (data["generic"])
            this.setGeneric(data["generic"]);
        if (data["service"])
            this.setService(data["service"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["check"])
            this.setCheck(data["check"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["payment"])
            this.setPayment(data["payment"]);
        if (data["refund"])
            this.setRefund(data["refund"]);
        if (data["wallet"])
            this.setWallet(data["wallet"]);
        if (data["request"])
            this.setRequest(data["request"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "generic": this.getGeneric(),
            "service": this.getService(),
            "gateway": this.getGateway(),
            "card": this.getCard(),
            "check": this.getCheck(),
            "shipping": this.getShipping(),
            "customer": this.getCustomer(),
            "payment": this.getPayment(),
            "refund": this.getRefund(),
            "wallet": this.getWallet(),
            "request": this.getRequest(),
        };
    }

    
}
export = CategoryErrorCodes;
