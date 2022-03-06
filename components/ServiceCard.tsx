import { useState } from 'react'

import { Modal } from '@mantine/core'
import BookModal from './BookModal'
export default function ServiceCard(props: any) {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Book Your Service"
      >
        <div>
          <BookModal />
        </div>
      </Modal>
      <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={props.image}
          alt="blog"
        />
        <div className="flex flex-1 flex-col p-6">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
            Labs Available : {props.available}
          </h2>
          <h1 className="title-font mb-3 text-lg font-medium tracking-wide text-gray-900 first-letter:text-2xl first-letter:font-bold first-letter:text-green-700">
            {props.name}
          </h1>

          <div className="mt-auto">
            <div className="flex flex-wrap items-center">
              <button
                onClick={() => setOpened(true)}
                className="inline-flex cursor-pointer rounded-md items-center border-2 px-2 py-1 text-green-800 hover:bg-green-800 hover:text-white md:mb-2 lg:mb-0"
              >
                Book Now
              </button>
              <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-700 md:ml-0 lg:ml-auto">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                  </svg>
                </div>
                <div>{(Math.random() * 6 + 3).toFixed(2)}</div>
              </span>
              <span className="inline-flex items-center text-sm leading-none text-gray-700">
                AVG ₹{Math.floor(Math.random() * 200) + 300}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
