function gatherCharCode(o){let t={};for(let r in o)if(o.hasOwnProperty(r)){let n=o[r];"string"==typeof n?t[r]=Array.from(n).map(o=>o.charCodeAt(0)).join(""):"number"==typeof n?t[r]=n.toString().split("").map(o=>o.charCodeAt(0)).join(""):t[r]=n}return t};
function getGPUInfo(){var e,t=document.createElement("canvas");try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(e){return null}if(!e)return null;var r=e.getExtension("WEBGL_debug_renderer_info");return r?{vendor:e.getParameter(r.UNMASKED_VENDOR_WEBGL),renderer:e.getParameter(r.UNMASKED_RENDERER_WEBGL)}:null};
function compressObj(n){let t="";for(let o in n)if(n.hasOwnProperty(o)){let r=n[o];null!==r&&void 0!==r&&(t+=r.toString())}return t};
async function hash(input) {return (Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',(new TextEncoder()).encode(input)))).map(byte=>byte.toString(16).padStart(2,'0')).join('')).substring(0, 32)};
function gatherDeviceInfo(){
	let deviceInfo = {
		storage: navigator.storage.estimate(),
        	appCodeName: navigator.appCodeName,
        	platform: navigator.platform,
        	deviceMemory: navigator.deviceMemory,
        	GPU: gpu.wgslLanguageFeatures.size,
        	maxTouchPoints: navigator.maxTouchPoints,
        	doNotTrack: navigator.doNotTrack,
        	browserLanguage: navigator.language,
        	colorDepth: window.screen.colorDepth,
        	CPUCores: navigator.hardwareConcurrency,
        	GPUrenderer: getGPUInfo().renderer,
        	GPUvendor: getGPUInfo().vendor,
        	userAgent: navigator.userAgent,
	};
	return deviceInfo;
};
function getFingerprint(){
	return (hash(compressObj(gatherCharCode(gatherDeviceInfo()))));
}
