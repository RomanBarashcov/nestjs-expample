
export class DataMapper <T, U> implements IDataMapper <T, U> {
    
    constructor(private from: T, private to: U) {}

    executeMap(): U | U[] {

        if(Array.isArray(this.from) 
        && Array.isArray(this.to)) {

            return this.executeMapArr(this.from, this.to);
        
        }

        return this.executeMapObj(this.from, this.to);

    };

    executeMapObj(from, to): U {

        let fromProperties = Object.getOwnPropertyNames(from);
        let toProperties = Object.getOwnPropertyNames(to);

        if(fromProperties.length != toProperties.length) throw "Mapping Error: Object properties are not equals";

        for(let i = 0; i <= fromProperties.length - 1; i++) {

            if(fromProperties[i] !== toProperties[i]) throw "Mapping Error: Incorect property names"
            to[toProperties[i]] = from[fromProperties[i]];

        }

        return this.to;
    };

    executeMapArr(from, to): U[] {

        let newUArr: U[] = [];
        
        for(let i = 0; i <= 0; i++) {
            newUArr.push(this.executeMapObj(from[i], to[i]));
        }

        return newUArr;
        
    };

}