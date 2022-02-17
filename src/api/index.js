import request from '@/utils/request.js'

// api
export const fetchData = data => {
  return request.post(`/cgp/web/liveroom/getLiveRoomVideo`, data)
}