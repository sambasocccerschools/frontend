import type {
  IBaseResponse,
  IGender,
  ILeadStatus,
  IMedicalInformation,
  IMemberCancelStatus,
  IMemberStatus,
  IReason,
  IReferralSource,
  IRegionItem,
  IRelationship,
} from '..'

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
  facility_enter_guide: string
  parking_note: string
  address: string
  latitude: number
  longitude: number
  has_parking: boolean
  has_congestion: boolean
  title: string
  price: number | null
  Franchise: null
  region: any
  created_at: Date | null
  deleted_at: Date | null
}

export type IVenuesResponse = {
  data: IVenueItem[]
}

export type IVenueCreateItem = {
  area: string
  name: string
  facility_enter_guide: string
  parking_note: string
  address: string
  latitude: number
  longitude: number
  has_parking: boolean
  has_congestion: boolean
  price: number | null
  region_code: string
  // service: string
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
  venue_id: string | number
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
  season_code: string
  start_date: string
  end_date: string
  half_term_date: string
  sessions: ISessionCreateItem[]
  franchise_id: number
}

export type ISessionCreateItem = {
  plans: IPlanCreateItem[]
}
export type IPlanCreateItem = {
  ability_group: number
  session_plan: number
}

export type ITermEditItem = {
  name: string
  season_code: string
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
  created_date: Date | null
  code: string
  father_code: string | null
  is_deleted: boolean
  slug: string
  title_es: string
  type: string
  updated_date: Date | null
  user_updated_id: string | null
  value1: string | null
  value2: string | null
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
  description: string
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

export type ISessionPlanUpdateItem = {
  id: number
  title: string
  description: string
  banner: IIconItem | null
  video: IIconItem | null
  exercises: ISessionPlanExcerciseUpdateItem[]
  created_at: Date | null
  deleted_at: Date | null
}

export type ISessionPlanExcerciseUpdateItem = {
  id: number
  title: string
  subtitle: string
  description: string
  title_duration: string
  banner: IIconItem | null
  video: IIconItem | null
  created_at: Date | null
  deleted_at: Date | null
}

export type ISingleSessionPlanResponse = {
  data: ISessionPlanUpdateItem
}

/* WEEKLY CLASSES LEADS */

export type IStudentCreate = {
  id: string
  first_name: string
  last_name: string
  dob: string
  age: number
  gender_id: number
  medical_information: string
}

export type IGuardianCreate = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  relationship_code: number
  referral_source_code: number
}

export type IEmregencyContactCreate = {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  relationship_id: number
}

export type IWeeklyClassesLeadCreate = {
  weekly_class_id: number | null
  students: IStudentCreate[]
  guardians: IGuardianCreate[]
  emergency_contacts: IEmregencyContactCreate[]
  comments: string[]
}
export type IWeeklyClassesLeadCreateResponse =
  IBaseResponse<IWeeklyClassesLeadCreate> & {}

export type IGuardian = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  created_at: Date | null
  deleted_at: Date | null
}

export type IWeeklyClassesLead = {
  id: number
  status: ILeadStatus
  guardian: IGuardian
  kid_range: string
  venue: IWeeklyClassesVenueObject[]
  agent: IUserCommentsObject
  created_at: number | null
  deleted_at: number | null
}
export type IWeeklyClassesLeadResponse = IBaseResponse<IWeeklyClassesLead> & {}

export type IAutoCompleteObject = {
  value: string
  label: string
}

/* AbilityGroup Dataset */

export type IAbilityGroupDatasetResponse = {
  data: IAbilityGroupDataset[]
}

export type IAbilityGroupDataset = {
  id: number
  name: string
  min_age: number
  max_age: number
  sessionPlans: ISessionPlanDataset[]
}
export type ISessionPlanDataset = {
  id: number
  title: string
  description: string | null
  banner: IIconItem
  exercises: ISessionPlanItem[]
}

export type ITermDataset = {
  id: number
  name: string
  start_date: string
  end_date: string
  half_term_date: string
  created_at: Date | null
  deleted_at: Date | null
}
export type ITermDatasetResponse = {
  data: ITermDataset[]
}

export type ISendMessageLeadObject = {
  weekly_classes_lead_id: string[]
  message: string
}
export type ISendMessageCancellationObject = {
  weekly_classes_cancellation_id: string[]
  message: string
}
export type ISendMessageMemberObject = {
  weekly_class_member_id: string[]
  message: string
}
export type ISendMessageSaleObject = {
  weekly_classes_sale_id: string[]
  message: string
}
export type ISendMessageFreeTrialObject = {
  weekly_classes_free_trial_id: string[]
  message: string
}
export type ISendMessageWaitingListObject = {
  weekly_classes_waiting_list_id: string[]
  message: string
}

