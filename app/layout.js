import Preloader from "@/components/Preloader";
import TrueManModeCss from "@/layout/TrueManModeCss";
import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";

export const metadata = {
  title: "Jaam Asad",
  description: "Experienced React.js and Next.js developer specializing in front-end and full-stack development. Proficient in creating responsive, user-friendly web applications using modern frameworks and technologies like MongoDB, Firebase, Tailwind CSS, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <TrueManModeCss />
        <body>
          <div className="trm-app-frame">
            <Preloader />
            <div id="trm-dynamic-content" className="trm-swup-animation">
              <div
                id="trm-scroll-container"
                className="trm-scroll-container"
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
