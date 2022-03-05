import { Tabs } from '@mantine/core'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="min-h-screen">
          <Tabs
            classNames={{
              tabLabel: 'text-md font-base',
            }}
            className="flex justify-start pt-2 pb-4"
          >
            <Tabs.Tab label="Services"></Tabs.Tab>
            <Tabs.Tab label="Request Consultation"></Tabs.Tab>
          </Tabs>
          <div className="grid grid-cols-3 gap-8">
            {new Array(5).fill(0).map(() => (
              <ServiceCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
