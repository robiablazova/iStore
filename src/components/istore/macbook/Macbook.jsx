import React from "react";
import styled from "styled-components";

const macbook = [
  {
    name: "MacBook Pro",
    url: "https://www.istore.kg/media/products/mbp14-spacegray-gallery1-202301_bfFnVYQ.webp",
    price: 250000,
    id: 1,
  },
  {
    name: "MacBook Air",
    url: "https://www.istore.kg/media/products/mba15-starlight-gallery1-202306_satFFjU.webp",
    price: 170000,
    id: 2,
  },
  {
    name: "iMac",
    url: "https://www.istore.kg/media/products/imac_W4Ehxuf.webp",
    price: 200000,
    id: 3,
  },
  {
    name: "Mac mini",
    url: "https://www.istore.kg/media/products/mac-mini-202301-gallery-1_exy4a3w.webp",
    price: 60000,
    id: 4,
  },
];

const MacBook = () => {

  return (
    <Main>
      <h2>Mac</h2>
      <List>
        {macbook.map((el) => (
            <Li key={el.id}>
              <img style={{ width: "250px" }} src={el.url} alt="" />
              <p>{el.name}</p>
              <Price>{el.price}</Price>
            </Li>
        ))}
      </List>
    </Main>
  );
};

export default MacBook;

const Main = styled.div`
  margin-right: 100px;
  margin-left: 100px;
`;

const List = styled.ul `
display: flex;
`

const Li = styled.div`
margin: 10px;
  text-align: center;
  width: 450px;
  height: 350px;
  justify-content: center;
  list-style-type:none ;
`;

const Price = styled.p `
background-color: #0071e3;
display: inline-block;
padding: 5px 25px 5px 25px;
color: white;
border-radius: 20px;
`