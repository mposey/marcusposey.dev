import React, { useState } from "react";
import Headroom from "react-headroom";

import classNames from "classnames/bind";

import { DisplayIf } from "@/components/DisplayIf";
import { Icon } from "@/components/Icon";
import { Menu } from "@/components/Sidebar/Menu";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useSiteMetadata } from "@/hooks";
import { getIcon } from "@/utils";

import { Author } from "../Author";

import * as styles from "./Masthead.module.scss";

const cx = classNames.bind(styles);

const Masthead = () => {
  const [menuShown, setMenuShown] = useState(false);
  const { menu } = useSiteMetadata();

  return (
    <Headroom
      onUnpin={() => {
        setMenuShown(false);
      }}
    >
      <div className={cx({ header: true, "no-shadow": menuShown })}>
        <DisplayIf desktop className={styles.header__left}>
          <Author />
        </DisplayIf>
        {/**
         * The following two lines are a hack to get around the fact that we SSR the desktop
         * version of this component. When React tries to rehydrate the SSR HTML, it will make
         * these two <div>s become the two <DisplayIf desktop> element trees. Without these,
         * the remaining <DisplayIf mobile> components won't get rendered b/c they'll have
         * CSS that hides them unless on desktop!
         */}
        <DisplayIf mobile>
          <div />
        </DisplayIf>
        <DisplayIf mobile>
          <div />
        </DisplayIf>
        <DisplayIf mobile className={`${styles.header__left} ${styles.mobile}`}>
          <Author small />
        </DisplayIf>
        <DisplayIf desktop className={styles.header__right}>
          <Menu horizontal bold menu={menu} />
          <div className={styles["dark-mode-toggle"]}>
            <ThemeSwitcher />
          </div>
        </DisplayIf>
        <DisplayIf
          mobile
          className={`${styles["dark-mode-toggle"]} ${styles.mobile}`}
        >
          <ThemeSwitcher />
        </DisplayIf>
        <DisplayIf mobile>
          <button
            onClick={() => {
              setMenuShown(!menuShown);
            }}
            className={cx({ header__burger: true, open: menuShown })}
          >
            <Icon name="menu" icon={getIcon("menu")} />
          </button>
        </DisplayIf>
      </div>
      {menuShown && (
        <DisplayIf mobile className={styles.popup}>
          <Menu bold noMargin menu={menu} />
        </DisplayIf>
      )}
    </Headroom>
  );
};

export default Masthead;
