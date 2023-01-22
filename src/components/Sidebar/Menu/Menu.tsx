import React from "react";

import classNames from "classnames/bind";
import { Link } from "gatsby";

import * as styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

type Props = {
  menu: Array<{
    label: string;
    path: string;
  }>;
  horizontal?: boolean;
  bold?: boolean;
  noMargin?: boolean;
};

const Menu: React.FC<Props> = ({ menu, horizontal, bold, noMargin }: Props) => (
  <nav
    className={cx({
      menu: true,
      horizontal,
      "no-margin": noMargin,
    })}
  >
    <ul className={styles.list}>
      {menu.map((item) => (
        <li className={styles.item} key={item.path}>
          <Link
            to={item.path}
            className={cx({
              link: true,
              bold,
            })}
            activeClassName={styles.active}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
