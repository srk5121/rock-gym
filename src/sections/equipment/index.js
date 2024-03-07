// Upper Body-----------------------------------------------
import BenchPress from "./assets/upper body/bench_press.webp";
import BicepCurl from "./assets/upper body/bicep_curl.webp";
import CableMachine from "./assets/upper body/cable_machine.webp";
import ChestFly from "./assets/upper body/chest_fly.webp";
import ChestPress from "./assets/upper body/chest_press.webp";
import Forearm from "./assets/upper body/forearm.webp";
import LatPulldown from "./assets/upper body/lat_pulldown.webp";
import LatRow from "./assets/upper body/lat_row.webp";
import LateralRaise from "./assets/upper body/lateral_raises.webp";
import ShoulderPress from "./assets/upper body/shoulder_press.webp";
import Tricep from "./assets/upper body/tricep.webp";
// Lower Body-----------------------------------------------
import CalfRaise from "./assets/lower body/calf_raises.webp";
import Hip from "./assets/lower body/hips.webp";
import LegCurl from "./assets/lower body/leg_curl.webp";
import LegExtension from "./assets/lower body/leg_extension.webp";
import LegPress from "./assets/lower body/leg_press.webp";
// Cardio -----------------------------------------------
import CrossTrainer from "./assets/cardio/cross_trainer.webp";
import Cycling from "./assets/cardio/cycling.webp";
import Treadmil from "./assets/cardio/treadmil.webp";

export const upperBodyEquipment = [
  { firstName: "BENCH ", lastName: "PRESS", src: BenchPress },
  { firstName: "CHEST ", lastName: "PRESS", src: ChestPress },
  { firstName: "CHEST ", lastName: "FLY", src: ChestFly },
  { firstName: "SHOULDER ", lastName: "PRESS", src: ShoulderPress },
  { firstName: "LATERAL ", lastName: "RAISE", src: LateralRaise },
  { firstName: "LAT ", lastName: "PULLDOWN", src: LatPulldown },
  { firstName: "LAT ", lastName: "ROW", src: LatRow },
  { firstName: "FORE", lastName: "ARM", src: Forearm },
  { firstName: "BICEP ", lastName: "CURL", src: BicepCurl },
  { firstName: "TRI", lastName: "CEP", src: Tricep },
  { firstName: "CABLE ", lastName: "MACHINE", src: CableMachine },
];
export const lowerBodyEquipment = [
  { firstName: "LEG ", lastName: "PRESS", src: LegPress },
  { firstName: "LEG ", lastName: "EXTENSION", src: LegExtension },
  { firstName: "LEG ", lastName: "CURL", src: LegCurl },
  { firstName: "CALF ", lastName: "RAISE", src: CalfRaise },
  { firstName: "HIP ", lastName: "ABDUCTOR/ADDUCTOR", src: Hip },
];
export const cardioEquipment = [
  { firstName: "TREAD", lastName: "MIL", src: Treadmil },
  { firstName: "CROSS ", lastName: "TRAINER", src: CrossTrainer },
  { firstName: "CYC", lastName: "LING", src: Cycling },
];
export const equipmentCategories = [
  {
    name: "UPPER BODY",
    data: upperBodyEquipment,
  },
  {
    name: "LOWER BODY",
    data: lowerBodyEquipment,
  },
  {
    name: "CARDIO",
    data: cardioEquipment,
  },
];
