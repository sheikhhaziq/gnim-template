{/* <Adw.ToastOverlay $={(self) => (toasts = self)}>
        <Adw.ToolbarView>
          <Adw.HeaderBar $type="top">
            <Adw.WindowTitle
              $type="title"
              title={t("My Awesome App")}
              subtitle={t("Written with Gnim")}
            />
          </Adw.HeaderBar>
          <Gtk.ScrolledWindow>
            <Adw.Clamp maximumSize={400}>
              <Gtk.Box
                marginTop={8}
                marginBottom={8}
                marginEnd={8}
                marginStart={8}
                spacing={8}
                orientation={Gtk.Orientation.VERTICAL}
              >
                <Gtk.ListBox
                  class="boxed-list"
                  selectionMode={Gtk.SelectionMode.NONE}
                >
                  <Adw.EntryRow
                    title={t("String Key")}
                    text={stringKey}
                    onNotifyText={({ text }) => setStringKey(text)}
                    onEntryActivated={addToast}
                  />
                </Gtk.ListBox>

                <Gtk.Box spacing={8} marginTop={12} halign={Gtk.Align.CENTER}>
                  <Gtk.Button onClicked={() => setNumber((n) => n + 1)}>
                    {t("Increment")}
                  </Gtk.Button>
                  <Gtk.Label
                    widthRequest={18}
                    label={number((n) => n.toString())}
                  />
                  <Gtk.Button onClicked={() => setNumber((n) => n - 1)}>
                    {t("Decrement")}
                  </Gtk.Button>
                </Gtk.Box>
              </Gtk.Box>
            </Adw.Clamp>
          </Gtk.ScrolledWindow>
        </Adw.ToolbarView>
      </Adw.ToastOverlay> */}