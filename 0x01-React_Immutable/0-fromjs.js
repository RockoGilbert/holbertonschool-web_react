// A function that accepts an object as a parameter and converts it into an immutable Map.

import { fromJS } from 'immutable';

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;