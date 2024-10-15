import ContactForm from "@/components/contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
  return (
    <div className="11/12 mx-auto px-4 md:px-0 max-w-xl space-y-12">
      <div className="w-fit mx-auto pt-20 font-bold text-2xl md:text-3xl">Contact</div>
      <ContactForm />
      <div className="w-full mx-auto pt-20 space-y-4">
        <div className="text-center font-bold text-xl md:text-2xl">
          FAQ
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>PCはWindownsよりMacの方が良いですか？</AccordionTrigger>
            <AccordionContent>
              Mac以外認めません。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Question 1</AccordionTrigger>
            <AccordionContent>
              Answer 1
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Question 2</AccordionTrigger>
            <AccordionContent>
              Answer 2
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Question 3</AccordionTrigger>
            <AccordionContent>
              Answer 3
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ContactPage;

// Accordion でよくある質問