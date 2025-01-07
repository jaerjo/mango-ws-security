
import React from 'react';
import { Server, Database, Globe, Wifi, Shield, ArrowRight } from 'lucide-react';

const CyberResilience = () => {
  const infrastructureElements = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Customer-Facing Systems",
      description: "Website and device connectivity portals with robust security measures and redundancy.",
      measures: ["DDoS protection", "SSL/TLS encryption", "Regular penetration testing"]
    },
    {
      icon: <Server className="w-6 h-6 text-green-600" />,
      title: "Internal Infrastructure",
      description: "Secure internal networks and development environments.",
      measures: ["Network segmentation", "Access controls", "Monitoring systems"]
    },
    {
      icon: <Database className="w-6 h-6 text-purple-600" />,
      title: "Data Protection",
      description: "Comprehensive protection for sensitive data including code, schematics, and customer information.",
      measures: ["Encryption at rest", "Secure backups", "Access logging"]
    },
    {
      icon: <Wifi className="w-6 h-6 text-red-600" />,
      title: "Device Connectivity",
      description: "Secure communication channels for wearable devices.",
      measures: ["End-to-end encryption", "Certificate-based auth", "Secure updates"]
    }
  ];

  const resilienceSteps = [
    { number: "01", title: "Identify", description: "Map critical assets and potential risks" },
    { number: "02", title: "Protect", description: "Implement preventive controls" },
    { number: "03", title: "Detect", description: "Monitor for security events" },
    { number: "04", title: "Respond", description: "Execute incident response plans" },
    { number: "05", title: "Recover", description: "Restore operations and learn" }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Building Cyber Resilience
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Cyber resilience is our ability to prepare for, respond to, and recover from cyber threats 
          while continuing to operate and deliver value to our customers.
        </p>
        
        {/* Preliminary Assessment Box */}
        <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <div className="flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">Preliminary Assessment</h3>
          </div>
          <p className="mt-2 text-blue-800">
            While awaiting formal risk analysis, we've identified key areas requiring immediate attention 
            based on our business model and industry standards.
          </p>
        </div>
      </div>

      {/* Infrastructure Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infrastructureElements.map((element, index) => (
          <div key={index} 
               className="bg-white rounded-xl shadow-sm p-6 border
                         transition-all duration-200 ease-in-out
                         hover:shadow-md hover:scale-[1.02]">
            <div className="flex items-start">
              <div className="bg-gray-50 rounded-lg p-3">
                {element.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {element.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {element.description}
                </p>
                <ul className="space-y-1">
                  {element.measures.map((measure, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="w-4 h-4 mr-1 text-gray-400" />
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resilience Framework Steps */}
      <div className="bg-white rounded-xl shadow-sm p-8 border">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resilience Framework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {resilienceSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <span className="text-blue-600 font-semibold">{step.number}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberResilience;