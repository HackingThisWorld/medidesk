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
              <div className="grid grid-cols-3 gap-8">
                {new Array(5).fill(0).map((_, index) => (
                  <ServiceCard key={index} />
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
