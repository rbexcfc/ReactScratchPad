
import * as actions from '../../components/russ';

describe("Given i have the setUsername action ", () => {
    describe("When it gets called", ()=> {
        it("Then the correct action should be returned", ()=> {
            const userName = 'rbexcfc'
            const expectedAction = {
             payload:userName,   
             type: "SET_USER_NAME",
            }
            expect(actions.setUsername(userName)).toEqual(expectedAction)
        });
    });
});

describe("Given i have the setCurrentUserCreator action ", () => {
    describe("When it gets called", ()=> {
        it("Then the correct action should be returned", ()=> {
            const selectedUserId = 1
            const expectedAction = {
             selectedUserId,   
             type:'SET_CURRENT_USER'
            }
            expect(actions.setCurrentUserCreator(selectedUserId)).toEqual(expectedAction)
        });
    });
});