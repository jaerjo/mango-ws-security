import React from 'react';
import { Building2, Heart, AlertTriangle, Shield } from 'lucide-react';

const Introduction = () => {
  const impactAreas = [
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Business Impact",
      description: "Reputational damage, financial penalties, and operational disruptions that can severely impact business continuity."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      title: "Medical Sensitivity",
      description: "As a medical wearables provider, we handle sensitive health data protected by HIPAA and other regulations."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
      title: "Unique Risks",
      description: "IoT devices face specific security challenges including physical tampering, wireless vulnerabilities, and real-time data protection."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Preventive Approach",
      description: "Building security into our culture now is more effective than retrofitting it later."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Cybersecurity at Mango WS
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          In today's interconnected digital landscape, cybersecurity isn't just an IT concern—it's a 
          fundamental business imperative. For Mango WS, as we develop cutting-edge wearable technology 
          for both personal and medical use, our security stance will define our market position and 
          trustworthiness.
        </p>
      </div>

      {/* Impact Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impactAreas.map((area, index) => (
          <div key={index} 
               className="bg-white rounded-xl shadow-sm p-6 border
                         transition-all duration-200 ease-in-out
                         hover:shadow-md hover:scale-[1.02]">
            <div className="flex items-start">
              <div className="bg-gray-50 rounded-lg p-3">
                {area.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;