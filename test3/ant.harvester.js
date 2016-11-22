/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('ant.harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
        
        console.log("inside ant.harvester");
	    if(creep.carry.energy < creep.carryCapacity) {
	        
	        var source = Game.getObjectById(creep.memory.targetSource);
            // var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
        
        console.log("leaving ant.harvester");
    }
};