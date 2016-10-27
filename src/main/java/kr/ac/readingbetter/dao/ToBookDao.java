package kr.ac.readingbetter.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.readingbetter.vo.ToBookVo;

@Repository
public class ToBookDao {
	@Autowired
	private SqlSession sqlSession;
	
	public Integer selectCount(){
		Integer count = sqlSession.selectOne("tobook.selectCount");
		
		return count;
	}
	
	public void insertToBook(ToBookVo vo){
		sqlSession.insert("tobook.insertToBook", vo);
	}
	
	public void updateToBook(ToBookVo vo){
		sqlSession.update("tobook.updateToBook", vo);
	}
}
