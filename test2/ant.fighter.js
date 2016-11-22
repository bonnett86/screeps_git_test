/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('ant.fighter');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
        var fighters = _.filter(Game.creeps, (creep) => creep.memory.role == 'fighter');
        console.log("number of fighters: " + fighters.length);
        console.log("current creep: "+ Game.creeps[creep]);
        if (fighters.length > 1) {
            console.log("current creep: "+ creep);
            var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            console.log(target);
            console.log(creep.rangedAttack(target));
            if (creep.rangedAttack(target) == ERR_NOT_IN_RANGE) {
                creep.say("ADVANCING");
                creep.moveTo(target);
            } else {
                creep.say("ATTACKING");
                creep.rangedAttack(target);
            }
            
        }
        
    }
};