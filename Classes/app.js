class motor
{
    constructor(
        name,
        speed,
        topspeed,
        fueltype,
        enginesize,
        motortype
    )
    {
        this.name = name;
        this.speed = speed;
        this.topspeed = topspeed;
        this.fueltype = fueltype;
        this.enginesize = enginesize;
        this.motortype = motortype;
    }
    drive(speed) {
        this.speed = speed;
        console.log("My "+ this.name, "is driving " + this.speed + " kph");
    }
    brake() {
    }
}
const motor1 = new motor("Kawazaki Ninja", 0, 253, "gasoline", 1152, 2)
const motor2 = new motor("XRE300", 0, 182, "gasoline", 678, 2)
const motor3 = new motor("Yamaha R3", 0, 249, "gasoline", 753, 2)

motor1.drive(200);
motor2.drive(145);
motor3.drive(200);
motor1.brake();

console.log("!!!!!");