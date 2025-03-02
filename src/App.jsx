import "./App.css";
import { useState } from "react";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userlist/UserList";
import NewUser from "./Components/newuser/NewUser";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }


  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id != id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false)
    if (e.key === "Escape") setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar>
        <div className="navbar">
          <div className="navbar-container">
            <h1 className="navbar-logo">CUser</h1>
            <h3 className="navbar-counter">
              {users.length > 0 ? "You have: " + users.length : "No User :("}
            </h3>
          </div>
        </div>
      </Navbar>
      <main>
        <div className="no-users">{users.length === 0 && <h2>No User</h2>}</div>
        <UserList users={users} handleDelete={handleDelete} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <div className="create-user" onClick={() => setShowModal(true)}>Create User</div>
      <Footer />
    </div>
  );
}

export default App;
