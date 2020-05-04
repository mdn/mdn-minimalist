import { addParameters } from "@storybook/html";
import "./preview.scss";

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

addParameters({
  a11y: {
    config: {},
    options: {
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: "200px",
    transformSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});
