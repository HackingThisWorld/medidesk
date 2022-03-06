import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core'
import { ImageIcon, UploadIcon, CrossCircledIcon } from '@modulz/radix-icons'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { DatePicker } from '@mantine/dates'
import { useState } from 'react'
function ImageUploadIcon({ status, ...props }) {
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
  const [value, onChange]: any = useState()
  const theme = useMantineTheme()
  return (
    <>
      <form
        className="mt-8 space-y-6"
        onSubmit={(e) => e.preventDefault()}
        action="https://eouwzr6y8ixcj5i.m.pipedream.net/"
        encType="multipart/form-data"
        method="POST"
      >
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="first_name" className="">
              First Name
            </label>
            <input
              id="name"
              name="first_name"
              type="name"
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
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
              placeholder="Your Hospital"
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
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
            placeholder="Your Email"
          />
        </div>

        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="hospital_name" className="">
            Prescription Date :
            </label>

            <DatePicker value={value} onChange={onChange} />
          </div>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="my-4">
            <label htmlFor="prescription_file" className="">
              Upload Prescription :
            </label>
            <Dropzone
              onDrop={(files: any) => console.log('accepted files', files)}
              onReject={(files: any) => console.log('rejected files', files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
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
                    Drag images here or click to select files, each file should not
                      exceed 5mb
                    </Text>
                  </div>
                </Group>
              )}
            </Dropzone>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Book Service
          </button>
        </div>
      </form>
    </>
  )
}

export default BookModal
