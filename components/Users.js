import  Router  from "next/router";



const Users = ({ data }) => {
  //console.log(data);
  return (
    <ul className="list-group">
      {data.map((el) => {
        return (
          <li
            key={el.id}
            className="list-group-item list-group-item-action d-flex justify-content-between alin-item-center"
            onClick={(e) => Router.push(`/users/${el.id}`)}
          >
            <div>
              <h5>
                {el.first_name} {el.last_name}{" "}
              </h5>
              <p>Email: {el.email}</p>
            </div>
            <img
              src={el.avatar}
              alt={el.first_name + el.last_name}
              className="users-img"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
