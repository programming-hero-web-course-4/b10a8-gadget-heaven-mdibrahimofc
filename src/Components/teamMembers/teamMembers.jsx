import React from 'react';

const teamMembers = [
  { name: 'Ibrahim', position: 'CEO', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Jalal', position: 'CTO', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Mohammad Sayed', position: 'Head of Design', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const TeamProfiles = () => {
  return (
    <section className="team-profiles p-8">
      <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member bg-white p-4 shadow rounded">
            <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;
