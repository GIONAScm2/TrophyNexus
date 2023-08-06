import {button} from './css/button';

interface ButtonProps {
	color?: string;
	toolTip?: string;
	href?: string;
}

export const Button: preact.FunctionComponent<ButtonProps> = ({color, children, toolTip, href}) => {
	return (
		<a style={button({color})} title={toolTip} href={href ?? 'javascript:void(0);'}>
			{children}
		</a>
	);
};

export default Button;
