import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const RightPanelByAnima = (): JSX.Element => {
  // Data for destinations section
  const destinations = [
    { name: "Tokyo", position: "center" },
    { name: "Rome", position: "center" },
    { name: "San Francisco", position: "-34px" },
    { name: "San Jose", position: "-2px" },
  ];

  // Data for social media icons
  const socialIcons = [
    { src: "/icon-3.svg", alt: "Icon" },
    { bgUrl: "/shape-1.svg", alt: "Social Icon" },
    {
      imgSrc: "/shape-3.svg",
      alt: "Shape",
      imgClass: "w-[31px] h-[23px] top-1 left-0",
    },
    {
      imgSrc: "/shape.svg",
      alt: "Shape",
      imgClass: "w-6 h-[31px] top-0 left-[3px]",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Author Profile Card */}
      <div className="w-full">
        <div className="relative w-full">
          <Card className="w-full mt-[70px] border-2 border-solid border-black rounded-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <img
                  className="w-[152px] h-[152px] -mt-[76px] rounded-full object-cover"
                  alt="Avatar"
                  src="/picture-1.png"
                />

                <div className="w-[278px] mt-6 font-heading-3 font-[number:var(--heading-3-font-weight)] text-x03-dark text-[length:var(--heading-3-font-size)] text-center tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  Jaspreet Bhamrai
                </div>

                <div className="w-[278px] mt-4 font-paragraph font-[number:var(--paragraph-font-weight)] text-[#939798] text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                  For as long as I can remember I&apos;ve been obsessed with the
                  idea of travel. I was always that person who was forever
                  daydreaming of foreign lands and unfamiliar cultures; coming
                  up with travel itineraries that would challenge my perceptions
                  and help me gain a deeper understanding of the world.
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col items-center p-7 pt-0">
              <div className="w-[278px] mt-4 font-subtitle-2-bold font-[number:var(--subtitle-2-bold-font-weight)] text-black text-[length:var(--subtitle-2-bold-font-size)] text-center tracking-[var(--subtitle-2-bold-letter-spacing)] leading-[var(--subtitle-2-bold-line-height)] [font-style:var(--subtitle-2-bold-font-style)]">
                Follow me
              </div>

              <div className="flex gap-[10px] mt-4">
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-[62px] h-[62px] bg-black flex items-center justify-center"
                  >
                    {icon.src && (
                      <img
                        className="w-[31px] h-[31px]"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    )}
                    {icon.bgUrl && (
                      <div className="w-[31px] h-[31px] bg-[url(/shape-1.svg)] bg-[100%_100%]" />
                    )}
                    {icon.imgSrc && (
                      <div className="relative w-[31px] h-[31px]">
                        <img
                          className={icon.imgClass}
                          alt={icon.alt}
                          src={icon.imgSrc}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="w-full">
        <h2 className="w-[189px] font-bold text-black text-[28px] [font-family:'Open_Sans',Helvetica] mb-6">
          Destinations
        </h2>

        <div className="flex flex-col gap-[8px]">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="w-full h-[125px] bg-black flex items-center justify-center"
            >
              <div className="relative w-16 h-12">
                <div className="absolute top-0 left-0 w-16 h-1 bg-x06-white" />
                <div
                  className="absolute top-[13px] left-[0.5px] font-heading-4 font-[number:var(--heading-4-font-weight)] text-x06-white text-[length:var(--heading-4-font-size)] text-center tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-4-font-style)]"
                  style={{ left: destination.position }}
                >
                  {destination.name}
                </div>
              </div>
            </div>
          ))}

          <Button className="w-full h-[55px] mt-4 bg-x01-primary rounded-none">
            <span className="font-button font-[number:var(--button-font-weight)] text-x06-white text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
              Read more
            </span>
          </Button>
        </div>
      </div>

      {/* Newsletter Card */}
      <Card className="w-full border-2 border-solid border-black rounded-none">
        <CardContent className="p-7">
          <div className="w-full flex flex-col items-center">
            <h3 className="w-full font-heading-3 font-[number:var(--heading-3-font-weight)] text-x03-dark text-[length:var(--heading-3-font-size)] text-center tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              Newsletter
            </h3>

            <p className="w-full mt-4 font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] text-center tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Subscribe to receive exclusive content updates, travel &amp; photo
              tips!
            </p>

            <div className="w-full mt-8">
              <label className="font-caption font-[number:var(--caption-font-weight)] text-x03-dark text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                Email address
              </label>

              <div className="mt-2 font-paragraph font-[number:var(--paragraph-font-weight)] text-x01-primary text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                example@|
              </div>

              <Separator className="mt-4 h-0.5 bg-x01-primary" />
            </div>

            <Button className="w-full h-[55px] mt-8 bg-x01-primary rounded-none">
              <span className="font-button font-[number:var(--button-font-weight)] text-x06-white text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                Subscribe
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Where to next Card */}
      <Card className="w-full border-2 border-solid border-black rounded-none">
        <CardContent className="p-7">
          <div className="w-full">
            <h3 className="w-full font-heading-3 font-[number:var(--heading-3-font-weight)] text-x03-dark text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              Where to next?
            </h3>

            <p className="w-full mt-2 font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              Ther&apos;s a wide world waiting for you
            </p>

            <div className="mt-6">
              <label className="font-caption font-[number:var(--caption-font-weight)] text-x03-dark text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                Destination name
              </label>

              <div className="mt-2 font-paragraph font-[number:var(--paragraph-font-weight)] text-x01-primary text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
                Japan
              </div>

              <Separator className="mt-4 h-0.5 bg-x01-primary" />
            </div>

            <div className="mt-6">
              <div className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
                Check-in date
              </div>

              <Separator className="mt-8 h-0.5 bg-x05-gray-light" />
            </div>

            <div className="mt-6">
              <div className="font-paragraph font-[number:var(--paragraph-font-weight)] text-x04-gray text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] whitespace-nowrap [font-style:var(--paragraph-font-style)]">
                Check-out date
              </div>

              <Separator className="mt-8 h-0.5 bg-x05-gray-light" />
            </div>

            <Button className="w-full h-[55px] mt-6 bg-x01-primary rounded-none">
              <span className="font-button font-[number:var(--button-font-weight)] text-x06-white text-[length:var(--button-font-size)] text-center tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                Read more
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
