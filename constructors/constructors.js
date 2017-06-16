/* Design several classes and their relationships for an RPG videogame.
 * Classes: 
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 * 
 * This is how you would structure the game objects in an actual game 
 * application in Unity or another similar framework.
 */

// NPC should be a general class for a non-player character in the game.
// Level 1 (Top Level)
//ES5
function NPC(options) {
    this.hp = options.hp;
    this.strength = options.strength;
    this.speed = options.speed;
}

NPC.prototype.destroy = function() {
    console.log('game object removed from game');
}

// Level 2

function Humanoid(options) {
    NPC.call(this, {
        hp: options.hp,
        strength: options.strength,
        speed: options.speed,
    });
}

Humanoid.prototype = Object.create(NPC);

Humanoid.prototype.jump = function() {
    console.log('humanoid jumped!');
};

// Level 3
function Elf(options) {
    Humanoid.call(this, {
        hp: options.hp,
        strength = options.strength,
        speed: options.speed,
    });
    this.clan = options.clan;
};

Elf.prototype = Object.create(Humanoid.prototype);
Elf.prototype.sayHello = function( {
    console.log(this.name + ' says hello in ' + this.language);
});

// Level 3 (peer of elf)
function Orc(options) {
    Humanoid.call(this, options), // passes down all Humanid options to Orc
    this.clan = options.clan;
};

var Jimbo = new Elf({
    hp: 150;
    strength
})

//ES6
 class NPC {
     constructor(
         hp, 
         strength, 
         speed, 
         intellect, 
         stamina, 
         jerkishness, 
         legNumber, 
         diurnalOrNocturnal, 
         sleepNeededNumHrs
         )
            {
                this.hp = hp;
                this.strength = strength;
                this.speed = speed;
                this.intellect = intellect;
                this.stamina = stamina;
                this.jerkishness = jerkishness;
     }
 };

// Level 2 
 // NPC -> Humanoid, Animal, Plant

// Humanoids
 class Humanoid extends NPC {
     constructor( )

 }

//  * Humanoid -> Human, Elf, Orc

 class Human extends Humanoid {

 }

 // Humans
//  * Human -> Soldier, Peasant, Bandit
// Animals
//  * Animal -> Bear, Wolf
// Plants
//  * Plant -> FleshEatingDaisy

// 
 
//  Humanoid, Animal, and Plant should all inherit from NPC.  The classes
//  shown to the right of the arrow are classes that will inherit
//  from those classes.

// NPC -> Humanoid, Animal, Plant
//  *