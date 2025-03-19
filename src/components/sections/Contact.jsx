import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () =>{
    return (
        <section id="Contact" className="min-h-screen  flex items-center justify-center p-3 mt-10  mx-3 ">
            <RevealOnScroll>
            <div className="border border-white/10 rounded-xl sm:w-4xl h-auto  flex flex-col  justify-left items-start space-y-2 px-20 py-8">
                <p className="text-gray-400">How can we help you?</p>
                <h2 className="font-bold text-3xl">Contact Us</h2>
                <p className="text-gray-400">We're here to help and answer any questions you
                might have. <br /> We look forward to hearing from you!</p>
                <p className="text-gray-400"><IoLocationOutline className="inline text-gray-400" /> Central university of haryana, Mahendergarh, Haryana</p>
                <p className="text-gray-400"><IoCallOutline className="inline text-gray-400"/>+91 8708288328</p>
                <p className="text-gray-400"><IoMailOpenOutline className="inline text-gray-400"/> jatinyadavsekwal88@gmail.com</p>
                
            </div>
            </RevealOnScroll>
        </section>
    );
}
