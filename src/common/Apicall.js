export const commonEndPoint = "https://be-voosh.onrender.com";

export const postData = async (endPoint = '', data = {}) => {
    const url = commonEndPoint + endPoint;

    let headers = {
        'Content-Type': 'application/json',
    }

    const value = JSON.stringify(data)

    try {
        let response = {};
        response = await fetch(url, {
            headers,
            body: value,
            method: 'POST',
        });
        return response.json();
    } catch (e) {
        console.log('error on POST -> ', e);
    }
}

export const getData = async (endPoint = '') => {
    const url = commonEndPoint + endPoint;

    let headers = {
        'Content-Type': 'application/json',
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers,
        });
        return response.json();
    } catch (e) {
        console.log('error on GET -> ', e);
    }
};

export const deleteData = async (endPoint = '', data = {}) => {
    const url = commonEndPoint + endPoint;

    let headers = {
        'Content-Type': 'application/json',
    }

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers,
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (e) {
        console.log('error on DELETE -> ', e);
    }
}