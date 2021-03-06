const initState = {
  items: [
    {id: '1', title: 'Feta', description: "Feta is a brined curd white cheese made in Greece from sheep's milk or from a mixture of sheep and goat's milk."},
    {id: '2', title: 'Brie', description: "Brie is a soft cow's-milk cheese named after Brie, the French region from which it originated."},
    {id: '3', title: 'Mozzarella', description: "Mozzarella is a traditionally southern Italian cheese made from Italian buffalo's milk by the pasta filata method."},
  
  ]
};

const itemReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_ITEM':
      console.log('created item', action.item)
      return state
    case 'CREATE_ITEM_ERROR':
      console.log('create item error:', action.err)
      return state
    default:
      return state
  }
  
}

export default itemReducer;