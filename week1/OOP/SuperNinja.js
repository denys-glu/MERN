class Ninja {
    constructor(name, health, speed = 3, stength = 3) {
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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, stength = 10, wisdom = 10) {
        super(name, health, speed, stength)
        this.wisdom = wisdom
    }

    speakWisdom() {
        super.drinkSake()
        console.log("Words of wisdom")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom()
superSensei.showStats()
superSensei.speakWisdom()
superSensei.showStats()
superSensei.speakWisdom()
superSensei.showStats()
superSensei.speakWisdom()
superSensei.showStats()
console.log("superSensei.showStats()", superSensei.showStats())
