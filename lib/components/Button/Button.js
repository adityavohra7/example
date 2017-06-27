import React, { PropTypes } from 'react';

import s from './Button.css';

/**
 * The only true button.
 */
export default function Button(props: Props) {
	const {color, size, children} = props;

	let styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className={s.root} style={styles}>{children}</button>
	);
}

type Props = {
	/**
	 * Button label.
	 */
	children: string,
	color: string,
	size: 'small'|'normal'|'large',
};

Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
