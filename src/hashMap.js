import {Node} from "./node.js";

export class HashMap{
    constructor(){
        this.arr = [];
        this.fillTheArray();
        this.loadfactor = 0.75;
        this.capacity = this.arr.length;
    }

    fillTheArray(arrLength = 16){
        // empty this.arr when doubling the capacity and then fill it
        this.arr = [];
        let head = null;
        for(let i = 0 ; i < arrLength ; i++){
            this.arr[i] = head;
        }
    }

    hash(key){
        let hashCode = 0;

        const primaryNumber = 31;
        for(let i = 0 ; i < key.length ; i++){
            hashCode = primaryNumber*hashCode + key.charCodeAt(i);
            hashCode = hashCode%this.arr.length;
        }
        
        return hashCode;
    }

    // although head variable here is different from the head in the starting head
    // we are just renaming it to head due to inacessesability of the original one
    set(key , value){
        let head = null;
        const index = this.hash(key);
        
        if(this.arr[index] === null){
            head = new Node(key , value); 
            this.arr[index] = head;
            this.growBuckets();
            return;
        }

        if(this.arr[index] !== null){
            if(step1(this.arr[index])) return;
            
            if(step2(this.arr[index])){this.growBuckets()};
            return;
        }

        function step1(object){
            if(object.key === key){
                object.value = value;
                return true;
            }

            if(object.nextNode === null) return false;

            if(object.key !== key){
                return step1(object.nextNode);
            }

        }

        function step2(object){
            if(object.nextNode === null){
                object.nextNode = new Node(key , value);
                return true;
            }

            if(object.nextNode !== null){
                return step2(object.nextNode);
            }
        }

    }

    growBuckets(){
        if(this.keys().length > this.loadfactor*this.arr.length){
            const allEntries = this.entries();
            this.fillTheArray(this.arr.length*2);
            for(let i = 0 ; i < allEntries.length ; i++){
                let key = allEntries[i][0];
                let value = allEntries[i][1];
                this.set(key , value);
            }
        }
        return;
    }

    get(key){
        const index = this.hash(key);

        if(this.arr[index] === null){
            return null;
        }

        if(this.arr[index] !== null){
            return step(this.arr[index]);
        }

        function step(object){
            if(object.key === key){
                return object.value;
            }

            if(object.nextNode === null) return null;

            if(object.key !== key){
                return step(object.nextNode);
            }
        }

    }

    has(key){
        const index = this.hash(key);

        if(this.arr[index] === null){
            return false;
        }

        if(this.arr[index] !== null){
            return step(this.arr[index]);
        }

        function step(object){
            if(object.key === key){
                return true;
            }

            if(object.nextNode === null) return false;

            if(object.key !== key){
                return step(object.nextNode);
            }
        }
    }

    remove(key){
        let head;
        if(this.has(key)){
            const index = this.hash(key);

            if(this.arr[index].key === key){
                head = this.arr[index].nextNode;
                this.arr[index] = head;
                return true;
            }
            
            step(this.arr[index]);
                
            function step(object){
                if(object.nextNode.key === key){
                    object.nextNode = object.nextNode.nextNode;
                    return true;
                }

                if(object.nextNode.key !== key){
                    return step(object.nextNode)
                }
            }

        }else {
            return false;
        }
    }

    length(){
        let total = 0;

        for(let i = 0 ; i < this.arr.length ; i++){
            if(this.arr[i] !== null){
                total += step(this.arr[i]);
                
                function step(object){
                    if(object.nextNode === null){
                        return 1;
                    }

                    if(object.nextNode !== null){
                        return 1 + step(object.nextNode);
                    }
                }

            }
        }

        return total;
    }

    clear(){
        let head = null;

        for(let i = 0 ; i < this.arr.length ; i++){
            this.arr[i] = head;
        }
    }
    
    keys(){
        let keysArray = [];

        for(let i = 0 ; i < this.arr.length ; i++){
            if(this.arr[i] !== null){
                step(this.arr[i]);

                function step(object){
                    if(object.nextNode === null){
                        keysArray.push(object.key);
                        return;
                    }

                    if(object.nextNode !== null){
                        keysArray.push(object.key);
                        return step(object.nextNode);
                    }
                }

            }
        }

        return keysArray;
    }

    values(){
        let valuesArray = [];

        for(let i = 0 ; i < this.arr.length ; i++){
            if(this.arr[i] !== null){
                step(this.arr[i]);

                function step(object){
                    if(object.nextNode === null){
                        valuesArray.push(object.value);
                        return;
                    }

                    if(object.nextNode !== null){
                        valuesArray.push(object.value);
                        return step(object.nextNode);
                    }
                }
            }
        }

        return valuesArray;
    }

    entries(){
        let entriesArray = [];

        for(let i = 0 ; i < this.arr.length ; i++){
            if(this.arr[i] !== null){
                step(this.arr[i]);

                function step(object){
                    if(object.nextNode === null){
                        fillAEntry(object);
                        return;
                    }

                    if(object.nextNode !== null){
                        fillAEntry(object);
                        return step(object.nextNode);
                    }
                }
            }
        }

        function fillAEntry(object){
            let singleEntry = [];
            singleEntry.push(object.key);
            singleEntry.push(object.value);
            entriesArray.push(singleEntry);
        }

        return entriesArray;
    }

    arrayLength(){
        console.log(this.arr.length);
    }

    displayArray(){
        console.log(this.arr);
    }
}