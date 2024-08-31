declare interface AbstractFastLogin {
    isFastLoginIframeRegistered: boolean;
    isFastLoginDataFetched: boolean;
    fastLoginIframe: HTMLIFrameElement;
    config: FastLoginConfig;
    iFrameName: string;
    removeLoadDataListener: () => void;
    onFastLoginIframeCreateSuccess: (r?: Event) => void;
    loadFastLoginData: () => Promise<any>;
    fetchFastLoginData: () => void;
    destroyFastLogin: () => void;
    createIFrame: (url: string) => Promise<FastAuthorizationResponse>;
    authorization: (oidcParams?: OidcParams, machineClick?: MachineClickType) => Promise<FastAuthorizationResponse>;
}

declare interface AbstractParser {
    parsedResult: ParsedResult;
    getUA(): string;
    test(regex: RegExp): boolean;
    getDetailInfo<T>(parsersList: ParserConfig<T>[]): ParserConfig<T> | undefined;
    parseBrowser(): BrowserDetail;
    getBrowser(): BrowserDetail;
    getBrowserName(toLowerCase?: boolean): string;
    getBrowserVersion(): string | undefined;
    parseOS(): OSDetail;
    getOS(): OSDetail;
    getOSName(toLowerCase?: boolean): string;
    getOSVersion(): string | undefined;
    parseApp(): AppDetail;
    getApp(): AppDetail;
    getAppName(toLowerCase?: boolean): string;
    parsePlatform(): PlatformDetail;
    getPlatform(): PlatformDetail;
    getPlatformType(toLowerCase?: boolean): string;
    parse(): AbstractParser;
    getResult(): ParsedResult;
}

declare interface AdditionalRedirectParams {
    package?: string;
    redirect_uri?: string;
    ext_redirect_uri?: string;
}

declare interface AppDetail {
    name?: string;
}

export declare const BASE_DEEPLINK_URL = "sberbankidlogin://sberbankidsso";

export declare const BASE_URL = "https://online.sberbank.ru";

declare interface BrowserDetail extends AppDetail {
    version?: string;
}

declare type BrowserMode = 'normal' | 'incognito' | 'unknown';

declare class CertificateBanner {
    private banner;
    closed: boolean;
    private create;
    private outsideClick;
    show(): void;
    hide(): void;
}

declare type CloudProps = {
    enable?: boolean;
    getUserUrl?: string;
    changeUserUrl?: string;
    baseUrl?: string;
    iframeUrl?: string;
};

/**
 * Создание SDK
 *
 * @param {SberidSDKProps} options - параметры инициализации SDK
 * @returns {SberidSDK} - объект SDK
 */
declare function createSberidSDK(options: SberidSDKProps): SberidSDK;
export default createSberidSDK;

declare type Deeplink = {
    enable: boolean;
    mode: string;
    allowSberIDRedirects: Array<string>;
};

declare type DisplayType = 'popup' | 'page';

declare type FastAuthorizationErrorResponse = {
    success: boolean;
    data: SberidSDKErrorResult;
};

declare type FastAuthorizationResponse = FastAuthorizationSuccessResponse | FastAuthorizationErrorResponse;

declare type FastAuthorizationSuccessResponse = {
    success: boolean;
    data: SberidSDKSuccessResult;
};

declare class FastLogin implements AbstractFastLogin {
    isFastLoginIframeRegistered: boolean;
    isFastLoginDataFetched: boolean;
    fastLoginIframe: HTMLIFrameElement;
    config: FastLoginConfig;
    iFrameName: string;
    logUid: string;
    removeLoadDataListener(): void;
    constructor(config: FastLoginConfig);
    authorization(oidcParams?: OidcParams, machineClick?: MachineClickType): Promise<FastAuthorizationResponse>;
    buildUrl(oidcParams: OidcParams): string;
    createIFrame(url: string): Promise<FastAuthorizationResponse>;
    onFastLoginIframeCreateSuccess(r?: Event): void;
    loadFastLoginData(): Promise<FastAuthorizationResponse>;
    fetchFastLoginData(): Promise<void>;
    destroyFastLogin(): void;
    getLogUid(): string;
}

declare interface FastLoginConfig {
    baseUrl?: string;
    pathUrl?: string;
    debug?: boolean;
    enable?: boolean;
    timeout?: number;
    mode?: 'default' | 'auto';
    oidcParams?: OidcParams;
    onErrorAutoMode?: () => void;
    onErrorDefaultMode?: () => boolean;
    logUid: string;
}

declare interface FastLoginProps {
    enable?: boolean;
    timeout?: number;
    mode?: 'default' | 'auto';
    onErrorAutoMode?: () => void;
    onErrorDefaultMode?: () => boolean;
}

