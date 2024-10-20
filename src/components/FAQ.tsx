import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Heading from "./Heading";

interface FAQProps {}

const FAQ: FC<FAQProps> = ({}) => {
  return (
    <>
      <Heading
        title="FAQ"
        subtitle="Navigating Your Crypto Journey with Vedark"
      />
      <Accordion
        type="single"
        collapsible
        className="w-full text-white max-w-screen-xl mx-auto mb-14 p-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Is there a minimum investment required to use Vedark?
          </AccordionTrigger>
          <AccordionContent>
            The minimum investment required depends on the cryptocurrency you
            choose to trade and the specific exchange you connect Vedark to.
            However, many exchanges allow for relatively small initial
            investments. We recommend checking your chosen exchange's minimum
            deposit requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can I backtest my own trading strategies with Vedark?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Vedark offers backtesting capabilities, allowing you to test
            your strategies on historical market data before deploying them with
            real funds. This helps you refine your approach and gain confidence
            before going live.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do I need any coding experience to use Vedark?
          </AccordionTrigger>
          <AccordionContent>
            No prior coding experience is necessary to use Vedark effectively.
            Our user-friendly interface is designed for both beginners and
            experienced traders. You can choose from pre-built trading
            strategies or customize them to your preferences without writing any
            code.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FAQ;
