import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import axios from "axios";
import DataTab from "./Components/DataTab";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      console.log(response.data.data);
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  // const handlePrevious = () => {
  //   setPage(page - 1);
  //   getUsers();
  // };

  // const handleNext = () => {
  //   setPage(page + 1);
  //   getUsers();
  // };

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      <DataTab users={users} error={error} loading={loading} />

      {/* Tried to implement pagination but the api doesn't have enough data to do so. */}

      {/* {users.length > 0 && (
        <div className="pagination">
          <button onClick={handlePrevious} disabled={page === 1}>
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      )} */}
    </div>
  );
}

export default App;