export declare const getAuthUrl: (baseUrl?: string) => string;

export declare const getUniversalLinkAuthUrl: (baseUrl?: string) => string;

export declare const getVersion: () => string;

export declare const hideLoader: () => void;

declare interface ICache {
    set<T>(key: string, entry: T): void;
    get<T>(key: string): Promise<T | undefined>;
    remove(key: string): void;
    all?(): string[];
}

export declare const initSA: ({ logUid, clientId }: InitSAProps) => void;

declare interface InitSAProps {
    clientId: string;
    logUid: string;
}

declare enum MachineClickType {
    COOKIE_AUTOUPDATE = "cookie2autoupdate",
    AGRESSIVE_LOGIN = "aggressivelogin",
    FAST_LOGIN = "fastlogin",
    NONE = "none"
}

declare type MintsifryProps = {
    enable: boolean;
    showBanner?: boolean;
    landing?: string;
    checker?: string;
};

declare class NotificationBanner {
    private readonly config;
    private button;
    private notification;
    private readonly parser;
    private userHelper;
    universalLinkDetect: SberidUniversalLink;
    fastLogin: FastLogin;
    private user;
    private notMeButton;
    private oidcParams;
    private theme;
    private themeAttributeName;
    private positionAttributeName;
    private maxServiceName;
    private readonly onSuccessCallback;
    private onErrorCallback;
    private isShow;
    private notificationText;
    private OIDCProps;
    constructor(config: NotificationConfigProps);
    private setUser;
    private setOIDCParams;
    private silentAuthorization;
    private getOfferText;
    private render;
    private create;
    private handleButtonClick;
    private isMobile;
    isNotification(): boolean;
    show(): void;
    hide(): void;
    onClose(saveClose?: boolean): void;
    switchTheme(): void;
    setTheme(theme: NotificationTheme): void;
    getTheme(): NotificationTheme;
    setPosition(position: NotificationPosition): void;
    getPosition(): NotificationPosition;
    private getCookieExpires;
    private destroy;
    private getAnalyticsProps;
}

declare interface NotificationConfig {
    enable: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    position: NotificationPosition;
    autoCloseDelay: number;
    autoClose: boolean;
    debug: boolean;
    fastLogin: boolean;
    theme: NotificationTheme;
    serviceName: string;
    textType: NotificationTextType;
    textOfferExtension?: string;
}

declare type NotificationConfigProps = {
    oidc: OidcParams;
    notification: NotificationProps;
    fastLogin: FastLoginConfig;
    userHelper: UserHelperConfig;
    universalLink: UniversalLinkInitProps;
    buttonProps: SberidButtonProps;
    mintsifry: MintsifryProps;
    onSuccessCallback?: () => void;
    onErrorCallback?: () => void;
    debug?: boolean;
    baseUrl: string;
    mweb2app: boolean;
    personalization: boolean;
};

export declare enum NotificationPosition {
    'topRight' = "top-right",
    'bottomRight' = "bottom-right",
    'topLeft' = "top-left",
    'bottomLeft' = "bottom-left"
}

export declare interface NotificationProps {
    enable: boolean;
    onNotificationBannerClose?: () => void;
    onNotificationBannerOpen?: () => void;
    position?: NotificationPosition;
    autoCloseDelay?: number;
    autoClose?: boolean;
    theme?: NotificationTheme;
    serviceName?: string;
    textType?: NotificationTextType;
    textOfferExtension?: string;
}

export declare enum NotificationTextType {
    default = "default",
    loyalty = "loyalty"
}

export declare enum NotificationTheme {
    'white' = "white",
    'dark' = "dark"
}

export declare type OidcParams = {
    response_type: string;
    client_type: string;
    client_id: string;
    state: string;
    redirect_uri: string;
    scope: string;
    nonce: string;
    [key: string]: string;
};

declare interface OSDetail extends AppDetail {
    versionName?: string;
    version?: string;
}

export declare enum OtherAuthService {
    YANDEX = "Yandex",
    GOOGLE = "Google",
    APPLE = "Apple",
    FACEBOOK = "Facebook",
    VK = "VK",
    OK = "OK",
    AVITO = "Avito",
    INSTAGRAM = "Instagram",
    GOSUSLUGI = "GosUslugi",
    MAILRU = "Mail.ru",
    LOCAL = "Local",
    MYMOSCOW = "MyMoscow"
}

declare interface ParsedResult {
    browser: BrowserDetail;
    os: OSDetail;
    platform: PlatformDetail;
    app: AppDetail;
}

declare interface ParserConfig<T> {
    test: RegExp[] | ((parser: AbstractParser) => boolean);
    describe: ((ua: string) => T) | (() => T);
}

