import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMassege, setErrorMessage] = useState('');

    const serachApi = async (searchterm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchterm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong.');
        }
    };

    //Call searchAPi when component is first rendered.
    useEffect(() => {
        serachApi('pasta');
    }, []);

    return [serachApi, results, errorMassege];
};