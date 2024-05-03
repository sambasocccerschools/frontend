export type ILoginInput = {
  email: string
  password: string
  remember: boolean
}

export type ILoginResponse = {
  access_token: string
  expires_in: number
}

export type ILogoutResponse = {
  message: string
}
// Weekly classes

type IPlans = {
  plan: {
    id: number
    name: string
  }
  price: {
    id: number
    name: string
    monthly_subscription_fee: number
    one_off_joining_fee: number
  }
}

type ISubscriptionPlan = {
  priceName: string
  plans: IPlans[]
}

type IClass = {
  id: number
  name: string
  capacity: number
  days: string
  start_time: string
  end_time: string
  is_autumn_indoor: boolean
  is_spring_indoor: boolean
  is_summer_indoor: boolean
}
type IClasses = {
  year: number
  classes: IClass[]
}

type ITerm = {
  id: number
  name: string
  start_date: string | null
  end_date: string | null
  half_term_date: string | null
  created_at: string | null
  deleted_at: string | null
}

type ITerms = {
  year: number
  terms: {
    autumn: ITerm
    spring: ITerm
    summer: ITerm
  }[]
}
export type IWeeklyClass = {
  id: string
  area: string
  name: string
  lat: number
  lng: number
  distance: number | null
  address: string
  has_parking: boolean
  has_congestion: boolean
  parking_note: string
  facility_enter_guide: string
  region: number
  price: number | null
  subscriptionPlans: ISubscriptionPlan[]
  classes: IClasses[]
  terms: ITerms[]
  created_at: string | null
  deleted_at: string | null
}

export type IGetAllWeeklyClassesInput = {
  lat?: number
  lng?: number
  venue?: string
  venue_ids?: string
  postcode?: string
  days?: string[]
  classNames?: string
}

export type IGetWeeklyClassesResponse = {
  data: IWeeklyClass[]
}

// Datasets
export type IVenue = {
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
  created_at: string
  deleted_at: string | null
}

export type IGetVenueResponse = {
  data: IVenue[]
}

export type IGetUniqueWeeklyClassResponse = {
  data: string[]
}

// Profile
type IAvatar = {
  name: string
  url: string
}

type ICountry = {
  id: number
  name: string
  iso2: string | null
  iso3: string | null
  created_at: string
  deleted_at: string | null
}
type ICity = {
  id: number
  name: string
  iso2: string | null
  iso3: string | null
  created_at: string
  deleted_at: string | null
}
export type IUser = {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  email: string
  position: string | null
  bio: string | null
  role: string | null
  country: ICountry
  city: ICity
  postal_code: string | null
  last_active_at: string | null
  avatar_image: IAvatar
  created_at: string
}
export type IProfileResponse = GenericResponse<IUser>

// Users

export type ILink = {
  url: string
  label: string
  active: boolean
}
export type IGetUsersResponse = {
  data: IUser[]
  links: {
    first: string
    last: string
    prev: string
    next: string
  }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: ILink[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

export type IGetUsersParams = {
  page: number
  limit: number
}

export type ICreateUserParams = {
  first_name: string
  last_name: string
  email: string
  phone_number: string
  position: string
  password: string
  password_confirmation: string
  avatar_image?: File | null
}

export type ICreateUserResponse = {
  message: string
}

export type GenericResponse<T> = {
  data: T
}

export type IGetUserResponse = GenericResponse<IUser>

export type IParent = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  relationToChild: string
  marketingChannel: string
}

export type IStudent = {
  firstName: string
  lastName: string
  dateOfBirth: string
  age: number
  gender: string
  medicalInformation: string
  activityOfInterest?: string | null
  class?: string | null
  time?: string | null
}

export type IEmergencyContact = {
  firstName: string
  lastName: string
  phoneNumber: string
  relationToChild: string
}

export type IComment = {
  text: string
  avatar: string
  name: string
  created: string
}

export type IStudentListItem = {
  'First Name': string
  'Last Name': string
  Age: number
  Gender: string
  'Date of Birth': string
  'Activity of interest': string
}

export type IParentListItem = {
  'First Name': string
  'Last Name': string
  Status: string
  Email: string
  'Gocardless ID': string
  Created: string
  Address: string
  'Phone number': string
  Students: IStudentListItem[] | null | undefined
}

export type IAccountCardHeader = {
  Status: string
  Color: string
}

export type IPersonalDetails = {
  FirstName: string
  LastName: string
  EmailAddress: string
  BillingAddress: string
}

export type IBankDetails = {
  AccountHolderName: string
  SortCode: number | null
  AccountNumber: number | null
  CanAuthoriseDirectDebits: boolean
}

export type IProduct = {
  Name: string
  Price: number
}

export type IDirectDebit = {
  Product: IProduct
  PersonalDetails: IPersonalDetails
  BankDetails: IBankDetails
}

export type IDirectDebitSetup = {
  AuthorizeTermsConditions: boolean
  AuthorizeChildPhotos: boolean
  CardName: string
  CardNumber: string
  CardExpirationDate: string
  CardCVC: string
  CardCountry: string
  CardZip: string
  AccountHolderName?: string | null
  SortCode?: number | null
  AccountNumber?: number | null
  ApplePay?: string
}
