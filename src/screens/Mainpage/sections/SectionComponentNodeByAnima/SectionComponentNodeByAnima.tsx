import React from "react";
import { Button } from "../../../../components/ui/button";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-row items-center gap-[30px] w-full py-12">
      <div className="relative w-[460px] h-[400px]">
        <img
          className="w-full h-full object-cover"
          alt="Japan travel image"
          src="/rectangle-copy-10.png"
        />
      </div>

      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x03-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
              #Guides
            </span>

            <div className="w-1 h-1 bg-x05-gray-light rounded-sm" />

            <span className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              6 minutes reading
            </span>
          </div>

          <h2 className="w-[583px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Planning a Trip to Japan <br />
            in the Time of Covid
          </h2>

          <p className="w-[583px] font-subtitle-2 font-[number:var(--subtitle-2-font-weight)] text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] [font-style:var(--subtitle-2-font-style)]">
            Whether you&apos;re just daydreaming for the moment, or planning a
            trip for the future, we&apos;ve compiled essential information about
            visiting Japan in the time of Covid-19...
          </p>
        </div>

        <Button className="w-[155px] h-[55px] bg-x01-primary rounded-none hover:bg-x01-primary/90">
          <span className="font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)] text-x06-white">
            Read more
          </span>
        </Button>
      </div>
    </section>
  );
};
