'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./component/Header";

interface Props {}

const Home: FC<Props> = () => {
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  return (
    <div>
      <Heading
        title='Lms Platfrom'
        description='E-Learning platfrom for evey student for achieving their desire course and boost up your skill'
        keywords="Programming,React & Redux, ML"
      />

      <Header open={open} activeItem={activeItem} setOpen={setOpen}/>
    </div>
  );
};

export default Home;
