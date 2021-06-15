import React from 'react'

export default function TableHeader() {
    return (
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Screen name</th>
              <th scope="col">Method</th>
              <th scope="col">URL</th>
              <th scope="col"><span className="badge get-clr">GET</span></th>
              <th scope="col"><span className="badge post-clr">POST</span></th>
              <th scope="col">Cookie</th>
              <th scope="col">Function</th>
              <th scope="col">Target</th>
              <th scope="col" colSpan={2}>Comments</th>
            </tr>
        </thead>
    )
}
