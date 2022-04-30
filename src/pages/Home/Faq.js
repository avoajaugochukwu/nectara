import React from "react";

const Faq = () => {
  return (
    <div className="px-48 py-28 bg-[#44403b]">
      <div className="flex">
        <div className="w-1/2">
          <p className="text-5xl text-[#fff1d8]">Frequently asked questions</p>
        </div>
        {/* --------------------------------- */}
        <div className="w-1/2">
          <div className="flex gap-x-8 w-11/12 mb-12">
            <div>
              <p className="text-[#fff1d8]">01</p>
            </div>
            <div>
              <p className="text-[#fff1d8] font-medium">What is integration?</p>
              <p className="text-[#fbf9f7] mt-4 font-light">
                It is the process of translating psychedelic-assisted
                experiences into clear insights and embodied action for
                improving your mental health and wellbeing. Integration is about
                creating wholeness in one's life through dedication, patience,
                and embodied living. This process includes preparing for the
                psychedelic experiences. As Huston Smith said so beautifully:
                “It’s the challenge of transforming flashes of illumination into
                abiding light.”
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-8 w-11/12 mb-12">
            <div>
              <p className="text-[#fff1d8]">02</p>
            </div>
            <div>
              <p className="text-[#fff1d8] font-medium">
                What is living every day as a ceremony?
              </p>
              <p className="text-[#fbf9f7] mt-4 font-light">
                Ceremony means something different for everyone, but it can
                always be shared with others. Living every day as a ceremony is
                viewing every moment as a ceremony and grounds for integrating
                our psychedelic experiences. Within that perspective, we
                advocate for less psychedelics and more integration focused on
                the mind, body, soul, and community.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-8 w-11/12 mb-12">
            <div>
              <p className="text-[#fff1d8]">03</p>
            </div>
            <div>
              <p className="text-[#fff1d8] font-medium">
                What is psychedelic wellness?
              </p>
              <p className="text-[#fbf9f7] mt-4 font-light">
                It is how we would define a new paradigm of health and
                well-being that are inspired by psychedelic journeys. It begins
                with psychedelic experiences offering transformative insights
                which are then integrated into every day life with the support
                of a diverse set of modalities and perspectives. The psychedelic
                experience isn't the healing itself, it's the inspiration that
                ripples out into everything we do.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-8 w-11/12 mb-12">
            <div>
              <p className="text-[#fff1d8]">04</p>
            </div>
            <div>
              <p className="text-[#fff1d8] font-medium">
                Are psychedelics legal now?
              </p>
              <p className="text-[#fbf9f7] mt-4 font-light">
                Not yet everywhere. However, there is a vibrant community of
                people who experience psychedelics on their own or in countries
                where legal retreats are being held.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-x-8 w-11/12 mb-12">
            <div>
              <p className="text-[#fff1d8]">05</p>
            </div>
            <div>
              <p className="text-[#fff1d8] font-medium">
                Are you offering retreats or selling psychedelics?
              </p>
              <p className="text-[#fbf9f7] mt-4 font-light">
                Nope. We are focused on supporting people before and after their
                experiences. We will be partnering with select world-class
                retreats where legal psychedelic therapy is offered to bring
                transformative experiences to our community.
              </p>
            </div>
          </div>
          {/* ------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