export type IMessageResponseObject = {
  message: string
}

export type IWeeklyClassesVenueObject = {
  id: string
  area: string
  name: string
  latitude: number
  longitude: number
  distance?: string | null
  address: string
  has_parking: boolean
  has_congestion: boolean
  parking_note?: string
  facility_enter_guide?: string
  region?: IRegionItem
  created_date: Date | null
  updated_date: Date | null
  price?: number | null
  subscriptionPlans?: any[]
  classesByYear?: IBaseWeeklyClassesClassesByYear[]
  termsByYear?: IBaseWeeklyClassesTermsByYear[]
  is_deleted: boolean
}

export type IBaseWeeklyClassesClassesByYear = {
  year: number
  classes: IWeeklyClassesClassesByYear[]
}

export type IBaseWeeklyClassesTermsByYear = {
  year: number
  classes: IWeeklyClassesTermsByYear[]
}

export type IWeeklyClassesClassesByYear = {
  id: number
  name: string
  capacity: number
  days: string
  start_time: string
  end_time: string
  is_autumn_indoor: boolean
  is_spring_indoor: boolean
  is_summer_indoor: boolean
  indoor_outdoor_options: string
  is_free_trail_dates: boolean
  created_at: Date | null
  deleted_at: Date | null
}

export type IWeeklyClassesTermsByYear = {
  id: number
  name: string
  start_date: string | null
  end_date: string | null
  half_term_date: string | null
  created_at: string | null
  deleted_at: string | null
}

export type IExcelResponse = {
  data: IIconItem
}

export type IStudentObject = {
  id: string
  first_name: string
  last_name: string
  dob: string
  age: number
  gender: IGender
  medical_information: IMedicalInformation | null
  created_date: string
  updated_date: string
  is_deleted: boolean
}

export type IGuardianObject = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  relationship: IRelationship
  referral_source: IReferralSource
  created_at: Date | null
  deleted_at: Date | null
}

export type IEmregencyContactObject = {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  relationship: IRelationship
  created_at: Date | null
  deleted_at: Date | null
}

export type ICommentsObject = {
  id: number
  message: string
  user: IUserCommentsObject
  created_at: Date | null
  deleted_at: Date | null
}

export type IUserCommentsObject = {
  id: string
  first_name: string
  last_name: string
  avatar_image: IIconItem
}
export type IWeeklyClassesShowLeadObject = {
  id: number
  status: ILeadStatus
  students: IStudentObject[]
  guardian: IGuardianObject
  emergencyContacts: IEmregencyContactObject[]
  comments: ICommentsObject[]
  created_at: Date | null
  deleted_at: Date | null
}
export type IWeeklyClassesShowLeadResponse = {
  data: IWeeklyClassesShowLeadObject
}

export type IAvailableClassesByYear = {
  year: number
  classes: IAvailableClassesObject[]
}

export type IAvailableClassesObject = {
  id: number
  name: string
  capacity: number
  days: string
  start_time: string
  end_time: string
  is_autumn_indoor: boolean
  autumn_term: any
  is_spring_indoor: boolean
  spring_term: any
  is_summer_indoor: boolean
  summer_term: any
  indoor_outdoor_options: string
  is_free_trail_dates: boolean
  created_at: Date | null
  deleted_at: Date | null
}
export type IAvailableVenueObject = {
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
  region: IRegionItem
  subscriptionPlans: any[] | null
  classesByYear: IAvailableClassesByYear[] | null
  termsByYear: any[] | null
  created_at: Date | null
  deleted_at: Date | null
  price: number | null
}

export type IAvailableVenueResponse = {
  data: IAvailableVenueObject[]
}

export type IReportingObject = {
  amount: number
  percentage: string
}

export type IReportingObject2 = {
  count: number
  name: string
}

export type IWeeklyClassesLeadsReportingObject = {
  total_leads: IReportingObject
  new_leads: IReportingObject
  leads_to_trials: IReportingObject
  leads_to_sales: IReportingObject
}

export type IWeeklyClassesLeadsReportingResponse = {
  data: IWeeklyClassesLeadsReportingObject
}

export type IBaseWeeklyClassesFilterObject = {
  limit: number
  venue_id: string
  student: string
  start_date: string
  end_date: string
}

