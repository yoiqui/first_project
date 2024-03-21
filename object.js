const car = {
    name : "flat",
    model : 500,
    weight : "850kg",
    color : "black",
    start : () => {
        return console.log(car.color + car.model);
    },
};

console.log(car.name);
car.start();

