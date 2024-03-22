import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

function Contact({token}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { data, setData, errors, post } = useForm({
    name: "",
    email: "",
    message: "",
});
  const handleSubmit = (event) => {
    event.preventDefault();
    post(route("contact.store"))

    useEffect(() => {
      if (submitted && Object.keys(errors).length === 0) {
        setSubmitted(false)
        setTimeout(() => setShowMessage(true), 500)
      }
    }, [submitted, errors])
  
    const [showMessage, setShowMessage] = useState(false)
  
    if (showMessage) {
      return (
        <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded shadow-md">
          <div className="p-3 text-green-600">
            Message sent successfully!
          </div>
        </div>
      )
    }
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
            value={data.name}
            onChange={(event) => setData("name", event.target.value)}
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
            value={data.email}
            onChange={(event) => setData("email", event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="message"
            value={data.message}
            onChange={(event) => setData("message", event.target.value)}
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
