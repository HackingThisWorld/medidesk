import React from 'react'

const CTA = () => {
  return (
    <div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Services Provided By Us
            </h1>
            <p className="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              Our plateform provides a wide variety of services to our clients.
              We aim to helo users connect with labs and hospitals to get
              appointments and book tests which can be done at home.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-green-600"></div>
            </div>
          </div>
          <div className="-mx-4 -mb-10 -mt-4 flex flex-col gap-x-10 space-y-6 sm:-m-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center px-4 py-10 text-center shadow-md hover:shadow-2xl md:w-1/3">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full ">
                <img src="https://i.imgur.com/x1LePAL.png" />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Get yourself tested
                </h2>
                <p className="text-base leading-relaxed">
                  Book a test to get yourself tested with our wide spectrum of
                  available tests provided by the labs with cutting edge
                  technology. Labs connected with us are situated across the
                  country to fullfill our user's needs.
                </p>
                <button className="mt-3 inline-flex items-center text-[#24a677]">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-10 text-center shadow-md hover:shadow-2xl md:w-1/3">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full ">
                <img src="https://i.imgur.com/Ocuq0ry.png" />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Health Records
                </h2>
                <p className="text-base leading-relaxed">
                  Track your health records and connect with our health experts
                  to get advice on your health condition. Having data about your
                  past health history also helps doctors to diagnose you better.
                </p>
                <button className="mt-3 inline-flex items-center text-[#24a677]">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-10 text-center shadow-md hover:shadow-2xl md:w-1/3">
              <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full ">
                <img src="https://i.imgur.com/rICq0tk.png" />
              </div>
              <div className="flex-grow">
                <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                  Tips and Advice
                </h2>
                <p className="text-base leading-relaxed">
                  Our plateform does not only unite and aggregate labs and
                  hospitals but also other health experts to provide you with
                  the best advice on your health condition and allow you to get
                  appointments from your home.
                </p>
                <button className="mt-3 inline-flex items-center text-[#24a677]">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
