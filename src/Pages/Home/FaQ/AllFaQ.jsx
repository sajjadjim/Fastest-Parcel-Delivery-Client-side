import React from 'react';
import { Link } from 'react-router';

const AllFaQ = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 px-4">
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

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold text-lg">
                        How can I post if I found an item?
                    </div>
                    <div className="collapse-content text-sm text-gray-600">
                        Go to the "Post Found Item" page and describe the item you found. Try to include clear information so the owner can identify it.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold text-lg">
                        Can I view posts without creating an account?
                    </div>
                    <div className="collapse-content text-sm text-gray-600">
                        Yes, you can browse lost and found items without an account, but you'll need to log in to post or contact someone.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold text-lg">
                        How do I contact someone who posted an item?
                    </div>
                    <div className="collapse-content text-sm text-gray-600">
                        Each post includes contact details or a button to send a message. Make sure you're logged in to see contact options.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold text-lg">
                        How is my data protected?
                    </div>
                    <div className="collapse-content text-sm text-gray-600">
                        We use secure authentication and do not share your personal data with third parties. Your posts only display limited info.
                    </div>
                </div>
            </div>
            <div className='grid items-center justify-center md:mt-5 '><Link to='/' className='btn bg-[#CAEB66] text-black'>Back Home</Link></div>
        </div>
    );
};

export default AllFaQ;