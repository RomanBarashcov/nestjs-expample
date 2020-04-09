
export class DataMapper <T, U> implements IDataMapper <T, U> {
    
    constructor(private from: T, private to: U) {}

    executeMap(): U {

        let fromProperties = Object.getOwnPropertyNames(this.from);
        let toProperties = Object.getOwnPropertyNames(this.to);

        if(fromProperties.length != toProperties.length) throw "Mapping Error: Object properties are not equals";

        for(let i = 0; i <= fromProperties.length - 1; i++) {

            if(fromProperties[i] !== toProperties[i]) throw "Mapping Error: Incorect property names"
            this.to[toProperties[i]] = this.from[fromProperties[i]];

        }

        return this.to;
    }

}