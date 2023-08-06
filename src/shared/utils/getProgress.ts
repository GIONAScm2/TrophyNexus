export type ProgressMetrics = {
	a: number;
	b: number;
	decimal: number;
	percentage: number;
};

/**
 * Computes progress metrics based on two numerical inputs. If no arguments are passed,
 * A default value of `{a: -1, b: 0, decimal: 0, percentage: 0}` is returned, which is useful
 * for stateful updates to progress bars.
 *
 * @function getProgressMetrics
 *
 * @param {number} a - The numerator of the progress fraction.
 * @param {number} b - The denominator of the progress fraction. Must not be zero.
 *
 * @returns {Object} - An object that includes the following properties:
 *
 *  `a`: The numerator.
 *
 *  `b`: The denominator.
 *
 *  `decimal`: The decimal representation of `a / b`, rounded to 2 decimal places.
 *
 *  `percentage`: The percentage (integer) representation of `a / b`.
 *
 * @example
 *  getProgressMetrics(1, 2);
 *  // returns {a: 1, b: 2, decimal: 0.5, percentage: 50}
 *  getProgressMetrics();
 *  // returns {a: -1, b: 0, decimal: 0, percentage: 0}
 */
export function getProgressMetrics(a: number, b: number): ProgressMetrics;
export function getProgressMetrics(): {a: -1; b: 0; decimal: 0; percentage: 0};
export function getProgressMetrics(a?: number, b?: number): ProgressMetrics {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return {a: -1, b: 0, decimal: 0, percentage: 0};
	}

	const decimal = +(a / b).toFixed(2);
	const percentage = +(decimal * 100).toFixed(2);

	return {a, b, decimal, percentage};
}
