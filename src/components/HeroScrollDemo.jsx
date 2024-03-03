"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";



export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1  data-aos-delay="300" className="text-4xl font-semibold text-black dark:text-white">
              Explore Our Stunning Collection of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Luxury Cars
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "BMW",
    designation: "160,000$",
    image: "https://i.pinimg.com/564x/cc/84/13/cc8413edf22672571e0e2e1644d39993.jpg",
    badge: "4.8",
  },
  {
    name: "SUPRA",
    designation: "260,000$",
    image: "https://i.pinimg.com/564x/ac/31/7f/ac317fa4ca7adc557ff564b70c9a5bca.jpg",
    badge: "3.8",
  },
  {
    name: "GTR",
    designation: "180,000$",
    image: "https://i.pinimg.com/564x/d8/44/11/d84411c89a0bc15cf3f14f65d5028cd5.jpg",
    badge: "5",
  },
  {
    name: "CAMARO",
    designation: "220,000$",
    image: "https://i.pinimg.com/564x/a4/30/16/a430168ebefaa361a98d5e60dcb835d9.jpg",
    badge: "7.8",
  },
  {
    name: "PORSCHE",
    designation: "190,000$",
    image: "https://i.pinimg.com/564x/65/2e/91/652e91b34f070ffb66936420656732c8.jpg",
    badge: "5.5",
  },
  {
    name: "LAMBORGINI",
    designation: "230,000$",
    image: "https://i.pinimg.com/736x/9e/e3/7d/9ee37d374e88c22981efc50aedba5629.jpg",
    badge: "8.9",
  },
  {
    name: "AUDI",
    designation: "180,000$",
    image: "https://i.pinimg.com/564x/1a/0d/53/1a0d532fabd6c590111937da67495b03.jpg",
    badge: "9.0",
  },
  {
    name: "ROLL-ROYCE",
    designation: "300,000$",
    image: "https://i.pinimg.com/564x/54/36/f5/5436f56c8d2dbfd201ce0b45c048bc1e.jpg",
    badge:"8.9"
},
  {
    name: "SUPRA",
    designation: "245,000$",
    image: "https://i.pinimg.com/564x/2c/34/9a/2c349a1c90caa2eb646631340236de9b.jpg",
    badge: "7.6",
  },
  {
    name: "ROLL-ROYCE",
    designation: "310,000$",
    image: "https://i.pinimg.com/564x/e6/37/d1/e637d1ea45c24e3de3a1f4752d07c924.jpg",
    badge: "8.8",
  },
  {
    name: "Nissan skyline R34",
    designation: "230,000$",
    image: "https://i.pinimg.com/564x/fe/04/1d/fe041d3d782617d338060785a149981c.jpg",
    badge:"6.6"
},
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://i.pinimg.com/564x/8d/95/ad/8d95ad7959583336130d361b6f99a6d7.jpg",
    badge:"8.6"
},
  {
    name: "SUPRA",
    designation: "220,000$",
    image: "https://i.pinimg.com/564x/9a/47/28/9a4728f12765283fc82c61d0646a7226.jpg",
    badge: "7.0",
  },
  {
    name: "Audi",
    designation: "120,000$",
    image: "https://i.pinimg.com/736x/65/f9/30/65f930b0e064ef38fc3c7f3315b22637.jpg",
    badge: "8.9",
  },
  {
    name: "Supra",
    designation: "450,000$",
    image: "https://i.pinimg.com/564x/a8/a2/a8/a8a2a8e281fbecece14560ded4de1ae8.jpg",
    badge: "9.0",
  },
  {
    name: "Lamborgini",
    designation: "340,000$",
    image: "https://i.pinimg.com/564x/c2/12/6c/c2126c43c5a3386cbeb9c93b18372d27.jpg",
    badge:"8.4"
},
  {
    name: "Mclaren",
    designation: "230,000$",
    image: "https://i.pinimg.com/564x/8f/2c/5a/8f2c5a58069a856982a61606e5bcee03.jpg",
    badge:"8.4"
},
  {
    name: "Mclaren",
    designation: "340,000$",
    image: "https://i.pinimg.com/736x/56/60/3c/56603ce4df821894919cf5bf0c8b45b7.jpg",
    badge:"8.4"
},
  {
    name: "Camaro",
    designation: "230,000$",
    image: "https://i.pinimg.com/564x/d7/98/69/d79869e7c02029693b8c4d57401b2b8f.jpg",
    badge: "7.8",
  },
  {
    name: "Camaro",
    designation: "98,000$",
    image: "https://i.pinimg.com/736x/9c/c8/bb/9cc8bb45ab085759c66a42b3ee7b8713.jpg",
    badge: "7.1",
  },
];
