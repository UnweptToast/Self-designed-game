class Info {
    constructor() {
        this.title = createElement('h1');
        this.title.html("Class Data");
        this.title.style("font-size: 50px; margin-top: 3%")
        this.title.position(displayWidth/2 - 100, 0)

        this.end = createElement('h1')
        this.end.position(300, 2000)
        this.end.html("-")
        this.end.style("color: lightblue;")

        this.nextButton = createButton("Next");
        this.nextButton.style("font-size: 15px;")
        this.nextButton.position(displayWidth * 0.25, 1850)
        this.nextButton.size(100, 30)

        this.finishButton = createButton("Finish");
        this.finishButton.style("font-size: 15px;")
        this.finishButton.position(displayWidth * 0.7, 1850)
        this.finishButton.size(100, 30)

        this.nameText = createElement('h1');
        this.nameText.html("Name: ");
        this.nameText.style("font-size: 34px;")
        this.nameText.position(displayWidth * 0.3, 300)

        this.classText = createElement('h1');
        this.classText.html("Class: ");
        this.classText.style("font-size: 34px;")
        this.classText.position(displayWidth * 0.3, 400)

        this.sectionText = createElement('h1');
        this.sectionText.html("Section: ");
        this.sectionText.style("font-size: 34px;")
        this.sectionText.position(displayWidth * 0.3, 500)

        this.rollText = createElement('h1');
        this.rollText.html("Roll no: ");
        this.rollText.style("font-size: 34px;")
        this.rollText.position(displayWidth * 0.3, 600)

        this.marksText = createElement('h1');
        this.marksText.html("Enter Marks: ");
        this.marksText.style("font-size: 34px;")
        this.marksText.position(displayWidth * 0.3, 700)

        this.mathsText = createElement('h1');
        this.mathsText.html("Math: ");
        this.mathsText.style("font-size: 30px;")
        this.mathsText.position(displayWidth * 0.4, 800)

        this.physicsText = createElement('h1');
        this.physicsText.html("Physics: ");
        this.physicsText.style("font-size: 30px;")
        this.physicsText.position(displayWidth * 0.4, 900)

        this.bioText = createElement('h1');
        this.bioText.html("Biology: ");
        this.bioText.style("font-size: 30px;")
        this.bioText.position(displayWidth * 0.4, 1000)

        this.chemText = createElement('h1');
        this.chemText.html("Chemistry: ");
        this.chemText.style("font-size: 30px;")
        this.chemText.position(displayWidth * 0.4, 1100)

        this.lang2Text = createElement('h1');
        this.lang2Text.html("II Language: ");
        this.lang2Text.style("font-size: 30px;")
        this.lang2Text.position(displayWidth * 0.4, 1200)

        this.langText = createElement('h1');
        this.langText.html("English Language: ");
        this.langText.style("font-size: 30px;")
        this.langText.position(displayWidth * 0.4, 1300)

        this.litText = createElement('h1');
        this.litText.html("English Literature: ");
        this.litText.style("font-size: 30px;")
        this.litText.position(displayWidth * 0.4, 1400)

        this.geoText = createElement('h1');
        this.geoText.html("Geography: ");
        this.geoText.style("font-size: 30px;")
        this.geoText.position(displayWidth * 0.4, 1500)

        this.histText = createElement('h1');
        this.histText.html("History: ");
        this.histText.style("font-size: 30px;")
        this.histText.position(displayWidth * 0.4, 1600)

        this.group3Text = createElement('h1');
        this.group3Text.html("III Group: ");
        this.group3Text.style("font-size: 30px;")
        this.group3Text.position(displayWidth * 0.4, 1700)





        this.name = createInput();
        this.name.position(displayWidth * 0.4, 331)
        this.name.size(270, 25)
        this.name.style("font-size: 18px")

        this.class = createInput();
        this.class.position(displayWidth * 0.4, 431)
        this.class.size(270, 25)
        this.class.style("font-size: 18px")

        this.section = createInput();
        this.section.position(displayWidth * 0.4, 531)
        this.section.size(270, 25)
        this.section.style("font-size: 18px")

        this.roll = createInput();
        this.roll.position(displayWidth * 0.4, 631)
        this.roll.size(270, 25)
        this.roll.style("font-size: 18px")

        this.maths = createInput();
        this.maths.position(displayWidth * 0.61, 825)
        this.maths.size(100, 25)
        this.maths.style("font-size: 18px");

        this.physics = createInput();
        this.physics.position(displayWidth * 0.61, 925)
        this.physics.size(100, 25)
        this.physics.style("font-size: 18px");

        this.bio = createInput();
        this.bio.position(displayWidth * 0.61, 1025)
        this.bio.size(100, 25)
        this.bio.style("font-size: 18px");

        this.chem = createInput();
        this.chem.position(displayWidth * 0.61, 1125)
        this.chem.size(100, 25)
        this.chem.style("font-size: 18px");

        this.lang2 = createInput();
        this.lang2.position(displayWidth * 0.61, 1225)
        this.lang2.size(100, 25)
        this.lang2.style("font-size: 18px");

        this.lang = createInput();
        this.lang.position(displayWidth * 0.61, 1325)
        this.lang.size(100, 25)
        this.lang.style("font-size: 18px");

        this.lit = createInput();
        this.lit.position(displayWidth * 0.61, 1425)
        this.lit.size(100, 25)
        this.lit.style("font-size: 18px");

        this.geo = createInput();
        this.geo.position(displayWidth * 0.61, 1525)
        this.geo.size(100, 25)
        this.geo.style("font-size: 18px");

        this.hist = createInput();
        this.hist.position(displayWidth * 0.61, 1625)
        this.hist.size(100, 25)
        this.hist.style("font-size: 18px");

        this.group3 = createInput();
        this.group3.position(displayWidth * 0.61, 1725)
        this.group3.size(100, 25)
        this.group3.style("font-size: 18px");

        




        //FOR 'showDetails()' METHOD:

        this.studentRoll = createInput();   //For showing details
        this.studentRoll.position(displayWidth * 0.397, 430)
        this.studentRoll.size(280, 35)
        this.studentRoll.style("font-size: 19px")
        this.studentRoll.hide()
        
        
        this.instruction = createElement('h1') // To Display 'Enter Student Roll.no to see details'
        this.instruction.html("Enter Student's Roll no. to see details:")
        this.instruction.position(displayWidth * 0.3, 300)
        this.instruction.style("font-size: 37px;")
        this.instruction.hide()

        this.enterButton = createButton("Enter")
        this.enterButton.size(150, 35)
        this.enterButton.position(displayWidth * 0.44, 510)
        this.enterButton.style("font-size: 17px")
        this.enterButton.hide()






        this.nameDisplay = createElement('h1');
        this.nameDisplay.html("NaN");
        this.nameDisplay.position(displayWidth * 0.36, 300) //displayWidth * 0.36
        //this.nameDisplay.style("text-align: center;")
        this.nameDisplay.hide();

        this.classDisplay = createElement('h1');
        this.classDisplay.html("NaN");
        this.classDisplay.position(displayWidth * 0.23, 400) //displayWidth * 0.36
        //this.classDisplay.style("text-align: center;")
        this.classDisplay.hide();

        this.sectionDisplay = createElement('h1');
        this.sectionDisplay.html("NaN");
        this.sectionDisplay.position(displayWidth * 0.23, 500) //displayWidth * 0.36
        //this.sectionDisplay.style("text-align: center;")
        this.sectionDisplay.hide();

        this.physicsDisplay = createElement('h1');
        this.physicsDisplay.html("NaN");
        this.physicsDisplay.position(displayWidth * 0.23, 600) //displayWidth * 0.36
        //this.physicsDisplay.style("text-align: center;")
        this.physicsDisplay.hide();

        this.mathDisplay = createElement('h1');
        this.mathDisplay.html("NaN");
        this.mathDisplay.position(displayWidth * 0.23, 700) //displayWidth * 0.36
        //this.mathDisplay.style("text-align: center;")
        this.mathDisplay.hide();
        
        this.chemDisplay = createElement('h1');
        this.chemDisplay.html("NaN");
        this.chemDisplay.position(displayWidth * 0.23, 800) //displayWidth * 0.36
        //this.chemDisplay.style("text-align: center;")
        this.chemDisplay.hide();

        this.bioDisplay = createElement('h1');
        this.bioDisplay.html("NaN");
        this.bioDisplay.position(displayWidth * 0.23, 900) //displayWidth * 0.36
        //this.bioDisplay.style("text-align: center;")
        this.bioDisplay.hide();

        this.lang2Display = createElement('h1');
        this.lang2Display.html("NaN");
        this.lang2Display.position(displayWidth * 0.23,1000) //displayWidth * 0.36
        //this.lang2Display.style("text-align: center;")
        this.lang2Display.hide();

        this.langDisplay = createElement('h1');
        this.langDisplay.html("NaN");
        this.langDisplay.position(displayWidth * 0.23, 1100) //displayWidth * 0.36
        //this.langDisplay.style("text-align: center;")
        this.langDisplay.hide();

        this.litDisplay = createElement('h1');
        this.litDisplay.html("NaN");
        this.litDisplay.position(displayWidth * 0.23, 1200) //displayWidth * 0.36
        //this.nameDisplay.style("text-align: center;")
        this.litDisplay.hide();

        this.geoDisplay = createElement('h1');
        this.geoDisplay.html("NaN");
        this.geoDisplay.position(displayWidth * 0.23, 1300) //displayWidth * 0.36
        //this.geoDisplay.style("text-align: center;")
        this.geoDisplay.hide();

        this.histDisplay = createElement('h1');
        this.histDisplay.html("NaN");
        this.histDisplay.position(displayWidth * 0.23, 1400) //displayWidth * 0.36
        //this.histDisplay.style("text-align: center;")
        this.histDisplay.hide();
        
    
        this.group3Display = createElement('h1');
        this.group3Display.html("NaN");
        this.group3Display.position(displayWidth * 0.23, 1500) //displayWidth * 0.36
        //this.nameDisplay.style("text-align: center;")
        this.group3Display.hide();


        this.avgDisplay = createElement('h1');
        this.avgDisplay.html("NaN");
        this.avgDisplay.position(displayWidth * 0.5, 400) //displayWidth * 0.36
        //this.avgDisplay.style("text-align: center;")
        this.avgDisplay.hide();




        this.dataTitle = createElement('h1');
        this.dataTitle.html("Student Data")
        this.dataTitle.position(displayWidth * 0.4, 40);
        this.dataTitle.style("font-size: 50px")
        this.dataTitle.hide();


    }

    accept() {

        this.nextButton.mouseClicked(() => {
            var nameVal = this.name.value();
            var classVal = this.class.value();
            var sectionVal = this.section.value();
            var rollVal = this.roll.value();
            var physicsVal = this.physics.value();
            var mathVal = this.maths.value();
            var chemVal = this.chem.value();
            var bioVal = this.bio.value();
            var lang2Val = this.lang2.value();
            var langVal = this.lang.value();
            var litVal = this.lit.value();
            var geoVal = this.geo.value();
            var histVal = this.hist.value();
            var group3Val = this.group3.value();
            

            if(nameVal !== "" && classVal !== "" && sectionVal !== "" && rollVal !== "" && mathVal !== "" && physicsVal !== "" && chemVal !== "" && bioVal !== "" && lang2Val !== "" && langVal !== "" && litVal !== "" && geoVal !== "" && histVal !== "" && group3Val !== "") {
                student = new Student(nameVal,parseInt(classVal), sectionVal, parseInt(rollVal), parseInt(mathVal),parseInt(physicsVal), parseInt(chemVal), parseInt(bioVal), parseInt(lang2Val), parseInt(langVal), parseInt(litVal), parseInt(geoVal), parseInt(histVal), parseInt(group3Val));
                student.update();
                studentCount += 1;
                student.updateCount();
                Student.getInfo();

                this.name.value("")
                this.class.value("")
                this.section.value("")
                this.roll.value("")
                this.physics.value("")
                this.maths.value("");
                this.chem.value("");
                this.bio.value("");
                this.lang2.value("");
                this.lang.value("");
                this.lit.value("");
                this.geo.value("");
                this.hist.value("");
                this.group3.value("");

            }
            else {
                alert("Please fill all fields.")
            }

            
        })

        this.finishButton.mouseClicked(() => {
            state = 1;
            Student.setState();
        })

        // y = 300

        // for(var i in allStudents) {
        //     var x = createElement('h1');
        //     x.html(allStudents[i].name + "<br>" + allStudents[i].class + " " + allStudents[i].section);
        //     x.style('font-size: 30px;')
        //     x.position(displayWidth * 0.7, y);
        //     names.push(x);
        //     y += 70;
        // }

    }

    showDetails() {

        this.hide()
        this.dataTitle.show();

        if(showDetailsStats !== "hidden") {
            this.studentRoll.show()
            this.instruction.show()
            this.enterButton.show()
        }

        this.enterButton.mousePressed(()=> {
            var roll = this.studentRoll.value();

            this.nameDisplay.html("Student Name: " + this.getDetailsByRollNo(parseInt(roll), "name"))
            this.nameDisplay.show();

            this.sectionDisplay.html("Section: " + this.getDetailsByRollNo(parseInt(roll), "section"))
            this.sectionDisplay.show();

            this.classDisplay.html("Class: " + this.getDetailsByRollNo(parseInt(roll), "class"))
            this.classDisplay.show();

            this.mathDisplay.html("Math: " + this.getDetailsByRollNo(parseInt(roll), "maths"))
            this.mathDisplay.show();

            this.physicsDisplay.html("Physics: " + this.getDetailsByRollNo(parseInt(roll), "physics"))
            this.physicsDisplay.show();

            this.chemDisplay.html("Chemistry: " + this.getDetailsByRollNo(parseInt(roll), "chem"))
            this.chemDisplay.show();

            this.bioDisplay.html("Biology: " + this.getDetailsByRollNo(parseInt(roll), "bio"))
            this.bioDisplay.show();

            this.lang2Display.html("II Language: " + this.getDetailsByRollNo(parseInt(roll), "lang2"))
            this.lang2Display.show();

            this.langDisplay.html("English Language: " + this.getDetailsByRollNo(parseInt(roll), "lang"))
            this.langDisplay.show();

            this.litDisplay.html("English Literature: " + this.getDetailsByRollNo(parseInt(roll), "lit"))
            this.litDisplay.show();

            this.geoDisplay.html("Geography: " + this.getDetailsByRollNo(parseInt(roll), "geo"))
            this.geoDisplay.show();

            this.histDisplay.html("History: " + this.getDetailsByRollNo(parseInt(roll), "hist"))
            this.histDisplay.show();

            this.group3Display.html("III Group: " + this.getDetailsByRollNo(parseInt(roll), "group3"))
            this.group3Display.show();

            this.avgDisplay.html("Average Marks: " + this.getDetailsByRollNo(parseInt(roll), "average"))
            this.avgDisplay.show();

            this.studentRoll.hide()
            this.instruction.hide()
            this.enterButton.hide()

            showDetailsStats = "hidden"

        })

    }

    hide() {
        this.title.hide();
        this.name.hide();
        this.class.hide();
        this.section.hide();
        this.roll.hide();
        this.nameText.hide();
        this.classText.hide();
        this.sectionText.hide();
        this.rollText.hide();
        this.nextButton.hide();
        this.finishButton.hide();
        this.marksText.hide();

        this.physics.hide()
        this.maths.hide()
        this.chem.hide()
        this.bio.hide()
        this.lang2.hide()
        this.lang.hide()
        this.lit.hide()
        this.geo.hide()
        this.hist.hide()
        this.group3.hide()

        this.physicsText.hide()
        this.mathsText.hide()
        this.chemText.hide()
        this.bioText.hide()
        this.lang2Text.hide()
        this.langText.hide()
        this.litText.hide()
        this.geoText.hide()
        this.histText.hide()
        this.group3Text.hide()

    }

    getDetailsByRollNo(rollNo, info) {
        var marks = [];
        var avg;
        var sum = 0;
       //console.log(allStudents)
        for(var i in allStudents) {
            if(allStudents[i].rollno === rollNo) {
                //console.log("hi")

                  console.log(allStudents[i].rollno)

                if(info === "name")
                    return allStudents[i].name;

                if(info === "class")
                    return allStudents[i].class;

                if(info === "section")
                    return allStudents[i].section;

                if(info === "physics")
                    return allStudents[i].physicsmarks;

                if(info === "maths")
                    return allStudents[i].mathmarks;

                if(info === "chem")
                    return allStudents[i].chemmarks;

                if(info === "bio")
                    return allStudents[i].biomarks;

                if(info === "lang2")
                    return allStudents[i].lang2marks;

                if(info === "lang")
                    return allStudents[i].langmarks;

                if(info === "lit")
                    return allStudents[i].litmarks;

                if(info === "geo")
                    return allStudents[i].geomarks;

                if(info === "hist")
                    return allStudents[i].histmarks;

                if(info === "group3")
                    return allStudents[i].group3marks;

                marks = [allStudents[i].physicsmarks, allStudents[i].mathmarks, allStudents[i].chemmarks, allStudents[i].biomarks, allStudents[i].lang2marks, allStudents[i].langmarks, allStudents[i].litmarks, allStudents[i].geomarks, allStudents[i].histmarks, allStudents[i].group3marks];


                for(var i = 0; i < marks.length; i++) {
                    sum += marks[i];
                }

                avg = sum / marks.length;

                if(info === "average")
                    return avg;


                if(info === "performance") {
                    if(avg < 30)
                        return "poor";

                    if(avg >= 30 && avg < 50)
                        return "can do better.";

                    if(avg >= 50 && avg < 70)
                        return "average";

                    if(avg >=70 && avg < 85)
                        return "good";
                    
                    if(avg >= 85) 
                        return "excellent";

                    }

                
                if(info === "percentage")
                    return (sum/1000) * 100
                }
            }
    }
}

