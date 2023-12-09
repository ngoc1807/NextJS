import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {}

const ParamsPages = () => {
  const router = useRouter()

  return (
    <div>
      ParamsPages
      <p>Router : {JSON.stringify(router.query)}</p>
    </div>
  )
}

export default ParamsPages

export async function getServerSideProps() {
  //fake slow query

  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    props: {},
  }
}
