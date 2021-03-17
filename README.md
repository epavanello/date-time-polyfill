# input-date-polyfill
Polyfill for date input.
Just include this simple script and IE, Firefox, and OS X Safari will support `<input type="date">`, without any dependencies, not even jQuery!

Support dynamically created inputs, so can be used in single page applications.

Forked from [date-input-polyfill](https://github.com/jcgertig/date-input-polyfill). Continuing and fixed as a separate project.

<!-- **Demo available here**: https://jsfiddle.net/pava91/ -->

## Install
`npm install --save input-date-polyfill`

Add to your project:

* **Webpack/Browserify:** `require('input-date-polyfill');`

    or alongside **Babel:** `import 'input-date-polyfill';`

* **Script Tag:** Copy `input-date-polyfill.dist.js` from `node_modules` and
include it anywhere in your HTML.

* This package also supports **AMD**.

## Features
* **Easily Stylable:** [These are the default styles](https://github.com/epavanello/date-time-polyfill/blob/master/input-date-polyfill.scss),
which you may override with your own.

* **Polyfills `valueAsDate` and `valueAsNumber`:**
[Learn more about these properties.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#property-valueasdate)
They behave as getters and setters.

* **Keyboard Shortcuts:** `Esc` will hide the datepicker. `Up/Down` will
increment/decrement the date by one day.

* **Localization:** Specify the datepicker's locale by setting the
`lang` attribute of the `input` element.  The default locale is `en`.

    `<input type="date" lang="en" />`

* **Formatting:** Specify the display format by setting either the
`date-format` or `data-date-format` attribute of the `input` element.  The default format is `yyyy-mm-dd`.
[Available options list.](https://github.com/felixge/node-dateformat#mask-options)

    `<input type="date" date-format="mm/dd/yyyy" />`
    
    `<input type="date" data-date-format="mm/dd/yyyy" />`


## Contributing

### Local Development
Run `npm start` or, for Cloud9 IDE users: `npm run start-c9`

### Build
Run `npm run build`
