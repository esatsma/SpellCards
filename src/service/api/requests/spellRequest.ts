import { apiCall, API_URL } from "@/service/api";

export interface SpellResponse {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: false;
  duration: string;
  concentration: false;
  casting_time: string;
  level: number;
  attack_type: string;
  damage?: {
    damage_type?: DamageType;
    damage_at_slot_level?: DamageIncreaseType;
  };
  school: MagicSchoolType;
  classes: DnDClasses[];
  subclasses: DnDClasses[];
  url: string;
  updated_at: Date;
}

type DamageType = {
  index: string;
  name: string;
  url: string;
};

type DamageIncreaseType = {
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
};

type MagicSchoolType = {
  index: string;
  name: string;
  url: string;
};

type DnDClasses = {
  index: string;
  name: string;
  url: string;
};

interface SpellFailedResponse {
  msg: string;
}

const spellRequest = (spellIndex: string) => {
  return apiCall<SpellResponse, SpellFailedResponse>({
    method: "GET",
    url: `${API_URL}`,
    endpoint: `/spells/${spellIndex}`,
  });
};

export default spellRequest;
