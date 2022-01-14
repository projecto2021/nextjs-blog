import Head from 'next/head'
import Layout from '../components/Layout'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'

const  Home = ({users}) => {
 
  return (
    <Layout>
      <Head>
        <title>Next Project - Home</title>
      </Head>
      <h1>Next</h1>

      {Users && <Users data={users} />}
    </Layout>
  );
}
//Servisor llamada de api 
Home.getInitialProps = async (ctx)=>{
  const res = await fetch("https://reqres.in/api/users");
  const json = await res.json()
  //console.log(json)
  return {users:json.data}
  
}
export default Home