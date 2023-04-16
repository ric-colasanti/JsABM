console.log("housing");

var size = 100;
var caCanvas = new CACanvas(size);
var density = 0.50

class Person extends Agent {
    constructor(state) {
        super();
    }
}

var setup = function () {
    population = new Agents();
    place = new Patches(size);
    for (i = 0; i < size * size; i++) {
        var patch = new Patch();
        if(Math.random()<density){
            var agent = new Person(rndInt(2));
            patch.addAgent(agent);
            population.addAgent(agent);
            ;    
        }
        place.addPatch(patch)
    }
    place.setNeighbors();
    draw()
}

var draw = function () {
    var bCol = "#e0cca8";
    caCanvas.clear(bCol)
    place.list.forEach(function (patch, index) {
        var person = patch.occupant;
        var col;
        if(person!=null){
            col = col = "#ff0000";
            caCanvas.draw(patch.xPos, patch.yPos, bCol, true, col);
        }
    });
    caCanvas.update("canvas");
};


setup()