import React from 'react'

export default function ButtonsContrainer() {
    return (
        <div className="col-12 btn-container">
            <div>
            <input type="file" className="custom-file-input" />
            </div>
          <div>
          <b>
              Export as  </b>
          <button type="button" class="btn btn-secondary">JSON</button>
              &nbsp;
              <button type="button" class="btn btn-secondary">CSV</button>
          </div>
        </div>
    )
}
