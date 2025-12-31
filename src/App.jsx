import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { DiFirebase } from "react-icons/di";
import { TbUTurnLeft } from "react-icons/tb";

function App() {
  const [isOpen, setIsOpen] = useState(new Set([0]));

  const accordionItems = [
    {
      title: "3D Printer",
      content:
        "One of the most common tools for building hardware projects. If you know what you are doing you need to buy one, BUT, if you dont want to buy one, there is many services that you can use to print them for you, go to your local library and see if there a machine there, or just go online.",
      suggestions:
        "Depending on your budget, if you have no money, go to your local library. For ANY budget, go with anything from Bambu Lab or Elegoo. To be honest, those are really the only brands I can personally recommend, all the results below are printed with a Bambu Lab A1",
      tag: ["200 CAD - 800 CAD", "1st"],
    },
    {
      title: "Soldering Iron",
      content:
        "Gonne need this for soldering electronics, but I also mainly used it for heated inserts, you will see in the tutorial.",
      suggestions:
        "I use a Pincl soldering Iron, I would also recmmend you get it, its small, its cheap and it does everything that I need it to",
      tag: ["20 CAD - 80 CAD", "2nd"],
    },
    {
      title: "Basic Hand Tools",
      content: "For things like tighting screws and assembling parts. ",
      suggestions:
        "Screwdrivers, Pliers, Wrenches, there is no brand that I recommend, as long as it goes the job, its good enough.",
      tag: ["10 CAD - 50 CAD", "3rd"],
    },
  ];

  const projectItems = [
    {
      title: "Laser Engraver",
      Function:
        "A 10W laser engraver/cutter that can cut through 1/4 inch wood, with a working area of 300mm x 400mm",
      description:
        "It useds a CoreXY design. It also has a auto-focus system to ensure the laser is always focused on the material.",
      iteration: "V3",
      status: "WIP",
      cost: 100,
      diffculty: "Medium",
      documentation: "",
      tutorial: "",
      image: "/image/LaserEngraver.png",
    },
    {
      title: "Injection Modeling Machine",
      Function:
        "An injection molding machine that can produce small plastic parts using only hot Glue.",
      description:
        "This was one my first projects, it was built using a lot of 3D printed parts and some off-the-shelf components. Unfortunately, it did not work tho I do plan on revisting this later to be able to use PLA ",
      iteration: "V1",
      status: "Failed",
      cost: 50,
      diffculty: "Easy",
      documentation: "",
      tutorial: "",
      image: "/image/injectionMod.jpg",
    },
    {
      title: "Camera Slider",
      Function:
        "A motorized camera slider for smooth video shots controlled by a PS3 controller.",
      description:
        "This project was optmized to be as cost effective as possible, while still being able to carry a decent amount of weight. It uses a belt drive system and a NEMA 17 stepper motor.",
      iteration: "V4",
      status: "WIP",
      cost: 70,
      diffculty: "Hard",
      documentation: "",
      tutorial: "",
      image: "/image/CameraSlider.jpg",
    },
    {
      title: "Assembly Line Robot Arm",
      Function:
        "A 6DOF robotic arm for pick and place tasks on an assembly line, the arm is capable of lifting up to 1kg.",
      description:
        "This project was designed to be modular, allowing for easy replacement of parts and upgrades. It uses servo motors for precise movement and control.",
      iteration: "V1",
      status: "WIP",
      cost: 90,
      diffculty: "Hard",
      documentation: "",
      tutorial: "",
      image: "/image/RobotArm.png",
    },
    {
      title: "Pen Plotter",
      Function:
        "Simple QUICK pen plotter that can draw images on paper using a pen with less accuracy but wayyy faster",
      description: "It uses a ",
      iteration: "V1",
      status: "WIP",
      cost: 50,
      diffculty: "Medium",
      documentation: "",
      tutorial: "",
      image: "/image/penPlotter.jpg",
    },
    {
      title: "CNC Router",
      Function:
        "A desktop CNC router capable of cutting wood, plastic, and soft metals with a working area of 300mm x 400mm",
      description:
        "It uses a rigid frame design and a spindle motor for cutting. The machine is controlled by GRBL firmware and can be operated using various CAM software.",
      iteration: "V0",
      status: "WIP",
      cost: 1000,
      diffculty: "hard",
      documentation: "",
      tutorial: "",
      image: "/image/Cnc.jpg",
    },
  ];

  const arrdiaonToggle = (index) => {
    setIsOpen((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <h1 className="text-4xl font-bold">
        Tutorials To Build Cool Hardware Projects
      </h1>

      <h2 class="font-ceveat text-2xl font-medium text-heading mt-10">
        Quick TLDR(Summary) Of This website
      </h2>

      <ul class="font-ceveat text-2xl text-md space-y-1 list-disc list-inside ml-3">
        <li>Documented process for designing and coding all my projects</li>{" "}
        <li>Each includes a DIY tutorial and video assembly</li>{" "}
        <li>Everything's free, but.... remenber me when you make it big</li>{" "}
        <li>Build precision(working) machines on a budget</li>{" "}
        <li>Site has guides, notes, source code, and assembly videos</li>{" "}
        <li>Just want a machine? Follow the tutorials.</li>
        <li>
          Want to learn? Remix my projects,{" "}
          <button className="bg-blue-100 px-2 py-.5 rounded-md">
            Build Something Cooler
          </button>
          , or give feedback
        </li>
      </ul>

      <h2 class="text-2xl font-medium text-heading mt-10">Tool Requirements</h2>
      <div className="mt-4 space-y-4 overflow-hidden transition-shadow">
        {accordionItems.map((item, index) => {
          const isOpenItem = isOpen.has(index);
          return (
            <div
              key={index}
              className="px-4 hover:shadow-lg hoever:bg-grey-100"
            >
              <button
                onClick={() => arrdiaonToggle(index)}
                className="flex items-center justify-between w-full px-2"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="mr-4 text-lg font-medium">{item.title}</span>
                  {item.tag.map((tag, tagIndex) => {
                    return (
                      <span
                        key={tagIndex}
                        className="px-3 py-1.5 text-xs text-blue-900 bg-blue-100 rounded"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <FaAngleDown
                  className={`text-gray-500 rotate-90 duration-500 ${
                    isOpenItem ? "rotate-360" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 ml-6 overflow-hidden pr-20 transition-all duration-300 ${
                  isOpenItem ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="mb-2">Overview: {item.content}</p>
                <p className="mb-4">Suggestions: {item.suggestions}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
        {projectItems.map((project, index) => (
          <div key={index} className="">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48 rounded-lg"
            />
            <div className="px-1 py-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
