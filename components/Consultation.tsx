import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core'
import { ImageIcon, UploadIcon, CrossCircledIcon } from '@modulz/radix-icons'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { DatePicker } from '@mantine/dates'
import { Select } from '@mantine/core'
import { useState, useEffect } from 'react'
function ImageUploadIcon({ status, ...props }: any) {
  if (status.accepted) {
    return <UploadIcon {...props} />
  }

  if (status.rejected) {
    return <CrossCircledIcon {...props} />
  }

  return <ImageIcon {...props} />
}

function getIconColor(
  status: { accepted: any; rejected: any },
  theme: MantineTheme
) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.black
}

const BookModal = () => {
  const [date, setDate]: any = useState()
  const [firstName, setFirstName]: any = useState()
  const [lastName, setLastName]: any = useState()
  const [email, setEmail]: any = useState()
  const [hospital, setHospital]: any = useState()
  const [city, setCity]: any = useState()
  const [condition, setCondition]: any = useState()
  const [prescription, setPrescription]: any = useState()

  const uploadFile = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('first_name', firstName)
    formData.append('last_name', lastName)
    formData.append('hospital_name', hospital)
    formData.append('city', city)
    formData.append('email', email)
    formData.append('health_condition', condition)
    formData.append('prescription_date', date)
    formData.append('prescription_file', prescription[0])

    const res = await fetch(
      'https://medidesk-server-production.up.railway.app/book/consult',
      {
        method: 'POST',
        body: formData,
      }
    ).then((res) => res.json())

    console.log(res)
  }
  const theme = useMantineTheme()
  return (
    <>
      <form className="mt-8 space-y-6 overflow-y-auto">
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="prescription_file" className="">
              Upload Prescription :
            </label>
            <Dropzone
              onDrop={(files: any) => setPrescription(files)}
              onReject={(files: any) => console.log('rejected files', files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              // @ts-ignore
              name="prescription_file"
            >
              {(status: { accepted: any; rejected: any }) => (
                <Group
                  position="center"
                  spacing="xl"
                  style={{ minHeight: 220, pointerEvents: 'none' }}
                >
                  <ImageUploadIcon
                    status={status}
                    style={{
                      width: 80,
                      height: 80,
                      color: getIconColor(status, theme),
                    }}
                  />

                  <div>
                    <Text size="xl" inline>
                      Upload prescription
                    </Text>
                    <Text size="sm" color="dimmed" inline mt={7}>
                      Drag images here or click to select files, each file
                      should not exceed 5mb
                    </Text>
                  </div>
                </Group>
              )}
            </Dropzone>
          </div>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="first_name" className="">
              First Name
            </label>
            <input
              id="name"
              name="first_name"
              type="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your First Name"
            />
          </div>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="last_name" className="">
              Last Name
            </label>
            <input
              id="name"
              name="last_name"
              type="name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your Last Name"
            />
          </div>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="hospital_name" className="">
              Prescribed By :
            </label>
            <input
              id="name"
              name="hospital_name"
              type="name"
              required
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your Hospital"
            />
          </div>
        </div>

        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="city" className="">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your City"
            />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="email" className="">
            Your Email :
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

        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="Prescription Date" className="">
              Consultation Date :
            </label>
            <DatePicker
              value={date}
              placeholder="Pick Consultation Date"
              onChange={setDate}
              name={'Prescription Date'}
              defaultValue={new Date()}
            />
          </div>
        </div>
        <Select
          value={condition}
          onChange={setCondition}
          label="health condition"
          placeholder="Pick one"
          data={[
            { value: 'low', label: 'Low' },
            { value: 'mild', label: 'Mild' },
            { value: 'severe', label: 'Severe' },
          ]}
        />
        <div>
          <button
            onClick={uploadFile}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Book Consultation
          </button>
        </div>
      </form>
    </>
  )
}

export default BookModal
