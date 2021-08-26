Redux `store` it's like our global state for the app.

```typescript
// /store

import { createStore } from 'redux';

const sharedData = 'Hello World!';
export const store = createStore(sharedData);
```

Redux `reducer` it's like an isolated state of the app.
A good practice for `reducers` it's to create an initial state and it's interfaces.

```typescript
// /store/modules/cart/reducer.ts

import { Reducer } from 'redux';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
};
```

To set more than one `reducer` in our `store`, we can create a `rootReducer` and use `combineReducers` method to export them.

```typescript
// /store/modules/rootReducer.ts

import { combineReducers } from 'redux';
import { cart } from './cart/reducer';

export default combineReducers({ cart });

// /store

import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

export const store = createStore(rootReducer);
```

Redux `actions` are functions that call a `reducer`.
An `action` must have a _`type`_ prop, and can have a _`payload`_ to send data to `reducer`.

PS: The whole logic and business rules must be the responsibility of each `reducer`, each `action` is only responsible for calling a `reducer` and sending it data.

```typescript
// /store/modules/cart/actions.ts

import { IProduct } from './types';

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: { product },
  };
}
```

To call this function properly, we had to use `useDispatch` hook.

```typescript
// /components/Cart

export const Catalog = () => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <h1>Catalog</h1>
    <button type="button" onClick={() => handleAddProductToCart(product)}>
      Buy
    </button>
  );
};
```

A `reducer` have two params: first the `store` current state, and second the `action` that have called this `reducer`.

```typescript
// /store/modules/cart/reducer.ts

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return state;
};
```

Remember that prop _`type`_ created in each `action`? That props it's used for `reducer` identify which function it have to execute.

```typescript
// /store/modules/cart/reducer.ts

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      console.log('That scope must be executed');
      return state;
    }
    default: {
      console.log('That scope should not be executed');
      return state;
    }
  }
};
```

Just like react states, we also have to use the `immutable` concept to change our redux state (`store`).
There is a lib called `immer` that makes this proccess much easier. With `immer` you can write mutable code in a `draft` and the library convert the `draft` into a new immutable data for you.

```typescript
// /store/modules/cart/reducer.ts

/* immutable concept using spread operators */
return {
  ...state,
  items: [
    ...state.items,
    {
      product,
      quantity: 1,
    },
  ],
};

/* immutable concept using immer */
return produce(state, (draft) => {
  draft.items.push({
    product,
    quantity: 1,
  });
});
```

We can access the global state data with redux `useSelector` method which receive a `callback` paramater and return the data that you specifies on callback (in this case `state.cart.item`).

Also, it have two `dynamic params`, the first one represents the `global state type`, and the second one represent the callback `return type`.

```typescript
// /components/Cart

const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

// global state type = IState
// callback return type = ICartItem[]
```

We can use the browser extension `redux dev tools`, to debug our redux states. With this extension we have access to our redux calls, diffs between each call and also navigate into a timeline. To set-up this extension we just need to install the `redux-devtools-extension` library and add this code in our `store`.

```typescript
// /store

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools());
```
