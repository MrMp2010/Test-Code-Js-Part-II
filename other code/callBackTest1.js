// اگر ورودی خود call back باشد
function ballX(callback) {
    setTimeout(() => {
        callback(true);
    }, 6000);
}
function ballY(callback) {
    setTimeout(() => {
        callback(false);
    }, 6350);
}
function ballZ(callback) {
    setTimeout(() => {
        callback(false);
    }, 6750);
}
ballX((res) => {
    try {
        if (res) {
            console.log("ballX completed");
            ballY((res) => {
                try {
                    if (res) {
                        console.log("ballY completed");
                        ballZ((res) => {
                            try {
                                if (res) {
                                    console.log("ballZ completed");
                                } else {
                                    throw new Error("ballZ failed");
                                }
                            } catch (e) {
                                console.log(e);
                            }
                        });
                    } else {
                        throw new Error("ballY failed");
                    }
                } catch (e) {
                    console.log(e);
                }
            });
        } else {
            throw new Error("ballX failed");
        }
    } catch (e) {
        console.log(e);
    }
});