import Request from '@/utils/request'
import { Footprint } from '@/types/app/footprint'


// 获取路由
export const getFootprintDataAPI = (id?: number) => Request<Footprint>("GET", `/footprint/${id}`)

// 获取路由列表
export const getFootprintListAPI = (data?: QueryData) => Request<Footprint[]>("POST", "/footprint/list");