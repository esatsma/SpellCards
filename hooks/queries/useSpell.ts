import { useQuery } from '@tanstack/react-query'

import spellRequest from "@/service/api/requests/spellRequest";

const useSpells = (spellName: string) => {
    return useQuery({
        queryKey: ['spells', spellName],
        queryFn: async () => {
            const { error, data } = await spellRequest(spellName)

            if (error || !data) {
                throw new Error('Unable to retrieve spells data')
            }

            return data
        },
    })
}

export default useSpells
