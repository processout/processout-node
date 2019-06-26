interface ErrorConstructor {
    captureStackTrace(thisArg: any, func: any): void
}

class ProcessOutError extends Error {
    public code: string;
    
    constructor(code: string, message: string) {
        super(message);
        this.code = code;

        this.name = "ProcessOutError";
    }
}
export = ProcessOutError;
