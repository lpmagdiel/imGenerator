export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export async function sleep(seconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve(true);
        }, seconds*1000);
    });
}