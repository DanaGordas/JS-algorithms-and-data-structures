// Class syntax ES15

// build a class named Student

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }

    // instance methods

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }

    markLate(){
        this.tardies += 1;
        if(this.tardies > 3) {
           return "YOU ARE EXPELLED!!";
        }
        return `The student ${this.firstName} ${this.lastName} has been late ${this.tardies} times!`
    }

    addScore(score){
        this.scores.push(score);
    }

    calculateAverage(){
        let  sum = this.scores.reduce(function(a,b){return a+b});
        return sum / this.scores.length;
    }

    // class methods with static keyword

    static enrollStudents(){
        return "You are enrolled!";
    }
}

let firstStudent = new Student("Dana", "Gordas", 3);
let secondStudent = new Student("Yorrick", "Boots",2);
