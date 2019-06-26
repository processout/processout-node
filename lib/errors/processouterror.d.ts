declare class ProcessOutError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export = ProcessOutError;
