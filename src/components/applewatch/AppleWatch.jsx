import React from "react";
import styled from "styled-components";

const applewatch = [
  {
    name: "AppleWatch Ultra 2",
    url: "https://www.istore.kg/media/products/ultra-2-green-gray-trail-loop_qBNRSgU.webp",
    price: 75000,
    id: 1,
  },
  {
    name: "Apple Watch 9",
    url: "https://www.istore.kg/media/products/watch-41-midnight.webp",
    price: 40000,
    id: 2,
  },
  {
    name: "Apple Watch 8",
    url: "https://www.istore.kg/media/products/ML753_VW_34FRwatch-41-stainless-silver-cell-8s_VW_34FR_WF_CO.webp",
    price: 35000,
    id: 3,
  },
  {
    name: "Apple Watch SE",
    url: "https://www.istore.kg/media/products/watch-case-40-aluminum-midnight-watch-40-aluminum-midnight-se.webp",
    price: 25000,
    id: 4,
  },
];

const AppleWatch = () => {
  return (
    <Main>
        <h2>AppleWatch</h2>
      <List>
        {applewatch.map((el) => (
            <Li key={el.id}>
            <img style={{width:'250px'}} src={el.url} alt="" />
            <p>{el.name}</p>
            <Price>{el.price}</Price>
          </Li>
        ))}
      </List>
    </Main>
  );
};

export default AppleWatch;

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
  width: 350px;
  height: 250px;
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
