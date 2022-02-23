import React from "react";
import { Button } from "primereact/button";

function Card() {
  const contacts = [
    {
      name: "Muthuram",
      email: "muthuramkc200@gmail.com",
    },
    {
      name: "Muthuram",
      email: "muthuramkc200@gmail.com",
    },
    {
      name: "Muthuram",
      email: "muthuramkc200@gmail.com",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-wrap justify-center items-center px-16">
          {contacts.map((contact) => (
            <div className="w-68 m-5">
              <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img
                  class="w-24 h-24 rounded-full mx-auto"
                  src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                  alt=""
                  width="384"
                  height="512"
                />
                <div class="pt-6 text-center text-xl space-y-4">
                  {/* <blockquote>
                <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. Its easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote> */}
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      {contact.name}
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      {contact.email}
                    </div>
                  </figcaption>
                </div>
                <div className="flex gap-3 mt-5">
                  <Button
                    label="Update"
                    icon="pi pi-check"
                    className="p-button-raised p-button-success p-button-sm"
                  />
                  <Button
                    label="Delete"
                    icon="pi pi-minus-circle"
                    loading=""
                    className="p-button-raised p-button-danger p-button-sm"
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
