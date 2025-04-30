import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const PromoProductsByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Mystery of Asia",
      price: "$29",
      image: "/picture-1.png",
    },
    {
      id: 2,
      title: "Mystery of Europe",
      price: "$29",
      image: "/rectangle-copy-10.png",
    },
    {
      id: 3,
      title: "Mystery of Australia",
      price: "$29",
      image: "/rectangle-copy-10.png",
    },
    {
      id: 4,
      title: "Mystery of Africa",
      price: "$29",
      image: "/rectangle-copy-10.png",
    },
    {
      id: 5,
      title: "Mystery of USA",
      price: "$29",
      image: "/rectangle-copy-10.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 font-['Cormorant_Garamond',Helvetica] font-bold text-white text-4xl leading-[46px]">
          Find your complete guide to everywhere you need to visit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-full h-[250px] p-0 rounded-none border-0 overflow-hidden"
            >
              <CardContent className="p-0 h-[195px] relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute w-12 h-12 top-0 right-0 bg-x06-white flex items-center justify-center">
                    <span className="font-subtitle-2-bold font-[number:var(--subtitle-2-bold-font-weight)] text-black text-[length:var(--subtitle-2-bold-font-size)] text-center tracking-[var(--subtitle-2-bold-letter-spacing)] leading-[var(--subtitle-2-bold-line-height)]">
                      {product.price}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <h3 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-white text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)]">
                      {product.title.split(" of ")[0]} <br />
                      of {product.title.split(" of ")[1]}
                    </h3>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 h-[55px] bg-x02-secondary flex items-center justify-center">
                <Button
                  variant="ghost"
                  className="w-full h-full font-button font-[number:var(--button-font-weight)] text-x03-dark text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)]"
                >
                  Buy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
