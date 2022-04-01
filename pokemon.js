var Enemy = false;
            var turns = 0;
            var z = 0;
            var y = 0;
            var Student = true;
            var money = 9999;
            var enemyHealth = 50;
            var studentHealth = 30;
            document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
            document.getElementsByClassName("studentHealth")[0].innerHTML = studentHealth





            var enemyAttacks = {
                "Maths" : {
                    "min" : 5,
                    "max" : 6
                },

                "Valed" : {
                    "min" : 2,
                    "max" : 13
                }
            }

            var studentAttacks = {
                "doreq" : {
                    "min" : 4,
                    "max" : 6
                },

                "cry" : {
                    "min": 1,
                    "max": 4
                }, 

                "sleep": {
                    "min": -2, 
                    "max": 4
                },


            }

            window.setInterval( function(){
                if(Enemy == true) {
                    var x = randomnumb(1, 0);
                    if (x == 1){
                        var damageidentity = randomnumb(enemyAttacks.Maths.max, enemyAttacks.Maths.min);
                        var damage = damageidentity;
                        console.log("Math",damage);
                    }
                    else {
                        var damageidentity = randomnumb(enemyAttacks.Valed.max, enemyAttacks.Valed.min);
                        if (damageidentity < enemyAttacks.Valed.max){
                            var damage = enemyAttacks.Valed.min;
                        }
                        if (damageidentity == enemyAttacks.Valed.max){
                            var damage = enemyAttacks.Valed.max;
                        }
                        console.log("Valed",damage);
                    } 
                    studentHealth = studentHealth - damage;
                    if (studentHealth <= 0){
                        studentHealth = 0;
                        document.getElementsByClassName("studentHealth")[0].innerHTML = studentHealth;
                        Enemy = false;
                        Student = false;
                        window.setTimeout( function(){
                            document.body.innerHTML = "";
                            document.body.style.background = "black";
                            const lose = document.createElement("div")
                            lose.setAttribute("id", "lose");
                            document.body.appendChild(lose);
                            document.getElementById("lose").innerHTML = "LOSE";
                        }, 2000)
                    }
                    else {
                        document.getElementsByClassName("studentHealth")[0].innerHTML = studentHealth;  
                        Enemy = false;
                        Student = true;
                    }
                }
            }, 500)


            function doreq(){
                if (Student == true){
                    if(turns == y) {
                        studentAttacks.doreq["min"] = 4;
                        studentAttacks.doreq["max"] = 6;
                    }
                    var damageidentity = randomnumb(studentAttacks.doreq.max, studentAttacks.doreq.min);
                    var damage = damageidentity;
                    enemyHealth = enemyHealth - damage;
                    turns++;
                    console.log(turns,z);
                    if(turns == z) {
                        enemyAttacks.Maths["min"] = 5;
                        enemyAttacks.Maths["max"] = 6;
                        enemyAttacks.Valed["min"] = 2;
                        enemyAttacks.Valed["max"] = 13;
                    }
                    console.log(enemyAttacks.Maths["max"], enemyAttacks.Maths["min"]);
                    if (enemyHealth <= 0){
                        enemyHealth = 0;
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        window.setTimeout( function(){
                            document.body.innerHTML = "";
                            document.body.style.background = "black";
                            const lose = document.createElement("div")
                            lose.setAttribute("id", "lose");
                            document.body.appendChild(lose);
                            document.getElementById("lose").innerHTML = "WIN";
                        }, 2000)
                        Enemy = false;
                        Student = false;
                    }
                    else {
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        Enemy = true;
                        Student = false;   
                    }
                }

                else {

                }
            }



            function cry(){
                if (Student == true){
                    var damageidentity = randomnumb(studentAttacks.cry.max, studentAttacks.cry.min);
                    if (damageidentity < 10){
                        damage =2;
                    enemyHealth
                }
                
                    else{
                        damage = 5;
                }

                    enemyHealth = enemyHealth - damage;
                    turns ++;
                    if (turns !== z){
                        enemyAttacks.Maths["min"] = 4;
                        enemyAttacks.Maths["max"] = 5;
                        enemyAttacks.Valed["min"] = 1;
                        enemyAttacks.Valed["max"] = 12;
                        console.log("still in effect")
                    }
                    else {
                        enemyAttacks.Maths["min"] = 5;
                        enemyAttacks.Maths["max"] = 6;
                    }

                    z = turns+3
                    console.log(turns, z)
                    console.log(enemyAttacks.Maths["max"], enemyAttacks.Maths["min"]);
                    if (enemyHealth <= 0){
                        enemyHealth = 0;
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        window.setTimeout( function(){
                            document.body.innerHTML = "";
                            document.body.style.background = "black";
                            const lose = document.createElement("div")
                            lose.setAttribute("id", "lose");
                            document.body.appendChild(lose);
                            document.getElementById("lose").innerHTML = "WIN";
                        }, 2000)
                        Enemy = false;
                        Student = false;
                    }
                    else {
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        Enemy = true;
                        Student = false;   
                    }
                }

            }
            function sleep(){
                if (Student == true){
                    turns++;
                    if (turns !== y){
                        studentAttacks.doreq["min"] = 6;
                        studentAttacks.doreq["max"] = 8;
                    }
                    else {
                        studentAttacks.doreq["min"] = 5;
                        studentAttacks.doreq["max"] = 6;
                    }

                    y = turns+3
                    var damageidentity = randomnumb(studentAttacks.sleep.max, studentAttacks.sleep.min);
                    var damage = damageidentity;
                    console.log(damage);
                    enemyHealth = enemyHealth - damage;
                    if(turns == z) {
                        enemyAttacks.Maths["min"] = 5;
                        enemyAttacks.Maths["max"] = 6;
                        enemyAttacks.Valed["min"] = 2;
                        enemyAttacks.Valed["max"] = 13;
                    }
                    console.log(enemyAttacks.Maths["max"], enemyAttacks.Maths["min"]);
                    console.log(turns, z)
                    if (enemyHealth <= 0){
                        enemyHealth = 0;
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        window.setTimeout( function(){
                            document.body.innerHTML = "";
                            document.body.style.background = "black";
                            const lose = document.createElement("div")
                            lose.setAttribute("id", "lose");
                            document.body.appendChild(lose);
                            document.getElementById("lose").innerHTML = "WIN";
                        }, 2000)
                        Enemy = false;
                        Student = false;
                    }
                    else {
                        document.getElementsByClassName("enemyHealth")[0].innerHTML = enemyHealth;
                        Enemy = true;
                        Student = false;   
                    }

                }
            }

            function run(){
                document.getElementsByClassName("run")[0].innerHTML = "Can't run from requirements."
            }

            window.setInterval(function(){
                document.getElementById("run").innerHTML = "";
            }, 1000)




            function randomnumb(max, min){
                return Math.floor(Math.random() * (max - min + 1) + min);
            }