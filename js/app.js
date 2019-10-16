const lakersArray = [
    {name: "Kareem Abdul-Jabbar", championships: 6,  points: 38787, allstars: 15, image: "./images/kareem.jpg", score: 2}, 
    {name: "Magic Johnson", championships: 5,  points: 17707, allstars: 12, image: "./images/magic1.png", score: 2},
    {name: "Kobe Bryant", championships: 5,  points: 33643, allstars: 18,  image: "./images/kobebryant.jpg", score: 2},
    {name: "Jerry West", championships: 5,  points: 25192, allstars: 14, image: "./images/jerrywest.jpg", score: 2},
    {name: "James Worthy", championships: 3,  points: 16320, allstars: 7, image: "./images/jamesworthy.png", score: 2},
    {name: "Robert Horry", championships: 7,  points: 7715, allstars: 0, image: "./images/horry.jpeg", score: 2},
    {name: "A.C. Green", championships: 5,  points: 12355, allstars: 10, image: "./images/acgreen.jpg", score: 2},
    {name: "LeBron James", championships: 4,  points: 32543, allstars: 10, image: "./images/labron.jpg", score: 2},
    {name: "Shaquille O'Neal",championships: 4,  points:28596, allstars: 15, image: "./images/shaq.png", score: 2},
    {name: "George Mikan",championships: 7,  points: 10156, allstars: 4, image: "./images/mikan.png", score: 2},
    {name: "Elgin Baylor",championships: 1,  points: 23149, allstars: 11, image: "./images/baylor.jpeg", score: 2},
    {name: "Wilt Chamberlain",championships: 2 ,  points: 31419, allstars: 13, image: "./images/wilt.jpg", score: 2},
    {name: "3 pointer",championships: 100, points: 100000, allstars: 100, image:"./images/magicbird.jpg", score: 3}, 
    {name: "Block", championships: 100, points: 100000, allstars: 100, image: "./images/wildcard.jpg", score: 2 },
    {name: "Dunk", championships: 100, points: 100000, allstars: 100, image:  "./images/wildcard.jpg", score: 2 },
    

]

const celticsArray = [
    {name: "Bill Russell",championships: 11,  points: 14522, allstars: 12, image: "./images/russell.jpg", score: 2}, 
    {name: "Larry Bird",championships: 3,  points: 21791, allstars: 12, image: "./images/larrybird.png", score: 2}, 
    {name: "Bob Cousy",championships: 6,  points: 16960, allstars: 13, image: "./images/cousy.jpg", score: 2}, 
    {name: "Paul Peirce",championships: 1,  points: 26397, allstars: 10, image: "./images/peirce.png", score: 2}, 
    {name: "Kevin McHale", championships: 3,  points: 23334, allstars: 7, image: "./images/mchale.jpeg", score: 2}, 
    {name: "Dennis Johnson", championships:3,  points: 15535, allstars: 5, image: "./images/djohnson.jpeg", score: 2}, 
    {name: "Robert Parrish",championships:4,  points: 23334, allstars: 9, image: "./images/parrish.jpg", score: 2}, 
    {name: "Sam Jones",championships:10,  points: 15411, allstars: 5, image: "./images/samjones.jpeg", score: 2}, 
    {name: "Dave Cowens",championships:2,  points: 13516, allstars: 8, image: "./images/cowens.jpeg", score: 2}, 
    {name: "Tom Heinsohn",championships:7,  points: 12194, allstars: 6, image: "./images/heinsohn.jpeg", score: 2}, 
    {name: "Kevin Garnett",championships:1,  points: 26071, allstars: 15, image: "./images/garnett.jpg", score: 2},
    {name: "3 pointer", championships: 100, points: 100000, allstars: 100, image: "./images/magicbird.jpg", score: 3},
    {name: "Block", championships: 100, points: 100000, allstars: 100, image: "./images/celticblockcard.jpg", score: 2},
    {name: "Dunk", championships: 100, points: 100000, allstars: 100, image:  "./images/celticdunk.jpg", score: 2},
    //{name: "celticcardback",championships: 99, image: "../images/celtics/celticcardback.jpg"}



]

const lakerContainer=document.getElementById("lakerscontainer");
const celticsContainer=document.getElementById("celticscontainer");

// Three Start Buttons=========================================
// RINGS START BUTTTON=============
const btnRings=document.getElementById("rings");
btnRings.addEventListener("click", startGame);
btnRings.setAttribute("data-gameType", "rings");
//POINTS START BUTTON================
const btnPoints=document.getElementById("points");
btnPoints.addEventListener("click", startGame);
btnPoints.setAttribute("data-gameType", "points");
//PONTS START BUTTON================
const btnAllStars=document.getElementById("allstars");
btnAllStars.addEventListener("click", startGame);
btnAllStars.setAttribute("data-gameType", "allstars");
// THE 5 CARDS TO START THE GAME WILL BE HELD HERE================
let lakersGameArray=[];     
let celticsGameArray=[];   
let lakerChampionships = null;
let celticChampionships = null; 
//Two Card Backs to start game=========================================
let lakerLogo="./images/logo.jpg";
let celticsLogo="./images/celticcardback.jpg";

