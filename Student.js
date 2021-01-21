class Student {
    constructor(name, Class, section, roll, math, physics, chem, bio, lang2, lang, lit, geo, hist, group3) {
        this.class = Class;
        this.section = section;
        this.name = name;
        this.mathmarks = math;
        this.physicsmarks = physics;
        this.chemmarks = chem;
        this.biomarks = bio;
        this.lang2marks = lang2;
        this.langmarks = lang;
        this.litmarks = lit;
        this.geomarks = geo;
        this.histmarks = hist;
        this.group3marks = group3;
        this.rollno = roll;
        //this.averagemarks = this.mathmarks;
    }

    static getInfo() {
        database.ref('students/').on("value", (data) => {
            allStudents = data.val();
        })
    }

    update() {
        database.ref('students/student' + this.rollno).update({
            name: this.name,
            class: this.class,
            section: this.section,
            rollno: this.rollno,
            mathmarks: this.mathmarks,
            physicsmarks: this.physicsmarks,
            chemmarks: this.chemmarks,
            biomarks: this.biomarks,
            lang2marks: this.lang2marks,
            langmarks: this.langmarks,
            litmarks: this.litmarks,
            geomarks: this.geomarks,
            histmarks: this.histmarks,
            group3marks: this.group3marks
        })
    }

    updateCount() {
        database.ref('/').update({
            studentCount: studentCount
        })
    }

    static setState() {
        database.ref('/').update({
            state: state
        })
    }

}