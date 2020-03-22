/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

import invariant from './invariant';

// Renderers that don't support hydration
// can re-export everything from this module.

function shim() {
  invariant(false, 'The current renderer does not support hyration. ' + 'This error is likely caused by a bug in React. ' + 'Please file an issue.');
}

// Hydration (when unsupported)
export var supportsHydration = false;
export var canHydrateInstance = shim;
export var canHydrateTextInstance = shim;
export var getNextHydratableSibling = shim;
export var getFirstHydratableChild = shim;
export var hydrateInstance = shim;
export var hydrateTextInstance = shim;
export var didNotMatchHydratedContainerTextInstance = shim;
export var didNotMatchHydratedTextInstance = shim;
export var didNotHydrateContainerInstance = shim;
export var didNotHydrateInstance = shim;
export var didNotFindHydratableContainerInstance = shim;
export var didNotFindHydratableContainerTextInstance = shim;
export var didNotFindHydratableInstance = shim;
export var didNotFindHydratableTextInstance = shim;