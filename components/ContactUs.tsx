import { Textarea } from '@mantine/core'
import { useState } from 'react'

const ContactUs = () => {
  const [name, setName]: any = useState()
  const [email, setEmail]: any = useState()
  const [message, setMessage]: any = useState()

  const submitForm = async () => {
    const data = {
      name,
      email,
      message,
    }
    const response = await fetch(
      'https://medidesk-server-production.up.railway.app/forms/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    const json = await response.json()
    console.log(json)
  }
  return (
    <>
      <form
        className="mt-8 space-y-6"
        onSubmit={(event) => event.preventDefault()}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div className="my-4">
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>
          <div className="my-4">
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <Textarea
              classNames={{
                root: 'my-4',
              }}
              id="message"
              name="message"
              placeholder="Your Message"
              radius="md"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            onClick={submitForm}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactUs
