class Ninja {
    constructor(name, health = 100, speed = 3, stength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.stength = stength
    }

    sayName() {
        console.log(`Ninjas name is ${this.name}`)
    }

    showStats() {
        console.log(`Ninjas ${this.name} stats are: 
                    speed - ${this.speed}, 
                    health - ${this.health}, 
                    strength - ${this.stength}`)
    }

    drinkSake() {
        console.log("Drank Sake, adding 10HP");
        this.health += 10
    }
}


const ninja1 = new Ninja("Hyabusa")
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()