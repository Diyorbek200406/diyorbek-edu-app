import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { firstLevelMenu } from "../../helpers/constants";
import Link from "next/link";
import styles from "./menu.module.css";
import cn from "classnames";
import { IFirstLevelMenu, PagesItem } from "../../interfaces/menu.interface";
const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((e) => (
          <div key={e.route}>
            <Link href={`/${e.route}`}>
              <div className={cn(styles.firstLevel, { [styles.firstLevelActive]: e.id === firstCategory })}>
                {e.icon} <span>{e.name}</span>
              </div>
            </Link>
            {e.id === firstCategory && buildSecondLevel(e)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item, index) => (
          <div key={index}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockActive]: item.isOpened,
              })}
            >
              {buildThirdLevel(item.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PagesItem[], route: string) => {
    return pages.map((item, index) => (
      <Link key={index} href={`${route}/${item.alias}}`} className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: item.alias === route })}>
        {item.title}
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
