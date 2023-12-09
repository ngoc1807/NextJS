import React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentID: string
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000

export function StudentDetail({ studentID }: StudentDetailProps) {
  const { data, isValidating, mutate, error } = useSWR(`/students/${studentID}`, {
    revalidateOnFocus: false, // true :  request lại khi đổi tab
    //  dedupingInterval:  2000 thì sau 2s thực hiện 1 action sẽ fetch api, in 2 this second this's not call request api
    dedupingInterval: MILLISECOND_PER_HOUR, // nó có gọi request thì trong vòng 1 h nó cũng không gọi lại
  })

  console.log('data', data, error)

  function handleMutateClick() {
    mutate({ name: 'easy frontend' }, false)

    // opts : similar shouldComponentUpdate

    // opts: true   //  khi click mutate tạm  thời set data tạm cho hook , bên dưới sẽ trigger lại để get lại data
  }

  return (
    <div>
      StudentDetail : {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>{' '}
    </div>
  )
}
