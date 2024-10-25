import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion/Accordion"

export default function Section5() {
  return (
      <section className="w-full px-4 py-12  bg-customBg mt-20">
          <div className="max-w-3xl mx-auto ">
              <h2 className="text-3xl font-bold text-center mb-2 pt-10">Frequently Asked Questions</h2>
              <p className="text-center text-gray-600 mb-8 mt-10 leading-8">
                  With lots of unique blocks, you can easily build a page without <br /> coding. Build your next landing page.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md overflow-hidden">
                      <AccordionTrigger className="px-6 py-6 text-left font-semibold hover:no-underline">
                          How this UI Kit is different from others in market?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-purple-50">
                          <p className="text-gray-700">
                              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                              Velit officia consequat duis enim velit mollit. Exercitation veniam
                              consequat sunt nostrud amet.
                          </p>
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                          How long do you provide support?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                          <p className="text-gray-700">
                              We provide ongoing support for our UI Kit. Our team is dedicated to addressing any issues or questions you may have in a timely manner.
                          </p>
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                          Do I need any experience to work with Rareblocks?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                          <p className="text-gray-700">
                              No, you don't need extensive experience. Rareblocks is designed to be user-friendly and accessible to both beginners and experienced developers.
                          </p>
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                          What kind of files are included?
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                          <p className="text-gray-700">
                              Our UI Kit includes various file types such as HTML, CSS, and JavaScript files. We also provide design files compatible with popular design tools.
                          </p>
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </div>
      </section>
  )
}
