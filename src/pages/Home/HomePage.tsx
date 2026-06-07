import Adw from "gi://Adw"
import Gtk from "gi://Gtk"

import AboutPage from "../About/AboutPage"
import NavigationService from "@/services/NavigationServicve"
import Page from "@/components/Page"

export default function HomePage() {
  return (
    <Page title="HomePage">
      <Gtk.Box
        valign={Gtk.Align.CENTER}
        halign={Gtk.Align.CENTER}
        orientation={Gtk.Orientation.VERTICAL}
        spacing={12}
        marginTop={12}
        marginBottom={12}
        marginStart={12}
        marginEnd={12}
      >
        <Gtk.Label label="Home Page" />

        <Gtk.Button
          label="Open About Page Now"
          onClicked={() => NavigationService.push(AboutPage())}
        />
      </Gtk.Box>
    </Page>
  )
}
