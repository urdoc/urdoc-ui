import { configure } from "@storybook/react";

// import all files ending in *.stories.tsx
const req = require.context("../src/components", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
