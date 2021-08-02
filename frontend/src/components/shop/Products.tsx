import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import RangeSlider from "./RangeSlider";
import image4 from "../../img/products/image 4.png";
import Icons from "./Icons";
import { coffee } from "./../../img/index";
const CategoryContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: -webkit-sticky; /* Safari */
  //border: 1px solid red; /* BORDER TEST*/

  color: black;
`;
const ProductContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: -webkit-sticky; /* Safari */
  //border: 1px solid red; /* BORDER TEST*/

  color: black;
`;
const SearchContainer = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  border-radius: 0px 0px 30px 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  color: black;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
`;
const Button = styled.button`
  background: none;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 15px 25px;
  margin: 20px 10px;
  font-weight: 600;
  box-shadow: 0 5px 2px #b1b1b1;

  :active {
    box-shadow: 0 0px #666;
    transform: translateY(2px);
  }
`;
interface ProductType {
  _id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}
interface iconsDataType {
  coffee: boolean;
  filters: boolean;
  accesories: boolean;
}

export default function Products() {
  const [product, setProduct] = useState<Array<ProductType>>([]);
  const [childData, setChildData] = React.useState<number[]>([10, 100]);
  const [iconsData, setIconsData] = React.useState<iconsDataType>();
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    const requestBody = {
      query: `
      query{getProducts(category: ["${
        iconsData?.coffee ? "cofffe" : "null"
      }","${iconsData?.filters ? "filters" : "null"}","${
        iconsData?.accesories ? "accesories" : "null"
      }"],priceMin: ${childData[0]}, priceMax: ${childData[1]}){
        _id,
        title,
        description,
        price,
        category
        }
    }
        `,
    };

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        setProduct(resData.data.getProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Filter = () => {};
  //
  return (
    <>
      <Icons value={setIconsData} />
      <button onClick={() => console.log(iconsData?.coffee)}>test</button>;
      <SearchContainer>
        <RangeSlider value={setChildData}> </RangeSlider>
        {childData[0]} zł - {childData[1]} zł
        <Button onClick={() => fetchEvents()}>Search</Button>
      </SearchContainer>
      <CategoryContainer>
        <ProductContainer>
          {" "}
          {product[0]
            ? product.map((product) =>
                product.category === "cofffe" || "filters" ? (
                  <Product
                    key={product._id}
                    img={image4}
                    title={product.title}
                    desc={product.description}
                    price={product.price}
                  />
                ) : null
              )
            : null}
        </ProductContainer>
      </CategoryContainer>
    </>
  );
}
