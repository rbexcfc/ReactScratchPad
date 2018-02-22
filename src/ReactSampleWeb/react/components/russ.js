export function fetchUser(tempPayload) {
    return {
    type: 'FETCH_USER',
    payload: {
    name: 'Will',
    age: tempPayload.age,
    },
    };
    }
     
    export function setUsername(name) {
    return {
    type: 'SET_USER_NAME',
    payload: name,
    };
    }
     
    export function blockUser(username) {
    return {
    type: 'BLOCK_USER',
    payload: username,
    };
    }
     
    export function setCurrentUserCreator(selectedUserId) {
    return {
    type: 'SET_CURRENT_USER',
    selectedUserId,
    };
    }
     
    export function addUserCreator(person) {
    return {
    type: 'ADD_USER',
    person,
    };
    }

    export function sendMessage(text) {
        return {
          type: 'SEND_MESSAGE',
          text
        }
      }