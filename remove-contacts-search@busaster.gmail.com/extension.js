const Main = imports.ui.main;

let recentItemsProvider = null;

function getRecentItemsProvider() {
    let providers = Main.overview._viewSelector._searchTab._searchSystem._providers;
    
    for (let i = 0; i < providers.length; i++) {
        if (providers[i].title == _("CONTACTS"))
            return providers[i];
    }
    
    return null;
}

function init() {
    recentItemsProvider = getRecentItemsProvider();
}

function enable() {
    Main.overview.removeSearchProvider(recentItemsProvider);
}

function disable() {
    Main.overview.addSearchProvider(recentItemsProvider);
}
