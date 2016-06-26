import test from 'ava';
import fn from './';

test('must return the nightly node version', async t => {
	var version = await fn();
  t.is(typeof version, 'string');
});
