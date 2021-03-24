import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage === 'Final')[0]);
//(a) Home Team name for 2014 world cup final
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage.includes('Final'))[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage.includes('Final'))[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage.includes('Final'))[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage.includes('Final'))[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
console.log(fifaData.filter(ele => ele.Year === 2014 && ele.Stage.includes('Final'))[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
	// console.log(fifaData.filter(ele => ele.Stage.includes('Final')));
	return data.filter(ele => ele.Stage.includes('Final'));
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
	return callback(array).map(ele => ele.Year);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(array, callback) {
	return callback(array).map(ele =>
		ele['Home Team Goals'] > ele['Away Team Goals'] ? ele['Home Team Name'] : ele['Away Team Name']
	);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, yearsCB, winnersCB) {
	// const winnerString = callback1(array).map((ele, i) => `In ${ele}, ${callback2(array)[i]} won the world cup!`);
	// return winnerString;

	return yearsCB(data).map((ele, i) => `In ${ele}, ${winnersCB(data)[i]} won the world cup!`);
}
// console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 (Hint: use .reduce and do this in 2 steps) 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback, data) {
	// 	let finalGames = callback(data).map(ele => ele['Home Team Goals'] + ele['Away Team Goals']);
	// 	return (finalGames.reduce((a, b) => a + b) / finalGames.length).toFixed(2);
}

// function getAverageGoals() {
// 	let finalGames = getFinals(fifaData).map(ele => ele['Home Team Goals'] + ele['Away Team Goals']);
// 	return (finalGames.reduce((a, b) => a + b) / finalGames.length).toFixed(2);
// }

// function getAverageGoals(callback) {
// 	let finalGames = callback(fifaData).map(ele => ele['Home Team Goals'] + ele['Away Team Goals']);
// 	return (finalGames.reduce((a, b) => a + b) / finalGames.length).toFixed(2);
// }

// function getAverageGoals(data) {
// 	let finalGames = data.map(ele => ele['Home Team Goals'] + ele['Away Team Goals']);
// 	return (finalGames.reduce((a, b) => a + b) / finalGames.length).toFixed(2);
// }

// getAverageGoals(fifaData);

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(data, teamInitials) {
// let includedInFinal = data.filter(
// 	match =>
// 		match.Stage === 'Final' &&
// 		(match['Home Team Initials'] === teamInitials || match['Away Team Initials'] === teamInitials).length
// );
// console.log(includedInFinal);
// }
function getCountryWins(data, team_initials) {
	// Get the finals the team has played in
	const teamGames = data.filter(
		match =>
			match['Stage'] === 'Final' &&
			(match['Home Team Initials'] === team_initials || match['Away Team Initials'] === team_initials)
	);
	// return teamGames
	// Just do the math to see if they won, and increment a counter(?)
	let teamWins = 0;
	for (let i = 0; i < teamGames.length; i++) {
		if (
			teamGames[i]['Home Team Initials'] === team_initials &&
			teamGames[i]['Home Team Goals'] > teamGames[i]['Away Team Goals']
		) {
			teamWins++;
		}
		if (
			teamGames[i]['Away Team Initials'] === team_initials &&
			teamGames[i]['Away Team Goals'] > teamGames[i]['Home Team Goals']
		) {
			teamWins++;
		}
	}
	// Burp out counter
	return teamWins;
}

console.log('Test: ' + getCountryWins(fifaData, 'ARG'));

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
	//  make an object that holds teams that:
	// A) are in the World Cup,  DONE
	let finalMatches = data.filter(match => match.Stage === 'Final');
	// B) create an object for country name: total goals
	let teamTotalFinalGoals = {};
	finalMatches.forEach(match => {
		if (teamTotalFinalGoals[match['Home Team Name']]) {
			// add to the key value pair
			teamTotalFinalGoals[match['Home Team Name']] += match['Home Team Goals'];
		} else {
			// create the key value pair
			teamTotalFinalGoals[match['Home Team Name']] = match['Home Team Goals'];
		}

		if (teamTotalFinalGoals[match['Away Team Name']]) {
			// add to the key value pair
			teamTotalFinalGoals[match['Away Team Name']] += match['Away Team Goals'];
		} else {
			// create the key value pair
			teamTotalFinalGoals[match['Away Team Name']] = match['Away Team Goals'];
		}
	});

	// C) create an object for country name: number of appearances
	let teamTotalAppearances = {};
	finalMatches.forEach(match => {
		if (teamTotalAppearances[match['Home Team Name']]) {
			// add to the key value pair
			teamTotalAppearances[match['Home Team Name']] += 1;
		} else {
			// create the key value pair
			teamTotalAppearances[match['Home Team Name']] = 1;
		}

		if (teamTotalAppearances[match['Away Team Name']]) {
			// add to the key value pair
			teamTotalAppearances[match['Away Team Name']] += 1;
		} else {
			// create the key value pair
			teamTotalAppearances[match['Away Team Name']] = 1;
		}
	});
	let teamNamesArray = Object.keys(teamTotalFinalGoals);

	let averageGoals = {};

	for (let i = 0; i < teamNamesArray.length; i++) {
		averageGoals[teamNamesArray[i]] =
			teamTotalFinalGoals[teamNamesArray[i]] / teamTotalAppearances[teamNamesArray[i]];
	}
	// E) choose the team with the highest average
	let highestAverageName = '';
	for (let team in averageGoals) {
		if (averageGoals[highestAverageName] && averageGoals[team] > averageGoals[highestAverageName]) {
			highestAverageName = team;
		} else {
			highestAverageName = team;
		}
	}
	// console.log(teamTotalFinalGoals);
	// console.log(teamTotalAppearances);
	// console.log(teamNamesArray);
	// console.log(averageGoals);
	// console.log(highestAverageName);

	return highestAverageName;
}

getGoals(fifaData);

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(data) {
	let finalMatches = data.filter(match => match.Stage === 'Final');
}

badDefense(fifaData);

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
	console.log('its working');
	return 'bar';
}
export default {
	foo,
	getFinals,
	getYears,
	getWinners,
	getWinnersByYear,
	getAverageGoals
};
