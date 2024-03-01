import * as React from "react";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade"; // Import your Questions JSON file
import { Questions } from "../constants/Questions";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState<any>({});

  const handleExpansion = (key: any) => {
    setExpanded((prevExpanded: any) => ({
      ...prevExpanded,
      [key]: !prevExpanded[key],
    }));
  };

  // Map the data from Questions JSON file
  const quiz = Questions.map((q, index) => ({
    key: `${index}`,
    question: q.question,
    answer: <p>{q.answer}</p>,
  }));

  return (
    <div className="m-5 max-w-2xl mx-auto !z-0 h-full">
      {quiz.map((item) => (
        <Accordion
          key={item.key}
          expanded={expanded[item?.key] || false}
          onChange={() => handleExpansion(item.key)}
          slots={{ transition: Fade as AccordionSlots["transition"] }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={{
            "& .MuiAccordion-region": {
              height: expanded[item.key] ? "auto" : 0,
            },
            "& .MuiAccordionDetails-root": {
              display: expanded[item.key] ? "block" : "none",
            },
            "& .MuiAccordionSummary-root": {
              borderBottom: "3px solid #ddd",
            },
            "& .MuiTypography-root": {
              fontFamily: "Arial, sans-serif",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${item.key}-content`}
            id={`panel-${item.key}-header`}
          >
            <Typography>
              <strong>{item.question}</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
