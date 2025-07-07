// مدیریت خطا در call back:
// حتما اولی سالم برسد تا بعدیا به همین ترتیب رها شوند
function ballAa1(ballBb2) {
    setTimeout(() => {
        try {
            if (true) {
                console.log("ballAa1 completed");
                ballBb2(ballCc3); // ارسال ballCc3 به عنوان آرگومان به ballBb2
            } else {
                throw new Error("ballAa1 failed");
            }
        } catch (e) {
            console.log(e);
        }
    }, 3350);
}

function ballBb2(ballCc3) {
    setTimeout(() => {
        try {
            if (true) {
                console.log("ballBb2 completed");
                ballCc3(); // فراخوانی ballCc3
            } else {
                throw new Error("ballBb2 failed");
            }
        } catch (e) {
            console.log(e);
        }
    }, 3750);
}

function ballCc3() {
    setTimeout(() => {
        try {
            if (false) {
                console.log("ballCc3 completed");
            } else {
                throw new Error("ballCc3 failed");
            }
        } catch (e) {
            console.log(e);
        }
    }, 4000);
}

// فراخوانی ballAa1 و ارسال ballBb2 به عنوان آرگومان
ballAa1(ballBb2);
// در این اگر توپی false شود روند متوقف میشود
