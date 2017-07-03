import Globalize from 'globalize';
// import * as likelySubtags from 'json!cldr-data/supplemental/likelySubtags.json';
// import * as main from 'json!cldr-data/main/en/ca-gregorian.json';

import * as j1 from 'json!cldr-data/supplemental/likelySubtags.json';
import * as j2 from 'json!cldr-data/main/en/numbers.json';
import * as j3 from 'json!cldr-data/supplemental/numberingSystems.json';
import * as j4 from 'json!cldr-data/main/en/ca-gregorian.json';
import * as j5 from 'json!cldr-data/main/en/timeZoneNames.json';
import * as j6 from 'json!cldr-data/supplemental/timeData.json';
import * as j7 from 'json!cldr-data/supplemental/weekData.json';

export class App {
  constructor() {
    this.message = 'Hello World!';

    Globalize.load(j1, j2, j3, j4, j5, j6, j7);
    console.log(Globalize('en').formatDate(new Date()));
  }
}
