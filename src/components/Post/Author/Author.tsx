import React from "react";

import { Link } from "gatsby";

import { Image } from "@/components/Image";
import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

type Props = {
  showBio?: boolean;
  showTwitter?: boolean;
  small?: boolean;
};

const Author: React.FC<Props> = ({ showBio, showTwitter, small }: Props) => {
  const { author } = useSiteMetadata();
  const photoSize = showBio ? "large" : small ? "small" : "medium";

  return (
    <div className={styles.author}>
      <div className={styles.header}>
        <Link to="/" className={styles.photo}>
          <Image
            alt={author.name}
            path={author.photo}
            className={styles[photoSize]}
          />
        </Link>
        <div className={styles.right}>
          <h4 className={styles.name}>
            <Link className={styles.link} to="/" rel="author">
              {author.name}
            </Link>
            {showTwitter && " "}
            {showTwitter && (
              <a
                style={{ fontWeight: 500 }}
                href={getContactHref("twitter", author.contacts.twitter)}
                target="_blank"
                rel="noopener noreferrer"
              >
                @marcusposey_
              </a>
            )}
          </h4>
          {showBio && <p className={styles.bio}>{author.bio}</p>}
        </div>
      </div>
    </div>
  );
};

export default Author;
