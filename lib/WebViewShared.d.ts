import React from 'react';
import { OnShouldStartLoadWithRequest, ShouldStartLoadRequestEvent, WebViewError, WebViewErrorEvent, WebViewHttpErrorEvent, WebViewMessageEvent, WebViewNavigation, WebViewNavigationEvent, WebViewProgressEvent, WebViewRenderProcessGoneEvent, WebViewTerminatedEvent } from './WebViewTypes';
declare const defaultOriginWhitelist: readonly ["http://*", "https://*"];
declare const createOnShouldStartLoadWithRequest: (loadRequest: (shouldStart: boolean, url: string, lockIdentifier: number) => void, originWhitelist: readonly string[], onShouldStartLoadWithRequest?: OnShouldStartLoadWithRequest) => ({ nativeEvent }: ShouldStartLoadRequestEvent) => void;
declare const defaultRenderLoading: () => JSX.Element;
declare const defaultRenderError: (errorDomain: string | undefined, errorCode: number, errorDesc: string) => JSX.Element;
export { defaultOriginWhitelist, createOnShouldStartLoadWithRequest, defaultRenderLoading, defaultRenderError, };
export declare const useWebWiewLogic: ({ startInLoadingState, onNavigationStateChange, onLoadStart, onLoad, onLoadProgress, onLoadEnd, onError, onHttpErrorProp, onMessageProp, onRenderProcessGoneProp, onContentProcessDidTerminateProp, originWhitelist, onShouldStartLoadWithRequestProp, onShouldStartLoadWithRequestCallback, }: {
    startInLoadingState?: boolean | undefined;
    onNavigationStateChange?: ((event: WebViewNavigation) => void) | undefined;
    onLoadStart?: ((event: WebViewNavigationEvent) => void) | undefined;
    onLoad?: ((event: WebViewNavigationEvent) => void) | undefined;
    onLoadProgress?: ((event: WebViewProgressEvent) => void) | undefined;
    onLoadEnd?: ((event: WebViewNavigationEvent | WebViewErrorEvent) => void) | undefined;
    onError?: ((event: WebViewErrorEvent) => void) | undefined;
    onHttpErrorProp?: ((event: WebViewHttpErrorEvent) => void) | undefined;
    onMessageProp?: ((event: WebViewMessageEvent) => void) | undefined;
    onRenderProcessGoneProp?: ((event: WebViewRenderProcessGoneEvent) => void) | undefined;
    onContentProcessDidTerminateProp?: ((event: WebViewTerminatedEvent) => void) | undefined;
    originWhitelist: readonly string[];
    onShouldStartLoadWithRequestProp?: OnShouldStartLoadWithRequest | undefined;
    onShouldStartLoadWithRequestCallback: (shouldStart: boolean, url: string, lockIdentifier?: number | undefined) => void;
}) => {
    onShouldStartLoadWithRequest: ({ nativeEvent }: ShouldStartLoadRequestEvent) => void;
    onLoadingStart: (event: WebViewNavigationEvent) => void;
    onLoadingProgress: (event: WebViewProgressEvent) => void;
    onLoadingError: (event: WebViewErrorEvent) => void;
    onLoadingFinish: (event: WebViewNavigationEvent) => void;
    onHttpError: (event: WebViewHttpErrorEvent) => void;
    onRenderProcessGone: (event: WebViewRenderProcessGoneEvent) => void;
    onContentProcessDidTerminate: (event: WebViewTerminatedEvent) => void;
    onMessage: (event: WebViewMessageEvent) => void;
    viewState: "IDLE" | "LOADING" | "ERROR";
    setViewState: React.Dispatch<React.SetStateAction<"IDLE" | "LOADING" | "ERROR">>;
    lastErrorEvent: WebViewError | null;
};
//# sourceMappingURL=WebViewShared.d.ts.map