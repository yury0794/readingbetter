package kr.ac.readingbetter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.ac.readingbetter.dao.BoardDao;
import kr.ac.readingbetter.vo.BoardVo;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;

	public List<BoardVo> getList() {
		List<BoardVo> list = boardDao.getList();
		return list;
	}

	public BoardVo getContent(Long no) {
		BoardVo content = boardDao.getContent(no);
		return content;
	}

	public void insertQuestion(BoardVo vo) {
		boardDao.insertQuestion(vo);
	}

	public void insertComment(BoardVo vo) {
		boardDao.insertComment(vo);
	}
	
	public void updateAccept(Long no) {
		boardDao.updateAccept(no);
	}

	public void updateViewCount(Long no) {
		boardDao.updateViewCount(no);
	}
	
	// 검색어가 없을 때
	public List<BoardVo> getList(BoardVo vo) {
		List<BoardVo> list = boardDao.getList(vo);
		return list;
	}

	// 검색어가 있을 때
	public List<BoardVo> getListKwd(BoardVo vo) {
		List<BoardVo> list = boardDao.getListKwd(vo);
		return list;
	}

	// 검색어가 없을 때, 리스트의 수
	public Integer listCount() {
		int count = boardDao.listCount();
		return count;
	}

	// 검색어가 있을 때, 리스트의 수
	public Integer listKwdCount(String borKwd) {
		int count = boardDao.listKwdCount(borKwd);
		return count;
	}
}