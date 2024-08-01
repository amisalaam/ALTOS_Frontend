import React from 'react'

function CreateEvents() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl">Enter OTP</h3>
          <button className="text-xl" onClick={handleClose}>&times;</button>
        </div>
        <div className="p-4">
    </div>
      </div>
    </div>
  )
}

export default CreateEvents