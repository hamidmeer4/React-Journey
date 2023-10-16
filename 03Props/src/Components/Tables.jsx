import React from 'react'

const Tables = (props) => {
  return (
    <div>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    
  </div>
  <div className="mt-6 flex flex-col">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                >
                  <span>Employee</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                >
                  Role
                </th>
                <th scope="col" className="relative px-4 py-3.5">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="border-t border-gray-200">
                <th
                  colSpan="5"
                  scope="col"
                  className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                >
                  Engineering
                </th>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src=  {props.tableImage}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 ">
                      {props.name}
                      </div>
                      <div className="text-sm text-gray-500">{props.tableEmail}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900">{props.titleDev}</div>
                  <div className="text-sm text-gray-500">{props.titleEng}</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  Developer
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" className="text-gray-500">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={props.tableImage2}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 ">
                        {props.name2}
                      </div>
                      <div className="text-sm text-gray-500">{props.tableEmail2}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900">{props.titleDev2}</div>
                  <div className="text-sm text-gray-500">{props.titleEng2}</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  CTO
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" className="text-gray-500">
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 ">
                        Mark Doe
                      </div>
                      <div className="text-sm text-gray-500">mark@devui.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900">Digital Marketing</div>
                  <div className="text-sm text-gray-500">Marketing</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  SEO Manager
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" className="text-gray-500">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 ">
                        Seb Cook
                      </div>
                      <div className="text-sm text-gray-500">seb@devui.com</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900">Social Media</div>
                  <div className="text-sm text-gray-500">Marketing</div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                  Social Media Manager
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" className="text-gray-500">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
 
</section>

    </div>

  )
}

export default Tables