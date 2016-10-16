import ApiUrl from './apiurl';

const headers = new Headers({
    'x-user-id': 1,
    'content-type': 'application/json'
});

const create = (url) => {
    const serviceUrl = `${ApiUrl}/${url}`;

    const getAll = () => {
        const options = {
            method: 'GET',
            headers
        };
        return fetch(serviceUrl, options).then(reponse => {
            return reponse.json();
        });
    };

    const get = (id) => {
        const options = {
            method: 'GET',
            headers
        };
        return fetch(`${serviceUrl}/${id}`, options).then(response => {
            return response.json();
        });
    };

    const insert = (entity) => {
        const body = JSON.stringify(entity);
        const options = {
            method: 'POST',
            headers,
            body
        };
        return fetch(serviceUrl, options).then(response => {
            return response.json();
        })
    };

    const update = (id, entity) => {
        const body = JSON.stringify(entity);
        const options = {
            method: 'PUT',
            headers,
            body
        };
        return fetch(`${serviceUrl}/${id}`, options);
    }
    return {
        getAll,
        get,
        insert,
        update
    }
}

const apiFactory = {
    create
}

export default apiFactory;
