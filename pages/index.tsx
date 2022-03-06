import {
  InboxIcon,
  PencilAltIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import { Button } from '@mantine/core'
import Lottie from 'react-lottie'
import animationData from '../assets/healthLottie.json'
import Link from 'next/link'
import CTA from '../components/CTA'
import Info from '../components/Info'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Modal } from '@mantine/core'
import ContactUs from '../components/ContactUs'
import LabSignUp from '../components/LabSignUp'

const features = [
  {
    name: 'Get yourself tested',
    description: 'Help us with necessary data so we detect if youre healthy.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    ),
  },
  {
    name: 'Health Records',
    description: 'Track and save your medical history and health data.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    ),
  },
  {
    name: 'Tips and Advice',
    description:
      'Blogposts from famous publications, catered to your need so you get the best recomendations',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    ),
  },
  {
    name: 'Book Appointment',
    description:
      'Book lab appointments for hospitals to get yourself tested sitting right at your home, and get health advice from our verified health advisors registered with us and our partners.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    ),
  },
]

const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  const { data: session, status } = useSession()
  const [opened, setOpened] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const defautOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Contact Us"
      >
        <div>
          <ContactUs />
        </div>
      </Modal>
      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        title="Lab Sign Up"
      >
        <div>
          <LabSignUp />
        </div>
      </Modal>
      <div className="mt-3 bg-white">
        <main>
          {/* Hero section */}
          <div className="relative mt-10">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex flex-row-reverse items-center justify-center shadow-xl sm:overflow-hidden sm:rounded-2xl">
                {/* <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover opacity-70 blur-[3px]"
                    src="https://t4.ftcdn.net/jpg/01/97/32/75/360_F_197327562_uPpQ7QhNyCmFBxkxv1XKefE5kLx2LfK5.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 " />
                </div> */}
                <div className="absolute opacity-50 sm:relative sm:opacity-100">
                  <Lottie options={defautOptions} height={400} width={400} />
                </div>
                <div className="relative px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32 lg:px-8 md:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-slate-700 ">
                      Virtual healthcare
                    </span>
                    <span className="block text-green-700">for you.</span>
                  </h1>
                  <p className="text-slte-700 mt-6 max-w-lg text-2xl sm:max-w-3xl">
                    Prediction or detection of various medical ailments.
                    healthcare, accessible online for everyone
                  </p>
                  <div className="mt-10 max-w-sm text-left sm:flex mx-auto sm:max-w-none">
                    <div className="space-y-4 sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link href="/services">
                        <a className="flex items-center justify-center rounded-md border border-transparent bg-opacity-60 bg-gradient-to-r from-[#26AB7B] to-[#229c70] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                          Services
                        </a>
                      </Link>
                      <Link href="/about-us">
                        <a className="flex items-center justify-center rounded-md border border-transparent bg-white bg-green-50 px-4 py-3 text-base font-medium text-[#26AB7B] shadow-sm hover:bg-green-100 sm:px-8">
                          About Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CTA />

          <Info />
          {/* Gradient Feature Section */}
          <div className="fro mx-auto mb-20 w-11/12 rounded-[1.5rem] bg-gradient-to-r from-[#26AB7B] to-[#229c70]">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Inbox support built for efficiency
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod
                mattis in.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                        {feature.icon}
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-base text-purple-200">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* testimonial section */}
          <div className="mx-auto md:px-2 lg:w-4/5">
            <div className="mx-auto mb-5 border-b-4 border-b-gray-200 px-4 text-center text-5xl font-bold md:mb-10 md:w-1/2">
              <h1 className="text-2xl lg:text-5xl">Our Client Reviews</h1>
            </div>
            <div className="parent">
              <div className="div1 shell border-2 border-green-200 shadow-lg hover:shadow-xl">
                <div className="head">
                  <img src="./images/image-daniel.jpg" alt="" />
                  <div>
                    Daniel Clifford
                    <div className="head1">
                      The Polish-American Heart Clinics
                    </div>
                  </div>
                </div>
                <div className="statement">
                  I found out about medidesk around an year ago. It resolved a
                  handful of problems which we faced during our daily tasks.
                </div>
                <div className="content">
                  “ Medidesk provides support in my daily patient registration
                  team management duties. Thanks to the Medidesk app I can
                  analyze the numbers of incoming and outgoing calls. I can see
                  which team members make the most appointments, how many of the
                  answered calls on the given day converted into actual
                  appointments, and what is the level of call traffic at
                  particular times. This is all very useful information, which
                  helps me optimize the work of my registration team and plan
                  our shift schedules. ”
                </div>
              </div>
              <div className="div4 shell border-2 border-green-200 shadow-lg hover:shadow-xl">
                <div className="head">
                  <img src="./images/image-jonathan.jpg" alt="" />
                  <div>
                    Maciej Walters
                    <div className="head1">Outpatiend Clinic - Wales</div>
                  </div>
                </div>
                <div className="statement">
                  The team was very supportive and kept me motivated
                </div>
                <div className="content">
                  “ MediDesk was a great help in taking our business to great
                  heights. It really helped increasing the reach of our clinic
                  and our products and also gave us a boost in our clinic's
                  patients. ”
                </div>
              </div>
              <div className="div3 shell border-2 border-green-200 shadow-lg hover:shadow-xl">
                <div className="head">
                  <img src="./images/image-jeanette.jpg" alt="" />
                  <div>
                    Jeanette Harmon
                    <div className="head1">Maple Heights M.D. Clinics</div>
                  </div>
                </div>
                <div className="statement">
                  An overall wonderful and rewarding experience
                </div>
                <div className="content rp">
                  “ Thank you for the wonderful application! We now have a great
                  amount of patients registering with ease on with the help of
                  the platform. ”
                </div>
              </div>
              <div className="div2 shell border-2 border-green-200 shadow-lg hover:shadow-xl">
                <div className="head">
                  <img src="./images/image-patrick.jpg" alt="" />
                  <div>
                    Patrick Abrams
                    <div>Verified Graduate</div>
                  </div>
                </div>
                <div className="statement">
                  Awesome plateform, great staff and support.
                </div>
                <div className="content">
                  “ I appreciate Medidesk particularly for the possibility to
                  take control of many significant measures in one place. As the
                  owner of several clinics in different locations, I like to
                  have access to statistics regarding patient traffic and
                  business results of each location, wherever I am, whenever I
                  need to. I verify all advertising campaigns and I work
                  methodically. I know exactly which activities are most
                  efficient. ”
                </div>
              </div>
              <div className="div5 shell border-2 border-green-200 shadow-lg hover:shadow-xl">
                <div className="head">
                  <img src="./images/image-kira.jpg" alt="" />
                  <div>
                    Kira Whittle
                    <div>Whittle Clinics</div>
                  </div>
                </div>
                <div className="statement">
                  Such a life-changing experience. Highly recommended!
                </div>
                <div className="content rp">
                  “ Using Medidesk I can check which marketing channels used
                  with the purpose of acquiring patients are most cost-effective
                  - e.g. a flyer campaign, or a Google AdWords campaign.
                  Moreover, Medidesk became the favorite tool among our front
                  desk employees, they can't imagine their work without it these
                  days. It's a very useful tool for anyone whose goal is to
                  increase profits in a broadly understood healthcare industry.
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white">
            <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to join us?</span>
                <span className="block bg-gradient-to-r from-[#26AB7B] to-[#229c70] bg-clip-text text-transparent">
                  Get in touch or create an account.
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                {status === 'authenticated' ? (
                  <></>
                ) : (
                  <>
                    <Button
                      size="lg"
                      onClick={() => setIsOpen(true)}
                      className="flex items-center justify-center rounded-md border border-transparent bg-green-50 px-4 py-3 text-base font-medium text-green-800 shadow-sm hover:bg-green-100"
                    >
                      Sign Up for Labs
                    </Button>
                  </>
                )}
                <Button
                  size="lg"
                  onClick={() => setOpened(true)}
                  className="w-full rounded-md border border-transparent bg-gradient-to-r from-[#26AB7B] to-[#229c70] bg-origin-border px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:from-[#24a677] hover:to-[#1bb57d]"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Solutions
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Support
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Legal
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 xl:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="focus:ring-green -500 w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-green-500 focus:placeholder-gray-400 focus:outline-none focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-[#26AB7B] to-[#229c70] bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-[#24a677] hover:to-[#1bb57d]"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                &copy; Medicare. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
