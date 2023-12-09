import { StudentDetail } from '@/components/swr'
import React, { useState } from 'react'

type Props = {}

const SWRPage = (props: Props) => {
  const [detailList, setDetailList] = useState([1, 1, 1])
  function handleAddClick() {
    setDetailList((prevList) => [...prevList, 1])
  }
  return (
    <div>
      <h1>SWRPage</h1>

      <button onClick={handleAddClick}>Add detail</button>
      <ul>
        {detailList.map((x, index) => {
          return (
            <li key={index}>
              <StudentDetail studentID="sktwi1cgkkuif36f3" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SWRPage
