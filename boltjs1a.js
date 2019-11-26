// Optimized for BOLT
async function startProgram() {
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	setMainLed({ r: 0, g: 0, b: 0 });
	await turn(249);
	await rollDistance(249, 100, 20);
	await comeToStop();
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	setMainLed({ r: 0, g: 0, b: 0 });
	await turn(2);
	await rollDistance(2, 85, 20);
	await comeToStop();
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	setMainLed({ r: 0, g: 0, b: 0 });
	await turn(226);
	await rollDistance(226, 55, 18);
	await comeToStop();
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	setMainLed({ r: 0, g: 0, b: 0 });
	await turn(76);
	await rollDistance(76, 69, 15);
	await comeToStop();
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	setMainLed({ r: 0, g: 0, b: 0 });
	await turn(197);
	await rollDistance(197, 69, 14);
	await comeToStop();
	setMainLed({ r: 255, g: 13, b: 214 });
	await turn(90);
	await rollDistance(90, 35, 6);
	await comeToStop();
	exitProgram();
}

var MIN_SPEED = 5.0;
var minSpeedSq = MIN_SPEED ** 2;

async function comeToStop() {
	stopRoll();

	while ((getVelocity().x ** 2) + (getVelocity().y ** 2) > minSpeedSq) {
		await delay(0.025);
	}
}

async function turn(heading) {
	setHeading(heading);
	await delay(0.5);
}

async function rollDistance(heading, speed, distance) {
	await roll(heading, speed);

	var distanceSq = distance ** 2;
	var startLocation = getLocation();

	while (((getLocation().x - startLocation.x) ** 2) + ((getLocation().y - startLocation.y) ** 2) < distanceSq) {
		await delay(0.025);
	}
}
