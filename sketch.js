var accept, student;
var database;
var allStudents;
var studentCount = 0;
var names = [];
var y = 200;
var state = 0
var showDetailsStats;
var bg;

function setup() {
    database = firebase.database();
    createCanvas(0, 0)

    database.ref('studentCount').on("value", (data) => {studentCount = data.val();})
    database.ref('state').on("value", function(data) {
        state = data.val();
    })

    // bg = loadImage("images/Background.png", 0, 0, 300, 300)
    // bg.scale = 1.2


    accept = new Info()
}

function draw() {
    //background(bg)
    Student.getInfo();
    //console.log(studentCount)
    //console.log(allStudents)

    if(state === 0)
        accept.accept();

    else if(state === 1)
        accept.showDetails();

}