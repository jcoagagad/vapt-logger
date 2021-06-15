import React from 'react'

export default function Header() {
    return (
            <div className="col-12">
                <div className="p-3 border bg-light">
                    <h3>Logs Viewer</h3>
                    <p><b>Note:</b> This app uses Burp Suite's <b>Logger++</b> tool for generating JSON. Please LOG all request from <a>Logger++</a> to
                        proceed on Review process of Crawling. Thank you!
                    </p>

                </div>
            </div>
    )
}
