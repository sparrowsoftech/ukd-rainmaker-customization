var globalConfigs = (function() {
var stateTenantId = 'pg'
var getConfig = function(key) {
    if(key === 'STATE_LEVEL_TENANT_ID'){
        return stateTenantId;
    }
};
return {
    getConfig
};
}());  
