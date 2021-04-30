import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import image4 from "../../img/products/image 4.png";
import image5 from "../../img/products/image 5.png";
import image6 from "../../img/products/image 6.png";
import image8 from "../../img/products/image 6.png";
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
interface ProductType {
  _id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

export default function Products() {
  const [product, setProduct] = useState<Array<ProductType>>([]);
  const [filterd, setFilterd] = useState<Array<ProductType>>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    const requestBody = {
      query: `
      query{
        products{
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
        setProduct(resData.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Filter = () => {};
  //<button onClick={() => console.log(product[1].title)}>test</button>;
  return (
    <CategoryContainer>
      <ProductContainer>
        {product[0]
          ? product.map((product) =>
              product.category === "cofffe" ? (
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
  );
}
