import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSectionByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[900px] bg-[url(/rectangle-copy-10.png)] bg-cover bg-center">
      <div className="container mx-auto h-full relative">
        {/* Header */}
        <header className="flex justify-between items-center pt-10">
          <div className="w-8 h-8">
            <img
              className="w-8 h-[25px] mt-[3px]"
              alt="Shape"
              src="/shape-5.svg"
            />
          </div>

          <h1 className="font-['Cormorant_Garamond',Helvetica] font-bold text-black text-[32px] text-center">
            Personal Travel Blog
          </h1>

          <div className="w-8 h-8 bg-[url(/shape-7.svg)] bg-[100%_100%]" />
        </header>

        {/* Hero Content */}
        <div className="absolute w-[769px] h-[498px] top-[402px]">
          <Card className="absolute w-[705px] h-[498px] top-0 left-0 rounded-none shadow-none">
            <CardContent className="p-0">
              <div className="relative w-[605px] h-[356px] mt-20 ml-[50px]">
                <span className="absolute top-[-3px] left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
                  Travels
                </span>

                <h2 className="absolute w-[605px] top-8 left-0 font-heading-1 font-[number:var(--heading-1-font-weight)] text-black text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
                  When Is The Best Time <br />
                  of Year To Visit Japan?
                </h2>

                <p className="absolute w-[585px] top-[204px] left-0 font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-[#939798] text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                  The good news for travelers is that there is no single best
                  time of year to travel to Japan...
                </p>

                <Button className="absolute w-[155px] h-[55px] top-[301px] left-0 rounded-none bg-x01-primary hover:bg-x01-primary/90 font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  Read more
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="absolute w-32 h-16 top-0 left-[641px] flex">
            <Button
              variant="default"
              className="w-16 h-16 p-0 rounded-none bg-black hover:bg-black/90"
            >
              <img className="w-8 h-8" alt="Previous" src="/icon-2.svg" />
            </Button>
            <Button
              variant="outline"
              className="w-16 h-16 p-0 rounded-none bg-white hover:bg-gray-100 border-none"
            >
              <img className="w-8 h-8" alt="Next" src="/icon.svg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