export type IWeeklyClassesMembersFilterObject =
  IBaseWeeklyClassesFilterObject & {
    member_status_id: string
  }
export type IWeeklyClassesCancellationFilterObject =
  IBaseWeeklyClassesFilterObject & {
    member_cancel_status_id: string
  }
export type IWeeklyClassesSalesFilterObject = IBaseWeeklyClassesFilterObject & {
  sale_status_id: string
}
export type IWeeklyClassesFreeTrialsFilterObject =
  IBaseWeeklyClassesFilterObject & {
    free_trial_status_id: string
  }
export type IWeeklyClassesLeadFilterObject = IBaseWeeklyClassesFilterObject & {
  referral_source_id: string
  lead_status_id: string
}
export type IWeeklyClassesWaitingListFilterObject =
  IBaseWeeklyClassesFilterObject & {
    waiting_list_status_id: string
  }

export type IWeeklyClassesMembersReportingObject = {
  total_students: IReportingObject
  monthly_revenue: IReportingObject
  average_monthly_fee: IReportingObject
  average_life_cycle: IReportingObject
}

export type IWeeklyClassesMembersReportingResponse = {
  data: IWeeklyClassesMembersReportingObject
}

export type IWeeklyClassesCancellationReportingObject = {
  total_requests: IReportingObject
  top_cancel_reason: IReportingObject2
  most_requested_venue: IReportingObject2
  membership_tenture: IReportingObject
}

export type IWeeklyClassesCancellationReportingResponse = {
  data: IWeeklyClassesCancellationReportingObject
}

export type IWeeklyClassesSalesReportingObject = {
  top_performer: IReportingObject2
  total_students: IReportingObject
  monthly_revenue: IReportingObject
  average_monthly_fee: IReportingObject
}

export type IWeeklyClassesSalesReportingResponse = {
  data: IWeeklyClassesSalesReportingObject
}

export type IWeeklyClassesFreeTrialReportingObject = {
  top_performer: IReportingObject2
  total_free_trials: IReportingObject
  trials_to_member: IReportingObject
}

export type IWeeklyClassesFreeTrialReportingResponse = {
  data: IWeeklyClassesFreeTrialReportingObject
}

export type IWeeklyClassesWaitingListReportingObject = {
  top_sales_agent: IReportingObject2
  total_members: IReportingObject
  total_new_members: IReportingObject
  average_monthly_fee: IReportingObject
}

export type IWeeklyClassesWaitingListReportingResponse = {
  data: IWeeklyClassesWaitingListReportingObject
}

export type IWeeklyClassesCancellation = {
  id: number
  status: IMemberCancelStatus
  cancel_reason: IReason
  venue: IWeeklyClassesVenueObject
  guardian: IGuardian
  total_student: number
  termination_date: number | null
  created_at: number | null
  deleted_at: number | null
}
export type IWeeklyClassesCancellationResponse =
  IBaseResponse<IWeeklyClassesCancellation> & {}

export type IWeeklyClassesMembers = {
  id: number
  venue: IWeeklyClassesVenueObject
  status: IMemberStatus
  student: IStudentObject
  // family_id: number
  membership_plan: any
  life_cycle_membership: string
  booked_by: any
  created_at: number | null
  deleted_at: number | null
}
export type IWeeklyClassesMembersResponse =
  IBaseResponse<IWeeklyClassesMembers> & {}

export type IWeeklyClassesSales = {
  id: number
  venue: IWeeklyClassesVenueObject
  status: IMemberStatus
  student: IStudentObject
  // family_id: number
  membership_plan: any
  booked_by: any
  created_date: string | null
  updated_date: string | null
}
export type IWeeklyClassesSalesResponse =
  IBaseResponse<IWeeklyClassesSales> & {}

export type IWeeklyClassesFreeTrials = {
  id: number
  venue: IWeeklyClassesVenueObject
  status: IMemberStatus
  student: IStudentObject
  family_id: number
  agent: any
  booked_by: any
  trial_date: number | null
  attempt: number
  created_date: number | null
  deleted_at: number | null
}
export type IWeeklyClassesFreeTrialsResponse =
  IBaseResponse<IWeeklyClassesFreeTrials> & {}

export type IWeeklyClassesFindAClassFilterObject = {
  limit: number
  venue: string | null
  venue_id: string | null
  postcode: string | null
  days: string | null
  class_name: string | null
}

