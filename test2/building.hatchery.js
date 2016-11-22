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
        
        
        /*
        console.log("checking for dummy");
        var dummy = _.filter(Game.creeps, (creep) => creep.memory.role == 'dummy');
        if (dummy.length == 0) {
            console.log("building dummy");
            var dummy = Game.spawns[hatchery].createCreep([TOUGH], undefined, {role: 'dummy'})
        }
        console.log(dummy);
        console.log("done checking for dummy");
        
        var sources = dummy[0].room.find(FIND_SOURCES);
        */
        var sources = Game.spawns[Object.keys(Game.spawns)[0]].room.find(FIND_SOURCES);
        //console.log("number of sources: " + sources.length);
        
        /*
        for(var x in sources) {
            console.log("here's a source: " + x);
        }
        */
        

        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var numHarvestersPerSource = 8;
        var maxHarvesters = sources.length * numHarvestersPerSource;
        
        //console.log("number of harvesters: " + harvesters.length);
        
        if (harvesters.length < maxHarvesters) {
            //console.log("not enough harvesters");
            
            
            for( var currentSource of sources) {
                
                console.log("current source: " + currentSource);
                var currentSourceId = currentSource.id;
                //console.log("source id: " + currentSourceId);
                var currentSourceCreeps = _.filter(Game.creeps, (creep) => creep.memory.targetSource == currentSource.id && creep.memory.role == 'harvester');
                console.log("current source creeps: " + currentSourceCreeps.length);
                console.log("numHarvestersPerSource: " + numHarvestersPerSource);
                if (currentSourceCreeps.length < numHarvestersPerSource) {
                    //console.log("need more creeps for this source.");
                    // costs 300 energy.
                    Game.spawns[hatchery].createCreep([MOVE,MOVE,WORK,CARRY,CARRY], undefined, {role: 'harvester', targetSource: currentSource.id});
                }
                
                // var currentSourceHarvesters = _.filter(Game.creeps (creep) => (creep.memory.targetSource == currentSource.id) && (creep.memory.role == 'harvester'));
                
                //if (currentSourceHarvesters.length < 2) {
                //    Game.spawns[hatchery].createCreep([MOVE][WORK][CARRY][CARRY][CARRY], undefined, {role: 'harvester', targetSource: currentSource.id})
                //}
                
            }
            
        }
        
        // begin code to create upgraders
        
        //var maxUpgradersPerSource = 1;
        
        //var currentUpgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        //console.log("number of upgraders: " + currentUpgraders.length);
        //console.log("number of upgraders per source: " + maxUpgradersPerSource);
        //console.log("max number of upgraders: " + sources.length);
        
        //for( var currentSource of sources) {
            
        //}
        
        
        
       // if (currentUpgraders.length < maxUpgradersPerSource) {
       //     Game.spawns[hatchery].createCreep([MOVE,MOVE,WORK,CARRY,CARRY], undefined, {role: 'upgrader'});
       // }
        
        //console.log("exiting hatchery code");
    }
};