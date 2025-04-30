import { HeartIcon, InstagramIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const InstagramSectionByAnima = (): JSX.Element => {
  // Instagram posts data
  const instagramPosts = [
    {
      id: 1,
      image: "/rectangle-copy-10.png",
      showOverlay: true,
      likes: 1231,
      comments: 543,
    },
    {
      id: 2,
      image: "/rectangle-copy-10.png",
      showOverlay: false,
    },
    {
      id: 3,
      image: "/rectangle-copy-10.png",
      showOverlay: false,
    },
    {
      id: 4,
      image: "/rectangle-copy-10.png",
      showOverlay: false,
    },
    {
      id: 5,
      image: "/rectangle-copy-10.png",
      showOverlay: false,
    },
  ];

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto">
        {/* Instagram Header */}
        <div className="flex items-center bg-black h-[78px] w-[460px] ml-60 mb-0">
          <h2 className="ml-3 font-['Open_Sans',Helvetica] font-bold text-white text-[21px] leading-8">
            Follow me on Instagram
          </h2>
          <InstagramIcon className="ml-auto mr-5 w-8 h-8 text-white" />
        </div>

        {/* Instagram Posts Grid */}
        <div className="flex flex-nowrap overflow-x-auto">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="w-80 h-80 rounded-none border-0 flex-shrink-0 relative"
            >
              <CardContent className="p-0 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Instagram post"
                  src={post.image}
                />

                {post.showOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-8">
                      <div className="flex flex-col items-center">
                        <HeartIcon className="w-8 h-7 text-white" />
                        <span className="font-subtitle-2 text-white mt-2">
                          {post.likes}
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <MessageCircleIcon className="w-8 h-7 text-white" />
                        <span className="font-subtitle-2 text-white mt-2">
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
