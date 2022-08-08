
export interface ResponseUser {
  result: User[]
  id: number
  exception: any
  status: number
  isCanceled: boolean
  isCompleted: boolean
  isCompletedSuccessfully: boolean
  creationOptions: number
  asyncState: any
  isFaulted: boolean
}

export interface User {
  id: string
  email: string
  userName: string
  password: string
  role: string
}
