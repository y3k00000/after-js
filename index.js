module.exports = {
    period : (period=0)=>new Promise(res=>setTimeout(()=>res(),period))
};