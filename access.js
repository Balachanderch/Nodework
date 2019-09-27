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
var su = /** @class */ (function () {
    function su() {
        this.a = 10;
        this.b = "hello";
    }
    return su;
}());
var sp = /** @class */ (function (_super) {
    __extends(sp, _super);
    function sp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sp;
}(su));
var s = new sp();
console.log(s.b);
