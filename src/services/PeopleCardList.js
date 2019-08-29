import React from 'react';
import PeopleCard from '../Components/PeopleCard';

const PeopleCardList = ({ people }) => {
  return (
    <ul className='pa0 flex flex-row flex-wrap justify-center'>
      {people.map((people, i) => {
        return (
          <PeopleCard
            key={i}
            index={Math.floor(Math.random() * 100 + 1)}
            people={people}
          />
        );
      })}
    </ul>
  );
};

export default PeopleCardList;
