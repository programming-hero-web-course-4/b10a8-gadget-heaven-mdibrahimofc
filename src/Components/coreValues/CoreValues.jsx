import React from 'react';

const coreValues = [
  'Customer Satisfaction',
  'Innovation',
  'Sustainability',
  'Integrity',
  'Teamwork',
];

const CoreValues = () => {
  return (
    <section className="core-values p-8 bg-gray-200">
      <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
      <ul className="list-disc ml-8 text-lg">
        {coreValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoreValues;