let gameObject={};
    //.gameType
    //.allowClick
    //.turn
    //.quarter
    //.player1Score
    //.player2Score 
    //.flipCount
    //.cardCount

//Empty array to hold the randomly selected cards=========================
let lCardInPlay=[];
let cCardInPlay=[];


// This is the start board that selects five cards face down.=====================
function createBoard() {
// 5 for lakers
    for (let i=1; i<6; i++) {
        const lakerCard=document.createElement("img");
        lakerCard.addEventListener("click", clickCard);
        lakerCard.setAttribute("data-index", "l" + i);
        lakerCard.setAttribute("data-flipped", "false");
        lakerCard.classList.add("laker");
        lakerCard.src=lakerLogo;
        if(i < 4) {
            document.getElementById(`card${i}`).appendChild(lakerCard)
        } else {
            document.getElementById(`card${i}`).appendChild(lakerCard)
        }
    }
// 5 for Celtics
    for (let i=1; i<6; i++) {
        const celticsCard=document.createElement("img");
        celticsCard.addEventListener("click", clickCard);
        celticsCard.setAttribute("data-index", "c" + i);
        celticsCard.setAttribute("data-flipped", "false");
        celticsCard.classList.add("celtic");
        celticsCard.src=celticsLogo;
        if(i < 3) {
            document.getElementById(`cCard${i}`).appendChild(celticsCard)
        } else {
            document.getElementById(`cCard${i}`).appendChild(celticsCard)
        }
    }
    // This is three random containers to randomize the card selection=================
    let lakerTemp=lakersArray.slice();
    let celticsTemp=celticsArray.slice();

    for (let i=1; i<7; i++) {    

        let lRandom=rnd(0,lakerTemp.length-1)
        let cRandom=rnd(0,celticsTemp.length-1)

        lakersGameArray[i]=lakerTemp[lRandom];
        lakerTemp.splice(lRandom,1);

        celticsGameArray[i]=celticsTemp[cRandom];
        celticsTemp.splice(cRandom,1);
    }

    //let lCardInPlay=[];
    //let cCardInPlay=[];
}
//This function resets the board after each quarter============================
//testing purposes
function resetBoard() {
    
    for (let i=1; i<6; i++) {

        let lCard=document.getElementById(`card${i}`);
        let cCard=document.getElementById(`cCard${i}`);
        
        lCard.removeChild(lCard.childNodes[0]);
        cCard.removeChild(cCard.childNodes[0]);
    }
        
    createBoard();
    document.getElementById("quarterdiv").innerText="Quarter: " + gameObject.quarter;

}
        
//Upon start button click this will initialize the game from 0==============
function startGame() {

    if (gameObject.allowClick==false) return;

    gameObject.gameType=this.getAttribute("data-gameType");
    console.log("Game Type: " + gameObject.gameType);
    
    gameObject.turn="player1";
    gameObject.allowClick=true;
    gameObject.quarter=1;
    gameObject.player1Score=0;
    gameObject.player2Score=0;
    gameObject.flipCount=0;
    gameObject.cardCount=0;

    document.getElementById("quarterdiv").innerText="Quarter: " + gameObject.quarter;
}
// This retrives the card click information===========
function clickCard() {

    if(gameObject.allowClick !== true) return;
    
    let flipped = this.getAttribute("data-flipped");
    let di = this.getAttribute("data-index");
    let team = di.substring(0,1);
    let index = di.substring(1);

    // console.log("Flipped: " + flipped);
    if (flipped == "true") return;
    
    if (team == "l" && gameObject.turn !== "player1") return;
    if (team == "c" && gameObject.turn !== "player2") return;
    // console.log ("player: " + gameObject.turn + "  /  Team: " + team);



    // Lakers and Celtics Stats get selected and rendered to the screen.===============
    let lc = lakersGameArray[index];
    let cc = celticsGameArray[index];
    let compText;
    //Lakers card section=========
    if(team == "l") {
        this.src = lakersGameArray[index].image;
        lCardInPlay.push(lakersGameArray[index]);
        
        if (gameObject.gameType == "rings") {
            compText = lc.championships + " Rings";
        } else if (gameObject.gameType == "points") {
            compText=lc.points + " Points";
        } else  {
            compText=lc.allstars + " All Stars";
        }

        //DOES NOT DISPLAY POINTS/RINGS, ETC. WHEN WILD CARD IS SELECTED=========================
        if(lc.name == "3 pointer" || lc.name == "Block" || lc.name == "Dunk") compText="";
        //Lakers render and set time out======== 
        console.log(lc.name + " " + compText);
        document.getElementById('lakersstat').innerText = lc.name + " " + compText
        gameObject.innerHTML=compText;
        setTimeout(() => {document.getElementById('lakersstat').innerHTML="";}, 4000);
        
        //Celtics selection===================
    } else {
        this.src = celticsGameArray[index].image;
        cCardInPlay.push(celticsGameArray[index]);

        if (gameObject.gameType == "rings") {
            compText = cc.championships + " Rings";
        } else if (gameObject.gameType == "points") {
            compText = cc.points + " Points";
        } else {
            compText = cc.allstars + " All Stars";
        }

        //DOES NOT DISPLAY POINTS/RINGS, ETC. WHEN WILD CARD IS SELECTED=========================
        if(cc.name == "3 pointer" || cc.name == "Block" || cc.name == "Dunk") compText="";
        //Celtics render and setTime out
        console.log(cc.name + "" + compText);
        document.getElementById('celticsstat').innerText = cc.name + " " + compText
        gameObject.innerHTML=compText;
        setTimeout(() => {document.getElementById('celticsstat').innerHTML="";}, 4000);
    }

    gameObject.flipCount++;
    gameObject.cardCount++;
    document.getElementById("quarterdiv").innerText="";

    

    if (gameObject.flipCount<2) {
        
        if (gameObject.turn == "player1") {
            gameObject.turn = "player2";
        } else {
            gameObject.turn = "player1";
        }

    } else {
        gameObject.flipCount = 0;
        checkScore();
    }
  }


