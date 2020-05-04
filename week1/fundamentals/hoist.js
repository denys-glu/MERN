// # 1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello) -> error
// hello ='world'
// # 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test();
// console.log(needle)// magnet

// # 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// print();
// breandan = 'super cool'
//console.log(brendan)// 'super cool'

// # 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// eat();
// food = 'chicken'
// console.log(food) -> 'chicken'
// eat() -> 'half0chicken'
// eat -> local var food = 'gone'

// # 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean() -> error
// var mean;
// console.log(food) -> error
// mean = function()

// # 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre) -> error
// genre = "disco";
// rewind()
// global genre = "rock"
// console.log(genre) -> "rock"
// local genre = "r&b"
// console.log(genre) -> "r&b"
// console.log(genre) -> "disco"

// # 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// var dojo
// dojo = "san jose"
// console.log(dojo) -> "san jose"
// learn();
//      -> "seattle"
//      -> "burbank"
// dojo = "san jose"

// # 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// dojo = {name: "Chicago", students = 65, hiring: true}
// dojo -> error cannot change type of constatnt or reassign value
