import { configure } from '@storybook/react';
import 'loki/configure-react';

import '../src/index.css';

function loadStories() {
  let storiesRequire = require.context('../src/components', true, /\.story\.tsx$/);
  storiesRequire.keys().forEach((story) => storiesRequire(story));
}

configure(loadStories, module);
