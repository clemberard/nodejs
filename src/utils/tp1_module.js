export function add(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Les paramètres doivent être des nombres");
	}
	return a + b;
}

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max
export function highestNumber(array_numbers) {
	if (array_numbers.length === 0) {
		throw new Error("Le tableau est vide");
	}
	return Math.max(...array_numbers); // ne marche pas si trop de nombres dans le tableau
}

// https://medium.com/@codingbeautydev/javascript-remove-vowels-from-string-a6e9a39632af#:~:text=To%20remove%20all%20vowels%20from%20a%20string%20in%20JavaScript%2C%20call,replaced%20with%20an%20empty%20string.
export function removeVowels(word) {
	return word.replace(/[aeiouyAEIOUY]/gi, "");
}

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
export function orderByAsc(array_words) {
	return array_words.sort();
}

// https://sdlm.be/cours/javascript/part1/chap9/tp-convertir-un-nombre-en-toutes-lettres
export function numToLetters(number) {
	if (isNaN(number) || number < 0 || 999 < number) {
		return "Nombre invalide, doit être compris entre 0 et 999";
	}

	let units2Letters = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
		tens2Letters = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"];

	let units = number % 10,
		tens = ((number % 100) - units) / 10,
		hundreds = ((number % 1000) - (number % 100)) / 100;

	let unitsOut, tensOut, hundredsOut;

	if (number === 0) {
		return "zéro";
	} else {
		// Traitement des unités

		unitsOut = (units === 1 && tens > 0 && tens !== 8 ? "et-" : "") + units2Letters[units];

		// Traitement des dizaines

		if (tens === 1 && units > 0) {
			tensOut = units2Letters[10 + units];
			unitsOut = "";
		} else if (tens === 7 || tens === 9) {
			tensOut = tens2Letters[tens] + "-" + (tens === 7 && units === 1 ? "et-" : "") + units2Letters[10 + units];
			unitsOut = "";
		} else {
			tensOut = tens2Letters[tens];
		}

		tensOut += units === 0 && tens === 8 ? "s" : "";

		// Traitement des centaines

		hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + "-" : "") + (hundreds > 0 ? "cent" : "") + (hundreds > 1 && tens == 0 && units == 0 ? "s" : "");

		// Retour du total

		return hundredsOut + (hundredsOut && tensOut ? "-" : "") + tensOut + ((hundredsOut && unitsOut) || (tensOut && unitsOut) ? "-" : "") + unitsOut;
	}
}

export function valueOfKeyInArray(array_of_objects, key) {
	let response = [];
	for (let i = 0; i < array_of_objects.length; i++) {
		let key_of_objects = Object.keys(array_of_objects[i]);
		if (!key_of_objects.includes(key)) {
			response.push('Pas de valeur pour la clé "' + key + '"');
		} else {
			response.push(array_of_objects[i][key]);
		}
	}
	return response;
}

export function wordWithVowelsCaps(word) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") {
			word = word.replace(word[i], word[i].toUpperCase());
		}
	}
	return word;
}

export function NumberOfVowels(word) {
	let vowels = "aeiouyAEIOUY";
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i])) {
			count++;
		}
	}
	return count;
}

export function wordWithConsonantsCaps(word) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== "a" && word[i] !== "e" && word[i] != "i" && word[i] !== "o" && word[i] !== "u" && word[i] !== "y") {
			word = word.replace(word[i], word[i].toUpperCase());
		}
	}
	return word;
}
