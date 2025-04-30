import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-[30px] w-full py-16">
      <div className="w-full md:w-[460px] h-[400px] flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          alt="Coventry city guide"
          src="/rectangle-copy-10.png"
        />
      </div>

      <Card className="border-none shadow-none w-full">
        <CardContent className="p-0 flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex items-center gap-3 w-full">
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

              <span className="font-paragraph text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)]">
                8 minutes reading
              </span>
            </div>

            <h2 className="font-heading-2 text-x03-dark text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] max-w-[583px]">
              Coventry City Guide Including Coventry Hotels
            </h2>

            <p className="font-subtitle-2 text-x04-gray text-[length:var(--subtitle-2-font-size)] tracking-[var(--subtitle-2-letter-spacing)] leading-[var(--subtitle-2-line-height)] max-w-[583px]">
              The diseases most commonly seen in travellers are diarrhoea,
              malaria (if you travel in a malaria-infested area), accidents
              (when travelling by automobile or swimming), wound infections and…
            </p>
          </div>

          <Button className="w-[155px] h-[55px] bg-x01-primary text-x06-white rounded-none font-button text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)]">
            Read more
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
