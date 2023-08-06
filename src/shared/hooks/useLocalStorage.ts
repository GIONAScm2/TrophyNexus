import {useState} from 'preact/hooks';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue] as const;
};

export const setLocalStorage = <T>(key: string, value: T) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
};

export const getLocalStorage = <T>(key: string, initialValue: T): T => {
	try {
		const item = window.localStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : initialValue;
	} catch (error) {
		console.log(error);
		return initialValue;
	}
};
