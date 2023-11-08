"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./component/Header";
import Hero from "./component/Route/Hero";

interface Props {}

const Home: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title='Lms Platfrom'
        description='E-Learning platfrom for evey student for achieving their desire course and boost up your skill'
        keywords='Programming,React & Redux, ML'
      />

      <Header
        open={open}
        activeItem={activeItem}
        setOpen={setOpen}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </div>
  );
};

export default Home;
