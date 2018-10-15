/* eslint-disable no-unused-expressions */
// @flow
import type {Unexact} from './unexact';

/*
* Work with the same field
*/
({foo: 42}: Unexact<{|foo: number|}>);

/*
* Work with additional fields
*/
({foo: 42, boo: true}: Unexact<{|foo: number|}>);


/*
 * Does not allow to change field type
 * $ExpectError
*/
({foo: '42'}: Unexact<{|foo: number|}>);

/*
 * Does not allow to omit fields
 * $ExpectError
*/
({boo: '42'}: Unexact<{|foo: number|}>);

