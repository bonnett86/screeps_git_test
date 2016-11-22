var drone = require('drones');

module.exports.loop = function () {
    
    // clear memory first.
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
/*
    if (Game.spawns["Spawn1"].energy >= 200) {
        Game.spawns["Spawn1"].createCreep([WORK,CARRY,MOVE])
        console.log("spawning new drone")
    } 
 */   
    console.log("hello");
    // var sources = Game.creeps.FIND_SOURCES;
    // console.log(sources);
    //var sources = _.filter(Game.creeps, (source) => creep.memory.role == 'harvester');
   // for(var n in Game.creeps.rooms.find(FIND_SOURCES)) {
   //     numSources = numSources+1;
   // }
    //console.log("Number of sources: " + numSources);

    // count drones.
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvester count: ' + harvesters.length);
    console.log("Harvester names: " + harvesters);

    // Always maintain at least one harvester.
    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }

    // count sources using the harvesters
    console.log("counting sources");
    var sources;
    if (harvesters.length != 0) {
        // don't bother if there aren't any harvesters. it will only create an error.
        sources = harvesters[0].room.find(FIND_SOURCES);
        console.log("source count: " + sources.length);
    }
    
    console.log("another look at harvesters: " + harvesters);
    console.log("harvester[0]: " + harvesters[0]);
    console.log("harvester[1]: " + harvesters[1]);
    
    for(var current in Game.creeps) {
        console.log("current creep: " + current);
  //      if (current.memory.role=="drone") {
  //          console.log("drone");
 //       }
    }
    
    for(var now in harvesters) {
        console.log("current drone: " + now);
        drone.run(now, harvesters.length);
    }
    
    for(var n in Game.StructureSpawn) {
        var spawner = Game.StructureSpawn[n]
    }
    
    //var sources = Game.RoomObject.Source
    //for(n in sources) {
    //    console.log("source: " + n)
    //}
    
    // var creep = Game.creeps['worker1'];

    var numCreeps = 0;
    for(var n in Game.creeps) {
        numCreeps = numCreeps+1;
    }
    var sourceDestination = 0;
    
    for( var n in Game.creeps) {
        sourceDestination = sourceDestination+1;
    
        var creep = Game.creeps[n]
        
        
        // console.log("numCreeps: " + numCreeps);

       // console.log("NumSources: " + numSources);
        
       // console.log("numCreeps: " + numCreeps);
/*        
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
        */
    }
}