import React from "react";
import styled from "styled-components";

const airpods = [
  {
    name: "AirPods Max",
    url: "https://www.istore.kg/media/products/AirPods-Max-Blue.webp",
    price: 50000,
    id: 1,
  },
  {
    name: "AirPods Pro",
    url: "https://www.istore.kg/media/products/MQD83_AV2_3ZDKGOj.webp",
    price: 20000,
    id: 2,
  },
  {
    name: "AirPods 3",
    url: "https://www.istore.kg/media/products/MME73_AV2_6BYTgDV.webp",
    price: 15000,
    id: 3,
  },
  {
    name: "AirPods 2",
    url: "https://www.istore.kg/media/products/AirPods-1.webp",
    price: 10000,
    id: 4,
  },
];

const AirPods = () => {
  return (
    <Main>
        <h2>AirPods</h2>
      <List>
        {airpods.map((el) => (
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

export default AirPods;

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


