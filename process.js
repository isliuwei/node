/*
    *   process 参数相关
    *
    *   argv
    *   argv0
    *   execArgv
    *   execPath
    *   env
    *
*/

/*
const { argv, argv0, execArgv, execPath, env} = process;

argv.forEach(item => {
    console.log(item);
});


console.log(argv0);

console.log(execArgv);

console.log(execPath);

console.log(env);

console.log(process.cwd()); // pwd

*/

console.log('>>>>>>>>>> process.nextTick  →→→→→→→→→→ setImmediate <<<<<<<<<<');


setImmediate(() => {
    console.log('setImmediate');
});
setTimeout(() => {
    console.log('setTimeout');
}, 0);
process.nextTick(() => {
    console.log('process.nextTick');
    process.nextTick(() => {
        console.log('process.nextTick1');
    });
});

