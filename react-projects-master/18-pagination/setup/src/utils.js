const paginate = (data, page) => {
    const itemsPerPage= 12;
    const numberOfPages= Math.ceil(data.length/itemsPerPage);

    const profiles= data.slice(12* (page), 12*(page+ 1));
    return profiles;
}

export default paginate
