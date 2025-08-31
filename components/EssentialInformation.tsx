'use client';

import { useState } from 'react';

export default function EssentialInformation() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const essentialInfo = {
    address: "Office de Tourisme de Lyon, Place Bellecour, 69002 Lyon, France",
    phone: "+33 4 72 77 69 69",
    frenchText: "Office de Tourisme de Lyon, Place Bellecour, soixante-neuf mille deux Lyon, France"
  };

  const speakFrench = async () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(essentialInfo.frenchText);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  return (
    <section className="py-16 " id='information'>
      <div className="container flex justify-center flex-col h-full mx-auto px-4">
        <h2 className="text-6xl font-bold px-8 mb-12 text-gray-800">
          Essential Information
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg  p-8">
          <div>
            <h2>Contact <span className="text-blue-600">04 72 10 30 30</span></h2>
            <p className="mt-4 text-gray-700">
              <strong>Address:</strong> {essentialInfo.address}
              </p>
          </div>
              <div className="mt-8">
                <button
                  onClick={speakFrench}
                  disabled={isSpeaking}
                  className={`inline-flex cursor-pointer items-center space-x-2 px-8 py-4  font-semibold transition-all duration-200 ${
                    isSpeaking
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-800 hover:bg-blue-700 active:scale-95'
                  } text-white`}
                  aria-label="Listen to address pronunciation in French"
                  aria-describedby="address-info"
                >
               
                  <span>
                    {isSpeaking ? 'Speaking...' : 'Read it Loud'}
                  </span>
                </button>
          
            
              </div>
            
            
       </div>
      </div>
    </section>
  );
}
