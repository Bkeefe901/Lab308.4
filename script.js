

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let commas = 0;

// for(let i = 0; i < str.length; i++){
//     if(str[i] == `,`){
//         commas++;
//     } else if(str[i] == `\n`){
//         console.log(cell1, cell2, cell3, cell4);
//         commas = 0;
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//     } else{
//         if(commas == 0){
//             cell1 += str[i];
//         }
//         else if(commas == 1){
//             cell2 += str[i];
//         }
//         else if(commas == 2){
//             cell3 += str[i];
//         }
//         else{
//             cell4 += str[i];
//         }
//     }

//     if(str.length - 1 == i){
//         console.log(cell1, cell2, cell3, cell4);
//     }
// }


// Part 1: Refactoring Old Code


// We need a loop that cycles through every character in the str.

// We need a 2d array where each row is an array within the array of the entire csv

// The 'row' array should hold 4 items. We push each comma seperated value until we reach a \n
// The 'row' array can be recycled after pushing to the main array.

// We need a string to hold the characters for each cell that can also be recycled after each , we push this to the 'row.

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26;`
 
let row = [];
let ourArray = [];
let items = ``;

for(let i = 0; i < str.length; i++){
    if(str[i] == `\n`){
        ourArray.push(row);
        row = [];
    }
    else if(str[i] == `,`){
        row.push(items);
        items = ``;
    }
    else{
        if(str.length - 1 == i){
            ourArray.push(row);
            console.log(ourArray);
        }
        else{
            items += str[i];}
        }

}




















// for(let i = 0; i < str.length; i++){
//     if(str[i] == `,`){
        
//     } else if(str[i] == `\n`){
//         ;
//         commas = 0;
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//     } else{
//         if(commas == 0){
//             cell1 += str[i];
//         }
//         else if(commas == 1){
//             cell2 += str[i];
//         }
//         else if(commas == 2){
//             cell3 += str[i];
//         }
//         else{
//             cell4 += str[i];
//         }
//     }

//     if(str.length - 1 == i){
//         console.log(cell1, cell2, cell3, cell4);
//     }
// }