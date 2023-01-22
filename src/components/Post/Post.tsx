import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

import { Author } from "./Author";
import { Comments } from "./Comments";
import { Content } from "./Content";
import { Tags } from "./Tags";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, description } = post.frontmatter;

  return (
    <div className={styles.post}>
      <Content body={html} title={title} subtitle={description} date={date} />

      <div className={styles.footer}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <div className={styles.container}>
          <Author showBio showTwitter />
        </div>
      </div>

      <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
