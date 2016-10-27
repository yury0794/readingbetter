package kr.ac.readingbetter.vo;

public class ToBookVo {
	private Integer no;
	private Long bookNo;
	
	public Integer getNo() {
		return no;
	}
	public void setNo(Integer no) {
		this.no = no;
	}
	public Long getBookNo() {
		return bookNo;
	}
	public void setBookNo(Long bookNo) {
		this.bookNo = bookNo;
	}
	
	@Override
	public String toString() {
		return "ToBookVo [no=" + no + ", bookNo=" + bookNo + "]";
	}
}
