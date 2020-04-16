
export class DataMapper <T, U> implements IDataMapper <T, U> {
    
    constructor(private from: T, private to: U) {}

    executeMap(): U | U[] {

        if(Array.isArray(this.from) 
        && Array.isArray(this.to)) {

            return this.executeMapArrObj(this.from, this.to);
        
        }

        return this.executeMapObj(this.from, this.to);

    };

    executeMapObj(fromObj, toObj): U {
 
        let fromProperties = Object.getOwnPropertyNames(fromObj);
        let toProperties = Object.getOwnPropertyNames(toObj);

        //if(fromProperties.length != toProperties.length) throw "Mapping Error: Object properties are not equals";

        for(let i = 0; i <= fromProperties.length - 1; i++) {

            let prop = toProperties.find(p => p === fromProperties[i]);
            if(prop) {
                toObj[toProperties[i]] = fromObj[fromProperties[i]];   
            }

        }

        return toObj;

    };

    executeMapArrObj(fromObj, toObj): U[] {

        let newUArr: U[] = [];

        for(let i = 0; i <= fromObj.length - 1; i++) {
            let newObj: U = this.executeMapObj(fromObj[i], {...toObj[0]});
            newUArr.push(newObj);
        }

        return newUArr;
        
    };

}