import produce from 'immer';

export default function (state = [], action) {
    switch (action.type) {
      case '@cart/ADD_SUCCESS':
        return {
            id: action.id,
            text: action.text,
            completed: false
        }
  
    //   case '@classes/REMOVE':
    //     return produce(state, draft => {
    //       const productIndex = draft.findIndex(p => p.id === action.id);
    //       if (productIndex >= 0) {
    //         draft.splice(productIndex, 1);
    //       }
    //     });
  
      
      default:
        return state;
    }
  }