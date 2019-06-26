declare class ProcessOutInternalError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export = ProcessOutInternalError;