export type IFindAClassItem = {
  id: string
  area: string
  name: string
  lat: number
  lng: number
  address: string
  distance: string | null
  has_parking: boolean
  has_congestion: boolean
  parking_note: string
  facility_enter_guide: string
  price: number | null
  subscriptionPlans: any[]
  classesByYear: any[]
  termsByYear: any[]
  created_at: Date | null
  deleted_at: Date | null
  venue: any
  classes: any
}

export type IFindAClassItemNew = {
  id: string
  address: string
  area: string
  classes: any[]
  created_date: Date | null
  facility_enter_guide: string
  facility: any
  has_congestion: boolean
  has_parking: boolean
  latitude: any
  longitude: any
  name: string
  parking_note: string
  price: number | null
  region: any
  subscriptionPlans: any[]
  updated_date: Date | null
}

export type IWeeklyClassesFindAClassResponse = {
  data: IFindAClassItem[]
  meta: IMetaItem
  links: ILinks
}

export type ICreateGuardian = {
  first_name: string
  last_name: string
  email: string
  phone_number: string
  relationship_code: number
  referral_source_code: number
}

export type ICreateStudent = {
  first_name: string
  last_name: string
  dob: string
  age: number
  gender_id: number
  medical_information: string
}

export type ICreateEmergencyContact = {
  first_name: string
  last_name: string
  phone_number: string
  relationship_id: number
}

export type IWeeklyClassesFreeTrialCreate = {
  weekly_class_id: number
  agent_id: string
  guardians: ICreateGuardian[]
  students: ICreateStudent[]
  emergency_contacts: ICreateEmergencyContact[]
  comments: string[]
  start_date: string
  free_trial_status_code: string
}

export type IWeeklyClassesWaitingListCreate = {
  weekly_class_id: number
  subscription_plan_price_id: number
  guardians: ICreateGuardian[]
  students: ICreateStudent[]
  emergency_contacts: ICreateEmergencyContact[]
  comments: string[]
  waiting_list_status_code: string
}

export type IWeeklyClassesMemberCreate = {
  weekly_class_id: number
  subscription_plan_price_id: number
  start_date: string
  agent_id: string
  guardians: ICreateGuardian[]
  students: ICreateStudent[]
  emergency_contacts: ICreateEmergencyContact[]
  comments: string[]
  member_status_code: string
}

export type IPaymentType = {
  id: number
  name: string
  created_at: Date | null
  deleted_at: Date | null
}

export type IStudentCoverage = {
  id: number
  name: string
  created_at: Date | null
  deleted_at: Date | null
}

export type IPrices = {
  id: number
  name: string
  payment_type: IPaymentType
  student_coverage: IStudentCoverage
  monthly_subscription_fee: string
  price_per_class_per_child: string
  one_off_joining_fee: string
  created_at: Date | null
  deleted_at: Date | null
}

export type ISubscriptionPlan = {
  id: number
  name: string
  prices: IPrices[]
  created_at: Date | null
  deleted_at: Date | null
}

export type ISubscriptionPlanResponse = {
  data: ISubscriptionPlan[]
}

export type IFeedbackItem = {
  id: number
  weeklyClass: {
    id: number
    venue: {
      id: string
      area: string
      name: string
      lat: number
      lng: number
      distance: string
      address: string
      has_parking: boolean
      has_congestion: boolean
      parking_note: string
      facility_enter_guide: string
      price: number | null
      created_at: any | null
      deleted_at: any | null
    }
    name: string
    capacity: number
    free_trial_capacity: null
    member_capacity: null
    remaining_capacity: null
    days: string
    start_time: string
    end_time: string
    is_autumn_indoor: boolean
    is_spring_indoor: boolean
    is_summer_indoor: boolean
    indoor_outdoor_options: string
    is_free_trail_dates: boolean
    created_at: any | null
    deleted_at: any | null
  }
  feedbackType: {
    id: number
    name: string
    created_at: any | null
    deleted_at: any | null
  }
  feedbackStatus: {
    id: number
    name: string
    created_at: any | null
    deleted_at: any | null
  }
  feedbackCategory: {
    id: number
    name: string
    created_at: any | null
    deleted_at: any | null
  }
  agent: {
    id: string
    first_name: string
    last_name: string
    position: string
    bio: string
    phone_number: string
    email: string
    postal_code: string
    last_active_at: string
    avatar_image: string
    created_at: any | null
    deleted_at: any | null
  } | null
  other_feedback_category: string | null
  additional_notes: string
  created_at: any | null
  deleted_at: any | null
}

