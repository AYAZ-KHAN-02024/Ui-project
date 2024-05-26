
export default function HeroSection() {

  return (
    <div className="bg-white relative ">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#baff88] to-[#ff9bd9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className=" text-center">
            <div className="card">
              <div className="bg">
                <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  One step <span className="heading text-purple-700">solution</span> to test your Strategy ideas
                </h1></div>

            </div>
            <p className="mt-6 text-base md:text-lg leading-8 text-gray-600">
              As we are launching a Beta soon, we are giving away 1 month FREE subscription to our early backers. Sign up below to get FREE subscription.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center gap-x-6">
              <a
                href="#"
                className="btn2 p-3"
              >
                Sign Up
              </a>
              
              <h4  className="text-sm font-semibold leading-6 text-gray-900 border border-indigo-700 p-3 rounded-xl">
              Free 30-day subscription <span aria-hidden="true" className=" text-green-500"> ✓</span>
              </h4>
              <h4  className="text-sm font-semibold leading-6 text-gray-900 border border-indigo-700 p-3 rounded-xl">
              No credit card needed <span aria-hidden="true" className=" text-green-500"> ✓</span>
              </h4>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ffcc] to-[#ff84b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
