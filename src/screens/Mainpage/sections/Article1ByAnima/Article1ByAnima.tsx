import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const Article1ByAnima = (): JSX.Element => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[460px] h-[400px] flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="African Safari"
                src="/rectangle-copy-10.png"
              />
            </div>

            <div className="flex flex-col gap-6 max-w-[583px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="font-paragraph text-x03-dark bg-transparent"
                  >
                    #Guides
                  </Badge>

                  <Separator
                    orientation="vertical"
                    className="h-1 w-1 rounded-sm bg-x05-gray-light"
                  />

                  <span className="font-paragraph text-x04-gray">
                    10 minutes reading
                  </span>
                </div>

                <h2 className="font-heading-2 text-[length:var(--heading-2-font-size)] leading-[var(--heading-2-line-height)] text-x03-dark">
                  How to Choose an African Safari (That&apos;s Right for You)
                </h2>

                <p className="font-subtitle-2 text-[length:var(--subtitle-2-font-size)] leading-[var(--subtitle-2-line-height)] text-x04-gray">
                  In my time exploring the heart of Africa, I have come to
                  realize that there&apos;s a different type of safari for every
                  kind of traveler. To fashion your own dream African adventure,
                  it&apos;s all about pinpointing…
                </p>
              </div>

              <Button className="w-[155px] h-[55px] bg-x01-primary text-x06-white font-button text-[length:var(--button-font-size)] rounded-none">
                Read more
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
