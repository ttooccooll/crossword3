(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Stay this way when stacking sats.",
					answer: "humble",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "One of Homer's larger works.",
					answer: "epic",
					position: 7,
					orientation: "across",
					startx: 9,
					starty: 1
				},
				{
					clue: "so good, but they'll make you cry",
					answer: "onions",
					position: 11,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "how you feel about fiat",
					answer: "abhor",
					position: 12,
					orientation: "across",
					startx: 8,
					starty: 2
				},
				{
					clue: "what every equestrian wants their horse to be",
					answer: "ridable",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "Skeletor, the grim reaper, and Ghost Rider all have this in common.",
					answer: "bony",
					position: 14,
					orientation: "across",
					startx: 9,
					starty: 3
				},
				{
					clue: "___ Monty Python's Flying Circus",
					answer: "its",
					position: 15,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "Right now, you have a ____ for both down and across clues.",
					answer: "list",
					position: 16,
					orientation: "across",
					startx: 7,
					starty: 4
				},
				{
					clue: "popular video games in the 80s and 90s",
					answer: "ultima",
					position: 17,
					orientation: "across",
					startx: 3,
					starty: 5
				},
				{
					clue: "edible grass",
					answer: "oat",
					position: 20,
					orientation: "across",
					startx: 10,
					starty: 5
				},
				{
					clue: "Originally a term from chemistry, this is how my kids are learning about bitcoin from me.",
					answer: "osmosis",
					position: 22,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "You can't do this once the genie is out of the bottle.",
					answer: "undo",
					position: 24,
					orientation: "across",
					startx: 9,
					starty: 6
				},
				{
					clue: "This clown always gets lost.",
					answer: "nemo",
					position: 25,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "what I imagine DarthCoin pegs most people as",
					answer: "asses",
					position: 26,
					orientation: "across",
					startx: 8,
					starty: 7
				},
				{
					clue: "most common victim of gangrene",
					answer: "toes",
					position: 27,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: "world's most popular double helix",
					answer: "dna",
					position: 28,
					orientation: "across",
					startx: 7,
					starty: 8
				},
				{
					clue: "Saifedean did not approve of Nero's treatment of these",
					answer: "aureus",
					position: 29,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "USSR's Committee for State Security - hint: you actually do know this one",
					answer: "kgb",
					position: 32,
					orientation: "across",
					startx: 8,
					starty: 9
				},
				{
					clue: "popular MC, __ Cool James",
					answer: "ll",
					position: 34,
					orientation: "across",
					startx: 1,
					starty: 10
				},
				{
					clue: "When all you have is a hammer, everything looks like these.",
					answer: "nailheads",
					position: 35,
					orientation: "across",
					startx: 4,
					starty: 10
				},
				{
					clue: "A long, long time ago, this actor played a young space wizard.",
					answer: "ewan",
					position: 38,
					orientation: "across",
					startx: 4,
					starty: 11
				},
				{
					clue: "meme stock that was even more popular than AMC",
					answer: "gme",
					position: 39,
					orientation: "across",
					startx: 10,
					starty: 11
				},
				{
					clue: "another popular MC, this one's a beastie",
					answer: "mca",
					position: 40,
					orientation: "across",
					startx: 6,
					starty: 12
				},
				{
					clue: "They called this an STD when I was a kid.",
					answer: "sti",
					position: 41,
					orientation: "across",
					startx: 10,
					starty: 12
				},
				{
					clue: "This first down word is certainly not situated this way!",
					answer: "horizontally",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "One property of money is as a ____ of account.",
					answer: "unit",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "A _________ Night's Dream",
					answer: "midsummer",
					position: 3,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "anacondas and pythons or a fluffy accessory",
					answer: "boa",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 1
				},
				{
					clue: "web based wallet",
					answer: "lnbits",
					position: 5,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "part of studies for immigrants to the USA",
					answer: "esl",
					position: 6,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "The tide does this as the moon pulls it away.",
					answer: "ebbs",
					position: 7,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "We can't see without them, and Jean-Luc can't defend himself without them.",
					answer: "photons",
					position: 8,
					orientation: "down",
					startx: 10,
					starty: 1
				},
				{
					clue: "This is charged up.",
					answer: "ion",
					position: 9,
					orientation: "down",
					startx: 11,
					starty: 1
				},
				{
					clue: "prolific and beloved poster",
					answer: "cryotosensei",
					position: 10,
					orientation: "down",
					startx: 12,
					starty: 1
				},
				{
					clue: "these are deciduous",
					answer: "elms",
					position: 13.5,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "between MN and MO",
					answer: "ia",
					position: 16.5,
					orientation: "down",
					startx: 8,
					starty: 4
				},
				{
					clue: "what I've done with expectations of the future as I've grown older",
					answer: "loosened",
					position: 18,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					clue: "this iteration of the unofficial sn crossword",
					answer: "iii",
					position: 19,
					orientation: "down",
					startx: 6,
					starty: 5
				},
				{
					clue: "If life gives you lemons, make lemon___.",
					answer: "ade",
					position: 21,
					orientation: "down",
					startx: 11,
					starty: 5
				},
				{
					clue: "biggest city on the Han River",
					answer: "seoul",
					position: 23,
					orientation: "down",
					startx: 2,
					starty: 6
				},
				{
					clue: "Most folks on sn would love to see an increase of this for the lightning network.",
					answer: "usage",
					position: 24,
					orientation: "down",
					startx: 9,
					starty: 6
				},
				{
					clue: "Egyptian symbol of life",
					answer: "ankh",
					position: 26,
					orientation: "down",
					startx: 8,
					starty: 7
				},
				{
					clue: "have striked at GM and others",
					answer: "uaw",
					position: 30,
					orientation: "down",
					startx: 5,
					starty: 9
				},
				{
					clue: "as X is to twitter, so Thailand is to ____",
					answer: "siam",
					position: 31,
					orientation: "down",
					startx: 6,
					starty: 9
				},
				{
					clue: "Shitcoiners don't want to be holding these when the chickens come to roost.",
					answer: "bags",
					position: 33,
					orientation: "down",
					startx: 10,
					starty: 9
				},
				{
					clue: "one way to do lightning",
					answer: "lnc",
					position: 36,
					orientation: "down",
					startx: 7,
					starty: 10
				},
				{
					clue: "Don't let the DEA catch you with this.",
					answer: "dmt",
					position: 37,
					orientation: "down",
					startx: 11,
					starty: 10
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

let toggleState = 0;
let usdPrice = null;
let blockHeight = null;
let satFee = null;

async function fetchPrice() {
	try {
		const response = await fetch('https://mempool.space/api/v1/prices');
		const data = await response.json();
		usdPrice = data.USD.toFixed();
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchBlock() {
	try {
		const response = await fetch('https://blockchain.info/q/getblockcount');
		const data = await response.text();
		blockHeight = parseInt(data).toFixed(0);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchFee() {
	try {
		const response = await fetch('https://mempool.space/api/v1/fees/recommended');
		const data = await response.json();
		satFee = data.halfHourFee.toFixed();
		console.log(satFee);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function togglePrice() {
	if (!usdPrice) {
		await fetchPrice();
	}
	if (!blockHeight) {
		await fetchBlock();
	}
	if (!satFee) {
		await fetchFee();
	}

	const button = document.querySelector('.onesat');
	switch (toggleState) {
		case 0:
			button.textContent = `${blockHeight}`;
			break;
		case 1:
			button.textContent = `${satFee} sat/vB`;
			break;
		case 2:
			button.textContent = `$${usdPrice}`;
			break;
		case 3:
			button.textContent = '1sat=1sat';
			break;
	}
	toggleState = (toggleState + 1) % 4;
}