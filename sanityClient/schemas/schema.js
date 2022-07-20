import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import headphone from './headphone';
import earphone from './earphone';
import speaker from './speaker';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ headphone, earphone, speaker ]),
})
