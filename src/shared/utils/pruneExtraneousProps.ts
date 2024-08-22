import {isStandardObj} from 'trophyutil';

/**
 * Compares 2 objects and returns a copy of `target` with only the properties that exist on `exemplar` (nested objects are handled the same way). Logs any pruned properties.
 *
 * @param {unknown} exemplar - The object that holds the desired structure.
 * @param {unknown} target - The object from which extraneous properties are to be pruned.
 * @returns {Record<string, unknown> | null} The pruned object, or `null` if `exemplar` or `target` wasn't an object.
 */
export function pruneExtraneousProperties(
	exemplar: unknown,
	target: unknown,
	visited = new WeakMap<object, object>()
): Record<string, unknown> | null {
	const prunedKeys: string[] = [];

	if (!isStandardObj(exemplar) || !isStandardObj(target)) {
		return null;
	}

	// Handle cyclic references
	if (visited.has(target)) {
		return visited.get(target) as Record<string, unknown>;
	}
	const result: Record<string, unknown> = {};
	visited.set(target, result);

	Object.keys(target).forEach(key => {
		if (key in exemplar) {
			const exemplarVal = exemplar[key];
			const targetVal = target[key];
			if (isStandardObj(targetVal) && isStandardObj(exemplarVal)) {
				result[key] = pruneExtraneousProperties(exemplarVal, targetVal, visited);
			} else if (Array.isArray(targetVal) && Array.isArray(exemplarVal)) {
				result[key] = targetVal.filter((_, index) => index < exemplarVal.length);
			} else if (targetVal instanceof Date && exemplarVal instanceof Date) {
				result[key] = targetVal;
			} else if (targetVal instanceof Set && exemplarVal instanceof Set) {
				result[key] = targetVal;
			} else if (targetVal instanceof Map && exemplarVal instanceof Map) {
				result[key] = targetVal;
			} else {
				result[key] = targetVal;
			}
		} else {
			prunedKeys.push(key);
		}
	});

	if (prunedKeys.length) {
		console.log(`Pruned properties: ${prunedKeys.join()}`);
	}

	return result;
}
