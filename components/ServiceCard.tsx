export default function ServiceCard() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://st.depositphotos.com/1000423/3080/i/600/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900">
            Cholestrol Test
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700"></p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
        >
          Book Now
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
