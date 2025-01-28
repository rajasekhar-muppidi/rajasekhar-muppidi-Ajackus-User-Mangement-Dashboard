/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DeleteModal } from "../delete-modal";
import { FormModal } from "../form-modal";

export function DataTable({ data, setData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  const removeUser = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <div className="overflow-x-auto">
      {/* Table Heading */}
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-xl flex flex-1 justify-self-center font-semibold text-gray-800">User Management Table</h1>
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600">
              +Create
            </button>
          </DialogTrigger>
          <FormModal setData={setData} />
        </Dialog>
      </div>

      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Username</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                No results
              </td>
            </tr>
          ) : (
            currentData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700">{item.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.username}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.phone}</td>
                <td className="px-6 py-4 flex gap-3 text-sm text-gray-700">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600">
                        Edit
                      </button>
                    </DialogTrigger>
                    <FormModal fullData={data} data={item} setData={setData}/>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </DialogTrigger>
                    <DeleteModal id={item.id} removeUser={removeUser}/>
                  </Dialog>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination and Rows Per Page Controls */}
      <div className="flex justify-between items-center mt-4">
        {/* Rows per page selector */}
        <div className="flex items-center">
          <label htmlFor="rowsPerPage" className="mr-2 text-sm text-gray-700">
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
