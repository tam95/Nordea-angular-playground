// Data
const band = {
    members: {
        current: [
            {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
            {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
            {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
            {name: 'Steve', age: 55, plays: ['guitar']}
        ],
        past: [
            {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
            {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
            {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
        ]
    }
};
// Some necessary variables for dynamic sorting if needed. This list goes in a specific order name --> age to
// have the correct order as expected (ordered by age first as Desc then ordered by name Asc). It's a paradox 
// method.
    var propertiesSortDetail: any[] = [
        {
            name: "name",
            isDesc: false
        },
        {
            name: "age",
            isDesc: true
        }
    ]

// High level function to call to get the expected object
function manipulate(band: any) {
    var modifiedBand = band;
    if(modifiedBand.members) {
        // flatten array for further usage, easy looping and sorting
        var flattenArray: any[] = flattenArrayFromObject(modifiedBand.members);
        // doing the 'all' part, this should return an array of names which is sorted
        var allProperty = theAllProperty(flattenArray, propertiesSortDetail);
        // doing the 'plays' part
        var playsProperty = thePlaysProperty(flattenArray);
        // assign properties back to the default object
        modifiedBand.all = allProperty;
        modifiedBand.plays = playsProperty;
        return modifiedBand;
    }
    return "No correct data expected"
}
//---------------- Making the all property -------------------
// Crafting the all property
function theAllProperty(flattenArray: any[], propertiesSortDetail: any[]){
    var propertyToReturn: any[] = [];
    // sorting based on provided order detail
    var sortedArray = sortMembers(flattenArray, propertiesSortDetail);
    sortedArray.forEach((objectItem) => {
        propertyToReturn.push(objectItem.name.toLowerCase());
    });
    return propertyToReturn;
}

// Wrapping function to call multiple times dynamic sorting based on list of properties detail
function sortMembers(flattenArray: any[], properties: any[]) {
    var sortedMembers: any[] = [];
    properties.forEach((property) => {
        sortedMembers = sortMembersBy(flattenArray, property.name, property.isDesc);
    });
    return sortedMembers;
}

// Dynamic function to sort data based on property 
function sortMembersBy(flattenArray: any[], orderedBy: string, isDesc: boolean) {
    var sortedFlattenArray = flattenArray;
    if(isDesc) sortedFlattenArray.sort((a: any, b: any) => (a[orderedBy] > b[orderedBy] ? - 1 : 1));
    else sortedFlattenArray.sort((a: any, b: any) => (a[orderedBy] > b[orderedBy] ? 1 : -1));
    return sortedFlattenArray;
}

// Function to flatten array from object
function flattenArrayFromObject (originalObj:any) {
    var flattenArray: any[] = [];
    Object.keys(originalObj).map((key) => {
        flattenArray = flattenArray.concat(originalObj[key]);
    })
    return flattenArray;
}
// -------------------------------------------------------------

// ---------------- Making the plays property ------------------
function thePlaysProperty (flattenArray: any[]) {
    var propertyToReturn: {[k: string]: any} = {};
    // list of plays
    var playsList = listOfUniquePlays(flattenArray);
    // a bad loop for match data, can be a better solution but maybe overkill for the task
    flattenArray.forEach((member) => {
        let memberName = member.name;
        let matchedPlays = playsList.filter(play => member.plays.indexOf(play) >= 0);
        matchedPlays.forEach((play) => {
            if(!propertyToReturn[play]) propertyToReturn[play] = []
            propertyToReturn[play].push(memberName.toLowerCase());
        });
    });
    return propertyToReturn;
}

// Return list of unique plays from flatten array
function listOfUniquePlays (flattenArray: any[]){
    var plays: any[] = [];
    flattenArray.forEach((member) => {
        plays = plays.concat(member.plays);
    });
    plays = plays.filter(onlyUnique);
    return plays;
}

// parameter function to filter unique in an array
function onlyUnique(value: any, index: any, self: string|any[]) {
  return self.indexOf(value) === index;
}
// ------------------------------------------------------------


var expected = manipulate(band)
console.log(expected);