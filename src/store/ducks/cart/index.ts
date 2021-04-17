import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';
import produce from 'immer';
import { Book } from '../books/types';

const INITIAL_STATE: CartState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      
      case CartTypes.REMOVE_SUCCCES: {
        const book:Book = {
          ...action.payload.book
        }
        
        
              
        const productInCartIndex = draft.data.find( item => 
            item.book.id === book.id
        );
        const pos = draft.data.findIndex(item=>item.book.id===book.id)

        if(productInCartIndex) {
          
          if(productInCartIndex.amount===1)
          
          {
            
            
            draft.data.splice(pos,1)
            
          
          }
          else
            productInCartIndex.amount--
        
        }


      break;
    
      }


      case CartTypes.ADD_SUCCCES: {
        
        const book:Book = {
          ...action.payload.book
        }
        
              
        const productInCartIndex = draft.data.findIndex( item => 
            item.book.id === book.id
        );

        if(productInCartIndex >= 0) {
            draft.data[productInCartIndex].amount++;
        } else {
            draft.data.push({
                book,
                amount: 1
            });
        }


      break;
      }

      default:
        return state;
    }
  })
};

export default reducer;
