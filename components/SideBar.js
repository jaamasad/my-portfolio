import { typing } from "@/utility/typing";
import { useEffect } from "react";

const SideBar = () => {
  useEffect(() => {
    typing();
  }, []);

  return (
    <div className="col-lg-4">
      {/* main card */}
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          {/* card header */}
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <img className="trm-avatar" src="/img/asad-hussain.jpg" alt="Avatar" />
              <div className="trm-dot" />
            </div>
            <h5 className="trm-name trm-mb-15">Jaam Asad</h5>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
                {/* Words for rotation: js/main.js line 34 */}
              </span>
            </div>
          </div>
          {/* card header end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* sidebar social */}
          <div className="trm-social">
            <a href="#." target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#." target="_blank">
              <i className="fab fa-facebook" />
            </a>
            <a href="#." target="_blank">
              <i className="fab fa-slack" />
            </a>
            <a href="#." target="_blank">
              <i className="fab fa-whatsapp" />
            </a>
          </div>

          {/* sidebar social end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* info */}
          <ul className="trm-table trm-mb-20">
            {/* country */}
            <li>
              <div className="trm-label">Residence:</div>
              <div className="trm-label trm-label-light">Pakistan</div>
            </li>
            {/* city */}
            <li>
              <div className="trm-label">City:</div>
              <div className="trm-label trm-label-light">Islamabad</div>
            </li>
            <li>
              <div className="trm-label">Ph#</div>
              <div className="trm-label trm-label-light">+923000251531</div>
            </li>
          </ul>
          {/* info end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />

        </div>
      </div>
      {/* main card end */}
    </div>
  );
};
export default SideBar;
