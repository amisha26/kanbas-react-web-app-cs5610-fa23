import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
// icons
import { CiMenuKebab } from "react-icons/ci";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDragIndicator } from "react-icons/md";
import { BiSolidErrorCircle } from "react-icons/bi";

const rightPanelData = [
  { name: "Importing Existing Content" },
  { name: "Importing From Commons" },
  { name: "Choose Home Page" },
  { name: "View Course Stream" },
  { name: "New Announcement" },
  { name: "New Analytics" },
  { name: "View Course Notifications" },
];

const Home = () => {
  const { courseId } = useParams();

  /**
   * JSX
   */
  return (
    <div className="home">
      {/* home buttons */}
      <div className="home__btns">
        <button className="btn btn-secondary">Collpase All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary">
          <VscPassFilled /> Publish All
        </button>
        <button className="btn btn-danger">
          <AiOutlinePlus />
          Module
        </button>
        <button className="btn btn-secondary">
          <CiMenuKebab />
        </button>
      </div>
      <hr />
      <div className="home__body__layout">
        {/* home body */}
        <div className="home__body">
          {modules
            ?.filter((module) => module.course === courseId)
            .map((module, index) => (
              <React.Fragment key={index}>
                {/* home items */}
                <div className="home__item">
                  <div className="home__item__head">
                    <div className="home__item__head__left">
                      <p>
                        <MdDragIndicator
                          style={{ fontSize: "1.5rem", marginBottom: "-.5rem" }}
                        />
                      </p>
                      <h3>{module.name}</h3>
                    </div>
                    {/* home icons */}
                    <div className="home__icons">
                      <VscPassFilled
                        style={{ color: "green", fontSize: "1.5rem" }}
                      />
                      <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
                      <CiMenuKebab style={{ fontSize: "1.5rem" }} />
                    </div>
                  </div>
                  {/* home description */}
                  <div className="home__desc">{module.description}</div>
                </div>
              </React.Fragment>
            ))}
        </div>
        {/* home right panel */}
        <div className="home__right__panel">
          <div className="right__panel__top">
            {rightPanelData.map((item, idx) => (
              <div key={idx} className="right__panel__top__element">
                {item.name}
              </div>
            ))}
          </div>
          <div className="right__panel__bottom">
            <h3>To Do</h3>
            <hr />
            <div className="right__panel__bottom__top">
              <div className="bottom__top">
                <p>
                  <BiSolidErrorCircle />
                </p>
                <p> Grade A1</p>
              </div>
              <p>100 points + sep 18 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
