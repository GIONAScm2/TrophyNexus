/** Method decorator that logs when (and how quickly) its execution finishes. */
export function logMethodSpeed(headMessage = '⚠️') {
	return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
		const methodName = String(context.name);

		function replacementMethod(this: any, ...args: any[]) {
			const start = performance.now();
			const result = originalMethod.call(this, ...args);
			const end = performance.now();

			const elapsedMilliseconds = end - start;

			const msg = `${headMessage} Executed method '${methodName}' in ${elapsedMilliseconds.toFixed(2)} ms`;
			console.log('%c' + msg, 'color:Orange');

			return result;
		}

		return replacementMethod;
	};
}
