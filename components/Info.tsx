import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <div className="mt-0 mb-20 flex flex-col items-center justify-center gap-12 lg:mt-16 lg:mb-40">
      <div className="flex text-center text-4xl font-semibold">
        Our Application will be used everyday by:
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-28">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-6 text-xl hover:shadow-xl md:flex-row md:text-2xl">
            <Image
              src="https://medidesk.pl/wp-content/uploads/2020/03/004-doctor-1.svg"
              height={50}
              width={50}
            />
            <p>Outpatient Clinics</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-6 text-xl hover:shadow-lg md:flex-row md:text-2xl">
            <Image
              src="https://medidesk.pl/wp-content/uploads/2020/03/006-pharmacy-1.svg"
              height={50}
              width={50}
            />
            <p>Private and public hospitals</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-6 text-xl hover:shadow-lg md:flex-row md:text-2xl">
            <Image
              src="https://medidesk.pl/wp-content/uploads/2020/03/003-doctor-1-1.svg"
              height={50}
              width={50}
            />
            <p>Specialist clinics</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-3xl px-8 py-6 text-xl hover:shadow-lg md:flex-row md:text-2xl">
            <Image
              src="https://medidesk.pl/wp-content/uploads/2020/03/005-hospital-1.svg"
              height={50}
              width={50}
            />
            <p>Medical service centers and networks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