declare interface PlatformDetail {
    type?: string;
    vendor?: string;
    model?: string;
}

declare class SberidButton {
    link: HTMLAnchorElement | undefined;
    error: HTMLElement | undefined;
    config: SberidButtonConfig;
    userHelper: UserHelper;
    user: User | undefined;
    container: HTMLElement;
    changeUserElement: HTMLElement | undefined;
    changeUserPopupElement: HTMLElement | undefined;
    text: SberidButtonText;
    setIsButtonPersonalized?: (isButtonPersonalized: boolean) => void;
    certificateBanner: CertificateBanner;
    getHasCertificate?: () => boolean;
    constructor(config: SberidButtonInitProps);
    private onButtonClick;
    private initChangeUser;
    private changeUser;
    private handleUserChange;
    private getSize;
    protected isEnoughSpaceFromPersonalization(): boolean;
    private create;
    getText(): {
        text: string;
        personalization: boolean;
    };
    setText(): void;
    disable(): void;
    enable(): void;
    iconShow(show: boolean): void;
    isDisabled(): boolean | undefined;
    setUrl(url: string): void;
    getButtonElement(): HTMLElement | undefined;
    getErrorElement(): HTMLElement | undefined;
}

declare interface SberidButtonConfig {
    personalization: boolean;
    debug: boolean;
    type: SberidButtonTextType;
    changeUser: boolean;
    loader: boolean;
    logo: boolean;
    onButtonClick: (e: Event, link?: HTMLElement) => void;
    mintsifry?: MintsifryProps;
}

declare type SberidButtonInitProps = {
    personalization?: boolean;
    debug?: boolean;
    changeUser?: boolean;
    buttonProps?: SberidButtonProps;
    mintsifry?: MintsifryProps;
    container: HTMLElement;
    onButtonClick: (e: Event, link?: HTMLElement) => void;
    setIsButtonPersonalized?: (isButtonPersonalized: boolean) => void;
    getHasCertificate?: () => boolean;
    showCertificateBanner?: boolean;
};

export declare interface SberidButtonProps {
    type?: Exclude<SberidButtonTextType, 'banner'>;
    loader?: boolean;
    logo?: boolean;
    custom?: SberidButtonText;
}

declare interface SberidButtonText {
    anonymous: string;
    personal: string;
}

declare type SberidButtonTextType = 'default' | 'login' | 'start' | 'resume' | 'fill' | 'register' | 'banner' | 'custom';

export declare class SberidSDK {
    buttons: SberidButton[];
    user: User | undefined;
    oidcParams: OidcParams;
    config: SberidSDKConfig;
    parser: AbstractParser;
    windowStatus: string;
    private w;
    fastLogin: FastLogin;
    universalLinkDetect: SberidUniversalLink;
    theme: 'green' | 'white';
    notifyBanner: NotificationBanner;
    private isButtonPersonalized;
    private userHelper;
    private readonly autoUpdateCookie;
    private isExitedFromAutoLogin;
    private hasCertificate;
    private readonly onButtonClick;
    private readonly debugByUrlParam;
    private readonly logUid;
    private readonly isBannerClosed;
    constructor(initConfig: SberidSDKProps);
    static getVersion(): string;
    static getUrl(baseUrl: string, props: OidcParams, params?: {
        display?: DisplayType;
        utmProxyDisabled?: boolean;
        debug?: boolean;
        generateState?: boolean;
        needAdditionalRedirect?: boolean;
        universalLinkUrl?: string;
        deeplinkUrl?: string;
    }): Promise<{
        link: string;
        deeplink: string;
    }>;
    disable(): void;
    enable(): void;
    static logout(domain?: string): void;
    logout(domain?: string): void;
    getLogUid(): string;
    sendOtherAuth(authService: OtherAuthService, successAuth?: boolean | null, isUserNew?: boolean | null): void;
    sendErrorAuth(textError: string): void;
    setOIDCParams(oidc: OidcParams): Promise<void>;
    onSuccessCallback: (data?: SberidSDKSuccessResult) => void;
    onErrorCallback: (data?: SberidSDKErrorResult) => void;
    removeWindowListener(): void;
    private setIsButtonPersonalized;
    private createConfig;
    private onInit;
    private createButton;
    private getHasCertificate;
    private handleUserChange;
    private silentAuthorization;
    private getUser;
    private handleButtonClick;
    private onGetUserSuccess;
    private sbUniversalLinkCallback;
    private checkState;
    private listener;
    private addWindowListener;
    private openDialog;
    private closeCallback;
    private static getCookieExpires;
}

