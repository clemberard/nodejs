export function divide(divende, divider) {
	if (divider === 0) {
		throw new Error("La division par zéro est impossible");
	}
	if (typeof divende !== "number" || typeof divider !== "number") {
		throw new Error("Les paramètres doivent être des nombres");
	}
	return divende / divider;
}

export function multiply(a, b) {
  return a * b;
}

export function add(a, b) {
  return a + b;
}

export function substract(a, b) {
  return a - b;
}

export default multiply;