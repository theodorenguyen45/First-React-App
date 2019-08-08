import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCardList = ({ people }) => {
  return (
    <div>
        {
          people.map((people, i) => {
            return (
              <ServiceCard
                key={i}
                index={i}
                people={people}
              />
            )
          })
        }
    </div>
  );
}

export default ServiceCardList;