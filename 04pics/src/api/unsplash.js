import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RevJ63KQfD4gdcG_AQLhhzMlPeObNJEo39yZtcyxQH4'
    }
});