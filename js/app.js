const lakersArray = [
    {name: "Kareem Abdul-Jabbar", championships: 6,  points: 38387, allstars: 15, image: "../images/lakers/kareem.jpg", score: 2}, 
    {name: "Magic Johnson", championships: 5,  points: 17707, allstars: 12, image: "../images/lakers/magic1.png", score: 2},
    {name: "Kobe Bryant", championships: 5,  points: 33643, allstars: 18,  image: "../images/lakers/kobebryant.jpg", score: 2},
    {name: "Jerry West", championships: 5,  points: 25192, allstars: 14, image: "../images/lakers/jerrywest.jpg", score: 2},
    {name: "James Worthy", championships: 3,  points: 16320, allstars: 7, image: "../images/lakers/jamesworthy.png", score: 2},
    {name: "Robert Horry", championships: 7,  points: 7715, allstars: 0, image: "../images/lakers/horry.jpeg", score: 2},
    {name: "A.C. Green", championships: 5,  points: 12355, allstars: 10, image: "../images/lakers/acgreen.jpg", score: 2},
    {name: "LeBron James", championships: 4,  points: 32543, allstars: 10, image: "../images/lakers/labron.jpg", score: 2},
    {name: "Shaquille O'Neal",championships: 4,  points:28596, allstars: 15, image: "../images/lakers/shaq.png", score: 2},
    {name: "George Mikan",championships: 7,  points: 10156, allstars: 4, image: "../images/lakers/mikan.png", score: 2},
    {name: "Elgin Baylor",championships: 1,  points: 23149, allstars: 11, image: "../images/lakers/baylor.jpeg", score: 2},
    {name: "Wilt Chamberlain",championships: 2 ,  points: 31419, allstars: 13, image: "../images/lakers/wilt.jpg", score: 2},
    {name: "3 pointer",championships: 100, points: 100, allstars: 100, image:"../images/lakers/magicbird.jpg", score: 3}, 
    {name: "Block", championships: 100, points: 100, allstars: 100, image: "../images/lakers/wildcard.jpg", score: 2 },
    {name: "Dunk", championships: 100, points: 100, allstars: 100, image:  "../images/lakers/wildcard.jpg", score: 2 },
    

]

const celticsArray = [
    {name: "Bill Russell",championships: 11,  points: 14522, allstars: 12, image: "../images/celtics/russell.jpg", score: 2}, 
    {name: "Larry Bird",championships: 3,  points: 21791, allstars: 12, image: "../images/celtics/larrybird.png", score: 2}, 
    {name: "John Havlicek",championships: 8,  points:26395, allstars: 13, image: "../images/celtics/havlicek.png", score: 2}, 
    {name: "Bob Cousy",championships: 6,  points: 16960, allstars: 13, image: "../images/celtics/cousy.jpg", score: 2}, 
    {name: "Paul Peirce",championships: 1,  points: 26397, allstars: 10, image: "../images/celtics/peirce.png", score: 2}, 
    {name: "Kevin McHale", championships: 3,  points: 23334, allstars: 7, image: "../images/celtics/mchale.jpeg", score: 2}, 
    {name: "Dennis Johnson", championships:3,  points: 15535, allstars: 5, image: "../images/celtics/djohnson.jpeg", score: 2}, 
    {name: "Robert Parrish",championships:4,  points: 23334, allstars: 9, image: "../images/celtics/parrish.jpg", score: 2}, 
    {name: "Sam Jones",championships:10,  points: 15411, allstars: 5, image: "../images/celtics/samjones.jpeg", score: 2}, 
    {name: "Dave Cowens",championships:2,  points: 13516, allstars: 8, image: "../images/celtics/cowens.jpeg", score: 2}, 
    {name: "Tom Heinsohn",championships:7,  points: 12194, allstars: 6, image: "../images/celtics/heinsohn.jpeg", score: 2}, 
    {name: "Kevin Garnett",championships:1,  points: 26071, allstars: 15, image: "../images/celtics/garnett.jpg", score: 2},
    {name: "3 pointer", championships: 100, points: 100, allstars: 100, image: "../images/lakers/magicbird.jpg", score: 3},
    {name: "Block", championships: 100, points: 100, allstars: 100, image: "../images/celtics/celticblockcard.jpg", score: 2},
    {name: "Dunk", championships: 100, points: 100, allstars: 100, image:  "../images/celtics/celticdunk.jpg", score: 2},
    //{name: "celticcardback",championships: 99, image: "../images/celtics/celticcardback.jpg"}



]

const lakerContainer=document.getElementById("lakerscontainer");
const celticsContainer=document.getElementById("celticscontainer");

const btnRings=document.getElementById("rings");
btnRings.addEventListener("click", startGame);
btnRings.setAttribute("data-gameType", "rings");

const btnPoints=document.getElementById("points");
btnPoints.addEventListener("click", startGame);
btnPoints.setAttribute("data-gameType", "points");

const btnAllStars=document.getElementById("allstars");
btnAllStars.addEventListener("click", startGame);
btnAllStars.setAttribute("data-gameType", "allstars");

let lakersGameArray=[];     
let celticsGameArray=[];   
let lakerChampionships = null;
let celticChampionships = null; 

let lakerLogo="../images/lakers/logo.jpg";
let celticsLogo="../images/celtics/celticcardback.jpg";

let gameObject={};
    //.gameType
    //.allowClick
    //.turn
    //.quarter
    //.player1Score
    //.player2Score 
    //.flipCount
    //.cardCount


let lCardInPlay=[];
let cCardInPlay=[];

function createBoard() {

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


}

function resetBoard() {
    
    for (let i=1; i<6; i++) {

        let lCard=document.getElementById(`card${i}`);
        let cCard=document.getElementById(`cCard${i}`);
        
        lCard.removeChild(lCard.childNodes[0]);
        cCard.removeChild(cCard.childNodes[0]);

        createBoard();
 }
}

function startGame() {

    gameObject.gameType=this.getAttribute("data-gameType");
    console.log("Game Type: " + gameObject.gameType);

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

    // console.log(lakersGameArray);
    // console.log (" ");
    // console.log(celticsGameArray);
    // console.log (" ");

    gameObject.turn="player1";
    gameObject.allowClick=true;
    gameObject.quarter=1;
    gameObject.player1Score=0;
    gameObject.player2Score=0;
    gameObject.flipCount=0;
    gameObject.cardCount=0;

    let lCardInPlay=[];
    let cCardInPlay=[];
    


}
function scoreAlert(){

}
function clickCard() {

    if(gameObject.allowClick !== true) return;
    
    let flipped=this.getAttribute("data-flipped");
    let di=this.getAttribute("data-index");
    let team=di.substring(0,1);
    let index=di.substring(1);

    // console.log("Flipped: " + flipped);
    if (flipped=="true") return;
    
    if (team=="l" && gameObject.turn !== "player1") return;
    if (team=="c" && gameObject.turn !== "player2") return;
    // console.log ("player: " + gameObject.turn + "  /  Team: " + team);

    let lc=lakersGameArray[index];
    let cc=celticsGameArray[index];
    let compText;

    if(team=="l") {
        this.src=lakersGameArray[index].image;
        lCardInPlay.push(lakersGameArray[index]);
        
        if (gameObject.gameType=="rings") {
            compText=lc.championships + " Rings";
        } else if (gameObject.gameType=="points") {
            compText=lc.points + " Points";
        } else if(lCardInPlay === '3 pointer')  {
            compText=lc.allstars + "3 pointer" + "";
            
        } else  {
            compText=lc.allstars + " All Stars";}

        
        console.log(lc.name + " has " + compText);
        document.getElementById('lakersstat').innerText = lc.name + " " + compText
        gameObject.innerHTML=compText;
    setTimeout(() => {document.getElementById('lakersstat').innerHTML="";}, 4000);

    } else {
        this.src=celticsGameArray[index].image;
        cCardInPlay.push(celticsGameArray[index]);

        if (gameObject.gameType=="rings") {
            compText=cc.championships + " Rings";
        } else if (gameObject.gameType=="points") {
            compText=cc.points + " Points";
        } else {
            compText=cc.allstars + " All Stars";
        }
        console.log(cc.name + "" + compText);
        document.getElementById('celticsstat').innerText = cc.name + " " + compText
        gameObject.innerHTML=compText;
        setTimeout(() => {document.getElementById('celticsstat').innerHTML="";}, 4000);
    }

    gameObject.flipCount++;
    gameObject.cardCount++;

    

    if (gameObject.flipCount<2) {
        
        if (gameObject.turn=="player1") {
            gameObject.turn="player2";
        } else {
            gameObject.turn="player1";
        }

    } else {
        gameObject.flipCount=0;
        checkScore();
    }
  }

function checkScore() {

    let whoScored=document.getElementById('whoscored')
    let comp1 = null
    let comp2 = null

    
    if (gameObject.gameType=="rings") {
        comp1=lCardInPlay[0].championships;
        comp2=cCardInPlay[0].championships;
        let extra=" rings";
    } else if (gameObject.gameType=="points") {
        comp1=lCardInPlay[0].points;
        comp2=cCardInPlay[0].points;
        let extra = " points";
    } else {
        comp1=lCardInPlay[0].allstars;
        comp2=cCardInPlay[0].allstars;
        let extra=" all stars";
    }

  let scoreText = null
    if (comp1 > comp2) {
        scoreText="Lakers Score " + lCardInPlay[0].score + " points!";
        gameObject.player1Score+=lCardInPlay[0].score;
        gameObject.turn="player1";
    } else {
        scoreText="Celtics Score " + cCardInPlay[0].score + " points!";
        gameObject.player2Score+=cCardInPlay[0].score;
        gameObject.turn="player2";
        
    }

    console.log("Current Score: Lakers - " + gameObject.player1Score + " / Celtics - " + gameObject.player2Score);
    document.getElementById("scoreText").innerText = "Score: Lakers - " + gameObject.player1Score + " / Celtics - " + gameObject.player2Score
    lCardInPlay=[];
    cCardInPlay=[];
    
    whoScored.innerHTML=scoreText;
    setTimeout(() => {document.getElementById("whoscored").innerHTML="";}, 7000);

    // if (gameObject.cardCount=10) {
    //     gameObject.quarter++;
    //     if (gameObject.quarter>4) {
    //         console.log("Final Score: Lakers - " + gameObject.player1Score + " / Celtics - " + gameObject.player2Score);
    //     }
        
    // }
}

function rnd(lower, upper) {
const range = upper - lower + 1;
return Math.floor(Math.random() * range + lower);
}

      
createBoard()