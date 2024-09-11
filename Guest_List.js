"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Shareef', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i]+ ',\n\n It is our pleasure to invite
//  you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Khan Tessori';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i]+ ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr.${absent_Guest} is not comming to the party.`);
console.log("Good News we fine Big Table so we are inviting 3 more guest.");
Guest_List.unshift("sir zia khan");
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] +
        ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log('\n Sorry we can not arrange table, only Two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(` Mr. ${remove_Guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] +
        ',\n\n It is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
