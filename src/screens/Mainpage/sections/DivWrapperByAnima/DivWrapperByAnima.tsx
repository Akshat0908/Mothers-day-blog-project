import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivWrapperByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <Card className="border-none shadow-none flex flex-col md:flex-row gap-8 max-w-6xl">
        <CardContent className="p-0 md:w-[460px] flex-shrink-0">
          <img
            className="w-full h-[400px] object-cover"
            alt="Safari landscape"
            src="/rectangle-copy-10.png"
          />
        </CardContent>

        <CardContent className="p-0 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                #Guides
              </span>
              <Separator
                orientation="vertical"
                className="h-1 w-1 rounded-sm bg-x05-gray-light"
              />
              <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                10 minutes reading
              </span>
            </div>

            <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] max-w-[583px]">
              How to Choose an African Safari (That&apos;s Right for You)
            </h2>

            <p className="font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] max-w-[583px]">
              In my time exploring the heart of Africa, I have come to realize
              that there&apos;s a different type of safari for every kind of
              traveler. To fashion your own dream African adventure, it&apos;s
              all about pinpointing…
            </p>
          </div>

          <Button className="w-[155px] h-[55px] bg-x01-primary text-x06-white rounded-none font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)]">
            Read more
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
