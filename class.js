class Student {
    name;
    roll;
    group;
    constructor(name = "unknown", roll = "not admitted", group = "humanities") {
        this.name = name;
        this.roll = roll;
        this.group = group;
    }
    whichGroup(present) {
        if (present) {
            return this.name + " in a " + this.group + " Student and he is Presented";
        } else {
            return this.name + " in a " + this.group + " Student and he is NOT Presented";
        }
    }
}

const karim = new Student("Abdul Karim", 45, "Humanities");
const rahim = new Student("Abdur Rahim", 11, "Science");
const monir = new Student();
console.log(karim.whichGroup(true));
console.log(rahim.whichGroup(false));
console.log(karim, monir);
