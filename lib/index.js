"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
require("fpsmeter");
var math = require("mathjs");
var b2d_collision = Box2D.Collision;
// import * from 'Box2D.Collision';
// import 'Box2D.Collision';
var MyTest;
(function (MyTest) {
    // Example A ===================================================================================================
    console.log("Chris and Carsten here!");
    function component() {
        var element = document.createElement('div');
        element.innerHTML = 'Welcome to our TypeScript test!';
        return element;
    }
    MyTest.component = component;
    document.body.appendChild(component());
    // Example B ===================================================================================================
    /** convert a style object to a CSS class name */
    var className = typestyle_1.style({ color: 'red', fontSize: '20px' });
    console.log("Testing import of 'typestyle':");
    console.log("Classname is: [" + className + "]");
    var element2 = document.createElement('div');
    element2.innerHTML = 'Carsten und Christopher - solved it all! :D :D';
    element2.className = className;
    document.body.appendChild(element2);
    var NodeTest1 = (function () {
        function NodeTest1() {
        }
        NodeTest1.test = function () {
            console.log("NodeTest1::test() being invoked");
            var test = typestyle_1.style.length;
            console.log(">>> style length is [" + test + "]");
            // let fpsMeter:FPSMeter = new FPSMeter();
            //let test:number = style.length;
        };
        return NodeTest1;
    }());
    MyTest.NodeTest1 = NodeTest1;
    NodeTest1.test();
    // Example C ===================================================================================================
    var fpsMeter = new FPSMeter(undefined, {
        graph: 1,
        decimals: 1,
        position: "absolute",
        zIndex: 10,
        right: "5px",
        top: "auto",
        left: "auto",
        bottom: "5px",
        margin: "0",
        heat: 0
    });
    var options = fpsMeter.options;
    options.heat = 1;
    // Example D ===================================================================================================
    var test2 = math.abs(-7.5);
    console.log("Math abs is: [" + test2 + "]");
    function createWorld() {
        alert("2");
        console.log("createWorld() invoked");
        var worldAABB = new b2d_collision.b2AABB();
        console.log("ACCESS SOLVED!");
        worldAABB.minVertex.Set(-1000, -1000);
        worldAABB.maxVertex.Set(1000, 1000);
        var gravity = new b2Vec2(0, 300);
        var doSleep = true;
        var world = new b2World(worldAABB, gravity, doSleep);
        createGround(world);
        createBox(world, 0, 125, 10, 250);
        createBox(world, 500, 125, 10, 250);
        return world;
    }
    alert("1");
    var demos = {};
    demos.InitWorlds = [];
    demos.top = {};
    demos.top.createBall = function (world, x, y, rad, fixed) {
        var ballSd = new b2CircleDef();
        if (!fixed)
            ballSd.density = 1.0;
        ballSd.radius = rad || 10;
        ballSd.restitution = 0.2;
        var ballBd = new b2BodyDef();
        ballBd.AddShape(ballSd);
        ballBd.position.Set(x, y);
        return world.CreateBody(ballBd);
    };
    demos.top.createPoly = function (world, x, y, points, fixed) {
        var polySd = new b2PolyDef();
        if (!fixed)
            polySd.density = 1.0;
        polySd.vertexCount = points.length;
        for (var i = 0; i < points.length; i++) {
            polySd.vertices[i].Set(points[i][0], points[i][1]);
        }
        var polyBd = new b2BodyDef();
        polyBd.AddShape(polySd);
        polyBd.position.Set(x, y);
        return world.CreateBody(polyBd);
    };
    demos.top.initWorld = function (world) {
        demos.top.createBall(world, 350, 100, 50, true);
        demos.top.createPoly(world, 100, 100, [[0, 0], [10, 30], [-10, 30]], true);
        demos.top.createPoly(world, 150, 150, [[0, 0], [10, 30], [-10, 30]], true);
        var pendulum = createBox(world, 150, 100, 20, 20, false);
        var jointDef = new b2RevoluteJointDef();
        jointDef.body1 = pendulum;
        jointDef.body2 = world.GetGroundBody();
        jointDef.anchorPoint = pendulum.GetCenterPosition();
        world.CreateJoint(jointDef);
        var seesaw = demos.top.createPoly(world, 300, 200, [[0, 0], [100, 30], [-100, 30]]);
        jointDef.body1 = seesaw;
        jointDef.anchorPoint = seesaw.GetCenterPosition();
        world.CreateJoint(jointDef);
    };
    demos.InitWorlds.push(demos.top.initWorld);
    demos.stack = {};
    demos.stack.initWorld = function (world) {
        var sd = new b2BoxDef();
        var bd = new b2BodyDef();
        bd.AddShape(sd);
        sd.density = 1.0;
        sd.friction = 0.5;
        sd.extents.Set(10, 10);
        var i;
        for (i = 0; i < 8; i++) {
            bd.position.Set(500 / 2 - Math.random() * 2 - 1, (250 - 5 - i * 22));
            world.CreateBody(bd);
        }
        for (i = 0; i < 8; i++) {
            bd.position.Set(500 / 2 - 100 - Math.random() * 5 + i, (250 - 5 - i * 22));
            world.CreateBody(bd);
        }
        for (i = 0; i < 8; i++) {
            bd.position.Set(500 / 2 + 100 + Math.random() * 5 - i, (250 - 5 - i * 22));
            world.CreateBody(bd);
        }
    };
    demos.InitWorlds.push(demos.stack.initWorld);
    demos.compound = {};
    demos.compound.createCompoundBall = function (world, x, y) {
        var ballSd1 = new b2CircleDef();
        ballSd1.density = 1.0;
        ballSd1.radius = 20;
        ballSd1.restitution = 0.2;
        ballSd1.localPosition.Set(-20, 0);
        var ballSd2 = new b2CircleDef();
        ballSd2.density = 1.0;
        ballSd2.radius = 20;
        ballSd2.restitution = 0.2;
        ballSd2.localPosition.Set(20, 0);
        var ballBd = new b2BodyDef();
        ballBd.AddShape(ballSd1);
        ballBd.AddShape(ballSd2);
        ballBd.position.Set(x, y);
        return world.CreateBody(ballBd);
    };
    demos.compound.createCompoundPoly = function (world, x, y) {
        var points = [[-30, 0], [30, 0], [0, 15]];
        var polySd1 = new b2PolyDef();
        polySd1.vertexCount = points.length;
        for (var i = 0; i < points.length; i++) {
            polySd1.vertices[i].Set(points[i][0], points[i][1]);
        }
        polySd1.localRotation = 0.3524 * Math.PI;
        var R1 = new b2Mat22(polySd1.localRotation);
        polySd1.localPosition = b2Math.b2MulMV(R1, new b2Vec2(30, 0));
        polySd1.density = 1.0;
        var polySd2 = new b2PolyDef();
        polySd2.vertexCount = points.length;
        for (var i = 0; i < points.length; i++) {
            polySd2.vertices[i].Set(points[i][0], points[i][1]);
        }
        polySd2.localRotation = -0.3524 * Math.PI;
        var R2 = new b2Mat22(polySd2.localRotation);
        polySd2.localPosition = b2Math.b2MulMV(R2, new b2Vec2(-30, 0));
        var polyBd = new b2BodyDef();
        polyBd.AddShape(polySd1);
        polyBd.AddShape(polySd2);
        polyBd.position.Set(x, y);
        return world.CreateBody(polyBd);
    };
    demos.compound.initWorld = function (world) {
        var i;
        for (i = 1; i <= 4; i++) {
            demos.compound.createCompoundPoly(world, 150 + 3 * Math.random(), 40 * i);
        }
        for (i = 1; i <= 4; i++) {
            demos.compound.createCompoundBall(world, 350 + 3 * Math.random(), 45 * i);
        }
    };
    demos.InitWorlds.push(demos.compound.initWorld);
    demos.pendulum = {};
    demos.pendulum.initWorld = function (world) {
        var i;
        var ground = world.GetGroundBody();
        var jointDef = new b2RevoluteJointDef();
        var L = 150;
        for (i = 0; i < 4; i++) {
            jointDef.anchorPoint.Set(250 + 40 * i, 200 - L);
            jointDef.body1 = ground;
            jointDef.body2 = createBall(world, 250 + 40 * i, 200);
            world.CreateJoint(jointDef);
        }
        jointDef.anchorPoint.Set(250 - 40, 200 - L);
        jointDef.body1 = ground;
        jointDef.body2 = createBall(world, 250 - 40 - L, 200 - L);
        world.CreateJoint(jointDef);
    };
    demos.InitWorlds.push(demos.pendulum.initWorld);
    demos.crank = {};
    demos.crank.initWorld = function (world) {
        var ground = world.m_groundBody;
        // Define crank.
        var sd = new b2BoxDef();
        sd.extents.Set(5, 25);
        sd.density = 1.0;
        var bd = new b2BodyDef();
        bd.AddShape(sd);
        var rjd = new b2RevoluteJointDef();
        var prevBody = ground;
        bd.position.Set(500 / 2, 210);
        var body = world.CreateBody(bd);
        rjd.anchorPoint.Set(500 / 2, 235);
        rjd.body1 = prevBody;
        rjd.body2 = body;
        rjd.motorSpeed = -1.0 * Math.PI;
        rjd.motorTorque = 500000000.0;
        rjd.enableMotor = true;
        world.CreateJoint(rjd);
        prevBody = body;
        // Define follower.
        sd.extents.Set(5, 45);
        bd.position.Set(500 / 2, 140);
        body = world.CreateBody(bd);
        rjd.anchorPoint.Set(500 / 2, 185);
        rjd.body1 = prevBody;
        rjd.body2 = body;
        rjd.enableMotor = false;
        world.CreateJoint(rjd);
        prevBody = body;
        // Define piston
        sd.extents.Set(20, 20);
        bd.position.Set(500 / 2, 95);
        body = world.CreateBody(bd);
        rjd.anchorPoint.Set(500 / 2, 95);
        rjd.body1 = prevBody;
        rjd.body2 = body;
        world.CreateJoint(rjd);
        var pjd = new b2PrismaticJointDef();
        pjd.anchorPoint.Set(500 / 2, 95);
        pjd.body1 = ground;
        pjd.body2 = body;
        pjd.axis.Set(0.0, 1.0);
        pjd.motorSpeed = 0.0; // joint friction
        pjd.motorForce = 100000.0;
        pjd.enableMotor = true;
        world.CreateJoint(pjd);
        // Create a payload
        sd.density = 2.0;
        bd.position.Set(500 / 2, 10);
        world.CreateBody(bd);
    };
    demos.InitWorlds.push(demos.crank.initWorld);
    var initId = 0;
    var world = createWorld();
    var ctx;
    var canvasWidth;
    var canvasHeight;
    var canvasTop;
    var canvasLeft;
    function setupWorld(did) {
        if (!did)
            did = 0;
        world = createWorld();
        initId += did;
        initId %= demos.InitWorlds.length;
        if (initId < 0)
            initId = demos.InitWorlds.length + initId;
        demos.InitWorlds[initId](world);
    }
    function setupNextWorld() { setupWorld(1); }
    function setupPrevWorld() { setupWorld(-1); }
    function step(cnt) {
        var stepping = false;
        var timeStep = 1.0 / 60;
        var iteration = 1;
        world.Step(timeStep, iteration);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawWorld(world, ctx);
        setTimeout('step(' + (cnt || 0) + ')', 10);
    }
    Event.observe(window, 'load', function () {
        setupWorld();
        ctx = $('canvas').getContext('2d');
        var canvasElm = $('canvas');
        canvasWidth = parseInt(canvasElm.width);
        canvasHeight = parseInt(canvasElm.height);
        canvasTop = parseInt(canvasElm.style.top);
        canvasLeft = parseInt(canvasElm.style.left);
        Event.observe('canvas', 'click', function (e) {
            //setupNextWorld();
            if (Math.random() < 0.5)
                demos.top.createBall(world, Event.pointerX(e) - canvasLeft, Event.pointerY(e) - canvasTop);
            else
                createBox(world, Event.pointerX(e) - canvasLeft, Event.pointerY(e) - canvasTop, 10, 10, false);
        });
        Event.observe('canvas', 'contextmenu', function (e) {
            if (e.preventDefault)
                e.preventDefault();
            setupPrevWorld();
            return false;
        });
        step();
    });
})(MyTest || (MyTest = {}));
//# sourceMappingURL=index.js.map