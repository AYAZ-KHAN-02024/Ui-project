import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-200 p-4 pl-4 pr-4 flex-row flex justify-between items-center flex-wrap">
      <p className=" text-center text-sm text-gray-800 ">
        Copyright &copy; 2024. All rights reserved.
      </p>

      <div className='mt-4 md:mt-0 font-semibold flex-row flex text-[10px] md:text-base items-start gap-x-4'>
      <i className="fa-brands fa-twitter text-xl"></i> 

      <i className="fa-brands fa-linkedin text-xl"></i>

      <p className=" text-center  text-indigo-700 ">
        Refund policy
      </p>
      <p className=" text-center  text-indigo-700 ">
        Privacy policy
      </p>
      <p className=" text-center  text-indigo-700 ">
        Terms and conditions
      </p>
      </div>

    
</footer>

  )
}

export default Footer

