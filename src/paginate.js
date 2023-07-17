const paginate = (data) => {
    const itemsPerPage = 10

    const totalPages = Math.ceil(data.length / itemsPerPage)

    // create array of arrays
    const displayData = Array.from({ length: totalPages }, ( _, index) => {
        const start = index * itemsPerPage
        return data.slice(start, start + itemsPerPage)
    })


    console.log(displayData)
   return displayData
}

export default paginate