package kr.ac.readingbetter.vo;

public class BuyBookVo {
	private String title;
	private String link;
	private String image;
	private String lprice;
	private String mallName;
	private String productType;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getLprice() {
		return lprice;
	}
	public void setLprice(String lprice) {
		this.lprice = lprice;
	}
	public String getMallName() {
		return mallName;
	}
	public void setMallName(String mallName) {
		this.mallName = mallName;
	}
	
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	
	@Override
	public String toString() {
		return "BuyBookVo [title=" + title + ", link=" + link + ", image=" + image + ", lprice=" + lprice
				+ ", mallName=" + mallName + ", productType=" + productType + "]";
	}
}
