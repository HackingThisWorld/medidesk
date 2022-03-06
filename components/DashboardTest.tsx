import { useState } from 'react'

import { Modal } from '@mantine/core'
import BookModal from './BookModal'
export default function ServiceCard(props: any) {
  return (
    <>
      <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={props.image}
          alt="blog"
        />
        <div className="flex flex-1 flex-col p-6">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
            Status : {props.status}
          </h2>
          <h1 className="title-font mb-3 text-lg font-medium tracking-wide text-gray-900 first-letter:text-2xl first-letter:font-bold first-letter:text-green-700">
            {props.name}
          </h1>
        </div>
      </div>
    </>
  )
}
