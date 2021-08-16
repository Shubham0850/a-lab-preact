import { DigitalElectronics } from "./DigitalElectronics";
import { Electrical } from "./Electrical";
import { DashBoard } from "./DashBoard";
const PagesData = [
  {
    component: <Electrical path="/sem-three/electrical" />,
  },
  {
    component: <DigitalElectronics path= "/sem-three/digital-electronics" />,
  
  },
  {
    component: <DashBoard path="/" />,
    
  },
];

export default PagesData;
