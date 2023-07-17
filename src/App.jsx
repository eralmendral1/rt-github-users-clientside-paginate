import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
    const { loading, data } = useFetch()
    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (loading) return
        setUsers(data[page])
    }, [loading, page])

    const handlePage = (page) => {
        setPage(page)
    }

    const nextPage = () => {
        setPage(currentPage => {
            let nextPage = currentPage + 1
            if (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }

    const prevPage = () => {
        setPage(currentPage => {
            let prevPage = currentPage - 1
            if (prevPage < 0) {
                prevPage = data.length - 1
            }
            return prevPage
        })
    }

    return (
        <div>
            <div className="section-title">
                <h1>{loading ? 'loading..' : 'pagination'}</h1>
                <div className="underline"></div>
            </div>
            <div className="followers">
                <div className="container">
                    {users && users.map(follower => <Follower key={follower.id} {...follower} />)}
                </div>
            </div>

            {!loading && <div className='btn-container'>
                <button className="prev-btn" onClick={prevPage}>prev</button>
                {data.map((_, index) => {
                    return <button key={index} className={`page-btn ${index === page ? 'active-btn' : ''}`} onClick={() => handlePage(index)}>{index + 1}</button>
                })}
                <button className="next-btn" onClick={nextPage}>next</button>
            </div>
            }

        </div>
    )
}

export default App