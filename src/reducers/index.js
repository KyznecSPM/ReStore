/*
const books = [
  {
    id: 1,
    title: 'Production-Ready Microservices',
    author: 'Susan J. Fowler',
  },
  {
    id: 2,
    title: 'Release It!',
    author: 'Michael T. Nygard',
  },
  {
    id: 3,
    title: 'Spartak',
    author: 'Raffaello Giovagnoli',
  },
];*/

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
