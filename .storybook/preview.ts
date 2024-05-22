import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { Quasar } from 'quasar'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.sass'
import '../src/css/app.sass'

setup(async (app) => {
    app.config.performance = true
    app.use(Quasar,{})
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
