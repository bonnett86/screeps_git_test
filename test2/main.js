var hatcheries = require('building.hatchery');
var gather = require('ant.harvester');
var fight = require('ant.fighter');
var upgrade = require('ant.upgrader');


module.exports.loop = function () {
    
    // clear memory first.
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    for(var hatchery in Game.spawns) {
        // console.log("beginning hatchery script on " + hatchery);
        hatcheries.run(hatchery);
        // console.log("ending hatchery script on " + hatchery);
    }
    
    // console.log("starting creep code");
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                // console.log("beginning harvester script on " + creep);
                gather.run(creep);
                // console.log("ending harvester script on " + creep);
            }
            if (creep.memory.role == 'fighter') {
                // console.log("beginning fighter script on " + creep);
                fight.run(creep);
                // console.log("ending fighter script on " + creep);
            }
            if (creep.memory.role == 'upgrader') {
                // console.log("beginning upgrader script on " + creep);
                upgrade.run(creep);
                // console.log("ending fighter script on " + creep);
            }
    }
    // console.log("ending creep code");
}