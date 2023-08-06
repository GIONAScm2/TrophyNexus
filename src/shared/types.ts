/** Retrieves all keys of `T` whose values are boolean. */
export type BooleanKeys<T> = {
	[K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];
