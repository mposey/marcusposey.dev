import React from "react";

import { useSiteMetadata } from "@/hooks";

import { Author } from "./Author";
import { Menu } from "./Menu";
import { MoveableSidebarContent } from "./MoveableSidebarContent";

import * as styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <MoveableSidebarContent desktop />
      </div>
    </div>
  );
};

export default Sidebar;
