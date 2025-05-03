import emailjs from '@emailjs/browser';



 const EmailAdmin = async (enrollmentData) => {
  try {


    const templateParams = {
        to_name: "Admin",
        from_name: enrollmentData.userName,
        user_email: enrollmentData.userEmail,
        course_title: enrollmentData.courseTitle,
        course_price: enrollmentData.coursePrice,
        payment_ref: enrollmentData.paymentRefCode,
        enrollment_id: enrollmentData.enrollmentId,
        enrollment_date: enrollmentData.enrollmentDate
      };

    const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID1,
        templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      //console.log('Email sent successfully');
      return true;
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send notification email');
  }
};

export default EmailAdmin;