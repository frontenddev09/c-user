//https://yandex.ru/images/search?p=1&text=marcus+rashford&pos=13&rpt=simage&img_url=https%3A%2F%2Fsun1-90.userapi.com%2F3dAQnBPAVaf6iWOf950giojhs3y0SnlqdChaUQ%2Flj0VXuOKOAM.jpg&from=tabbar&lr=10335

import "./UserList.css";

function UserList({ users, handleDelete }) {

  return (
    <div className="userList">
      <div className="userList-container contaner">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  height={150}
                  width={150}
                />
                <h3>
                  {user.firstName} {user.lastName}, {user.age} age
                </h3>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
