"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProcessOutNetworkError = /** @class */ (function (_super) {
    __extends(ProcessOutNetworkError, _super);
    function ProcessOutNetworkError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = "ProcessOutNetworkError";
        return _this;
    }
    return ProcessOutNetworkError;
}(Error));
module.exports = ProcessOutNetworkError;
//# sourceMappingURL=processoutnetworkerror.js.map