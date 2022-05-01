import React from "react";

const Guides = () => {
  return (
    <div>
      <div className="sm:flex">
        <div className="w-full sm:w-10/12 bg-[#ebf4f5] p-6 sm:p-32 text-[#183731]">
          <div className="pt-6">
            <p className="text-[#127379] font-extralight pb-5">Coming soon</p>
            <p className="w-full sm:w-5/12 text-5xl">
              Guides worthy of your trust
            </p>
            <p className="w-full sm:w-6/12 font-extralight pt-6 pb-12 text-xl border-b-2 border-[#aed6ce]">
              At Nectara, we believe trust is everything. Our psychedelic
              wellness and integration guides are handpicked, not just for what
              they know, but for who they are. Our app to connect with our
              guides will be released in April.
            </p>
            <div className="w-full sm:w-8/12 font-light">
              {/* ----------------- */}
              <div className="sm:flex gap-x-16 my-12">
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">01.</p>
                  <p>
                    <b>Trustworthy and respectful</b> of your journey, needs, and
                    privacy.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">02.</p>
                  <p>
                    <b>Dedicated</b> to sacred service to your unfolding and your full
                    potential.
                  </p>
                </div>
              </div>
              {/* -------------------- */}
              <div className="sm:flex gap-x-16 my-12">
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">03.</p>
                  <p>
                    <b>Lifelong learners</b> committed to growth and illuminating their
                    own shadows.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">04.</p>
                  <p>
                    <b>Specialists</b> in cross-pollinating modalities and therapeutic
                    practices.
                  </p>
                </div>
              </div>
              {/* -------------------- */}
              <div className="sm:flex gap-x-16 my-12">
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">05.</p>
                  <p><b>Professional, ethical,</b> and of the highest integrity.</p>
                </div>
                <div className="w-full sm:w-1/2 mt-8 sm:mt-1">
                  <p className="text-2xl font-extralight mb-2 sm:mb-4">06.</p>
                  <p>
                    <b>Grounded</b> in experience, wisdom traditions, and practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/12 bg-[#d0e3e4]"></div>
      </div>
    </div>
  );
};

export default Guides;
