export function msToDateString(ms: number) {
	const date = new Date(ms);
	const day = date.getDate();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const monthName = monthNames[date.getMonth()];
	const year = date.getFullYear();

	return (
		<>
			{day}
			<sup>{getOrdinalSuffix(day)}</sup> {monthName} {year}
		</>
	);
}

function getOrdinalSuffix(day: number) {
	if (day > 3 && day < 21) return 'th';
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}
