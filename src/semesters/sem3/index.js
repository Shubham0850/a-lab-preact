import {
  Decoder,
  DeMultiplexers,
  Encoder,
  FourBitAdder,
  FourBitSubtractor,
  FullAdder,
  FullSubtractor,
  HalfAdder,
  HalfSubtractor,
  Multiplexers,
} from "./digitalElectronics";
import {
  Amplitude,
  BjtCbInput,
  BjtCbOutput,
  BjtCeInput,
  BjtCeOutput,
  ForwardBias,
  LogicGates,
  ReverseBias,
  Zener,
} from "./electronics";

const ElectronicsExperiments = [
  {
    nameOfExperiment: "Zener",
    component: <Zener  path="/sem-three/electronics/zener " />,
  },
  {
    nameOfExperiment: "Logic gate",
    component: <LogicGates  path=" /sem-three/electronics/logic-gate" />,
  },
  {
    nameOfExperiment: "Amplitude, frequency and wavelength of sine waves",
    component: <Amplitude  path="/sem-three/electronics/amplitude " />,
  },
  {
    nameOfExperiment: "Forward-Bias",
    component: <ForwardBias  path="/sem-three/electronics/forward-bias " />,
  },
  {
    nameOfExperiment: "Reverse-Bias",
    component: <ReverseBias  path="/sem-three/electronics/reverse-bias " />,
  },
  {
    nameOfExperiment: "BJT-CB-Input",
    component: <BjtCbInput  path=" /sem-three/electronics/bjt-cb-input" />,
  },
  {
    nameOfExperiment: "BJT-CB-Output",
    component: <BjtCbOutput  path="/sem-three/electronics/bjt-cb-output " />,
  },
  {
    nameOfExperiment: "BJT-CE-Input",
    component: <BjtCeInput  path=" /sem-three/electronics/bjt-ce-output" />,
  },
  {
    nameOfExperiment: "BJT-CE-Output",
    component: <BjtCeOutput  path=" /sem-three/electronics/bjt-ce-output" />,
  },
];

const DigitalElectronics = [
  {
    nameOfExperiment: "Half Adder",
    component: <HalfAdder  path=" /sem-three/digital-electronics/half-adder" />,
  },
  {
    nameOfExperiment: "Full Adder",
    component: <FullAdder  path="/sem-three/digital-electronics/full-adder " />,
  },
  {
    nameOfExperiment: "Four Bit Adder",
    component: <FourBitAdder  path=" /sem-three/digital-electronics/full-adder" />,
  },
  {
    nameOfExperiment: "Half Subtractor",
    component: <HalfSubtractor  path="/sem-three/digital-electronics/half-subtractor " />,
  },
  {
    nameOfExperiment: "Full Subtractor",
    component: <FullSubtractor  path="/sem-three/digital-electronics/full-subtractor " />,
  },
  {
    nameOfExperiment: "Four Bit Adder",
    component: <FourBitSubtractor  path=" /sem-three/digital-electronics/full-Adder" />,
  },
  {
    nameOfExperiment: "Encoder",
    component: <Encoder  path=" /sem-three/digital-electronics/encoder" />,
  },
  {
    nameOfExperiment: "Decoder",
    component: <Decoder  path=" /sem-three/digital-electronics/decoder" />,
  },
  {
    nameOfExperiment: "Multiplexer",
    component: <Multiplexers  path=" /sem-three/digital-electronics/Multiplexer" />,
  },
  {
    nameOfExperiment: "De-Multiplexer",
    component: <DeMultiplexers   path=" /sem-three/digital-electronics/de-multiplexer" />,
  },
];

export { ElectronicsExperiments, DigitalElectronics };
