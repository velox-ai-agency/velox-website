export default function Hero() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🚀 Cairo's #1 AI Automation Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">AI Automation</span> <span className="block text-2xl md:text-3xl font-normal text-gray-500 mt-2">Based in Cairo, Egypt</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Custom AI chatbots, workflow automation, and intelligent process optimization for businesses in Egypt and the MENA region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              Book Free Consultation
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-gray-600">Automations Built</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">10M+</div>
              <p className="text-gray-600">Hours Saved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