export type IAccountRefereeItem = {
  id: number
  guardianRefereeStatus: {
    id: number
    title: string
    created_at: any | null
    deleted_at: any | null
  }
  first_name: string
  last_name: string
  phone_number: string
  email: string
  created_at: any | null
}

export type IRefereeReportingItem = {
  success_count: number
  total_free_months: number
}

export type IAccountRewardHistoryItem = {
  id: number
  reward: {
    id: number
    title: string
    points: number
    stock_quantity: number
    addedBy: {
      id: string
      first_name: string
      last_name: string
      position: string
      bio: string
      phone_number: string
      email: string
      postal_code: string
      last_active_at: string
      avatar_image: {
        name: string
        url: string
      }
      created_at: any | null
      deleted_at: any | null
    }
    created_at: any | null
    deleted_at: any | null
  }
  redeemed_points: number
  created_at: any | null
}

export type IAccountLoyaltyPointsHistoryItem = {
  id: number
  loyaltyPoint: {
    id: number
    title: string
    points: number
    addedBy: {
      id: string
      first_name: string
      last_name: string
      position: string
      bio: string
      phone_number: string
      email: string
      postal_code: string
      last_active_at: string
      avatar_image: {
        name: string
        url: string
      }
      created_at: any | null
      deleted_at: any | null
    }
    created_at: any | null
    deleted_at: any | null
  }
  earned_points: number
  created_at: any | null
}

export type IAccountEventsItem = {
  id: number
  eventType: {
    id: number
    title: string
    created_at: any | null
    deleted_at: any | null
  }
  performedBy: {
    id: string
    name: string
    avatar_image: string
  }
  description: string
  created_at: any | null
}

export type IAccountWeeklyClassesServiceHistory = {
  id: number
  venue: {
    id: string
    area: string
    name: string
    lat: number
    lng: number
    distance: string
    address: string
    has_parking: false
    has_congestion: true
    parking_note: string
    facility_enter_guide: string
    price: number | null
    created_at: any | null
    deleted_at: any | null
  }
  weeklyClass: {
    id: number
    venue: {
      id: string
      area: string
      name: string
      lat: number
      lng: number
      distance: string
      address: string
      has_parking: boolean
      has_congestion: boolean
      parking_note: string
      facility_enter_guide: string
      price: number | null
      created_at: any | null
      deleted_at: any | null
    }
    name: string
    capacity: number
    free_trial_capacity: number | null
    member_capacity: number | null
    remaining_capacity: number | null
    days: string
    start_time: string
    end_time: string
    is_autumn_indoor: boolean
    is_spring_indoor: boolean
    is_summer_indoor: boolean
    indoor_outdoor_options: string
    is_free_trail_dates: boolean
    created_at: any | null
    deleted_at: any | null
  }
  status: {
    id: number
    title: string
    created_at: any | null
    deleted_at: any | null
  }
  student: {
    id: string
    first_name: string
    last_name: string
    dob: string
    age: number
    medical_information: string
    created_at: any | null
    deleted_at: any | null
  }
  agent: {
    id: string
    first_name: string
    last_name: string
    position: string
    bio: string
    phone_number: string
    email: string
    postal_code: string
    last_active_at: string
    avatar_image: string
    created_at: any | null
    deleted_at: any | null
  } | null
  membership_plan: {
    id: number
    name: string
    plan: {
      id: number
      name: string
      created_at: any | null
      deleted_at: any | null
    }
    monthly_subscription_fee: string
    price_per_class_per_child: string
    one_off_joining_fee: string
    created_at: any | null
    deleted_at: any | null
  }
  booked_by: {
    id: string
    first_name: string
    last_name: string
    position: string
    bio: string
    phone_number: string
    email: string
    postal_code: string
    last_active_at: string
    avatar_image: {
      name: string
      url: string
    }
    created_at: any | null
    deleted_at: any | null
  }
  start_date: any | null
  created_at: any | null
  deleted_at: any | null
}

