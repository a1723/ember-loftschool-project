import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import ENV from 'ember-loftschool-project/config/environment';

export default helper(function env([propertyName]) {
  return get(ENV, propertyName);
});
