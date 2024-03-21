const members = [
    { name : "Eve", age : 24},
    { name : "Adam", age : 48},
    { name : "yoi", age : 22},
    { name : "zoi", age : 35},

];
const result = members.find((member) => {
    return member.age > 25;
});
console.log(result);