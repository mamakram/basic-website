import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./react-tabs.css";
import "./index.css";

const articles = [
  {
    title: "Article number one",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    id: 1,
  },
  {
    title: "Article number two",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    id: 2,
  },
];

function Articles() {
  const items = articles.map((article) => (
    <div className="p-2 article ..." key={article.id}>
      {article.title}
      <a href={article.link} style={{ color: "blue" }}>
        {" "}
        (link)
      </a>
      <p>Authors : </p>
      <p>Journal :</p>
    </div>
  ));
  return (
    <div className=" container py-1 px-10 d-flex-column mb-3">
      <h1 className="text-left ...">List of articles </h1>
      {items}
    </div>
  );
}

function HomeScreen({ tabIndex, setTabIndex }) {
  return (
    <div className="container py-1 px-10 mx-0 min-w-full flex flex-col">
      <h1 className="text-left ...">Name Surname Whatever</h1>
      <p> small description here bla bla bla bla bla bla bla bla bla</p>
      <hr style={{ "margin-top": 10, "margin-bottom": 10 }} />
      <div class="box flex">
        <p className="basis-1/2" style={{ "margin-right": 10 }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vestibulum sollicitudin nisi in facilisis. Quisque congue pellentesque
          eros non aliquam. Nulla facilisi. Suspendisse vel malesuada elit. Sed
          venenatis justo ut ex aliquet congue. Etiam volutpat, elit at
          efficitur tempus, mauris dolor viverra sapien, ut imperdiet urna lacus
          sit amet urna. Integer non purus aliquam, sodales mi in, cursus elit.
          Aliquam tempor enim nulla, ut dignissim lorem vestibulum nec.
          Pellentesque quis blandit libero. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Suspendisse sed odio diam. Praesent euismod volutpat dolor quis
          lacinia. Quisque vel bibendum felis. Donec laoreet quis augue ac
          egestas. Curabitur eget mi sit amet massa porta ullamcorper. Ut ac
          tempor nisi. Mauris mi mauris, scelerisque ac pharetra sit amet,
          pharetra vitae orci. Curabitur a pretium tellus, non rutrum lorem. Ut
          porttitor risus vitae leo euismod, at mollis elit pharetra. Vestibulum
          tempus maximus est at interdum. Curabitur ut fringilla lorem. Etiam
          luctus commodo sagittis. Nam varius lorem eget nunc molestie ornare.
          Cras porttitor neque tellus, vitae hendrerit dolor scelerisque ac.
          Nulla vehicula rhoncus augue, ac lacinia neque tristique maximus.
          Aliquam in ligula viverra, placerat purus non, euismod diam. Integer
          tempor ac nulla nec vestibulum. Vivamus porta elit congue consectetur
          semper. In ut tincidunt dolor. In quis condimentum neque, in varius
          nibh. Donec at purus ut lectus consectetur auctor ut nec velit. Nulla
          mattis semper magna, sed condimentum lorem iaculis vitae. Praesent ut
          ante egestas lectus varius mollis.
        </p>
        <figure className="basis-1/2">
          <img className="" src="/test.jpg" alt="doggo" />
        </figure>
      </div>
      <div className="flex flex-col" style={{ alignItems: "flex-start" }}>
        <button className="button-39" onClick={() => setTabIndex(1)}>
          Look at articles
        </button>

        <button className="button-39" onClick={() => setTabIndex(2)}>
          {" "}
          Contact me{" "}
        </button>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container py-1 px-10 d-flex-column mb-3">
      <h1 className="text-left ..."> Contact me</h1>
      <p>Phone:</p>
      <p>Email:</p>
      <p></p>
    </div>
  );
}

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Bio</Tab>
        <Tab>Articles</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanel>
        <HomeScreen tabIndex={tabIndex} setTabIndex={setTabIndex} />
      </TabPanel>
      <TabPanel>
        <Articles />
      </TabPanel>
      <TabPanel>
        <Contact />
      </TabPanel>
    </Tabs>
  );
}

export default App;
