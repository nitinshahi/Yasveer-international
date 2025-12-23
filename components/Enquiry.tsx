"use client";
import api from "@/app/http/axios";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};
export default function Enquiry() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    api.post("/contact", data)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        reset();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section id="contact" className="section enquiry">
      <div className="container enquiry__inner">
        <div className="enquiry__left">
          <h2 className="h2">Drop us a Call</h2>

          <form className="form " 
          //Handle form submission
          onSubmit={handleSubmit(onSubmit)}
          >
            <div className="fieldRow">

            <div className="field ">
              <label htmlFor="name">your name</label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                <input
                placeholder="Enter your name"
                {...field}
                type="text"
                className="w-full border p-2 rounded"
                />
              )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
              {/* <input id="name" placeholder="Enter your name" /> */}
            </div>

            <div className="field">
              <label className="block mb-1">Phone Number:</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    // required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      placeholder="Enter your phone number"
                      {...field}
                      type="tel"
                      className="w-full border p-2 rounded"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
            </div>
            </div>

            {/* <div className="field">
              <label className="block mb-1">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="w-full border p-2 rounded"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" placeholder="Enter your number" />
            </div> */}

            <div className="field">
              <label className="block mb-1">Message</label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <textarea
                      placeholder="Enter your message"
                      {...field}
                      rows={4}
                      className="w-full border p-2 rounded"
                    />
                  )}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              {/* <label htmlFor="message">message</label>
              <textarea id="message" placeholder="Enter your message" rows={4} /> */}
            </div>

            <button className="btn btn--primary" type="submit">
              Submit Message
            </button>

            <p className="fine muted">Add footnote / additional information in here.</p>
          </form>
        </div>


        
{/* ////////////////////// */}
        <div className="enquiry__right">
          <div className="mapCard">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.1696779111207!2d85.38665023774837!3d27.66162560761276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a781322509b%3A0x8085fc747f621d10!2s4%2C%20Bhaktapur!5e1!3m2!1sen!2snp!4v1766511735057!5m2!1sen!2snp" width="600" height="450"  loading="lazy" ></iframe>
            {/* <img src="/images/map-placeholder.jpg" alt="Map placeholder" /> */}
            <div className="mapCard__info">
              {/* <h3 className="mapCard__title">Visit Us</h3>
              <p className="muted">Narephat, Kathmandu, Nepal</p> */}

              <div >
              <h3 className="mapCard__title" >Reach out</h3>
              <Image src="/images/phone-icon.svg" alt="Phone icon" height={24} width={24} />
              <p className="muted">(917) 339-6416</p>
              </div>

              <div>
              <h3 className="mapCard__title">Social Media</h3>
              <p className="muted">Lorem ipsum dolor sit amet, consectetur adip elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
