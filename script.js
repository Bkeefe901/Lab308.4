

// Part 1: Refactoring Old Code


// We need a loop that cycles through every character in the str.

// We need a 2d array where each row is an array within the array of the entire csv

// The 'row' array should hold 4 items. We push each comma seperated value until we reach a \n
// The 'row' array can be recycled after pushing to the main array.

// We need a string to hold the characters for each cell that can also be recycled after each , we push this to the 'row.

console.log(`This is part 1////////////////////////////`);

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26;`
 
let row = [];
let ourArray = []; // second array to hold the row arrays
let items = ``;

for(let i = 0; i < str.length; i++){ // loop cycles through every character in str
    if(str[i] == `\n`){ 
        row.push(items); 
        ourArray.push(row); 
        row = [];
        items = ``;
    }
    else if(str[i] == `,`){
        row.push(items);
        items = ``;
    }
    else{
        if(str.length - 1 == i){
            row.push(items);
            ourArray.push(row);
        }
        else{
            items += str[i];}
        }

}

console.log(ourArray);


// Part 2: Expanding Functionality
console.log(`This is Part 2////////////////////////`);

// Begin with the following task:

// // Declare a variable that stores the number of columns in each row of data within the CSV.

let numColumns = ourArray[0].length;
console.log(numColumns);

// // Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.


// the code I did for part 1 was already optimized for any number of columns so it works for part 2:

row = [];
ourArray = [];
items = ``;
 

for(let i = 0; i < str.length; i++){
    if(str[i] == `\n`){
        row.push(items);
        ourArray.push(row);
        row = [];
        items = ``;
    }
    else if(str[i] == `,`){
        row.push(items);
        items = ``;
    }
    else{
        if(str.length - 1 == i){
            row.push(items);
            ourArray.push(row);
            console.log(ourArray);
        }
        else{
            items += str[i];}
        }

}






// Part 3: Transforming Data



console.log(`This is Part 3////////////////////////`);


// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
 
// Basic Outline
// // Remove first array in ourArray using .shift and store in new variable called 'Keys'
// // convert all the strings in the array 'Keys' to lower case and save it to array variable 'keys (lower case k) using forEach method

let Keys = ourArray.shift(); // removes first array in ourArray and stores that array in new variable

let keys = []; // created variable for lower case 

Keys.forEach(element => {
    keys.push(element.toLowerCase())  //converts to lowercase
});

console.log("keys are: ", keys); // test

// // Final output will be 4 objects inside an array
// // // Create an object that has the values from 'keys' as the keys and set the values to; ''

let rowObject = {}; // initializing the basic object

// // // // each object has the keys made up of items from first array in 'ourArray'
let keyItem = '';
for(let i = 0; i < keys.length; i++){ // loop to pull values from keys and creates key:value pairs in rowObject
    keyItem = keys[i];
    rowObject[keyItem] = '';
}
console.log(`Test: `, rowObject); //test


// // // // declare array variable that hold our objects and be the final output

let objectArray = []; // initialize the Array to hold our objects

// // // // Flaten ourArray and save to new variable and create loop that iterates through it to fill the vaules of the object and push it to 'object Array' everytime the object gets filled with values

let flatArray = ourArray.flat();


let item = ''; 

let a = 0; //initialize counter for item number in objects



for(let i = 0; i < flatArray.length; i++){ //loop to iterate through each item in flatArray
    if(a == keys.length){ //condition to see if the number of items stored in rowObject = keys.length
        objectArray.push(rowObject);
        a = 0;
        i = i - 1;
    }
    else{
        item = keys[a];
        rowObject[item] = flatArray[i];
        a++;

    }

}
console.log(`The object array is: ${objectArray}`);

// console.log("counterArray length is ",  a);
// console.log("objectArray is ",  objectArray);
// console.log("rowObject is ",  rowObject);
// console.log("objectArray is ", objectArray);
// console.log(objectArray.push(rowObject));
// // // // Must iterate through ourArray to grab items from other arrays to grab the values
// // // // // Should this use one loop or a different loop






//////////////////////////////////////////////////////////////////////////////////////////////


objectArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
                { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
                { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
                { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

// Part 4: Sorting and Manipulating Data

console.log(`This is Part 4////////////////////////`);

// // Using array methods, accomplish the following tasks, in order upon the result of Part 3:

// // Remove the last element from the sorted array.

objectArray.pop();

console.log(objectArray);

// // Insert the following object at index 1:
// // // { id: "48", name: "Barry", occupation: "Runner", age: "25" }

newItem = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objectArray.splice(1, 0, newItem);

console.log(objectArray);

// // Add the following object to the end of the array:
// // // { id: "7", name: "Bilbo", occupation: "None", age: "111" }

lastItem = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objectArray.push(lastItem);

console.log(objectArray);

// // Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

objectArrayLength = objectArray.length;

let ageSum = 0;
let ageString = '';
let avgAge = 0;

for(let i = 0; i <= objectArrayLength; i++){
    if(i < objectArrayLength){
        ageString = objectArray[i].age;
        // converts the age value from a string into a integer and adds it to ageSum
        ageSum += parseInt(ageString);
    }
    else{
        avgAge = ageSum / objectArrayLength;
    }

}
console.log(`The average age is: ${avgAge}`);


// Part 5: Full Circle


console.log(`This is Part 5////////////////////////`);

// // As a final task, transform the final set of data back into CSV format.

// // Basic Outline:
// // // 1) Remove the keys out using a loop and add them to variable (csvString)
// // // 2) Create another loop that iterates through each object in the array and pulls the value for each key and concatenates it to csvString
// // // // a) Maybe run a loop to turn each objects values into an array. then flat() then add to string.

// 1)

let csvString = ``;
let sampleObject = objectArray[0];
let keyArray = Object.keys(sampleObject);

for(let i = 0; i <= objectArrayLength; i++){
    if(i < objectArrayLength){
        csvString = keyArray.join(`,`);

    }
    else{
        csvString += `\n`;
    }
}

console.log(csvString);

// 2)
//
let valuesArray = [];

for(let i = 0; i < objectArrayLength; i++){
    valuesArray.push(Object.values(objectArray[i]));
}
console.log(valuesArray);

// use flat here to turn valuesArray into a single 1 dimensional array 'flatendArray', then use a loop to splice in '\n' everytime keyArray.length % i == 0; except at the end.

let flatendArray = valuesArray.flat()
console.log(flatendArray);
let counter = 1;

for(let i = 0; i < flatendArray.length; i++){
    if((i + counter) % keyArray.length == 0){
        flatendArray.splice((i + counter), 0, '\n');
        counter += 1;
    }
}
console.log(flatendArray.length);
console.log(flatendArray);

// let valueString = valuesArray.join(`,`);
// console.log(valueString);

// Now create loop to add remove ',' and splice in \n every keyArray.length except at the end
// for(let i = 0; i < keyArray.length, i++){

// }


// for(let i = 0; i < objectArrayLength; i++){
//      if(i < objectArrayLength){
//         valueString = valuesArray.join(`,`);

//     }
//     else{
//         csvString += `\n`;
//     }
// }