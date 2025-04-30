import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CategoryByAnima = (): JSX.Element => {
  // Category data for mapping
  const categories = [
    { name: "Travels", featured: false },
    { name: "Foods", featured: false },
    { name: "Guides", featured: false },
    { name: "Stories", featured: false },
    { name: "Cities", featured: true, image: "/rectangle-copy-10.png" },
    { name: "Countries", featured: false },
    { name: "Vlogs", featured: false },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading-3 text-x03-dark text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
            Explore by category
          </h2>

          <div className="flex gap-2">
            <Button
              variant="default"
              size="icon"
              className="bg-black rounded-none w-12 h-12"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="bg-black rounded-none w-12 h-12"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {categories.map((category, index) =>
            category.featured ? (
              <Card
                key={index}
                className="bg-cover bg-center rounded-none border-none overflow-hidden"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <CardContent className="flex flex-col items-center justify-center h-[315px] p-0">
                  <div className="w-16 h-1 bg-x06-white mb-3"></div>
                  <div className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-x06-white text-[length:var(--heading-4-font-size)] text-center tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                    {category.name}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card
                key={index}
                className="bg-x03-dark rounded-none border-none"
              >
                <CardContent className="flex flex-col items-center justify-center h-[215px] p-0">
                  <div className="w-16 h-1 bg-x06-white mb-3"></div>
                  <div className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-x06-white text-[length:var(--heading-4-font-size)] text-center tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                    {category.name}
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
