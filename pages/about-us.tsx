import React from 'react'

const Ouraim = () => {
  return (
    <div className="px-4 py-20 md:px-44">
      <div className="goal">
        <div className="border-b-4 border-b-slate-500 pb-2 text-4xl font-bold">
          What does our plateform do?
        </div>
        <p className="mt-2 mb-8 text-2xl text-gray-700 first-letter:text-4xl">
          <span className="text-green-700">Our</span> plateform makes it easier
          for private hospitals, outpatient private clinics etc to manage their
          clients. Our plateform lets users book appointments to lab tests,
          request for health consultation and track their medical history for
          health advices. We will aggregate the labs providing home services for
          tests like blood test etc and connect them with the users present in
          their city.
        </p>
        <div className="inline border-b-4 border-b-slate-500 text-3xl ">
          The flow of the application
        </div>
        <p className="mt-2 mb-8 text-2xl text-gray-700 first-letter:text-4xl first-letter:text-green-800">
          <span className="text-green-700">Our</span> plateform allows user to
          sign in once and get registered with us. Then they can book any test
          from the labs present in their city connected with us or even request
          consultation with the health experts which work in the test labs and
          connected medical facilities.
        </p>
        <div className="inline border-b-4 border-b-slate-500 text-3xl">
          Services we provide
        </div>
        <div className="mt-4 flex flex-col gap-4 text-xl">
          <li>
            <span className="font-bold">Get Yourself Tested:</span> Book a test
            to get yourself tested with our wide spectrum of available tests
            provided by the labs with cutting edge technology. Labs connected
            with us are situated across the country to fullfill our user's
            needs.
          </li>
          <li>
            <span className="font-bold">Health Records:</span> Book a test Track
            your health records and connect with our health experts to get
            advice on your health condition. Having data about your past health
            history also helps doctors to diagnose you better.
          </li>
          <li>
            <span className="font-bold">Tips and Advice :</span> Book a test
            Track Our plateform does not only unite and aggregate labs and
            hospitals but also other health experts to provide you with the best
            advice on your health condition and allow you to get appointments
            from your home.
          </li>
        </div>
      </div>
    </div>
  )
}

export default Ouraim
