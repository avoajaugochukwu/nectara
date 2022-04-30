import Hero from "../../components/Home/Hero";
import { CenterHeaderBody } from "../../stories/CenterHeaderBody";
import community_image from "../../assets/img/624158d31bc646692326490d_Nectara-community-p-2000.jpeg";
import Events from "./Events";
import Guides from "./Guides";
import Contribute from "./Contribute";

export default function Home() {
  return (
    <>
      <Hero />
      <CenterHeaderBody
        label="Community"
        header="Psychedelic experiences open new doors. Let's walk through them together."
        body="Connect with people dedicated to exploring the intentional use of psychedelic medicines, benefit from the community’s collective wisdom and access our curated experiences and resources."
        buttonText="Discover our community"
        backgroundColor="#f2f0ed"
      />
      
      <div className="bg-[#f2f0ed]">
        <div className="w-3/4 rounded-lg shadow-lg mx-auto ">
          <img src={community_image} alt="community page" />
        </div>
      </div>
      
      <div className="bg-[#183731]">
        <div className="w-5/6 sm:w-3/5 mx-auto py-20 sm:py-28 text-[#fff1d8]  text-center font-light">
          <h2 className="text-2xl">
            “This community has been a source of connection, contemplation, and
            a wealth of information. I am constantly blown away by the thought
            and care that has been placed into it.”
          </h2>
          <p className="mt-10">- Vanathy</p>
        </div>
      </div>
      <Events />
      <Guides />
      <Contribute />
    </>
  );
}
