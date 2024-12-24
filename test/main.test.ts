import { merge } from  "../src/merge_function";

describe("merge function", () => {


    test("TEST CASE 1 : All array (col1, col2, col3) are correctly sorted", () => {
      const collection_1 = [1, 3, 5, 7];
      const collection_2 = [2, 4, 6, 8];
      const collection_3 = [9, 7, 5, 3];
  
      const result = merge(collection_1, collection_2, collection_3);
  
      expect(result).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9]);
    });
  
    test("TEST CASE 2: All collection are empty", () => {
      const collection_1: number[] = [];
      const collection_2: number[] = [];
      const collection_3: number[] = [];
  
      const result = merge(collection_1, collection_2, collection_3);
  
      expect(result).toEqual([]);
    });
  
    test("TEST CASE 3: Some collections have single-element arrays", () => {
      const collection_1 = [1];
      const collection_2 = [2, 5, 7];
      const collection_3 = [3];
  
      const result = merge(collection_1, collection_2, collection_3);
  
      expect(result).toEqual([1, 2, 3, 5, 7]);
    });

    test("TEST CASE 4: Some collections have negative number", () => {  //even the question 10 given collection min = 0 but we can test this situation.
      const collection_1 = [-3, -2, 5, 7];
      const collection_2 = [-2, 4, 6, 8];
      const collection_3 = [9, 7, 5, -3];
  
      const result = merge(collection_1, collection_2, collection_3);
  
      expect(result).toEqual([-3, -3, -2, -2, 4, 5, 5, 6, 7, 7, 8, 9]);
    });
    
    test("TEST CASE 4: Some collections have negative number and some collections have empty", () => { 
      const collection_1 = [-3, -2, 5, 7];
      const collection_2: number[] = [];
      const collection_3 = [9, 7, 5, 3];
  
      const result = merge(collection_1, collection_2, collection_3);
  
      expect(result).toEqual([-3, -2, 3, 5, 5, 7, 7, 9]);
    });
    
  });