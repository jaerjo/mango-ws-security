
import React from 'react';
import { ClipboardCheck, ShieldAlert, BookOpen, Settings, ArrowUpRight } from 'lucide-react';

const GoingForward = () => {
  const priorities = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
      title: "Comprehensive Risk Analysis",
      timeframe: "Q1",
      description: "Conduct thorough risk assessment of our infrastructure, products, and processes",
      keyPoints: [
        "Identify critical assets and vulnerabilities",
        "Assess potential impacts on business operations",
        "Prioritize risks based on likelihood and impact"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Framework Adoption",
      timeframe: "Q1-Q2",
      description: "Implement NIST Cybersecurity Framework as our security foundation",
      keyPoints: [
        "Align security practices with industry standards",
        "Establish measurable security objectives",
        "Enable consistent security evaluation"
      ]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-green-600" />,
      title: "Policy Development",
      timeframe: "Q2",
      description: "Create and implement core security policies and procedures",
      keyPoints: [
        "Define security responsibilities and expectations",
        "Establish incident response procedures",
        "Create data handling guidelines"
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      title: "Control Implementation",
      timeframe: "Q2-Q3",
      description: "Deploy essential security controls based on risk analysis",
      keyPoints: [
        "Implement access control systems",
        "Deploy monitoring and detection tools",
        "Establish secure development practices"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Moving Forward: Key Objectives
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          To build upon our foundation of security culture and resilience, we need to focus on 
          these critical objectives in the coming months. Each represents a crucial step in 
          establishing our comprehensive security program.
        </p>
      </div>

      {/* Priority Cards */}
      <div className="space-y-4">
        {priorities.map((priority, index) => (
          <div key={index} 
               className="bg-white rounded-xl shadow-sm p-6 border
                         transition-all duration-200 ease-in-out
                         hover:shadow-md">
            <div className="flex items-start">
              <div className="bg-gray-50 rounded-lg p-3">
                {priority.icon}
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{priority.title}</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {priority.timeframe}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{priority.description}</p>
                <ul className="space-y-2">
                  {priority.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ArrowUpRight className="w-4 h-4 mr-2 text-gray-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Success Metrics Box */}
      <div className="bg-blue-50 rounded-xl shadow-sm p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Success Metrics</h3>
        <p className="text-blue-800">
          Progress will be tracked through regular security assessments, employee engagement metrics, 
          and successful implementation of planned controls. Quarterly reviews will ensure we maintain 
          momentum and adjust our approach as needed.
        </p>
      </div>
    </div>
  );
};

export default GoingForward;