declare interface SberidSDKConfig {
    baseUrl: string;
    changeUser: boolean;
    cloud: CloudProps;
    container?: string | HTMLDivElement;
    debug: boolean;
    deeplink: Deeplink;
    display: DisplayType;
    fastLogin: FastLoginConfig;
    generateState: boolean;
    https: MintsifryProps;
    mweb2app: boolean;
    oidc: OidcParams;
    personalization: boolean;
    onPersonalizationStatus?: (personalization: boolean) => void;
    sa: InitSAProps;
    userHelper: UserHelperConfig;
    notification: NotificationConfig;
    universalLink: UniversalLinkInitProps;
    buttonProps: SberidButtonProps;
}

export declare interface SberidSDKErrorResult {
    description: string;
    code: string;
    error: string;
    state?: string;
}

export declare interface SberidSDKProps {
    autoUpdateCookie?: boolean;
    baseUrl?: string;
    buttonProps?: SberidButtonProps;
    changeUser?: boolean;
    container?: string | HTMLDivElement;
    cloud?: CloudProps;
    debug?: boolean;
    deeplink?: Deeplink;
    display?: DisplayType;
    fastLogin?: FastLoginProps;
    generateState?: boolean;
    mweb2app?: boolean;
    notification?: NotificationProps;
    oidc: OidcParams;
    onButtonClick?: (e: Event, link?: HTMLElement) => Promise<boolean>;
    onErrorCallback?: (data?: SberidSDKErrorResult) => void;
    onSuccessCallback?: (data?: SberidSDKSuccessResult) => void;
    onUpdateCookie?: () => void;
    personalization?: boolean;
    onPersonalizationStatus?: (personalization: boolean) => void;
    sa?: SberVisorProps;
    universalLink?: UniversalLinkProps;
    updateCookiePeriod?: number;
    utmProxyDisabled?: boolean;
    mintsifry?: MintsifryProps;
}

export declare interface SberidSDKSuccessResult {
    state: string;
    code: string;
}

export declare class SberidUniversalLink {
    private readonly config;
    proxyParams: string[];
    parser: AbstractParser;
    logUid: string;
    constructor(config: UniversalLinkInitProps);
    isAllowedBrowser(alias: string): boolean;
    getAdditionalRedirectParams(os: string, browser: string, redirect_uri: string): AdditionalRedirectParams;
    generateState(length?: number): string;
    buildOidcParams(oidcParams: OidcParams): OidcParams;
    run(params?: OidcParams): Promise<UniversalLinkResponse>;
    detect(): Promise<BrowserMode>;
}

export declare interface SberVisorProps {
    enable?: boolean;
    url?: string;
    clientId?: string;
    clientName?: string;
    init?: 'auto' | 'none';
}

declare interface SberVisorSubmitParams<T> {
    eventCategory: string;
    eventAction: string;
    eventType: string;
    value?: string;
    result?: 'success' | 'fail';
    description?: string;
    extendedProperties?: T;
    clientName?: string;
}

export declare const sendSberAnalytics: <T>(sendParams: SberVisorSubmitParams<T>) => void;

export declare const showLoader: () => void;

export declare const successWindowListener: () => void;

declare type UniversalLinkInitProps = UniversalLinkProps & {
    display?: DisplayType;
    utmProxyDisabled?: boolean;
    debug?: boolean;
    generateState?: boolean;
    logUid?: string;
};

export declare interface UniversalLinkProps {
    needAdditionalRedirect?: boolean;
    oidcParams?: OidcParams;
    universalLinkUrl?: string;
    baseUrl?: string;
    deeplinkUrl?: string;
}

export declare interface UniversalLinkResponse {
    isPrivate: boolean;
    isUniversalLink: boolean;
    isWebview: boolean;
    os: string;
    browser: string;
    app?: string;
    link: string;
    deeplink: string;
    oidc: OidcParams;
}

declare type User = {
    firstname?: string;
    partname?: string;
    surname?: string;
};

export declare class UserHelper {
    private static instance;
    config: UserHelperConfig;
    cache: ICache;
    listeners: Array<(user?: User) => void>;
    constructor();
    static getInstance(): UserHelper;
    setConfig(config: Partial<UserHelperConfig>): void;
    setListener(cb: () => void): void;
    private callListeners;
    _getUser(ignoreCache?: boolean): Promise<User | undefined>;
    getUser(ignoreCache?: boolean): Promise<User | undefined>;
    resetUser(): Promise<boolean>;
}

export declare interface UserHelperConfig {
    baseUrl?: string;
    clientId: string;
    debug?: boolean;
    changeUserUrl?: string;
    getUserUrl?: string;
    addProcessId?: boolean;
    iframeUrlPath?: string | null;
    oidcParams?: OidcParams | null;
    logUid: string;
}

export { }
