const fruits = ["apple", "banana", "cherry"];
fruits.push("watermelon");

const clem = {
	firstname: "Clément",
	lastname: "Berard",
	age: 20,
	isStudent: true,
	hobbies: ["coding", "gaming", "reading"],
};

// spread operator
const clemCopy = { ...clem };

console.log(clemCopy);
