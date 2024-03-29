/// <reference path="./global.d.ts" />
// @ts-check

import { checkStatus, checkInventory } from './grocer';

/**
 * Returns the service status as a boolean value
 * @return {boolean}
 */
export function isServiceOnline() {
  return checkStatus(status => status === 'ONLINE');
}

/**
 * Pick a fruit using the checkInventory API
 *
 * @param {string} variety
 * @param {number} quantity
 * @param {InventoryCallback} callback
 * @return {AvailabilityAction} the result from checkInventory
 */
export function pickFruit(variety, quantity, callback) {
  return checkInventory({variety, quantity}, callback);
}

/**
 * This is a callback function to be passed to the checkInventory API
 * handles the next step once the inventory is known
 * @param {string | null} err
 * @param {boolean | undefined} isAvailable
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err !== null) {
    throw new Error('Server Offline');
  }

  if (isAvailable) {
    return 'PURCHASE';
  }

  return 'NOOP';
}

/**
 * Pick a fruit, and if it is available, purchase it
 *
 * @param {string} variety
 * @param {number} quantity
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function pickAndPurchaseFruit(variety, quantity) {
  let isAvailable;
  
  pickFruit(
    variety, 
    quantity, 
    (_, response) => isAvailable = response
  );

  if (isAvailable === undefined) {
    throw new Error();
  }

  if (isAvailable === false) {
    return 'NOOP';
  }
    
  return purchaseInventoryIfAvailable(null, isAvailable);  
}
