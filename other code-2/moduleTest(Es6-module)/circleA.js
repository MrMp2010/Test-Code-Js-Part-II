const _radius = new WeakMap();

export class Circle { // اگر از export defult  استفاده کنیم
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log("Circle with radius: " + _radius.get(this));
    }
}

