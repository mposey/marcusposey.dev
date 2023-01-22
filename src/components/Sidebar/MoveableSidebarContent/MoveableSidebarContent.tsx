import React from "react";

import DisplayIf from "@/components/DisplayIf/DisplayIf";
import { useSiteMetadata } from "@/hooks";

import { Contacts } from "../Contacts";
import { Copyright } from "../Copyright";

type Props = {
  mobile?: boolean;
  desktop?: boolean;
};

const MoveableSidebarContent = ({ mobile, desktop }: Props) => {
  const { author, copyright } = useSiteMetadata();

  return (
    <DisplayIf mobile={mobile} desktop={desktop}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </DisplayIf>
  );
};

export default MoveableSidebarContent;