export type IAccountHolidayCampServiceHistory = {
  id: number
  venue: {
    id: string
    area: string
    name: string
    lat: number
    lng: number
    distance: string
    address: string
    has_parking: false
    has_congestion: true
    parking_note: string
    facility_enter_guide: string
    price: number | null
    created_at: any | null
    deleted_at: any | null
  }
  holidayCamp: {
    id: number
    venue: {
      id: string
      area: string
      name: string
      lat: number
      lng: number
      distance: string
      address: string
      has_parking: boolean
      has_congestion: boolean
      parking_note: string
      facility_enter_guide: string
      price: number | null
      created_at: any | null
      deleted_at: any | null
    }
    name: string
    capacity: number
    free_trial_capacity: number | null
    member_capacity: number | null
    remaining_capacity: number | null
    days: string
    start_time: string
    end_time: string
    is_autumn_indoor: boolean
    is_spring_indoor: boolean
    is_summer_indoor: boolean
    indoor_outdoor_options: string
    is_free_trail_dates: boolean
    created_at: any | null
    deleted_at: any | null
  }
  status: {
    id: number
    title: string
    created_at: any | null
    deleted_at: any | null
  }
  student: {
    id: string
    first_name: string
    last_name: string
    dob: string
    age: number
    medical_information: string
    created_at: any | null
    deleted_at: any | null
  }
  agent: {
    id: string
    first_name: string
    last_name: string
    position: string
    bio: string
    phone_number: string
    email: string
    postal_code: string
    last_active_at: string
    avatar_image: string
    created_at: any | null
    deleted_at: any | null
  } | null
  membership_plan: {
    id: number
    name: string
    plan: {
      id: number
      name: string
      created_at: any | null
      deleted_at: any | null
    }
    monthly_subscription_fee: string
    price_per_class_per_child: string
    one_off_joining_fee: string
    created_at: any | null
    deleted_at: any | null
  }
  booked_by: {
    id: string
    first_name: string
    last_name: string
    position: string
    bio: string
    phone_number: string
    email: string
    postal_code: string
    last_active_at: string
    avatar_image: {
      name: string
      url: string
    }
    created_at: any | null
    deleted_at: any | null
  }
  start_date: any | null
  created_at: any | null
  deleted_at: any | null
}

export type IAccountServiceHistory = {
  'weekly-classes': IAccountWeeklyClassesServiceHistory[]
  'holiday-camps': IAccountHolidayCampServiceHistory[]
}

export type IAccountInformationObject = {
  id: number
  loyalty_points: number
  guardians: {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number: string
    relationship: {
      id: number
      title: string
      created_at: any | null
      deleted_at: any | null
    }
    referral_source: {
      id: number
      title: string
      created_at: any | null
      deleted_at: any | null
    }
    status: string
    created_at: any | null
    deleted_at: any | null
  }[]
  students: {
    id: string
    first_name: string
    last_name: string
    dob: string
    age: number
    gender: {
      id: number
      title: string
      created_at: any | null
      deleted_at: any | null
    }
    medical_information: string
    created_at: any | null
    deleted_at: any | null
  }[]
  emergencyContacts: {
    id: number
    first_name: string
    last_name: string
    phone_number: string
    relationship: {
      id: number
      title: string
      created_at: any | null
      deleted_at: any | null
    }
    created_at: any | null
    deleted_at: any | null
  }[]
  comments: {
    id: number
    message: string
    user: {
      id: string
      first_name: string
      last_name: string
      avatar_image: {
        name: string
        url: string
      }
    }
    created_at: any | null
    deleted_at: any | null
  }[]
  service_history: IAccountServiceHistory
  feedbacks: IFeedbackItem[]
  referee_reporting: IRefereeReportingItem
  referees: IAccountRefereeItem[]
  rewardHistories: IAccountRewardHistoryItem[]
  loyaltyPointHistories: IAccountLoyaltyPointsHistoryItem[]
  events: IAccountEventsItem[]
}

export type IAccountInformationResponse = {
  data: IAccountInformationObject
}

export type ICreateFeedbackItem = {
  family_id: number
  weekly_class_id: number
  feedback_type_id: number
  feedback_category_id: number
  additional_notes: string
  agent_id: string
}

export type IWeeklyClassesCapacitiesClasses = {
  id: number
  name: string
  total_capacity: number
  free_trial_capacity: number
  member_capacity: number
  remaining_capacity: number
}

export type IWeeklyClassesCapacities = {
  id: string
  name: string
  weekly_classes: IWeeklyClassesCapacitiesClasses[]
  total_capacity: number
  booked_capacity: number
  remaining_capacity: number
  percentage_booked: string
  created_at: any | null
  deleted_at: any | null
}

export type IWeeklyClassesCapacitiesResponse = {
  data: IWeeklyClassesCapacities[]
}

export type IWeeklyClassesCapacitiesReporting = {
  total_capacity: number
  booked_capacity: number
  remaining_capacity: number
  percentage_booked: string
}

export type IWeeklyClassesCapacitiesReportingResponse = {
  data: IWeeklyClassesCapacitiesReporting
}
