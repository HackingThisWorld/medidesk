import { Tabs } from '@mantine/core'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="min-h-screen">
          <Tabs
            classNames={{
              tabLabel: 'text-lg font-medium',
            }}
            className="flex justify-start pt-2 pb-4"
          >
            <Tabs.Tab label="Services"></Tabs.Tab>
            <Tabs.Tab label="Upload Test"></Tabs.Tab>
          </Tabs>
          <div className="grid grid-cols-4 gap-4">
            {new Array(5).fill(0).map(() => (
              <ServiceCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}