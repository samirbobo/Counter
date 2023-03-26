/* اولا انشاءت كلاس لعمل منه اكثر من اوبجيكت بسبب ان وظيفه مل الاوبجيكتات واحده */
class Counter {
  constructor(element, value) {
    /* انشاءت خواص الاوبجيكت */
    this.counter = element;
    this.value = value;
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.resetBtn = element.querySelector(".reset");
    this.valueDom = element.querySelector(".value");
    this.valueDom.textContent = this.value;

    /* bind: تستخدم في وضع قيمه للفاينكشن ومن ثمه التعديل عليها */
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
}
/* ثانيا انشاءت الاوبجيكتات وخزنت فيها الديف المطلوب */
let firstCounter = new Counter(getElement(".first-counter"), 0);
let SecondeCounter = new Counter(getElement(".seconde-counter"), 0);
console.log(firstCounter)
console.log(SecondeCounter)

/* عملت فاينكشن عشان تخزن الديف ف الاوبجيكت دا لو كان صجيج انما لو خطا يرجع رساله فيها شرح الخطاء */
function getElement(ele) {
  let element = document.querySelector(ele);
  if(element) {
    return element;
  };
  throw new Error (
    `please enter section true because the section ${ele} not found`
  );
};