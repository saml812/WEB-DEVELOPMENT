function initialize(){ 
	card1 = document.getElementById("back1");
	card2 = document.getElementById("back2");
	card3 = document.getElementById("back3");
	card4 = document.getElementById("back4");
	card5 = document.getElementById("back5");
	card6 = document.getElementById("back6");
	card7 = document.getElementById("back7");
	card8 = document.getElementById("back8");
	card9 = document.getElementById("back9");
	card10 = document.getElementById("back10");
	card11 = document.getElementById("back11");
	card12 = document.getElementById("back12");
	card13 = document.getElementById("back13");
	card14 = document.getElementById("back14");
	card15 = document.getElementById("back15");
	card16 = document.getElementById("back16");
	message = document.getElementById("messageBoard");
	scoreOut = document.getElementById("score");
	messageOut = "";
	
	for (var i = 0; i<16; i++)
	{
		cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16];
		cards[i].src = "images/back side.png";
	}
	
	totalClicks = 0;
	clickOne = "";
	clickTwo = "";
	check = true;
	roundFinished = false;
	randomAssignment();
	display();
}

function display(){
	scoreOut.innerHTML = totalClicks;
	message.innerHTML = messageOut;
}

function randomNumberGenerator(max){
    return Math.floor(Math.random()*max);
}

function randomAssignment(){
	var faces = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
	for (var i = 0; i < 16; i++){
		var position = randomNumberGenerator(faces.length-1);
			cards[i].front = "images/face" + faces[position] + ".png";
			cards[i].flipped = false;
			faces.splice(position, 1);
	}
}

function flip(cardNum)
{
	if (check && !cardNum.flipped)
	{
	    totalClicks++;
		display();
		cardNum.src = cardNum.front;
		cardNum.flipped = true;
		if (totalClicks % 2 == 1)
		{
			click1 = cardNum;
		}
		else
		{
		    click2 = cardNum;
			if (click1.front != click2.front)
			{
			    check = false;
				setTimeout(function(){
				    click1.src = "images/back side.png"
					click2.src = "images/back side.png"
					click1.flipped = false;
					click2.flipped = false;
					check = true;
				}, 1000)
			}
		}
		roundEnd();
	}
}

function roundEnd() 
{
	var count = 0;
	for (var i=0; i<16; i++)
	{
		if (!cards[i].flipped)
		{
		    count++;
		}
	}
	if (count == 0)
	{
	    roundFinished = true;
	}				
	if (roundFinished)
	{
		if (totalClicks < 16){
			messageOut = "CHEATER!";
		}
		else if (totalClicks == 16){
			messageOut = "WOW! Perfect Score! yawn... I am not impressed.";
		}
		else if (totalClicks > 16 && totalClicks <= 36){
			messageOut = "Thats pretty mid. I can do way better!";
		}
		else if (totalClicks > 36  && totalClicks <= 56){
			messageOut = "You can do better!";
		}
		else{
			messageOut = "Aim for a better score!";
		}
	}
	display();
}
