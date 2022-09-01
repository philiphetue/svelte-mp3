import { SvelteComponentTyped } from "svelte";
import './index.css';
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string;
        style?: string;
        volume?: number;
        shuffle?: boolean;
        urls?: string[];
        color?: string;
        loop?: 'repeat-all' | 'repeat' | 'no-repeat';
        showTime?: boolean;
        showTrackNum?: boolean;
        showVolume?: boolean;
        disableVolSlider?: boolean;
        showShuffle?: boolean;
        showNext?: boolean;
        showPrev?: boolean;
        enableMediaSession?: boolean;
        mediaMetadata?: MediaMetadataInit[];
        audio?: HTMLAudioElement;
        controller?: HTMLElement;
    };
    events: {
        loadedmetadata: CustomEvent<any>;
        timeupdate: CustomEvent<any>;
        ended: CustomEvent<any>;
        canplay: CustomEvent<any>;
        canplaythrough: CustomEvent<any>;
        durationchange: CustomEvent<any>;
        loadeddata: CustomEvent<any>;
        playing: CustomEvent<any>;
        stalled: CustomEvent<any>;
        ratechange: CustomEvent<any>;
        suspend: CustomEvent<any>;
        waiting: CustomEvent<any>;
        volumechange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AudioPlayerProps = typeof __propDef.props;
export declare type AudioPlayerEvents = typeof __propDef.events;
export declare type AudioPlayerSlots = typeof __propDef.slots;
export default class AudioPlayer extends SvelteComponentTyped<AudioPlayerProps, AudioPlayerEvents, AudioPlayerSlots> {
}
export {};
