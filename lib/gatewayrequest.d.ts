declare class GatewayRequest {
    private gatewayConfigurationID;
    private method;
    private url;
    private headers;
    private body;
    /**
     * Create a new gateway request abstraction object
     * @param {string} gatewayConfigurationID
     * @param {string} method
     * @param {string} url
     * @param {array} headers
     * @param {string} body
     */
    constructor(gatewayConfigurationID: string, method: string, url: string, headers: any, body: string);
    /**
     * toString returns the gateway request token generated from this object
     * @return {string}
     */
    toString(): string;
}
export = GatewayRequest;
//# sourceMappingURL=gatewayrequest.d.ts.map