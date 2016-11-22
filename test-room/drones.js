 var drone = {

    /** @param {Creep} creep **/
    run: function(creep, numDrones) {
        console.log("*** INSIDE DRONE ***");
        
        var drones = 
        
        console.log("just the 'creep': " + Game.creeps[creep]);
        console.log("current creep: " + creep.name);
        console.log("current drone count: " + numDrones);
	    if(creep.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            } else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
        } 
	}
	
};



module.exports = drone;