import * as React from "react";

import { RenderBodyArgs } from "gatsby";

import { themeAtomKey } from "@/hooks";

const onRenderBody = ({
  setHtmlAttributes,
  setPreBodyComponents,
  setHeadComponents,
}: RenderBodyArgs) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme",
      dangerouslySetInnerHTML: {
        __html: `
          void function() {
            var cachedMode;

            try {
              var preferredTheme = JSON.parse(localStorage.getItem('${themeAtomKey}'));

              if (preferredTheme && preferredTheme.mode) {
                cachedMode = preferredTheme.mode;
              }
            } catch (err) { }

            function setTheme(newTheme) {
              document.documentElement.className = newTheme;
            }

            var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            setTheme(cachedMode || (darkQuery.matches ? 'dark' : 'light'));
          }()
        `,
      },
    }),
  ]);

  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    React.createElement("link", {
      rel: "preload",
      href: "/fonts/Inter-roman.var.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "interFont",
    }),
  ]);
};

export { onRenderBody };
