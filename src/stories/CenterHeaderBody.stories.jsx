import { CenterHeaderBody } from "./CenterHeaderBody";


export default {
  title: 'Example/CenterHeaderBody',
  component: CenterHeaderBody,

}

const Template = (args) => <CenterHeaderBody {...args} />

export const Primary = Template.bind({});

Primary.args = {
  label: "Community",
  header: "Psychedelic experiences open new doors. Let's walk through them together.",
  body: "Connect with people dedicated to exploring the intentional use of psychedelic medicines, benefit from the community’s collective wisdom and access our curated experiences and resources.",
  buttonText: "Discover out community"
}

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Community",
  header: "Psychedelic experiences open new doors. Let's walk through them together.",
  body: "Connect with people dedicated to exploring the intentional use of psychedelic medicines, benefit from the community’s collective wisdom and access our curated experiences and resources.",
  buttonText: "Discover out community",
  primary: true
}