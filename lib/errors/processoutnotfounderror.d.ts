declare class ProcessOutNotFoundError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export = ProcessOutNotFoundError;
