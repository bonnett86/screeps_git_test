var drone = require('harvester');

module.exports.loop = function () {
    

    
     
    if (Game.spawns["Spawn1"].energy >= 200) {
        Game.spawns["Spawn1"].createCreep([WORK,CARRY,MOVE])
        console.log("spawning new drone")
    } 
    
    
    for(var n in Game.StructureSpawn) {
        var spawner = Game.StructureSpawn[n]
        
    }
    
    //var sources = Game.RoomObject.Source
    //for(n in sources) {
    //    console.log("source: " + n)
    //}
    
    // var creep = Game.creeps['worker1'];
    var sourceDestination = 0;
    for( var n in Game.creeps) {
        sourceDestination = sourceDestination+1;
    
        var creep = Game.creeps[n]
        
        var numCreeps = 0;
        for(var n in Game.creeps) {
            numCreeps = numCreeps+1;
        }
        // console.log("numCreeps: " + numCreeps);
        var numSources = 0;
        for(var n in creep.room.find(FIND_SOURCES)) {
            numSources = numSources+1;
        }
       // console.log("NumSources: " + numSources);
        
       // console.log("numCreeps: " + numCreeps);
        
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[sourceDestination % numSources]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceDestination % numSources]);
            }
        }
        else {
            if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }
}