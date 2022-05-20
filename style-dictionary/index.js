const fs = require('fs');
const path = require('path');
const template = require('lodash/template');
const stylestDictionary = require('style-dictionary');
const config = require('./config.json');

const ExtendedStyleDictionary = stylestDictionary.extend(config);

ExtendedStyleDictionary.registerFormat({
  name: 'custom/format/css',
  formatter: template(
    fs.readFileSync(path.join(__dirname, 'tokens/templates/css.template')),
  ),
});

ExtendedStyleDictionary.buildAllPlatforms();
