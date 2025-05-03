// import { ArrowRight, CalendarDays } from 'lucide-react';
import { } from 'react'

function Testimonials() {
  const testimonials = [
    {
      author: "John Doe",
      company: "Tech Solutions Ltd",
      category: "Satisfied Customers",
      text: "The team at SPARK TECH exceeded our expectations with their web development skills. They truly brought our vision to life."
    },
    {
      author: "Jane Smith",
      company: "E-Commerce Plus",
      category: "Client Feedback",
      text: "SPARK Tech's e-commerce solutions transformed the way we do business online. We saw a significant increase in sales and customer engagement."
    },
    {
      author: "Mike Johnson",
      company: "Mobile Innovations",
      category: "Customer Reviews",
      text: "Our mobile app developed by SPARK TECH has been well-received by users. It's intuitive, user-friendly, and has boosted our brand visibility."
    }
  ];

  // const blogPost = {
  //   title: "How ALPHA TECH is Revolutionizing Digital Solutions",
  //   excerpt: "Discover the latest innovations and technologies we're implementing to help businesses transform their digital presence and achieve remarkable growth in today's competitive market.",
  //   date: "February 6, 2025",
  //   readTime: "5 min read"
  // };

  return (
    <main className="min-h-screen w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold text-center mb-12">Client Testimonials</h1>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="testimonials">
          {testimonials.map((item, index) => (
            <article 
              key={index} 
              className="bg-quaternary p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <blockquote className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.category}</h2>
                <p className="text-primary text-lg leading-relaxed">{item.text}</p>
                <footer className="mt-4 text-sm text-gray-600">
                  <cite>
                    <span className="font-medium">{item.author}</span>
                    <span className="block">{item.company}</span>
                  </cite>
                </footer>
              </blockquote>
            </article>
          ))}
        </section>

        {/* <article className="mt-12">
          <div className="p-8 bg-primary rounded-lg w-1/2 items-center flex flex-col mx-auto hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h2 className="text-2xl text-tertiary font-bold mb-4">{blogPost.title}</h2>
                <p className="text-quaternary mb-4 max-w-3xl">{blogPost.excerpt}</p>
                <footer className="flex text-quinary items-center gap-4 text-sm text-gray-500">
                  <time className="flex items-center gap-2" dateTime="2025-02-06">
                    <CalendarDays size={16} aria-hidden="true" />
                    <span>{blogPost.date}</span>
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{blogPost.readTime}</span>
                </footer>
              </div>
              <a 
                href="#read-more" 
                className="flex items-center gap-2 bg-quinary text-primary px-6 py-3 rounded-lg hover:bg-tertiary transition-colors"
                aria-label="Read more about ALPHA TECH's Digital Solutions"
              >
                Read More
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article> */}
      </div>
    </main>
  )
}

export default Testimonials