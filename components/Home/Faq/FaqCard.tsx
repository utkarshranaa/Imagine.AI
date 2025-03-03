import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   

const FaqCard = () => {
  return (
   
    <Accordion type="single" collapsible className="w-full text-white ">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl lg:text-2xl'>What technologies did you use to build this</AccordionTrigger>
        <AccordionContent className='text-base md:text-lg'>
        This website is built using modern web technologies like React, Next.js, Tailwind CSS, and ShadCN UI components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-xl lg:text-2xl'>Will there be more features added?</AccordionTrigger>
        <AccordionContent className='text-base md:text-lg'>
        Yes! This is a growing project, and new features like enhanced AI models and additional tools may be added over time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-xl lg:text-2xl'>Who built this website?</AccordionTrigger>
        <AccordionContent className='text-base md:text-lg'>
        This project was built by Utkarsh Rana as a learning experiment in AI and web development.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqCard
