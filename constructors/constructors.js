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