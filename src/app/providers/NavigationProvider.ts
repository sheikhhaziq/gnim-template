import Adw from "gi://Adw"
import { createContext } from "gnim"

const NavigationContext = createContext<Adw.NavigationView | null>(null)

export function NavigationProvider<T>(
  view: Adw.NavigationView,
  fn: () => T
) {
  return NavigationContext.provide(view, fn)
}

export function useNavigation() {
  const navigation = NavigationContext.use()

  if (!navigation)
    throw Error("navigation not in scope")

  return navigation
}