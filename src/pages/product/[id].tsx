import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <>
      <ProductContainer>
        <ImageContainer>
        </ImageContainer>

        <ProductDetails>
          <h1>Camiseta 01</h1>
          <span>R$ 79,90</span>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat ea perferendis ipsam earum voluptates laboriosam quidem optio. Impedit quisquam earum velit veniam ipsa provident odit, recusandae obcaecati tempore? Pariatur.</p>
          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}
