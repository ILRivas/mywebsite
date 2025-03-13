// src/custom.d.ts
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.gif';
declare module 'particlesjs';
declare module 'react-syntax-highlighter';
declare module 'react-syntax-highlighter/dist/esm/styles/prism';
declare module 'emailjs-com';
declare module 'react-input-mask';
declare module 'react-google-recaptcha';
declare module 'react-router-dom';
declare module 'react-image-lightbox';
declare module 'react-icons/fa';
/// <reference types="webpack-env" />

/// <reference types="webpack-env" />

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare namespace __WebpackModuleApi {
    interface RequireContext {
        keys(): string[];
        (id: string): any;
        resolve(id: string): string;
    }
}

declare const require: {
    context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => __WebpackModuleApi.RequireContext;
};