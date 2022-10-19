import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  // Compare two maps - literally just value equality check
  return is(map1, map2);
}
