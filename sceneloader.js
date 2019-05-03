// sceneloader.js
var url = "https://cdn.rawgit.com/BabylonJS/Extensions/master/DynamicTerrain/dist/babylon.dynamicTerrain.min.js";
var s = document.createElement("script");
s.src = url;
document.head.appendChild(s);

var createScene1 = function() {
            var scene = new BABYLON.Scene(engine);
            scene.collisionsEnabled = true;
            //var skyColor = new BABYLON.Color4( .4, .6, .9, 1.0);
            //scene.clearColor = skyColor;
            var camera = new BABYLON.FreeCamera("camera1",   new BABYLON.Vector3(0.0, 100.0, 0.0), scene);
            camera.attachControl(canvas, true);
            camera.ellipsoid = new BABYLON.Vector3(2, 2, 2);

            camera.checkCollisions = true;
  

            var body = BABYLON.MeshBuilder.CreateSphere("sphere", {segments: 32, size: 0.5}, scene);
            body.checkCollisions = true;
            body.parent = camera;
            body.position.z +=5;
            body.onCollide = function(mesh){
                console.log("collisons");
            };
            console.log(body);

            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
            light.intensity = 0.75;
            light.specular = BABYLON.Color3.Black();

            // Skybox
            var hdrTexture = new BABYLON.CubeTexture("song1-assets/sky.jpg", scene);
            scene.createDefaultSkybox(hdrTexture, true, 10000);    


    // Texture and material
    var url = "song1-assets/texture.jpg";
    var terrainTexture = new BABYLON.Texture(url, scene);
    
    var terrainMaterial = new BABYLON.StandardMaterial("tm", scene);
    terrainMaterial.diffuseTexture = terrainTexture;


    // wait for dynamic terrain extension to be loaded
    s.onload = function() {

        // callback function : terrain creation
        var terrain;
        var createTerrain = function(mapData, mapSubX, mapSubZ) {
            var params = {
                mapData: mapData,               // data map declaration : what data to use ?
                mapSubX: mapSubX,               // how are these data stored by rows and columns
                mapSubZ: mapSubZ,
                terrainSub: 120
            };
            terrain = new BABYLON.DynamicTerrain("t", params, scene);
            terrain.subToleranceX = 8;
            terrain.subToleranceZ = 8;
            terrain.mesh.checkCollisions = true;
            terrain.LODLimits = [4, 3, 2, 1, 1];
            terrain.createUVMap();             // compute the UVs to stretch the image on the whole map
            terrain.mesh.material = terrainMaterial;
            terrain.update(true);

        };

        // Data Map
        var hmURL = "song1-assets/heightmap.jpg";
        var mapWidth = 1000;
        var mapHeight = 1000;
        var nbPoints = 500;
        var hmOptions = {
            width: mapWidth, height: mapHeight, 
            minHeight: 0, maxHeight: 100,         // map size in the World 
            subX: nbPoints, subZ: nbPoints,              // number of points on map width and height
            onReady: createTerrain                       // callback function declaration
        };

        var mapData = new Float32Array(nbPoints * nbPoints * 3); // the array that will store the generated data
        BABYLON.DynamicTerrain.CreateMapFromHeightMapToRef(hmURL, hmOptions, mapData, scene);

    }   // onload closing bracket


    return scene;
}

