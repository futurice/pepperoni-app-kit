import {isArray, isFunction, isUndefined, isMatchWith} from 'lodash';

/**
 * Tests whether the passed Enzyme wrapper element has all the style
 * properties given in expectedStyles.
 *
 * Example: hasStyles(element, {textAlign: 'left', color: '*', position: _.isUndefined})
 */
export function hasStyles(wrapper, expectedStyles) {
  const styleProp = wrapper.props().style;
  if (!styleProp) {
    return false;
  }

  // support array and object styles
  const appliedStyle = isArray(styleProp)
    ? Object.assign({}, ...styleProp)
    : styleProp;

  // test that styles match spec
  return isMatchWith(appliedStyle, expectedStyles, (actualValue, expectedValue) => {

    // Splat means any value
    if (expectedValue === '*') {
      return !isUndefined(actualValue);
    }

    // Function property for complex tests
    if (isFunction(expectedValue)) {
      return expectedValue(actualValue);
    }

    // otherwise defer to regular _.isMatch check
    return void 0;
  });
}
