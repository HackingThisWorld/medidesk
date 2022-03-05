export default function ServiceCard() {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-sm bg-white px-2 py-2 pb-2 hover:shadow-md">
      <div>
        <img
          className=" h-28 w-full rounded-t-sm object-cover"
          src="https://st.depositphotos.com/1000423/3080/i/600/depositphotos_30809335-stock-photo-doctor-with-tablet-pc.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-2 px-4">
        <span className="font-medium text-black">Heart System</span>
      </div>
    </div>
  )
}
