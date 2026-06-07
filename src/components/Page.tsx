import Adw from "gi://Adw"
import Gtk from "gi://Gtk"
import GObject from "gi://GObject"

interface PageProps {
    title?: string
    subtitle?: string
    children?: GObject.Object
}

export default function Page(props: PageProps) {
    return (
        <Adw.NavigationPage>
            <Adw.ToolbarView>
                <Adw.HeaderBar $type="top">
                    <Adw.WindowTitle
                        $type="title"
                        title={props.title}
                        subtitle={props.subtitle}
                    />
                </Adw.HeaderBar>
                {props.children}
            </Adw.ToolbarView>
        </Adw.NavigationPage>
    )
}