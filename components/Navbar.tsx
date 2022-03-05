import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="py-4 mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <div className="flex cursor-pointer items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow-400"></div>
            <div className="text-md font-medium">MediDesk</div>
          </div>

          <div className="flex gap-4">
            <div
              onClick={() => router.push('/')}
              className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
            >
              Home
            </div>
            <div
              onClick={() => router.push('/services')}
              className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
            >
              Services
            </div>
            <div
              onClick={() => router.push('/about-us')}
              className="hover-underline-animation cursor-pointer rounded-sm px-2 py-1 lg:px-2"
            >
              About Us
            </div>
          </div>
        </div>

        <div>
          <div>
            <button className="rounded-sm bg-blue-500 px-4 py-1 text-white hover:bg-blue-500/90">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
