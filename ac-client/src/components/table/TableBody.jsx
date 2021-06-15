import React from 'react'
import data from "../../files/data.json"
const truncateString = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };
export default function TableBody() {
    return (
        <tbody>
                {
                  data.map((item, index) => {

                    let request = item.Request
                    let response = item.Response
                    console.log(request)
                    let commentDetails = item.Proxy.Comment.split([' | '])
                    console.log(commentDetails)
                    let comment = commentDetails[0]
                    let target = commentDetails[1] ? commentDetails[1].includes("*") : false
                    let commentFunction = commentDetails[1] ? commentDetails[1].replace(" *", "") : "--"



                    return (
                      <tr>
                        <th>{index}</th>
                        <td className="td-width"><input style={{ width: "100%" }} type="text" value={comment ? comment : "--"} disabled /></td>
                        <td><span className={`badge ${request.Method.toLocaleLowerCase()}-clr`}>{request.Method}</span></td>

                        <td><a href={request.URL}>{request.URL}</a></td>

                        <td><code>{request.Query}</code></td>
                        <td><code>{truncateString(request.Body, 15)}</code></td>
                        <td><code>{truncateString(request.CookieString, 8)}</code></td>
                        <td>
                          {console.log(commentFunction)}
                          <select class="form-select" aria-label="Default select example" value={commentFunction} >
                            <option value="Auth">認証</option>
                            <option value="Input">入力</option>
                            <option value="Function">関数</option>
                            <option value="--">--</option>
                          </select>
                        </td>
                        <td>
                          <select class="form-select" value={target} >
                            <option value={true}>○</option>
                            <option value={false}>×</option>

                          </select>
                        </td>


                        <td colSpan={2}>
                          <textarea rows={1} cols={10} disabled />
                          &nbsp;
                          <textarea rows={1} cols={10} disabled />
                        </td>

                      </tr>
                    )


                  })
                }

              </tbody>
    )
}
