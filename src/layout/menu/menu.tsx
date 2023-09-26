import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/constants';
import Link from 'next/link';
import styles from './menu.module.css';
import cn from 'classnames';

const Menu = (): JSX.Element => {
	const { menu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(e => (
					<div key={e.route}>
						<Link href={`/${e.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: e.id === firstCategory,
								})}
							>
								{e.icon}
								<span>{e.name}</span>
							</div>
						</Link>
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = () => {};

	const buildThirdLevel = () => {};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
