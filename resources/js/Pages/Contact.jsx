import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
            style={{ backgroundColor: '#59d45f' }}
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
