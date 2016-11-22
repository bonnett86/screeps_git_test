/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('building.hatchery');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(hatchery) {
        //console.log("within hatchery code");
        //console.log("current hatchery: " + Game.spawns[hatchery]);
        
        //for (var roomName in Game.rooms) {
        // var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var hostiles = Game.spawns[Object.keys(Game.spawns)[0]].room.find(FIND_HOSTILE_CREEPS);
            // var hostiles = Game.rooms
            if (hostiles.length > 0) {
                console.log("*HOSTILE DETECTED*");
                Game.spawns[hatchery].createCreep([MOVE,MOVE,RANGED_ATTACK,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], undefined, {role: 'fighter', weapon: 'ranged'});
            }
        //}
        
        // begin code to calculate number of desired miners and spawn those miners.
        var sources = Game.spawns[Object.keys(Game.spawns)[0]].room.find(FIND_SOURCES);
        //console.log("number of sources: " + sources.length);
        
        /*
        for(var x in sources) {
            console.log("here's a source: " + x);
        }
        */
        

        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var numHarvestersPerSource = 1;
        var maxHarvesters = sources.length * numHarvestersPerSource;
        
        //console.log("number of harvesters: " + harvesters.length);
        
        if (harvesters.length < maxHarvesters) {
            //console.log("not enough harvesters");
            
            
            for( var currentSource of sources) {
                
                //console.log("current source: " + currentSource);
                var currentSourceId = currentSource.id;
                //console.log("source id: " + currentSourceId);
                var currentSourceCreeps = _.filter(Game.creeps, (creep) => creep.memory.targetSource == currentSource.id && creep.memory.role == 'harvester');
                //console.log("current source creeps: " + currentSourceCreeps.length);
                
                if (currentSourceCreeps.length < numHarvestersPerSource) {
                    //console.log("need more creeps for this source.");
                    console.log(Game.spawns[hatchery].createCreep([MOVE,MOVE,WORK,CARRY,CARRY], undefined, {role: 'harvester', targetSource: currentSource.id}));
                }
                
                // var currentSourceHarvesters = _.filter(Game.creeps (creep) => (creep.memory.targetSource == currentSource.id) && (creep.memory.role == 'harvester'));
                
                //if (currentSourceHarvesters.length < 2) {
                //    Game.spawns[hatchery].createCreep([MOVE][WORK][CARRY][CARRY][CARRY], undefined, {role: 'harvester', targetSource: currentSource.id})
                //}
                
            }
            
        }
        
        
        // begin code to create upgraders
        
        var maxUpgraders = 3;
        var currentUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log("number of upgraders: " + currentUpgraders.length);
        if (currentUpgraders.length < maxUpgraders) {
            Game.spawns[hatchery].createCreep([MOVE,MOVE,WORK,CARRY,CARRY], undefined, {role: 'harvester', targetSource: currentSource.id});
        }
        
        
        
        //console.log("exiting hatchery code");
    }
};