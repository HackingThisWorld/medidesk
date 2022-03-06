import { Tabs } from '@mantine/core'
import ServiceCard from '../components/ServiceCard'
import Consultation from '../components/Consultation'
export default function Services() {
  const tests = [
    {
      name: "Parkinson's Test",
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988239899512882/parkinson.jpg',
      available: '2',
    },
    {
      name: 'Malaria Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949990252930560010/maleria.jpg',
      available: '5',
    },
    {
      name: 'Liver Function Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241266868234/liver_function_test.jpg',
      available: '3',
    },
    {
      name: 'Sugar Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988240788709406/diabetes.jpg',
      available: '2',
    },
    {
      name: 'Bilburin Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241774370826/bilirubin_test.jpg',
      available: '2',
    },
    {
      name: 'Calcium Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241510133790/calcium_test.jpg',
      available: '7',
    },
    {
      name: 'Covit RTPCR/RAT Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241036152934/covid19.jpg?width=1161&height=653',
      available: '9',
    },
  ]
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
              <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
                {tests.map((val, index) => (
                  <ServiceCard
                    key={index}
                    name={val.name}
                    image={val.image}
                    available={val.available}
                  />
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
