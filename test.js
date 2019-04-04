import test from 'ava';
import m from '.';

test('default', t => {
	const results = m({
		provider: '0821',
		hlr: '1234',
		start: '0000',
		end: '0005'
	});

	t.deepEqual(results, [
		'082112340000',
		'082112340001',
		'082112340002',
		'082112340003',
		'082112340004',
		'082112340005'
	]);
});

test('delimiter', t => {
	const results = m({
		provider: '+62822',
		hlr: '5678',
		start: '1000',
		end: '1005',
		delimiter: '-'
	});

	t.deepEqual(results, [
		'+62822-5678-1000',
		'+62822-5678-1001',
		'+62822-5678-1002',
		'+62822-5678-1003',
		'+62822-5678-1004',
		'+62822-5678-1005'
	]);
});
