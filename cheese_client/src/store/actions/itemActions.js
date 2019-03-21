export const createItem = (item) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    
    //make async call to database
    const firestore = getFirestore()
    firestore.collection('items').add({
      ...item, 
      title: 'Test Cheese Title'
    }).then(() => {
      dispatch({ type: 'CREATE_ITEM', item: item })
    }).catch((err) => {
      dispatch({ type: 'CREATE_ITEM_ERROR', err})
    })
  
  }
};