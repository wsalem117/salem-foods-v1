import * as icons from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export type IconName = keyof typeof icons
export type IconComponent = LucideIcon

export const getIcon = (name: IconName): IconComponent => {
  if (!isValidIconName(name)) {
    console.warn(`Icon "${name}" not found, falling back to default`)
    return icons.HelpCircle
  }
  return icons[name] as IconComponent
}

export const isValidIconName = (name: string): name is IconName => {
  return name in icons
}

export const validateIconName = (name: unknown): IconName => {
  if (typeof name !== 'string' || !isValidIconName(name)) {
    throw new Error(`Invalid icon name: ${String(name)}`)
  }
  return name
}
