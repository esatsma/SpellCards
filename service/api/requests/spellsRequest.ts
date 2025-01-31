import { apiCall, API_URL } from '@/service/api'
import { Spell } from '@/types/spellService.type'

export interface SpellsResponse {
  count: number,
  results: Spell[]
}

interface SpellsFailedResponse {
  msg: string
}


const spellsRequest = () => {
  return apiCall<SpellsResponse, SpellsFailedResponse>({
    method: 'GET',
    url: API_URL,
    endpoint: `/spells`
  })
}

export default spellsRequest
