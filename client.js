// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';
import LogRocket from 'logrocket';

function initLogRocket(project) {
  LogRocket.init(project, {
    dom: {
      baseHref: 'https://my-react-360-static-project.onrender.com/build/static_assets/',
    },
  });
}

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('my_react_360_project', {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('hong_kong.jpg'));
}

window.LogRocket = { initLogRocket };

window.React360 = { init };
