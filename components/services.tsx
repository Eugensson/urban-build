"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/button";
import { Pretitle } from "@/components/pretitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { serviceData } from "@/lib/data";

export const Services = () => {
  const [selectedTab, setSelectedTab] = useState<string>("construction");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container">
        <div className="max-w-135 mx-auto mb-20 text-center">
          <Pretitle text="Our Services" centered />
          <h2 className="h2 mb-3 text-primary">Solutions We Provide</h2>
          <p className="mb-11 mx-auto max-w-120 xl:text-lg">
            Offering tailored construction solutions, from planning to
            complrtion, with a focus on quality and innovation.
          </p>
        </div>

        <Tabs
          defaultValue="construction"
          onValueChange={(value) => setSelectedTab(value)}
          className="w-full flex flex-col xl:flex-row gap-7.5"
        >
          <TabsList className="p-0 w-full xl:w-86.25 h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-7.5 rounded-none bg-transparent">
            {serviceData.map(({ name, icon: Icon }) => (
              <TabsTrigger
                key={name}
                value={name}
                className="relative p-0 w-full h-25 flex items-center shadow-custom rounded-none outline-none [&_svg:not([class*='size-'])]:size-9 cursor-pointer"
              >
                <div
                  className={cn(
                    "absolute left-0 size-25 flex items-center justify-center",
                    selectedTab === name
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                  )}
                >
                  <Icon />
                </div>
                <div className="uppercase font-primary text-base font-bold tracking-[0.6px] w-25 ml-16">
                  {name}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <ul className="h-122.5 p-7.5 flex-1 bg-white shadow-custom">
            {serviceData.map(
              ({ name, thumbs, title, description, serviceList }) => (
                <li key={name}>
                  <TabsContent value={name} className="m-0">
                    <div className="flex flex-col md:flex-row gap-7.5">
                      <ul className="flex md:flex-col gap-5 xl:gap-7.5">
                        {thumbs.map(({ url }) => (
                          <li key={url} className="relative size-35 xl:size-50">
                            <Image
                              src={url}
                              alt="Thumbnail"
                              fill
                              className="object-cover"
                            />
                          </li>
                        ))}
                      </ul>
                      <div>
                        <div>
                          <h3 className="h3 mb-6 text-primary">{title}</h3>
                          <p className="mb-10">{description}</p>
                          <ul className="mb-12 grid grid-cols-2 gap-4">
                            {serviceList.map((service, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="size-1.5 bg-accent" />
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            ))}
                          </ul>
                          <Button text="Read more" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </li>
              )
            )}
          </ul>
        </Tabs>
      </div>
    </section>
  );
};
