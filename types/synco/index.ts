export type ILinks = {
  first: string
  last: string
  prev: any
  next: any
}

export type ILinkItem = {
  url: string | null
  label: string
  active: boolean
}

export type IMetaItem = {
  current_page: number
  from: number
  last_page: number
  links: ILinkItem[]
  path: string
  per_page: number
  to: number
  total: number
}

export type IVenueItem = {
  id: string
  area: string
  name: string
  lat: number
  lng: number
  address: string
  has_parking: boolean
  has_congestion: boolean
  parking_note: string
  facility_enter_guide: string
  region: number
  created_at: Date | null
  deleted_at: Date | null
}

export type IVenuesResponse = {
  data: IVenueItem[]
  meta: IMetaItem
  links: ILinks
}

export type IVenueCreateItem = {
  area: string
  name: string
  lat: number
  lng: number
  address: string
  has_parking: boolean
  has_congestion: boolean
  parking_note: string
  facility_enter_guide: string
  region: number
  subscriptionPlans: number[]
  service: string
}

export type IVenueSuccessfulResponse = {
  message: string
}
