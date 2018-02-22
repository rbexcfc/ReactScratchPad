import reducer from '../../redux/russReducer';

describe('Given i have a sendMessage Reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([
        {
          text: 'Default message',
          id: 0
        }
      ])
    })
   
    it('should handle SEND_MESSAGE', () => {
      expect(
        reducer([], {
          type: 'SEND_MESSAGE',
          text: 'Richie is cool'
        })
      ).toEqual([
        {
          text: 'Richie is cool',
          id: 0
        }
      ])
    })
})
