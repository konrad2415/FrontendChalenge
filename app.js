// Abstract class Vehicle can't be intantiate...
// Only defines standard Vehicle common characteristics for 

class Vehicle {
    constructor() {
        // Be shure this won't be instanced It will work as abstract
        if (this.constructor === Vehicle) {
            throw new TypeError('Abstract class "Vehicle" cannot be instantiated directly.');
        }
        if (this.schema === undefined) {
            throw new TypeError('Classes extending the Vehicle abstract class');
        }


    }