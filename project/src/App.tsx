import React from 'react';
import { Brain, Zap, Notebook as Robot, Sparkles, Target, Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center py-10 animate-pulse">
          <div className="flex justify-center gap-2 mb-4">
            <Brain className="w-12 h-12 text-yellow-300" />
            <Robot className="w-12 h-12 text-yellow-300" />
          </div>
          <h1 className="text-6xl font-bold text-yellow-300 mb-6 leading-tight">
            REVOLUTIONIZE YOUR STRIPPING WITH AI-POWERED MIDGET TECHNOLOGY!!!
          </h1>
          <p className="text-2xl text-white mb-8">
            Our AI-driven midgets are 3000% more efficient at stripping than human performers!*
            <br />
            <span className="text-sm">*Results may vary. Some midgets may be holograms.</span>
          </p>
          <button className="bg-yellow-300 text-purple-800 px-8 py-4 rounded-full text-xl font-bold hover:animate-spin transform hover:scale-110 transition">
            BOOK YOUR MIDGET NOW!!! 🎪
          </button>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <FeatureCard
            icon={<Zap className="w-16 h-16 text-yellow-300" />}
            title="AI-ENHANCED STRIPPING"
            description="Our midgets are equipped with quantum stripping algorithms that can remove clothes 9000% faster than human strippers!"
          />
          <FeatureCard
            icon={<Sparkles className="w-16 h-16 text-yellow-300" />}
            title="BLOCKCHAIN VERIFIED PERFORMANCES"
            description="Every lap dance is recorded on the blockchain for maximum transparency and NFT potential!"
          />
          <FeatureCard
            icon={<Target className="w-16 h-16 text-yellow-300" />}
            title="PRECISION TIPPING AI"
            description="Our AI calculates the perfect tip amount based on your bank balance and emotional state!"
          />
        </div>

        {/* Testimonial */}
        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm my-16">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200"
            alt="Happy Customer"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-300"
          />
          <p className="text-white text-xl text-center italic">
            "I used to hire regular strippers, but after switching to AI midgets, my bachelor party revenue increased by 420%! 
            The midgets even wrote this testimonial themselves!"
          </p>
          <p className="text-yellow-300 text-center mt-4">
            - Chad McStripper, CEO of Bachelor Parties R Us
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold text-yellow-300 mb-8">
            DON'T MISS THE STRIPPING REVOLUTION!!!
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-300 text-purple-800 px-6 py-3 rounded-full font-bold hover:animate-bounce">
              FREE MIDGET TRIAL!!! 🎪
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:animate-pulse">
              CONTACT OUR MIDGET AI! 🤖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:transform hover:scale-105 transition text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-yellow-300 mb-4">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

export default App;
