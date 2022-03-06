import { Tabs } from '@mantine/core'
import ServiceCard from '../components/ServiceCard'
import Consultation from '../components/Consultation'
export default function Services() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="min-h-screen overflow-y-auto">
          <Tabs
            classNames={{
              tabLabel: 'text-md font-base text-green-800',
              tabActive: 'border-b-green-800',
            }}
            className="flex flex-col justify-start pt-2 pb-4"
          >
            <Tabs.Tab label="Services">
              <div className="grid grid-cols-1 place-items-center gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
                {new Array(5).fill(0).map(() => (
                  <ServiceCard />
                ))}
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="Request Consultation">
              <div className="p-5">
                <Consultation />
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
