// import { useRouter } from 'next/router'

// export default function Navbar() {
//   const router = useRouter()
//   return (
//     <div className="mx-auto max-w-7xl py-4 px-4">
//       <div className="flex items-center justify-between">
//         <div className="flex gap-6">
//           <div className="flex cursor-pointer items-center gap-2">
//             <div className="h-8 w-8 rounded-full bg-yellow-400"></div>
//             <div className="text-md font-medium">MediDesk</div>
//           </div>
//           <div className="flex gap-4">
//             <div
//               onClick={() => router.push('/')}
//               className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
//             >
//               Home
//             </div>
//             <div
//               onClick={() => router.push('/services')}
//               className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
//             >
//               Services
//             </div>
//             <div
//               onClick={() => router.push('/about-us')}
//               className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
//             >
//               About Us
//             </div>
//           </div>
//         </div>

//         <div>
//           <div>
//             <button className="rounded-sm bg-green-500 px-4 py-1 text-white hover:bg-green-500/90">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Modal } from '@mantine/core'
import React, { useState } from 'react'
import LabSignIn from './LabSignIn'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [opened, setOpened] = React.useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Lab Sign In"
      >
        <div>
          <LabSignIn />
        </div>
      </Modal>
      <Disclosure as="nav" className="z-50 bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-32 w-auto lg:hidden"
                      src="https://cdn.discordapp.com/attachments/941636283208458250/949901545959477318/MEDIDESKlogo.png"
                      alt="Workflow"
                    />
                    <img
                      className="hidden h-32 w-auto lg:block"
                      src="https://cdn.discordapp.com/attachments/941636283208458250/949901545959477318/MEDIDESKlogo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-green-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <div
                      onClick={() => router.push('/')}
                      className="inline-flex cursor-pointer items-center border-b-2 border-green-500 px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      Home
                    </div>
                    <div
                      onClick={() => router.push('/services')}
                      className="inline-flex cursor-pointer items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      Services
                    </div>
                    <div
                      onClick={() => router.push('/about-us')}
                      className="inline-flex cursor-pointer items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      About Us
                    </div>
                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  {/* Profile dropdown */}
                  {status === 'authenticated' ? (
                    <div>
                      {/* Signed in as {session?.user?.email}{' '}
                    <button onClick={() => signOut()}>Sign Out</button> */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={
                                session?.user?.image ||
                                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                              }
                              alt={session?.user?.name || 'User'}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block cursor-pointer px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block cursor-pointer px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => signOut()}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block cursor-pointer px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign Out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  ) : (
                    <div>
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex rounded-lg bg-[#26AB7B] px-6 py-3 text-sm text-white">
                            <span className="sr-only">Open user menu</span>
                            <div>Sign In</div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => setOpened(true)}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block cursor-pointer px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Lab Sign In
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => signIn('google')}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block cursor-pointer px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  User Sign In
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  )}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="z-20 sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {/* Current: "bg-green-50 border-green-500 text-green-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <div
                  onClick={() => router.push('/')}
                  className="block cursor-pointer border-l-4 border-green-500 bg-green-50 py-2 pl-3 pr-4 text-base font-medium text-green-700"
                >
                  Home
                </div>
                <div
                  onClick={() => router.push('/services')}
                  className="block cursor-pointer border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Services
                </div>
                <div
                  onClick={() => router.push('/about-us')}
                  className="block cursor-pointer border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  About Us
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                  {status === 'authenticated' ? (
                    <>
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={session?.user?.image}
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => signIn('google')}
                        className="flex w-full items-center justify-center rounded-lg bg-[#26AB7B] px-6 py-3 text-center text-sm text-white"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                  {status === 'authenticated' ? (
                    <>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {session?.user?.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {session?.user?.email}
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {status === 'authenticated' ? (
                  <>
                    <div className="mt-3 space-y-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Your Profile
                      </a>

                      <a
                        onClick={() => signOut()}
                        className="block cursor-pointer px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        Sign out
                      </a>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
