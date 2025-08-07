

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
    if(str[i] == `\n`){  // test for page break
        row.push(items); // pushes final item to row
        ourArray.push(row); // pushes row to ourArray
        row = []; // reset row
        items = ``; // reset item
    }
    else if(str[i] == `,`){ // test if comma
        row.push(items); // just pushes item to row
        items = ``; // and resets item
    }
    else{ 
        if(str.length - 1 == i){ //test if its the final index value (because the final value isn't a `,` or `\n`)
            row.push(items); // pushes final item to row
            ourArray.push(row); // pushes final row to array
        }
        else{
            items += str[i];} // adds string character at index to items for any character
        }

}

console.log(ourArray);


// Part 2: Expanding Functionality
console.log(`This is Part 2////////////////////////`);

// Begin with the following task:

// // Declare a variable that stores the number of columns in each row of data within the CSV.

let numColumns = ourArray[0].length;
// console.log(numColumns); // 

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




/////////////////////////////////////////////////////////////////////////////////////////

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



let objectArray = []; // initialize the Array to hold our objects



for(let i = 0; i < ourArray.length; i++){// create outer loop to iterate through ourArray
    let rowObject  = {}; // initialize object
    let insideArray = ourArray[i]; //create variable equal to the array indexed inside ourArray
    for(let i = 0; i < insideArray.length; i++){// create inner loop to iterate through items in each array inside ourArray
        rowObject[keys[i]] = insideArray[i]; // assigns value at insideArray index to key at rowObject index
    }

    objectArray.push(rowObject); // pushes the filled rowObject to objectArray
}



console.log(`Solution to part 3: `) 
console.log(objectArray); // prints solution





//////////////////////////////////////////////////////////////////////////////////////

// Part 4: Sorting and Manipulating Data

console.log(`This is Part 4////////////////////////`);

// // Using array methods, accomplish the following tasks, in order upon the result of Part 3:

// // Remove the last element from the sorted array.

objectArray.pop();

console.log(`Removing the last element of the assorted array leaves: `, objectArray);

// // Insert the following object at index 1:
// // // { id: "48", name: "Barry", occupation: "Runner", age: "25" }

newItem = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objectArray.splice(1, 0, newItem);

console.log('Inserting new object at index 1: ', objectArray);

// // Add the following object to the end of the array:
// // // { id: "7", name: "Bilbo", occupation: "None", age: "111" }

lastItem = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objectArray.push(lastItem);

console.log(`Adding new object at end of array: `)
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

/////////////////////////////////////////////////////////////////////////
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

// console.log(`keyArray: `, keyArray); //test

let valuesArray = [];

for(let i = 0; i < objectArrayLength; i++){
    valuesArray.push(Object.values(objectArray[i]));
}
// console.log(valuesArray); //test

valuesArray.unshift(keyArray); // add keyArray to beginning of valuesArray

console.log(valuesArray);

let finalStr = ``; // initialize str for csv

let innerString = ``;



for(let i = 0; i < valuesArray.length; i++){// create loop to iterate through valuesArray
    let innerArray = valuesArray[i]; // declare variable equal to the array at the index i of valuesArray
    innerString = innerArray.join(`,`); // convert items in innerArray to a string seperated by `,` and assign it to variable innerString
    finalStr = finalStr + innerString + '\n'; // concat innerString plus a line break to finalStr
}



console.log(`Solution to part 5: `)
console.log(finalStr); // prints solution










