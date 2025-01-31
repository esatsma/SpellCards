import { apiCall, API_URL } from '@/service/api'
import { Spell } from '@/types/spellService.type'

export interface SpellResponse {
   index: string,
    name: string,
    desc: string[],
    higher_level: string[],
    range: string,
    components: string[],

}


interface SpellFailedResponse {
    msg: string
}


const spellRequest = (spellIndex: string) => {
    return apiCall<SpellResponse, SpellFailedResponse>({
        method: 'GET',
        url: `${API_URL}`,
        endpoint: `/spells/${spellIndex}`
    })
}

export default spellRequest
