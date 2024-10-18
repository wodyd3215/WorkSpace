import React from 'react'
import Comment from './Comment'

const comments = [
    {
        id: 1,
        name: "최지원",
        comment: "안녕하세요. 최지원입니다. 잘부탁드립니다.",
        path: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1st4of.img?w=534&h=374&m=6&x=331&y=68&s=75&d=75"
    },{
        id: 2,
        name: "서재용",
        comment: "오늘 자습 10시까지하고 집에 갈꺼예요.",
        path: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1st4of.img?w=534&h=374&m=6&x=331&y=68&s=75&d=75"
    },{
        id: 3,
        name: "안재휘",
        comment: "자습 10시받고 집가서 2시간 더.",
        path: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1st4of.img?w=534&h=374&m=6&x=331&y=68&s=75&d=75"
    }
    
]

/*
    js에서 
    (배열, 리스트).map(반복시 실행할 함수)

    map() => 배열의 요소를 전부 사용하여 동일한 길이의 새로운 배열을 리턴
*/
const CommentList = () => {
  return (
    <div>
        {/* <Comment name={comments[0].name} comment={comments[0].comment} path={comments[0].path} />
        <Comment name={comments[1].name} comment={comments[1].comment} path={comments[1].path} />
        <Comment name={comments[2].name} comment={comments[2].comment} path={comments[2].path} /> */}

        {
            comments.map(c => {
                return <Comment key={c.id} name={c.name} comment={c.comment} path={c.path} />
            })
        }
    </div>
  )

}

export default CommentList