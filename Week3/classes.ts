class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

let s = new Student("Susmitha");
s.display();