import { TagProps } from './tag.props';
import styles from './tag.module.css';
import cn from 'classnames';

const Tag = ({ size = 'm', color = 'primary', children }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.red]: color === 'red',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
		>
			{children}
		</div>
	);
};

export default Tag;
