declare class ProcessOutAuthenticationError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export = ProcessOutAuthenticationError;
