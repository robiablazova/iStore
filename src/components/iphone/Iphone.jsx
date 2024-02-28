import React from "react";
import styled from "styled-components";

const iphone = [
  {
    name: "iPhone 15",
    url: "https://www.istore.kg/media/products/iphone-15-finish-select-202309-6-1inch-blue.webp",
    price: 80000,
    id: 1,
  },
  {
    name: "iPhone 14",
    url: "https://www.istore.kg/media/products/iphone-14-finish-select-202209-6-1inch-midnight_XRKnTl8.webp",
    price: 70000,
    id: 1,
  },
  {
    name: "iPhone 13",
    url: "https://www.istore.kg/media/products/iphone-13-blue-select-2021_2UUetsP.webp",
    price: 60000,
    id: 2,
  },
  {
    name: "iPhone 12",
    url: "https://www.istore.kg/media/products/12-Black_Rfid3OW.webp",
    price: 50000,
    id: 3,
  },
];

const Iphone = () => {
  return (
    <Main>
        <h2>iPhone</h2>
      <List>
        {iphone.map((el) => (
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

export default Iphone;

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
