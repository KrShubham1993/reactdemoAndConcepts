export const postRequest = function(url: string, reqObj: object) {
    try {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqObj)
        }).then(res => {
            if(res.status == 200)
                try {
                    return res.json();
                } catch(e) {
                    console.log('err -> ', e);
                }
        })
    } catch (error) {
        throw new Error(error);
    }
}

export const getRequest = function(url) {
    try {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(reqObj)
        }).then(res => {
            if(res.status == 200)
                try {
                    return res.json();
                } catch(e) {
                    console.log('err -> ', e);
                }
        })
    } catch (error) {
        if( typeof error === 'string')
            throw new Error(error);
    }
}


//Get with no response handling, to check if browser renders the fav page by itself
// export const getRequest = function(url) {
//     try {
//         return fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             // body: JSON.stringify(reqObj)
//         })
//     } catch (error) {
//         throw new Error(error);
//     }
// }