
export default function ContactForm() {
  return (
    <div className='max-w-6xl mx-auto my-24 ' id='contact'>

      <div className="relative border p-5 pb-44">
        <div className='border p-10 px-16 w-fit absolute -top-1/2  translate-y-1/2 left-1/2 -translate-x-1/2 bg-white'>
          <h2 className="text-6xl font-bold">Contact Us</h2>
        </div>

        <div >
          <form className='relative top-28 grid grid-cols-2 gap-6 gap-y-14' action="">
            <div className='flex items-center gap-1'>
              <label htmlFor="first-name" className="  text-nowrap inline text-sm font-bold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className=" inline w-full border-2 border-gray-950  shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className='flex items-center gap-1'>
              <label htmlFor="last-name" className="  text-nowrap inline text-sm font-bold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="mt-1 inline w-full border-2 border-gray-950  shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className='flex items-center gap-1'>
              <label htmlFor="email" className="  text-nowrap inline text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 inline w-full border-2 border-gray-950  shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className='flex items-center gap-1'>
              <label htmlFor="phone" className="  text-nowrap inline text-sm font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 inline w-full border-2 border-gray-950  shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}
