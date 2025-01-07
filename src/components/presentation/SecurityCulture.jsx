
import React from 'react';
import { Users, BookOpen, FileText, Target } from 'lucide-react';

const SecurityCulture = () => {
  const culturePillars = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Collective Responsibility",
      description: "Security isn't just IT's job - every employee plays a crucial role in protecting our company and customers."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      title: "Education & Awareness",
      description: "Regular training and updates keep security best practices fresh and relevant for all team members."
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Policy Integration",
      description: "Security considerations are embedded in our core policies and procedures from day one."
    },
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Mission Alignment",
      description: "Security is part of our mission to provide trusted, reliable wearable technology."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">
          Building Our Security Culture
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            At Mango WS, we have a unique opportunity to build security into our company's DNA from the ground up. 
            Rather than fighting against established practices, we can create a culture where security is second nature.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Advantage</h3>
            <p className="text-blue-900">
              Starting fresh means we can implement security best practices from day one, making them an integral 
              part of how we work rather than an afterthought.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {culturePillars.map((pillar, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="mt-1">{pillar.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg mt-6 p-6">
        <h3 className="text-xl font-semibold mb-4">Implementation Steps</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Include security awareness in onboarding for all new employees</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Regular security updates and briefings in team meetings</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Recognition program for security-conscious behavior</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecurityCulture;