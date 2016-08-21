/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            fetch('http://stellus.devicepros.net:8005/api-token-auth/',{
                method: 'post',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: 'username=admin&password=password',
            }).then(function(response) {
                return response.json();
            })
                .then(function(text) {
                    console.log('Request successful', text);
                }).catch( alert );
            return action.payload;
            break;
    }
    return state;
}
