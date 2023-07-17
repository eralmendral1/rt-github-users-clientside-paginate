import { useEffect, useState } from 'react'
import paginate from './paginate'

const url = 'https://api.github.com/users/yyx990803/followers?per_page=100'

export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const getUsers = async () => {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return  { loading ,data }
}