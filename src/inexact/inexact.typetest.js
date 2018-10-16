/* eslint-disable no-unused-expressions */
// @flow
import type {Inexact} from './inexact';

/*
* Work with the same field
*/
({foo: 42}: Inexact<{|foo: number|}>);

/*
* Work with additional fields
*/
({foo: 42, boo: true}: Inexact<{|foo: number|}>);


/*
 * Does not allow to change field type
 * $ExpectError
*/
({foo: '42'}: Inexact<{|foo: number|}>);

/*
 * Does not allow to omit fields
 * $ExpectError
*/
({boo: '42'}: Inexact<{|foo: number|}>);

