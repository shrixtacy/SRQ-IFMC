export default function Stats() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '2000+', label: 'Happy Clients', icon: '👥' },
    { number: '₹500Cr+', label: 'Loans Processed', icon: '💰' },
    { number: '98%', label: 'Success Rate', icon: '📈' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            TRUSTED BY <span className="text-blue-600">THOUSANDS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped businesses and individuals 
            achieve their financial goals with expert guidance and personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
