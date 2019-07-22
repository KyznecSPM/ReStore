import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
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
  ];
  return <BookList books={books} />;
};

export default HomePage;
