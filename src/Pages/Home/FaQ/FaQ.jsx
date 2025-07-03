import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
const FaQ = () => {
  return (
    <motion.div className="max-w-4xl mx-auto my-10 px-4"
          initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 ">Frequently Asked Questions</h2>
<p className='text-center py-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-lg">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Click the "Sign Up" button in the top right corner and follow the registration process.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Go to "My Account" settings and select "Edit Profile" to make changes.
          </div>
        </div>

        {/* Lost & Found Specific Questions */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            How can I report a lost item?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            After logging in, go to the "Post Lost Item" section and fill out the form with details like category, location, date, and description.
          </div>
        </div>
      </div>
      <div className='grid items-center justify-center md:mt-5 '><Link to='/FaQ' className='btn bg-[#CAEB66] text-black'>See more FaQ</Link></div>
    </motion.div>
  );
};

export default FaQ;