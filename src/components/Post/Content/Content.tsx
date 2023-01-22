import React from "react";

import Meta from "../Meta/Meta";

import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  body: string;
  date: string;
}

const Content: React.FC<Props> = ({ body, title, date, subtitle }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    <Meta date={date} />
    <div className={styles.spacer}></div>
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
