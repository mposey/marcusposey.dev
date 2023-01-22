import React from "react";

import { Link } from "gatsby";

import { Image } from "@/components/Image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

import * as styles from "./Author.module.scss";

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
  isIndex?: boolean;
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles.author}>
    <div className={styles.titleContainer}>
      <Link to="/">
        <Image alt={author.name} path={author.photo} className={styles.photo} />
      </Link>
      <div className={styles.title}>
        {isIndex ? (
          <h1>
            <Link className={styles.link} to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2>
            <Link className={styles.link} to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <ThemeSwitcher />
      </div>
    </div>
    <p className={styles.subtitle}>{author.bio}</p>
  </div>
);

export default Author;
