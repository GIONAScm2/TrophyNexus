import {useState} from 'preact/hooks';
import {JSXInternal} from 'preact/src/jsx';

// Stack
// Completion type
// Platform

const dropbtnStyle = {
	backgroundColor: '#3498DB',
	color: 'white',
	padding: '10px',
	fontSize: '16px',
	border: 'none',
  minWidth: '120px',
} satisfies JSXInternal.CSSProperties;

// Since :hover and :focus are pseudo-classes, you'll need to handle these dynamically in your component logic

const dropdownStyle = {
	position: 'relative',
	display: 'inline-block',
} satisfies JSXInternal.CSSProperties;

const dropdownContentStyle = {
	position: 'absolute',
	backgroundColor: '#f1f1f1',
	minWidth: '120px',
	boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
	// display: 'grid',
	// gridTemplateColumns: 'repeat(2, min-content)',
} satisfies JSXInternal.CSSProperties;

const dropdownLinkStyle = {
	color: 'black',
	padding: '8px 12px',
	textDecoration: 'none',
	display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
} satisfies JSXInternal.CSSProperties;

export function DropdownFilter({
	optionsWithCounts,
	onOptionClick,
  name
}: {
	optionsWithCounts: Array<[string, number]>;
	onOptionClick: (x: any) => any;
  name:string
}) {
	const [isVisible, setIsVisible] = useState(false);
	const [linkHoverIndex, setLinkHoverIndex] = useState<number | null>(null);
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const toggleOption = (option: string) => {
		setSelectedOptions(prevSelectedOptions => {
			if (prevSelectedOptions.includes(option)) {
				return prevSelectedOptions.filter(selectedOption => selectedOption !== option);
			} else {
				return [...prevSelectedOptions, option];
			}
		});
	};

	return (
		<div className="filter-control">
			<div
				className="dropdown"
				onMouseOver={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
				style={dropdownStyle}
			>
				<button style={dropbtnStyle}>{name} {selectedOptions.length > 0 && `(${selectedOptions.length})`}</button>
				{
					<div style={dropdownContentStyle}>
						{isVisible &&
							optionsWithCounts.map(([option, count], index) => (
								<>
									<a
										key={option}
										href="javascript:void(0);"
										onClick={() => {
											toggleOption(option);
											onOptionClick(option);
										}}
										style={{
											...dropdownLinkStyle,
											backgroundColor:
												linkHoverIndex === index || selectedOptions.includes(option) ? '#ddd' : 'inherit',
											fontWeight: selectedOptions.includes(option) ? 'bold' : 'inherit',
										}}
										onMouseEnter={() => setLinkHoverIndex(index)}
										onMouseLeave={() => setLinkHoverIndex(null)}
									>
                    <div>{option}</div>
                    <div style={{justifySelf: 'end'}}>{count.toLocaleString()}</div>
									</a>
								</>
							))}
					</div>
				}
			</div>
		</div>
	);
}
