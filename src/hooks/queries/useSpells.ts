import { useQuery } from "@tanstack/react-query";

import spellsRequest from "@/service/api/requests/spellsRequest";

const useSpells = () => {
  return useQuery({
    queryKey: ["spells", "list"],
    queryFn: async () => {
      const { error, data } = await spellsRequest();

      if (error || !data) {
        throw new Error("Unable to retrieve spells data");
      }

      return data;
    },
  });
};

export default useSpells;
