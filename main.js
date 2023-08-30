// Get the canvas element
var canvas = document.getElementById("renderCanvas");

// Create the Babylon.js engine
var engine = new BABYLON.Engine(canvas, true);

// Create the scene
var scene = new BABYLON.Scene(engine);

// Create camera
var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 20, new BABYLON.Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

// Create light
var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// Create boat base using box shape
var boatBase = BABYLON.MeshBuilder.CreateBox("boatBase", {width: 2, height: 0.3, depth: 4}, scene);
boatBase.position.y = 0.15;

// Create boat mast using cylinder shape
var mast = BABYLON.MeshBuilder.CreateCylinder("mast", {height: 3, diameter: 0.1}, scene);
mast.position.y = 1.5;
mast.position.z = -0.5;

// Create boat sail using plane
var sail = BABYLON.MeshBuilder.CreatePlane("sail", {width: 1, height: 2.5}, scene);
sail.position.y = 1.25;
sail.position.z = -0.5;
sail.rotation.z = Math.PI / 4;

// Adding material to boat base
var boatBaseMaterial = new BABYLON.StandardMaterial("boatBaseMaterial", scene);
boatBaseMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2, 0);
boatBase.material = boatBaseMaterial;

// Adding material to mast
var mastMaterial = new BABYLON.StandardMaterial("mastMaterial", scene);
mastMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
mast.material = mastMaterial;

// Adding material to sail
var sailMaterial = new BABYLON.StandardMaterial("sailMaterial", scene);
sailMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
sail.material = sailMaterial;

// Render loop
engine.runRenderLoop(function () {
    scene.render();
});

// Handle resizing of the window
window.addEventListener("resize", function () {
    engine.resize();
});
