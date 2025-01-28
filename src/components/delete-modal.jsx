/* eslint-disable react/prop-types */
import { DialogContent } from "./ui/dialog";

export function DeleteModal({id, removeUser}){
    return(
        <DialogContent className="bg-white">
            <div className="modal-overlay">
                <div className="modal-content">
                <h2>Are you absolutely sure?</h2>
                <p>This action cannot be undone. It will permanently delete the account.</p>
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded">Cancel</button>
                    <button className="px-4 py-2 text-white bg-red-500 rounded" onClick={()=>{removeUser(id)}}>Confirm</button>
                </div>
                </div>
            </div>
        </DialogContent>
    )
}