import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import "./List.css";

const List = ({ data }) => {
  return (
    <Accordion allowToggle className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} className="accordionItem">
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.desc}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default List;
