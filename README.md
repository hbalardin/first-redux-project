Redux **store** it's like our global state for the app.

Redux **reducer** it's like an isolated state of the app.
A good practice to create **reducers** it's to create an initial state and it's interfaces.

To set more than one **reducer** in our **store**, we can create a **rootReducer** and use **combineReducers** method to export them.

Redux **actions** are function that call a **reducer**. To call this function properly, we had to use **useDispatch** hook. An **action** must have a **type** prop, and can have a **payload** to send data to **reducer**.
