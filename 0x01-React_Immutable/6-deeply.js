import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  // Similar to merge but merges collections with same key
  // Meaning recurses deeply through nested data if "compatible" - meaning dict, list, set, etc.
  return Map(page1).mergeDeep(Map(page2));
}
