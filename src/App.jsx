import React from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
    const { loading, data } = useFetch()
    console.log("🚀 ~ file: App.jsx:6 ~ App ~ data:", data)

    return (
        <div>
            <div className="section-title">
                <h1>{loading ? 'loading..' : 'pagination'}</h1>
                <div className="underline"></div>
            </div>
            <div className="followers">
                <div className="container">
                    {data && data.map(follower => <Follower key={follower.id} {...follower} />)}
                </div>
            </div>
        </div>
    )
}

export default App