/* eslint-disable no-unused-vars */
import { Calendar } from "antd";
import { Card } from "../card/Card";
import CardIncom from "../card/CardIncom";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Body() {
  return (
    <div className="overflow-scroll sm:h-[88vh] flex flex-wrap ">
      <div className="p-[10px] flex flex-wrap ">
        <Card />
        <CardIncom />
     </div>
      {/* <div>
        <Calendar
          className="site-calendar-demo-card hidden sm:block"
          fullscreen={false}
          onPanelChange={onPanelChange}
        />
      </div> */}
    </div>
  );
}

export default Body;
