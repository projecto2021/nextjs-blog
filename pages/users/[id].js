
import { useRouter } from "next/router"
import _fetch from "isomorphic-fetch";
import Layout from "../../components/Layout"

const User= ({users}) =>{

  let {avatar ,first_name, last_name, id ,email} = users.data
  
  const router = useRouter();
  //const {id} = router.query;

  //console.log(users.data)
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={avatar}
                alt={first_name + last_name}
                className="users-img"
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {id}. {first_name} {last_name}
              </h3>
              <p>Email: {email}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
User.getInitialProps = async (ctx) => {
  const res = await _fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const data = await res.json();
 // console.log(ctx.query.id);
 //console.log(data)
  return {users:data}
};

export default User