let json = '{fname: "Sam",lname: "smith"}';
let obj = JSON.parse(json);

//console.log(typeof(obj));

let Obj2 ={
    fname : "Jack",
    lname : "Smith"
};
let json2 = JSON.stringify(Obj2);
console.log(json2);