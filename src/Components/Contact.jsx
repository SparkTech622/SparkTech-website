import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        message: '',
        type: '' // 'success' or 'error'
    });
    
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    useEffect(() => {
      if (submitStatus.message) {
          const timer = setTimeout(() => {
              setSubmitStatus({ message: '', type: '' });
          }, 5000); // 5 seconds timeout

          return () => clearTimeout(timer);
      }
  }, [submitStatus.message]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            from_phone: formData.phone,
            message: formData.message,
            to_name: "Spark Tech", // Your name or business name
            reply_to: formData.email
        };

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams
        );
        if (response.status === 200) {
            setSubmitStatus({
                message: 'Message sent successfully!',
                type: 'success'
            });
            
            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus({
            message: 'Failed to send message. Please try again.',
            type: 'error'
        });
    } finally {
        setIsLoading(false);
    }
};

    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return (
        <main className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <section aria-labelledby="contact-heading">
                        <h1 id="contact-heading" className="text-5xl text-primary font-bold mb-6">
                            Contact Us Today
                        </h1>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Get in Touch</h2>
                            <p className="text-gray-600 text-xl">Reach Out for a Consultation</p>
                            <address className="space-y-2 not-italic">
                                <div>
                                    <h3 className="block text-primary text-xl">Email:</h3>
                                    <a 
                                        href="mailto:alphatech1798@gmail.com"
                                        className="text-primary hover:text-secondary hover:underline"
                                        aria-label="Send us an email"
                                    >
                                        alphatech1798@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h3 className="block text-primary text-xl">Phone:</h3>
                                    <a 
                                        href="tel:+254796591251"
                                        className="text-primary hover:text-secondary"
                                        aria-label="Call us"
                                    >
                                        +254 796591251
                                    </a>
                                </div>
                            </address>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section aria-labelledby="form-heading">
                        <div className="p-6">
                            <h2 id="form-heading" className="text-2xl text-secondary font-semibold mb-6">
                                Contact us
                            </h2>
                            {submitStatus.message && (
                                <div 
                                    role="alert"
                                    className={`mb-4 p-3 rounded ${
                                        submitStatus.type === 'success' 
                                            ? 'bg-green-100 text-green-700' 
                                            : 'bg-red-100 text-red-700'
                                    }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}
                           <form 
    onSubmit={handleSubmit} 
    className="space-y-4"
    aria-label="Contact form"
>
    <div className="grid md:grid-cols-2 gap-4">
        {/* First Name Field */}
        <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name *
            </label>
            <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
                aria-required="true"
                placeholder="Enter your first name"
            />
        </div>

        {/* Last Name Field */}
        <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name *
            </label>
            <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
                aria-required="true"
                placeholder="Enter your last name"
            />
        </div>
    </div>

    {/* Email Field */}
    <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address *
        </label>
        <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
            placeholder="your.email@example.com"
        />
    </div>

    {/* Phone Field */}
    <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number *
        </label>
        <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
            placeholder="+254 XXX XXX XXX"
            pattern="[0-9+\s-]*"
        />
    </div>

    {/* Message Field */}
    <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message *
        </label>
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
            placeholder="Type your message here..."
        ></textarea>
    </div>

    {/* Submit Button */}
    <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-full transition-colors flex items-center justify-center space-x-2
                ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-tertiary hover:bg-primary text-white'}`}
            aria-label={isLoading ? "Sending message..." : "Submit contact form"}
        >
            {isLoading ? (
                <>
                    <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                        />
                    <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <span>Sending...</span>
                </>
            ) : (
                <span>Submit</span>
            )}
        </button>
</form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Contact;