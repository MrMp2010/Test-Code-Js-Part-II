"use strict"
const CirClE = function(){
    this.draw = function(){
        console.log(this);
    }
}
const aC = new CirClE();
aC.draw(); // اشاره به ابجکت ساخنه شده
const aC1 = aC.draw; 
aC1(); // بجای شی window برای ما undefined را برمیگرداند
// "use strict" باعث تعییر رفتار this میشود
// برای رفع مشکل
const aC2 = aC.draw.bind(aC);
aC2();
// خاصیت کلاس ها این است که بصورت خودکار مود strict در انها فعال است

  