import { useEffect, useState } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";


export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const username = localStorage.getItem("username");


  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/users?page=1");
      setUsers(res.data.data);
    } catch {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }   
  };

  useEffect(() => { loadUsers(); }, []);

  if (loading) return <Loader />;
  if (error) return <button onClick={loadUsers}>Retry</button>;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <h3>Welcome, {username}</h3>

      <div className="grid">
        {users.map(u => (
          <div key={u.id} className="card">
            <img src={u.avatar} alt="" />
            <p>{u.first_name}</p>
          </div>
        ))}
      </div>
      <button style={{backgroundColor: "red" , marginTop:"70px" , fontSize:"1.05rem" , color:"white"}} onClick={() => { localStorage.clear(); window.location="/" }}>
        Logout
      </button>
    </div>
  );
}
