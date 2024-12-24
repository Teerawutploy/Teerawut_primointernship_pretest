"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    let i = 0, j = 0, k = collection_3.length - 1; //use i,j,k for as the temp number for looping   
    let sortnumber = []; //for collect number after sort
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        const value1 = i < collection_1.length ? collection_1[i] : Infinity; //use val1 for collect data from col1 and checking that not out of range array
        const value2 = j < collection_2.length ? collection_2[j] : Infinity; //use val2 for collect data from col2 and checking that not out of range array
        const value3 = k >= 0 ? collection_3[k] : Infinity; //use val3 for collect data from col3 and checking that not out of range array
        if (value1 <= value2 && value1 <= value3) {
            sortnumber.push(value1);
            i++;
        }
        else if (value2 <= value1 && value2 <= value3) {
            sortnumber.push(value2);
            j++;
        }
        else {
            sortnumber.push(value3);
            k--;
        }
    }
    return sortnumber;
}
//example for checking code can
const collection_1 = [1, 3, 5, 7];
const collection_2 = [2, 4, 6, 8];
const collection_3 = [9, 7, 5, 3];
const result = merge(collection_1, collection_2, collection_3);
console.log("Merged and Sorted Array:", result);
