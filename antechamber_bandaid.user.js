// ==UserScript==
// @name         Outlier Telemetry Fix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Stub out analytics/telemetry functions to prevent page hangs
// @author       openSourceress
// @match        https://app.outlier.ai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Run after page load
    window.addEventListener('load', () => {
        console.log("✅ Applying Outlier telemetry stubs...");

        // Safe stubs so analytics/telemetry calls don’t crash the app
        window.analytics ||= {
            track(){},
            page(){},
            identify(){},
            load(){},
            ready(cb){ cb && cb(); }
        };
        window.datadogRum ||= {
            init(){},
            startSessionReplayRecording(){},
            addAction(){}
        };
        window.fbq ||= function(){};
        window.outlierEvents ||= {
            callMethod(){},
            track(){},
            log(){},
            page(){}
        };

        console.log("✅ Telemetry stubs applied!");
    });
})();
