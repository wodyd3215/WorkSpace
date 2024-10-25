export const logIn = (data) => { 
    // 서버에 전달해서 비동기로 처리하고 싶다.
    return (dispatch, getState) => {
        try{
            dispatch(logInRequest(data));
            setTimeout(() => { // 로그인 정보를 받아오는데 3초 소요
                const loginInfo = {
                    userId: 1,
                    nickname: "jiwon00",
                }

                dispatch(logInSeccess(loginInfo))
            },3000)
        }catch (e){
            dispatch(logInFail(e))
        }
    }
}

const logInRequest = (data) => {
    return {
        type: "LOG_IN_REQUEST",
        data,
    }
}

const logInSeccess = (data) => {
    return {
        type: "LOG_IN_SUCCESS",
        data,
    }
}

const logInFail = (e) => {
    return {
        type: "LOG_IN_FAIL",
        error: e,
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT",
    }
}