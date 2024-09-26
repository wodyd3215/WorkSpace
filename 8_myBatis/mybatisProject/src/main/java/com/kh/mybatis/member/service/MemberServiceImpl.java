package com.kh.mybatis.member.service;

import org.apache.ibatis.session.SqlSession;

import com.kh.mybatis.common.template.Template;
import com.kh.mybatis.member.model.dao.MemberDao;
import com.kh.mybatis.member.model.vo.Member;

public class MemberServiceImpl implements MemberService{
	
	private MemberDao mDao = new MemberDao();

	@Override
	public Member loginMember(Member m) {
//		Connection conn = getConnection();
//		
//		Member loginMember = new MemberDao().loginMember(conn, m);
//		close(conn);
//		return loginMember;
		
		// SqlSession : db서버와 연결, db서버에서 sql문 실행한 값을 가져옴, 가져온 데이터들을 특정 객체의 필드데이터들과 매핑 후 시켜줌
		
		SqlSession sqlSession = Template.getSqlSession();
		
		Member loginUser = mDao.loginMember(sqlSession, m);
		
		sqlSession.close();
		
		return loginUser;
	}

}
