
const storageExpired = () => {
    let hours = 1;
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
    } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
            localStorage.clear()
            console.log('cleared!')
            localStorage.setItem('setupTime', now);
        }
    }
}

export default storageExpired