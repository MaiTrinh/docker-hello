const AWS = require('aws-sdk');
// const shell = require('any-shell-escape');
const {exec} = require('child_process');
// var StepFunction = new AWS.StepFunctions();

// const MY_TASK_TOKEN_ENV = process.env.MY_TASK_TOKEN_ENV;
// const INDEX = process.env.INDEX;
// const SERVICES = JSON.parse(process.env.SERVICES);
// const SERVICE = JSON.parse(process.env.SERVICE);
// const CONFIG_WORKFLOW = JSON.parse(process.env.CONFIG_WORKFLOW);

const TOKEN = "YXZmbG93LWZmbXBlZy1zZXJ2aWNlLWRldi0wNy8xMC8yMDIw";
const TIME_OUT = 3600000;

const SERVICE_TYPES = {
    BURN_IN: "BURNIN"
}


var reportErr = (token, err) => {
    let params = {
        taskToken: token,
        cause: JSON.stringify({
            services: SERVICES,
            datatype: 'string',
            index: parseInt(INDEX) + 1,
            config_workflow: CONFIG_WORKFLOW,
            params: err
        })
    };
    console.log('params.cause', params.cause);
    return StepFunction.sendTaskFailure(params).promise()
};


var reportBack = (token, transcriptResult, warnings) => {
    let params = {
        taskToken: token,
        output: JSON.stringify(
            {
                services: SERVICES,
                datatype: 'string',
                index: parseInt(INDEX) + 1,
                config_workflow: CONFIG_WORKFLOW,
                params: transcriptResult,
                warnings: warnings
            })
    }
    return StepFunction.sendTaskSuccess(params).promise()
};


var execute = async () => {
    // console.log('taskToken - ', MY_TASK_TOKEN_ENV);
    // let resultUrl = await BurnInService();
    // console.log('Burn-in out put file: ', resultUrl)
    // return await reportBack(MY_TASK_TOKEN_ENV, { url: resultUrl });
    console.log('hello world');
};


(async () => {
    await execute();
})();
