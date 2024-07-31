import type { IBaseResponse } from '..'

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

/* Venues */
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
/* Weekly Classes */
export type IWeeklyClassesItem = {
  id: number
  venue: IVenueItem
  name: string
  capacity: number
  days: string
  start_time: string
  end_time: string
  autumn_term: IWeeklyClassesTermItem
  is_autumn_indoor: boolean
  spring_term: IWeeklyClassesTermItem
  is_spring_indoor: boolean
  summer_term_id: IWeeklyClassesTermItem
  is_summer_indoor: boolean
  is_free_trail_dates: boolean
  created_at: Date | null
  deleted_at: Date | null
}

export type IWeeklyClassesCreateItem = {
  venue_id: string
  name: string
  capacity: number
  days: string
  start_time: string
  end_time: string
  autumn_term_id: number
  is_autumn_indoor: boolean
  spring_term_id: number
  is_spring_indoor: boolean
  summer_term_id: number
  is_summer_indoor: boolean
  is_free_trail_dates: boolean
}

export type IWeeklyClassesResponse = {
  data: IWeeklyClassesItem[]
  meta: IMetaItem
  links: ILinks
}

export type IWeeklyClassesSuccessfulResponse = {
  message: string
  errors: any
}

export type IWeeklyClassesTermItem = {
  id: number
  name: string
  start_date: Date | null
  end_date: Date | null
  half_term_date: Date | null
  created_at: Date | null
  deleted_at: Date | null
}

/* Terms */
export type ITermItem = {
  id: number
  name: string
  season: ISeasonItem
  sessions: ISessionItem[]
  start_date: string
  end_date: string
  half_term_date: string
  created_at: Date | null
  deleted_at: Date | null
}

export type ITermCreateItem = {
  name: string
  season_id: number
  start_date: string
  end_date: string
  half_term_date: string
  sessions: ISessionCreateItem[]
}

export type ISessionCreateItem = {
  plans: IPlanCreateItem[]
}
export type IPlanCreateItem = {
  ability_group_id: number
  session_plan_id: number
}

export type ITermEditItem = {
  name: string
  season_id: number
  start_date: string
  end_date: string
  half_term_date: string
  sessions: ISessionEditItem[]
}

export type ISessionEditItem = {
  id: number
  plans: IPlanEditItem[]
}
export type IPlanEditItem = {
  id: number
  ability_group_id: number
  session_plan_id: number
}

export type ITermsResponse = {
  data: ITermItem[]
  meta: IMetaItem
  links: ILinks
}

export type ITermsSuccessfulResponse = {
  message: string
  errors: any
}

export type ISeasonItem = {
  id: number
  title: string
  created_at: Date | null
  deleted_at: Date | null
}

export type ISessionItem = {
  id: number
  plans: IPlanItem[]
  created_at: Date | null
  deleted_at: Date | null
}

export type IPlanItem = {
  id: number
  ability_group: IAbilityGroupItem
  session_plan: ISessionPlanItem
}

export type IAbilityGroupItem = {
  id: number
  name: string
}

export type ISessionPlanItem = {
  id: number
  title: string
}

/* Seasons */

export type ISeasonResponse = {
  data: ISeasonItem[]
}

/* Session Plans */

export type ISessionPlanObject = {
  id: number
  title: string
  player: string
  created_at: Date | null
  deleted_at: Date | null
}

export type ISessionPlanResponse = {
  data: ISessionPlanObject[]
}

/* Ability Groups */

export type IAbilityGroupsResponse = {
  data: ISeasonItem[]
}

export type IAbilityGroupObject = {
  id: number
  name: string
  min_age: number
  max_age: number
  icon: IIconItem
  created_at: Date | null
  deleted_at: Date | null
}

export type IIconItem = {
  name: string
  url: string
}

export type IAbilityGroupCreateItem = {
  name: string
  min_age: number
  max_age: number
  service: string
  service_package_id: number
  icon: HTMLInputElement | null
}

export type IAbilityGroupUpdateItem = {
  name: string
  min_age: number
  max_age: number
  icon: File | null
}

export type IAbilityGroupsObjectResponse = {
  data: IAbilityGroupObject[]
}

export type IAbilityGroupObjectResponse = {
  data: IAbilityGroupObject
}

export type ISessionPlanCreateUpdateItem = {
  title: string
  description: string
  ability_group_id: number
  banner: Blob | null
  video: Blob | null
  exercises: ISessionPlanExcerciseCreateItem[]
}

export type ISessionPlanExcerciseCreateItem = {
  title: string
  subtitle: string
  description: string
  title_duration: string
  banner: Blob | null
  video: Blob | null
}

/* WEEKLY CLASSES LEADS */

export type IStudentCreate = {
  id: string
  first_name: string
  last_name: string
  dob: string
  age: number
  gender_id: number
  medical_information_id: number
}

export type IGuardianCreate = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  relationship_id: number
  referral_source_id: number
}

export type IEmregencyContactCreate = {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  relationship_id: number
}

export type IWeeklyClassesLeadCreate = {
  student: IStudentCreate
  guardians: IGuardianCreate[]
  emergency_contact: IEmregencyContactCreate
  comments: string[]
}
export type IWeeklyClassesLeadCreateResponse =
  IBaseResponse<IWeeklyClassesLeadCreate> & {}
