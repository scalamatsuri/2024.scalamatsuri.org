import { Speaker } from './speaker'

export interface Talk {
  title: string
  detail?: string
  language?: string
  length?: number
  tags?: Array<string>
  keywords?: Array<string>
  speakers?: Array<Speaker>
}
