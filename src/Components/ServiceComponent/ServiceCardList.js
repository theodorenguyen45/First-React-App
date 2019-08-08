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
                height={people.height}
                name={people.name}
                gender={people.gender}
                haircolor={people.hair_color}
              />
            )
          })
        }
    </div>
  );
}

export default ServiceCardList;