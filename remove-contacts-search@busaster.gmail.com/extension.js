const Main = imports.ui.main;

let contactsProvider = null;

function getContactsProvider() {
    let providers = Main.overview._viewSelector._searchTab._searchSystem._providers;
    
    for (let i = 0; i < providers.length; i++) {
        if (providers[i].title == _("CONTACTS"))
            return providers[i];
    }
    
    return null;
}

function init() {
    contactsProvider = getContactsProvider();
}

function enable() {
    Main.overview.removeSearchProvider(contactsProvider);
}

function disable() {
    Main.overview.addSearchProvider(contactsProvider);
}
