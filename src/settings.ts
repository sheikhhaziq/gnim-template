import Gio from "gi://Gio"
import { createContext, createSettings } from "gnim"

type Todo = {
  label: string
  done: boolean
}

function isTodo(todo: Record<string, unknown>): todo is Todo {
  const label = "label" in todo && typeof todo.label === "string"
  const done = "done" in todo && typeof todo.done === "boolean"
  return label && done
}

const schema = Object.freeze({
  todos: "aa{sv}",
})

export function createAppSettings() {
  const { todos, setTodos } = createSettings(
    new Gio.Settings({ schemaId: import.meta.domain }),
    schema,
  )

  return {
    todos: todos((array) => array.filter(isTodo)),
    setTodos,
  }
}

type Settings = ReturnType<typeof createAppSettings>

export const SettingsContext = createContext<Settings | null>(null)

export function useSettings() {
  const settings = SettingsContext.use()
  if (!settings) throw Error("settings not in scope")
  return settings
}
