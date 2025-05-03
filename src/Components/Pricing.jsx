import {} from 'react';

const pricingPlans = [
  {
    id: 1,
    title: 'Starter',
    price: 'KSH: 9,000',
    level:"Personal/Business",
    features: [
        "up to 5 pages",
        "free logo",
        "2 free revision",
        "Search engine optimization(SEO)",
    ],
    bgColor: "bg-tertiary",
    text1: "text-primary"
  },
  {
    id: 2,
    title: 'Popular',
    price: 'KSH:14,000',
    level:"Personal/Business",
    features: [
       " up to 10 pages",
        // "Free logo",
        "site chat",
        "social media integration",
        "links to other websites",
        "Basic website automation",
        // "Get 3 free revisions",
        "Search engine optimization(SEO)"
    ],
    bgColor: "bg-secondary",
    text1: "text-quaternary",
  },
  {
    id: 3,
    title: 'Premium',
    price: 'KSH: 21,000',
    level:"E-commerce",
    features: [
       " Up to 20 pages",
       " Free logo",
        "Site chat",
       " Members page",
       " Sell online",
      //  " Get 5 free revisions",
        "search engine optimization (SEO)",
       " Accept online payment's",
       " Google analytics",
       " Incorporate software eg maps",
        "24/7 customer care services"
    ],
    bgColor: "bg-primary",
    text1: "text-tertiary",
  }
];

const Pricing = () => {


  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            Website Pricing Plans
          </h1>
        </header>

        <section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="pricing-plans"
        >
          {pricingPlans.map((plan) => (
            <article 
              key={plan.id}
              className={`${plan.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className='bg-gray-100 p-4 rounded-lg'>
                <header>
                  <h2 className={`text-primary text-3xl font-semibold text-center mb-6`}>
                    {plan.title}
                  </h2>
                  <p className="text-center text-xl text-secondary mb-6">
                    <span className="sr-only">Plan type: </span>
                    {plan.level}
                  </p>
                  <p className="text-center text-primary text-3xl font-bold mb-16">
                    <span className="sr-only">Price: </span>
                    {plan.price}
                  </p>
                </header>
                
                <div className="text-center mb-6">
                  <a
                    href={`https://wa.me/254796591251?text=${encodeURIComponent(`Hello, I'm interested in the ${plan.title} plan. Can we discuss more details?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300 inline-flex items-center space-x-2"
                    aria-label={`Choose ${plan.title} plan`}
                  >
                    <span>Choose Plan</span>
                  </a>
                </div>
              </div>

              <section 
                className={`p-4 rounded-lg ${plan.text1}`}
                aria-label={`${plan.title} plan features`}
              >
                <h3 className='text-xl mb-2 text-center underline'>Features</h3>
                <ul role="list" className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center mb-2"
                      role="listitem"
                    >
                      <svg 
                        className={`w-4 h-4 ${plan.text1} mr-2`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Pricing;