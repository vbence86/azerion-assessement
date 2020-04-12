/**
 * Returns the chance of rain based on the given parameters 
 *
 * @param {number} pressure
 * @param {number} temperature
 * @param {number} amount
 * @returns {object} - {lower_bound: number, mean: number, upper_bound: number}
 */
export const chanceOfRain = (pressure, temperature, amount) => {
	const score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 8);
	const mean = Math.min(Math.max(score, 0), 100);
	const upper_bound = Math.min(1.5 * mean, 100);
	const lower_bound = Math.max(0.5 * mean, 0);
	
	return {
		lower_bound,
		mean,
		upper_bound
	};
}

export default {
	chanceOfRain,
};
