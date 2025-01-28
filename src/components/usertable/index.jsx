import { useEffect, useState } from "react";
import { DataTable } from "./data-table"
import axios from "axios";


export default function UserTable() {
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (res?.status === 200) {
          setUserData(res.data);
        }
      } catch (ex) {
        console.log("Error fetching data from the user", ex);
      }
    };

    fetchData();
  }, []);

  console.log("userData", userData);
  return (
    <div className="container mx-auto py-10">
      <DataTable data={userData} setData={setUserData}/>
    </div>
  )
}
