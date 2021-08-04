const chalk = require('chalk');
console.log(chalk.italic("BTS Quiz – How Well Do You Know The Boy Band?"));
console.log("---------------------------------------------");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name: ");
console.log(chalk.bold("WELCOME "+userName.toUpperCase()+"!"));
console.log("---------------------------------------------");
var score = 0;

function quiz(question,answer,options){
	console.log(chalk.bgBlue(question));
index = readlineSync.keyInSelect(options,"Select One Option Please...");
	if(options[index] === answer){
		console.log(chalk.green.dim("Yes you are Right!"));
		console.log("---------------------------------------");
		score++;
	}
	else{
		console.log(chalk.red.bold("Ops Wrong answer!"));		console.log("---------------------------------------");
	}
}
var questions = [
	{
		question : "What is the name of BTS’s fandom? ",
		answer : "ARMY",
		options : ['VIP', '4U', 'ARMY', 'SBTS']
	},
	{
		question : "“Jimin, u got no jams” – who said it? ",
		answer : "RM",
			options : ['J-Hope', 'RM', 'V', 'Suga']
	},
	{
		question : "What is the release date of “Wings” studio album? ",
		answer : "2016",
			options : ['2014', '2015', '2016', '2017']
	},
	{
		question : "Who is the oldest? ",
		answer : "Jin",
		options : ['RM', 'Suga', 'J-Hope', 'Jin']
	},
	{
	question : "What is the name of BTS debut song? ",
	answer : "No More Dream",
	options : ['No More Dream', 'Spring Day', 'Just One Day', 'Danger']
	},
	{
	question : "“Youth” album is made in Korean or Japanese language? ",
	answer : "Japanese",
	options : ['Korean', 'Japanese']
	},
	{
	question : "What year BTS attended to Grammys for the first time? ",
	answer : "2019",
	options : ['2015', '2017', '2019', '2016']
	},
	{
	question : "Which member of BTS has no siblings? ",
	answer : "All of them have either sister or brother",
	options : ['Suga', 'RM', 'V', 'All of them have either sister or brother']
	},
	{
	question : "Who is the youngest? ",
	answer : "Jungkook",
	options : ['V', 'Jimin', 'Jungkook', 'J-Hope']
	},
	{
	question : "Who is the leader of BTS? ",
	answer : "RM",
	options : ['Jin', 'Suga', 'RM', 'J-Hope']
	}
]
for(var i=0;i<questions.length;i++){
	var currQuestion = questions[i];
	quiz(currQuestion.question,currQuestion.answer,currQuestion.options);
}
console.log("Your score is: ",score);
var highestScore = 
	{
		name : "Aakarsha",
		score : "10"
	}

if(score>=highestScore.score){
	highestScore.score = score;
	console.log(chalk.magenta.bold("Yayy you are true BTS fan, Send your screenshot!"))
}
else{
	console.log(chalk.dim.bold("You didn't got all correct!"));
console.log("True BTS Army - "+highestScore.name+" with score: "+highestScore.score);
}