var createScene2 = function() {
            var scene = new BABYLON.Scene(engine);
            scene.collisionsEnabled = true;
            //var skyColor = new BABYLON.Color4( .4, .6, .9, 1.0);
            //scene.clearColor = skyColor;
            var camera = new BABYLON.FreeCamera("camera1",   new BABYLON.Vector3(0.0, 100.0, 0.0), scene);
            camera.attachControl(canvas, true);
            camera.ellipsoid = new BABYLON.Vector3(2, 2, 2);

            camera.checkCollisions = true;
  

            var body = BABYLON.MeshBuilder.CreateSphere("sphere", {segments: 32, size: 0.5}, scene);
            body.checkCollisions = true;
            body.parent = camera;
            body.position.z +=5;
            body.onCollide = function(mesh){
                console.log("collisons");
            };
            console.log(body);

            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
            light.intensity = 0.75;
            light.specular = BABYLON.Color3.Black();

            // Skybox
            var hdrTexture = new BABYLON.CubeTexture("song2-assets/sky.jpg", scene);
            scene.createDefaultSkybox(hdrTexture, true, 10000);    


    // Texture and material
    var url = "song2-assets/texture.jpg";
    var terrainTexture = new BABYLON.Texture(url, scene);
    
    var terrainMaterial = new BABYLON.StandardMaterial("tm", scene);
    terrainMaterial.diffuseTexture = terrainTexture;


    // wait for dynamic terrain extension to be loaded
    s.onload = function() {

        // callback function : terrain creation
        var terrain;
        var createTerrain = function(mapData, mapSubX, mapSubZ) {
            var params = {
                mapData: mapData,               // data map declaration : what data to use ?
                mapSubX: mapSubX,               // how are these data stored by rows and columns
                mapSubZ: mapSubZ,
                terrainSub: 120
            };
            terrain = new BABYLON.DynamicTerrain("t", params, scene);
            terrain.subToleranceX = 8;
            terrain.subToleranceZ = 8;
            terrain.mesh.checkCollisions = true;
            terrain.LODLimits = [4, 3, 2, 1, 1];
            terrain.createUVMap();             // compute the UVs to stretch the image on the whole map
            terrain.mesh.material = terrainMaterial;
            terrain.update(true);

        };

        // Data Map
        var hmURL = "song2-assets/heightmap.jpg";
        var mapWidth = 1000;
        var mapHeight = 1000;
        var nbPoints = 500;
        var hmOptions = {
            width: mapWidth, height: mapHeight, 
            minHeight: 0, maxHeight: 100,         // map size in the World 
            subX: nbPoints, subZ: nbPoints,              // number of points on map width and height
            onReady: createTerrain                       // callback function declaration
        };

        var mapData = new Float32Array(nbPoints * nbPoints * 3); // the array that will store the generated data
        BABYLON.DynamicTerrain.CreateMapFromHeightMapToRef(hmURL, hmOptions, mapData, scene);

    }   // onload closing bracket


    return scene;
}

var createScene3 = function() {
            var scene = new BABYLON.Scene(engine);
            scene.collisionsEnabled = true;
            //var skyColor = new BABYLON.Color4( .4, .6, .9, 1.0);
            //scene.clearColor = skyColor;
            var camera = new BABYLON.FreeCamera("camera1",   new BABYLON.Vector3(0.0, 100.0, 0.0), scene);
            camera.attachControl(canvas, true);
            camera.ellipsoid = new BABYLON.Vector3(2, 2, 2);

            camera.checkCollisions = true;
  

            var body = BABYLON.MeshBuilder.CreateSphere("sphere", {segments: 32, size: 0.5}, scene);
            body.checkCollisions = true;
            body.parent = camera;
            body.position.z +=5;
            body.onCollide = function(mesh){
                console.log("collisons");
            };
            console.log(body);

            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
            light.intensity = 0.75;
            light.specular = BABYLON.Color3.Black();

            // Skybox
            var hdrTexture = new BABYLON.CubeTexture("song3-assets/sky.jpg", scene);
            scene.createDefaultSkybox(hdrTexture, true, 10000);    


    // Texture and material
    var url = "song3-assets/texture.jpg";
    var terrainTexture = new BABYLON.Texture(url, scene);
    
    var terrainMaterial = new BABYLON.StandardMaterial("tm", scene);
    terrainMaterial.diffuseTexture = terrainTexture;


    // wait for dynamic terrain extension to be loaded
    s.onload = function() {

        // callback function : terrain creation
        var terrain;
        var createTerrain = function(mapData, mapSubX, mapSubZ) {
            var params = {
                mapData: mapData,               // data map declaration : what data to use ?
                mapSubX: mapSubX,               // how are these data stored by rows and columns
                mapSubZ: mapSubZ,
                terrainSub: 120
            };
            terrain = new BABYLON.DynamicTerrain("t", params, scene);
            terrain.subToleranceX = 8;
            terrain.subToleranceZ = 8;
            terrain.mesh.checkCollisions = true;
            terrain.LODLimits = [4, 3, 2, 1, 1];
            terrain.createUVMap();             // compute the UVs to stretch the image on the whole map
            terrain.mesh.material = terrainMaterial;
            terrain.update(true);

        };

        // Data Map
        var hmURL = "song3-assets/heightmap.jpg";
        var mapWidth = 1000;
        var mapHeight = 1000;
        var nbPoints = 500;
        var hmOptions = {
            width: mapWidth, height: mapHeight, 
            minHeight: 0, maxHeight: 100,         // map size in the World 
            subX: nbPoints, subZ: nbPoints,              // number of points on map width and height
            onReady: createTerrain                       // callback function declaration
        };

        var mapData = new Float32Array(nbPoints * nbPoints * 3); // the array that will store the generated data
        BABYLON.DynamicTerrain.CreateMapFromHeightMapToRef(hmURL, hmOptions, mapData, scene);

    }   // onload closing bracket


    return scene;
}