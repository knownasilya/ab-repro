import { helper } from '@ember/component/helper';

export function myHelper(/*params, hash*/) {
  return 'my-helper';
}

export default helper(myHelper);
