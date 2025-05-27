import "../App.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meogblby");

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-6 mt-8 text-center tracking-tight drop-shadow-lg">
        Contact
      </h1>
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 md:py-12">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden mx-2 md:mx-0">
          {/* Contact Info */}
          <div className="bg-indigo-800 text-white flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 md:w-1/3 w-full">
            <h4 className="uppercase tracking-widest text-indigo-200 mb-2 text-sm md:text-base">- Contact</h4>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Feel Free To Reach Out!</h2>
            <div className="space-y-4 text-base md:text-lg">
              <p className="flex items-center gap-3 break-all">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>+8801533985291</span>
              </p>
              <p className="flex items-center gap-3 break-all">
                <i className="fa-solid fa-envelope text-2xl"></i>
                <span>kawsar.arafat190@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col gap-4 bg-white w-full"
            autoComplete="off"
          >
            {state.succeeded ? (
              <div className="text-center text-green-600 font-semibold text-lg">
                Message sent successfully!
              </div>
            ) : (
              <>
                <label htmlFor="name" className="text-indigo-900 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label htmlFor="email" className="text-indigo-900 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message" className="text-indigo-900 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="mt-4 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 rounded transition-all duration-200 shadow"
                >
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;






//----not responsive code----
// import "../App.css";
// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

// const ContactForm = () => {
//   const [state, handleSubmit] = useForm("meogblby");

//   return (
//     <>
//       <b>Contact~</b><br /> <br />
//       <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
//         <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
//           {/* Contact Info */}
//           <div className="bg-indigo-800 text-white flex flex-col justify-center items-center p-10 md:w-1/3">
//             <h4 className="uppercase tracking-widest text-indigo-200 mb-2">- Contact</h4>
//             <h2 className="text-2xl font-bold mb-6">Feel Free To Reach Out!</h2>
//             <div className="space-y-4 text-lg">
//               <p className="flex items-center gap-3">
//                 <i className="fa-brands fa-whatsapp text-2xl"></i>
//                 <span>+8801533985291</span>
//               </p>
//               <p className="flex items-center gap-3">
//                 <i className="fa-solid fa-envelope text-2xl"></i>
//                 <span>kawsar.arafat190@gmail.com</span>
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex-1 p-10 flex flex-col gap-4 bg-white"
//             autoComplete="off"
//           >
//             {state.succeeded ? (
//               <div className="text-center text-green-600 font-semibold text-lg">
//                 Message sent successfully!
//               </div>
//             ) : (
//               <>
//                 <label htmlFor="name" className="text-indigo-900 font-semibold">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   required
//                 />
//                 <ValidationError prefix="Name" field="name" errors={state.errors} />

//                 <label htmlFor="email" className="text-indigo-900 font-semibold">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   required
//                 />
//                 <ValidationError prefix="Email" field="email" errors={state.errors} />

//                 <label htmlFor="message" className="text-indigo-900 font-semibold">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Enter your message"
//                   rows={5}
//                   className="border border-indigo-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
//                   required
//                 ></textarea>
//                 <ValidationError prefix="Message" field="message" errors={state.errors} />

//                 <button
//                   type="submit"
//                   disabled={state.submitting}
//                   className="mt-4 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 rounded transition-all duration-200 shadow"
//                 >
//                   {state.submitting ? "Sending..." : "Submit"}
//                 </button>
//               </>
//             )}
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactForm;
