var MyClass = /** @class */ (function () {
    function MyClass(arr) {
        this.arr = arr;
    }
    MyClass.prototype.disp = function () {
        return this.arr;
    };
    return MyClass;
}());
var d = [{ name: "hari", id: 2 }, { name: "sanjeev", id: 3 }];
var m = new MyClass(d);
console.log(m.disp());
