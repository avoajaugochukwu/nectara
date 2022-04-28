import Hero from "../components/Home/Hero";
import { CenterHeaderBody } from "../stories/CenterHeaderBody";
import community_image from "../assets/img/624158d31bc646692326490d_Nectara-community-p-2000.jpeg";

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
    </>
  );
}
