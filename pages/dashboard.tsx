import { useContext, useEffect } from "react"
import Can from "../components/Can"
import { AuthContext } from "../context/AuthContext"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
      .then(response => { console.log('') })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <h1>Hello Dashboard: {user?.email}</h1>

      <button onClick={signOut}>SignOut</button>

      <Can permissions={['metrics.list']} roles={['administrato']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me')

  return {
    props: {}
  }
})