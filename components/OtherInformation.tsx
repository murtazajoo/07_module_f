import React, { useState } from 'react';

const OtherInformation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 0, label: 'Tab 1', content: 'This is the content for Tab 1.' },
    { id: 1, label: 'Tab 2', content: 'This is the content for Tab 2.' },
    { id: 2, label: 'Tab 3', content: 'This is the content for Tab 3.' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white my-24">
      <h1 className="text-6xl font-bold  text-black mb-12 text-center">
        Other Information
      </h1>
      
      <div className="flex border-b border-gray-300 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 cursor-pointer font-medium text-lg transition-colors relative ${
              activeTab === tab.id
                ? 'text-black bg-gray-100'
                : 'text-gray-600 bg-gray-200 hover:text-black hover:bg-gray-150'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
            )}
          </button>
        ))}
      </div>
      
      <div className="py-6">
        <p className="text-lg text-black">
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
};

export default OtherInformation;