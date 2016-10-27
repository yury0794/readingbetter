package kr.ac.readingbetter.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.ac.readingbetter.vo.BoardVo;

@Repository
public class BoardDao {
	@Autowired
	private SqlSession sqlSession;

	public List<BoardVo> getList() {
		return sqlSession.selectList("board.list");
	}

	public BoardVo getContent(Long no) {
		return sqlSession.selectOne("board.contents", no);
	}

	public void insertQuestion(BoardVo vo) {
		sqlSession.insert("board.write", vo);
	}

	public void insertComment(BoardVo vo) {
		sqlSession.insert("board.writecomment", vo);
	}
	
	public void updateAccept(Long no) {
		sqlSession.update("board.updateAccept", no);
	}

	public void updateViewCount(Long no) {
		sqlSession.update("board.updateViewCount", no);
	}
	
	public List<BoardVo> getList(BoardVo vo) {
		return sqlSession.selectList("board.list", vo);
	}
	
	public List<BoardVo> getListKwd(BoardVo vo) {
		return sqlSession.selectList("board.listKwd", vo);
	}
	
	public Integer listCount() {
		int count = sqlSession.selectOne("board.listCount");
		return count;
	}
	
	public Integer listKwdCount(String borKwd) {
		int count = sqlSession.selectOne("board.listKwdCount", borKwd);
		return count;
	}
}