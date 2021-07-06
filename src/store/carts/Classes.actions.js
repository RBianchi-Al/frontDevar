export function addToClassesRequest(id) {
    return {
      type: '@classes/ADD_REQUEST',
      id,
    };
  }
  
//   export function addClassesSucess(product) {
//     return {
//       type: '@cart/ADD_SUCCESS',
//       product,
//     };
//   }
  
  // export function removeFromCart(id) {
  //   return { type: '@classes/REMOVE', id };
  // }
  
//   export function updateAmountRequest(id, amount) {
//     return { type: '@cart/UPDATE_AMOUNT_REQUEST', id, amount };
//   }
  
//   export function updateAmountSuccess(id, amount) {
//     return { type: '@cart/UPDATE_AMOUNT_SUCCESS', id, amount };
//   }