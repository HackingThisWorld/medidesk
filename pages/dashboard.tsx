import React from 'react'
import Image from 'next/image'
import DashboardTest from '../components/DashboardTest'
export default function Example() {
  const tests = [
    {
      name: "Parkinson's Test",
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988239899512882/parkinson.jpg',
        status: 'Pending',
    },
    {
      name: 'Malaria Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949990252930560010/maleria.jpg',
        status: 'Done',

    },
    {
      name: 'Liver Function Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241266868234/liver_function_test.jpg',
        status: 'Pending',

    },
    {
      name: 'Sugar Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988240788709406/diabetes.jpg',
        status: 'Pending',

    },
    {
      name: 'Covid RTPCR/RAT Test',
      image:
        'https://media.discordapp.net/attachments/900363233033060395/949988241036152934/covid19.jpg?width=1161&height=653',
        status: 'Done',
        
    },
  ]
  return (
    <>
      <div className="min-h-full  max-w-7xl mx-auto">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Dashboard</h1>
          </div>
        </header>
        <main className="mt-8">
          <h1 className="border-bg-green-700 mx-8 mt-4 inline border-b-2 text-2xl">
            My Tests
          </h1>
        </main>

        <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((val, index) => (
            <DashboardTest
              key={index}
              name={val.name}
              image={val.image}
              status={val.status}
            />
          ))}
        </div>
      </div>
    </>
  )
}
