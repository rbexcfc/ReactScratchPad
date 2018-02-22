
const initialState = [
    {
      text: 'Default message',
      id: 0
    }
  ]
   
  export default function sendMessage(state = initialState, action) {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return [
          {
            id: state.reduce((maxId, messgae) => Math.max(message.id, maxId), -1) + 1,
            text: action.text
          },
          ...state
        ]
   
      default:
        return state
    }
  }