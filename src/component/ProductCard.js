import React from "react";

const ProductCard = () => {
  const showProduct = (id) => {
    // 상품 디테일 페이지로 가기
  };
  return (
    <div className="card" onClick={() => showProduct("hard_code")}>
      <img
        src="https://lp2.hm.com/hmgoepprod?set=source%5B/1b/57/1b57843cfd90d83494db23dbf6e57b7ddbe18e66.jpg%5D,origin%5Bdam%5D,category%5Bladies_jacketscoats_jackets%5D,type%5BDESCRIPTIVESTILLLIFE%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D"
        alt=""
      />
      <div>재킷</div>
      <div>₩ 49,900</div>
    </div>
  );
};

export default ProductCard;
