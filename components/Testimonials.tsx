export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Kumar Industries',
      content: 'SRQ IFMC helped us secure the perfect business loan with excellent terms. Their expertise in financial advisory made the entire process seamless.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'Tech Solutions Pvt Ltd',
      content: 'Their strategic communication services transformed our brand presence. The marketing campaigns delivered exceptional ROI and brand recognition.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Real Estate Investor',
      company: 'Patel Properties',
      content: 'Found my dream commercial property through SRQ IFMC. Their real estate team provided valuable insights and negotiated the best deal.',
      rating: 5,
      image: '👨‍🏢'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            CLIENT <span className="text-blue-600">SUCCESS STORIES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with SRQ IFMC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
