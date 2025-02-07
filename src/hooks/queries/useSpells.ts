import {useQueries, useQuery} from '@tanstack/react-query'

import spellsRequest from '@/service/api/requests/spellsRequest'
import spellRequest from "@/service/api/requests/spellRequest";

const useSpells = () => {
    const { data: spellData} =  useQuery({
        queryKey: ['spells'],
        queryFn: async () => {
            const { error, data } = await spellsRequest()

            if (error || !data) {
                throw new Error('Unable to retrieve spells data')
            }

            return data
        },
    })

    return useQueries({
        queries: spellData ? spellData.results.map((spell) => {
            return {
                queryKey: ['spell', spell.index],
                queryFn: () => spellRequest(spell.index)
            }
        })
            : [],
        combine: (results) => {
            return {
                data: results.map((result) => result.data?.data),
                pending: results.some((result) => result.isPending),
            }
        },
    })
}


export default useSpells
