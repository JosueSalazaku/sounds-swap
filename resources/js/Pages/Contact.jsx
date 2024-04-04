import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name:
          </label>
          <input 
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
            Email:
          </label>
          <input 
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
            Message:
          </label>
          <textarea 
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#58D35F' }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      {submitted && <p className="text-green-500">Message sent!</p>}
    </div>
  );
}

export default Contact;
