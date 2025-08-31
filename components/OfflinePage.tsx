import EssentialInformation from './EssentialInformation';
import Header from './Header';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Header />

      <div 
      className='flex flex-col bg-amber-500 items-center justify-center py-24'
      >
        <h2 className="text-2xl font-bold">You are offline</h2>
        <p className="text-gray-600">Please check your internet connection.</p>
      </div>
      
      <main className="pt-20 text-center">
        <EssentialInformation />
      </main>
    </div>
  );
}
