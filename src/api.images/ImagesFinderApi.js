import axios from 'axios';

const searchParams = new URLSearchParams({
    key: '32276489-0c8ab20b7135ee0e80075b904',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
    const data = response.data;

    return data;
};