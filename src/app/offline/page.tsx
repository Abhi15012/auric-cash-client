import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="PRC Gold Buyers"
            width={120}
            height={60}
            className="mx-auto mb-6"
          />
        </div>
        
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2v20M2 12h20" 
              />
            </svg>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            You're Offline
          </h1>
          
          <p className="text-gray-600 mb-6">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-primary hover:bg-orange-400 text-white font-semibold py-3 rounded-lg"
          >
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50"
            >
              Go to Home
            </Button>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> Install our app for a better offline experience and quick access to gold buying and pledged gold release services.
          </p>
        </div>
      </div>
    </div>
  );
}