// Who scored between the two cards flipped=============== 
function checkScore() {

    let whoScored=document.getElementById('whoscored')
    let comp1 = null
    let comp2 = null

    
    if (gameObject.gameType == "rings") {
        comp1=lCardInPlay[0].championships;
        comp2=cCardInPlay[0].championships;
        let extra=" rings";
    } else if (gameObject.gameType == "points") {
        comp1 = lCardInPlay[0].points;
        comp2 = cCardInPlay[0].points;
        let extra = " points";
    } else {
        comp1 = lCardInPlay[0].allstars;
        comp2 = cCardInPlay[0].allstars;
        let extra = " all stars";
    }

  let scoreText = null
    if (comp1 > comp2) {
        scoreText="Lakers Score " + lCardInPlay[0].score + " points!";
        gameObject.player1Score+=lCardInPlay[0].score;
        gameObject.turn="player1";
    } else if(comp1 < comp2) {
        scoreText="Celtics Score " + cCardInPlay[0].score + " points!";
        gameObject.player2Score+=cCardInPlay[0].score;
        gameObject.turn="player2";
        
    } else {
        scoreText=" No Score";   //ADDED FOR TIE CARDS==========
        if (gameObject.turn == "player1") {
            gameObject.turn = "player2";
        } else {
            gameObject.turn="player1";
        }
    }

    console.log("Current Score: Lakers - " + gameObject.player1Score + "  Celtics - " + gameObject.player2Score);
    //Renders total running score
    document.getElementById("scoreText").innerText = " Lakers  " +  "" + gameObject.player1Score + "  Celtics " + gameObject.player2Score
    lCardInPlay=[];
    cCardInPlay=[];
    whoScored.innerHTML=scoreText;
    setTimeout(() => {document.getElementById("whoscored").innerHTML="";}, 5000);

//CHECK FOR QUARTER CHANGE/GAME OVER=====================

    if (gameObject.cardCount==10) {
        gameObject.quarter++;
        gameObject.cardCount=0;
        
        if (gameObject.quarter<5) {

            console.log("Begin Quarter " + gameObject.quarter);
            setTimeout(resetBoard(), 2000);

        } else {
            console.log("Final Score: Lakers - " + gameObject.player1Score + "      Celtics - " + gameObject.player2Score);

            let divWidth=500; let winWidth=window.innerWidth;
            let divHeight=200; let winHeight=window.innerHeight;

            gameOverDiv=document.createElement("div");
            gameOverDiv.id="gameoverdiv";

// CHANGE CSS STYLING HERE FOR GAME OVER DIV AND BUTTON==============================================

            gameOverDiv.style.cssText="position: absolute; border: 3px solid blue;"
            gameOverDiv.style.cssText+="width: " + divWidth + "px; height: " +divHeight + "px;";
            gameOverDiv.style.cssText+="font-size: 34px; background-color: white; text-align: center;";
            gameOverDiv.style.cssText+="padding-top: 50px;";

            gameOverDiv.innerHTML="Final Score: Lakers - " + gameObject.player1Score + " / Celtics - " + gameObject.player2Score;
            gameOverDiv.innerHTML+="<br><br>";
            //created box for final score
            let x=winWidth/2-divWidth/2 + "px;";
            let y=winHeight/2-divHeight/2 + "px;";

            gameOverDiv.style.cssText+="left: " + x +"; top: " + y;

            document.body.appendChild(gameOverDiv);

            gameOverButton=document.createElement("button");
            gameOverButton.innerHTML="Ok";
            gameOverButton.addEventListener("click", startNewGame);
            gameOverButton.style.cssText="font-size: 24px;";
            gameOverDiv.appendChild(gameOverButton);

        }

    }
}
// Starts new game==========
function startNewGame() {
    
    gameObject={};
    
    let remove=document.getElementById("gameoverdiv");
    remove.parentNode.removeChild(remove)
    document.getElementById("scoreText").innerText = "";

    resetBoard();

}
//Global random math function=====
function rnd(lower, upper) {
    const range = upper - lower + 1;
    return Math.floor(Math.random() * range + lower);
}

      
createBoard()
