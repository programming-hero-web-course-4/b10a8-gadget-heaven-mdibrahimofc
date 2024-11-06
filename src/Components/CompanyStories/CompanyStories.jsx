// components/CompanyStory.js
import React from 'react';

const CompanyStories = () => {
  return (
    <section className="company-story p-8">
      <h2 className="text-3xl font-bold mb-4">Our Story</h2>
      <p className="text-lg">
        Founded in [Year], Gadget Heaven began with the goal of making innovative tech accessible to everyone. From our humble
        beginnings to becoming a trusted name, we’ve achieved numerous milestones, including [Milestone Example].
      </p>
      <ul className="mt-4">
        <li>2015: Launched our first product</li>
        <li>2018: Awarded Best Tech Accessory of the Year</li>
        <li>2023: Reached 1 million happy customers</li>
      </ul>
    </section>
  );
};

export default CompanyStories;
