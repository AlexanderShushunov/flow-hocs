/* eslint-disable no-unused-expressions */
// @flow
import * as React from 'react';
import {injectHocRest} from './inject-hoc-rest';

type AllProps = {|
    own: string,
    injected: boolean
|}

/*
* Right usage
*/
(injectHocRest()((props: AllProps) => ''): React.ComponentType<{|own: string|}>);

/*
 * With injected props. It is not good :(
*/
(injectHocRest()((props: AllProps) => ''): React.ComponentType<AllProps>);

/*
 * $ExpectError
 * there is no props
*/
(injectHocRest()((props: AllProps) => ''): React.ComponentType<{||}>);

/*
 * $ExpectError
 * only injected prop
*/
(injectHocRest()((props: AllProps) => ''): React.ComponentType<{|injected: boolean|}>);

/*
 * $ExpectError
 * Other prop
*/
(injectHocRest()((props: AllProps) => ''): React.ComponentType<{|own: string, otherProp: number|}>);