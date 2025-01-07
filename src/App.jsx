
import { useState } from 'react'
import Introduction from './components/presentation/Introduction'
import SecurityCulture from './components/presentation/SecurityCulture'
import CyberResilience from './components/presentation/CyberResilience'
import GoingForward from './components/presentation/GoingForward'
import { Shield } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const navigationItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'culture', label: 'Security Culture' },
    { id: 'resilience', label: 'Cyber Resilience' },
    { id: 'forward', label: 'Going Forward' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mango WS Security</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="border-b bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ease-in-out
                  ${activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border'
                  }
                  whitespace-nowrap
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'intro' && <Introduction />}
        {activeSection === 'culture' && <SecurityCulture />}
        {activeSection === 'resilience' && <CyberResilience />}
        {activeSection === 'forward' && <GoingForward />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 Mango WS Security. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App