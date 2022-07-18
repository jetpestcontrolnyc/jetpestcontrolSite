
    window._currentDevice = 'desktop';
    window.Parameters = window.Parameters || {
        AjaxContainer: 'div.dmBody',
        WrappingContainer: 'div.dmOuter',
        HomeUrl: 'http://app.multiscreensite.com/site/be6f1ddd',
        AccountUUID: 'c8f033a5b59b43a8b52dbf99f96e6551',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: 'be6f1ddd',
        SiteId: '2121522',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Thu May 26 17:54:10 UTC 2022',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialDynamicItem: '',
        InitialPageAlias: 'home',
        InitialPageUuid: '24156cc0089348f1bdd93be4db411751',
        InitialEncodedPageAlias: 'aG9tZQ==',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '6065',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/be6f1ddd?preview=true&dm_device=tablet&dm_exportSite=true&nossl&dm_exportSite_protected=ba89057b_1653587692033_5_64a3812c3534e4bcf487a9f42aafa1917b2a2dac0d370e6c8579b6fa71a56a89',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        NotificationSubDomain: 'jetpestcontrol',
        HasCustomDomain: true,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'en',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: -1,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/be6f1ddd',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: false,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        siteCacheKey: '1653587676639_be6f1ddd',
        siteInfo: null,
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 6;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if(!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function() {
            },
            getCurrentDeviceType: function() {
                return window._currentDevice;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }

    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }



    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }
